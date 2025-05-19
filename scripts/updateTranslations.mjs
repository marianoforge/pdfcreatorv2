import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import FormData from "form-data";
import dotenv from "dotenv";

// Configure environment variables
dotenv.config();

// Get dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File paths
const LOCALES_DIR = path.resolve(__dirname, "../src/locales");

// Map of language codes to filename patterns
const LANGUAGE_FILE_MAP = {
  es: "pdf-creator-es.json",
  ca: "pdf-creator-ca.json",
};

// Process command-line arguments
const args = process.argv.slice(2);
const argMap = {};
args.forEach((arg) => {
  if (arg.startsWith("--")) {
    const [key, value] = arg.slice(2).split("=");
    argMap[key] = value;
  }
});

/**
 * Transform POEditor format to i18next format
 * @param {Array} poeditorData - Array of POEditor translation objects
 * @returns {Object} - i18next compatible format
 */
function transformToI18nextFormat(poeditorData) {
  const result = {};

  for (const item of poeditorData) {
    if (!item.term) continue;

    // If there's a context, organize by context
    if (item.context) {
      const contextParts = item.context.split(".");
      let current = result;

      // Create nested structure based on context
      for (let i = 0; i < contextParts.length; i++) {
        const part = contextParts[i].replace(/"/g, "");
        if (!part) continue;

        if (i === contextParts.length - 1) {
          // Last level, set the term and definition
          if (!current[part]) current[part] = {};
          current[part][item.term] = item.definition || "";
        } else {
          // Create intermediate level if needed
          if (!current[part]) current[part] = {};
          current = current[part];
        }
      }
    } else {
      // No context, add directly to the root
      result[item.term] = item.definition || "";
    }
  }

  return result;
}

/**
 * Export a translation from POEditor API
 * @param {string} language Language code (e.g., 'es', 'ca')
 * @returns {Promise<string|null>} URL to download the translation or null if failed
 */
async function exportTranslation(language) {
  try {
    // Get API credentials from command-line args or environment variables
    // First check for non-prefixed env vars, then check for VITE_ prefixed ones
    const apiToken =
      argMap.token ||
      process.env.POEDITOR_API_TOKEN ||
      process.env.VITE_POEDITOR_API_TOKEN;

    const projectId =
      argMap.project ||
      process.env.POEDITOR_PROJECT_ID ||
      process.env.VITE_POEDITOR_PROJECT_ID;

    if (!apiToken) {
      throw new Error(
        "API token not provided. Use --token=YOUR_API_TOKEN or set POEDITOR_API_TOKEN in .env"
      );
    }

    if (!projectId) {
      throw new Error(
        "Project ID not provided. Use --project=YOUR_PROJECT_ID or set POEDITOR_PROJECT_ID in .env"
      );
    }

    // Create form data
    const formData = new FormData();
    formData.append("api_token", apiToken);
    formData.append("id", projectId);
    formData.append("language", language);
    formData.append("type", "json");

    // Make request to POEditor API
    console.log(`Exporting ${language} translations...`);
    const response = await fetch(
      "https://api.poeditor.com/v2/projects/export",
      {
        method: "POST",
        body: formData,
      }
    );

    // Parse response
    const data = await response.json();

    // Check for success
    if (data.response.status !== "success") {
      throw new Error(`POEditor API error: ${data.response.message}`);
    }

    if (!data.result?.url) {
      throw new Error("No URL returned from POEditor API");
    }

    return data.result.url;
  } catch (err) {
    console.error(`Export error: ${err.message}`);
    return null;
  }
}

/**
 * Download a translation file and save it to disk
 * @param {string} language Language code (e.g., 'es', 'ca')
 * @returns {Promise<boolean>} true if successful, false otherwise
 */
async function downloadAndSaveTranslation(language) {
  try {
    // Get the file URL from POEditor
    const exportUrl = await exportTranslation(language);
    if (!exportUrl) {
      throw new Error(`Failed to get export URL for ${language}`);
    }

    // Download the translation file
    console.log(`Downloading ${language} translation from ${exportUrl}...`);
    const response = await fetch(exportUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to download: ${response.status} ${response.statusText}`
      );
    }

    // Parse the JSON data (in POEditor format)
    const poeditorData = await response.json();

    // Transform to i18next format
    console.log(`Transforming ${language} translations to i18next format...`);
    const i18nextData = transformToI18nextFormat(poeditorData);

    // Get the correct filename for this language
    const filename = LANGUAGE_FILE_MAP[language];
    if (!filename) {
      throw new Error(`No file mapping defined for language: ${language}`);
    }

    // Create the file path
    const filePath = path.resolve(LOCALES_DIR, filename);

    // Ensure directory exists
    if (!fs.existsSync(LOCALES_DIR)) {
      fs.mkdirSync(LOCALES_DIR, { recursive: true });
    }

    // Also save the original POEditor format for reference
    const originalFilePath = path.resolve(
      LOCALES_DIR,
      `poeditor-${language}.json`
    );
    fs.writeFileSync(originalFilePath, JSON.stringify(poeditorData, null, 2));
    console.log(`Saved original POEditor format to ${originalFilePath}`);

    // Write the transformed file for i18next
    fs.writeFileSync(filePath, JSON.stringify(i18nextData, null, 2));
    console.log(`Successfully saved ${language} translation to ${filePath}`);

    return true;
  } catch (err) {
    console.error(`Download error for ${language}: ${err.message}`);
    return false;
  }
}

/**
 * Main function to update all translation files
 */
async function updateAllTranslations() {
  // Determine which languages to process
  let languages = Object.keys(LANGUAGE_FILE_MAP);

  // Check if specific languages were requested
  if (argMap.languages) {
    const requestedLanguages = argMap.languages
      .split(",")
      .map((lang) => lang.trim());
    languages = languages.filter((lang) => requestedLanguages.includes(lang));

    // Check if all requested languages are valid
    const invalidLanguages = requestedLanguages.filter(
      (lang) => !languages.includes(lang)
    );
    if (invalidLanguages.length > 0) {
      console.warn(
        `Warning: Ignoring unknown language codes: ${invalidLanguages.join(
          ", "
        )}`
      );
    }
  }

  if (languages.length === 0) {
    console.error("Error: No valid languages to process");
    return;
  }

  console.log(
    `Starting update for ${languages.length} languages: ${languages.join(", ")}`
  );

  let successCount = 0;
  let failCount = 0;

  for (const language of languages) {
    console.log(`\n--- Processing ${language} ---`);
    const success = await downloadAndSaveTranslation(language);
    if (success) {
      console.log(`✅ ${language} translation updated successfully`);
      successCount++;
    } else {
      console.error(`❌ Failed to update ${language} translation`);
      failCount++;
    }
  }

  console.log(`\nSummary: ${successCount} successful, ${failCount} failed`);

  if (successCount === 0) {
    console.log("\nTo run this script with direct API credentials:");
    console.log(
      "node scripts/updateTranslations.mjs --token=YOUR_API_TOKEN --project=YOUR_PROJECT_ID"
    );
    console.log("\nOr create a .env file in the root directory with:");
    console.log("POEDITOR_API_TOKEN=your_api_token_here");
    console.log("POEDITOR_PROJECT_ID=your_project_id_here");
    console.log("\nOr with VITE prefix:");
    console.log("VITE_POEDITOR_API_TOKEN=your_api_token_here");
    console.log("VITE_POEDITOR_PROJECT_ID=your_project_id_here");
  }
}

// Execute the script
updateAllTranslations()
  .then(() => console.log("\nTranslation update process completed"))
  .catch((err) => console.error("\nError updating translations:", err));
