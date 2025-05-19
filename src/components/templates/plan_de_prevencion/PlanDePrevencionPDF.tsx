import { Document, PDFDownloadLink } from '@react-pdf/renderer';
import planData from '../../../data.json';
import { useTranslation } from 'react-i18next';
import CoverPage from './template_pages/CoverPage';
import IntroductionPage from './template_pages/IntroductionPage';
import AdditionalPage from './template_pages/AdditionalPage';

const PlanDocument = () => {
  const { t } = useTranslation();
  
  const createPages = () => {
    const pages = planData.pages || [];
    // Extract common content for header
    const commonContent = pages[0]?.common_content || {};
    
    const pdfPages = [];
    
    pages.forEach(page => {
      const pageCount = page.count;
      
      // Página 1 - Carátula
      if (pageCount === 1) {
        pdfPages.push(
          <CoverPage 
            key={`page-${pageCount}`}
            title={page.content?.title}
            subtitle={page.content?.subtitle}
            brand={page.content?.brand}
            contractNumber={page.content?.contract_number}
            date={page.content?.date}
          />
        );
      }
      
      // Página 2 - Página de Introduccion
      else if (pageCount === 2) {
        const sections = page.content?.sections || [];
        const headerTitle = page.content?.header?.title || "";
        
        pdfPages.push(
          <IntroductionPage 
            key={`page-${pageCount}`}
            headerTitle={headerTitle}
            personName={commonContent.header?.person_name}
            contractNumber={commonContent.header?.contract_number}
            date={commonContent.header?.date}
            subtitle={commonContent.header?.subtitle}
            sections={sections}
          />
        );
      }
      
    });
    
    
    pdfPages.push(
      <AdditionalPage key="additional" />
    );
    
    return pdfPages;
  };
  
  return (
    <Document>
      {createPages()}
    </Document>
  );
};

interface PDFDownloadButtonProps {
  className?: string;
}

const PDFDownloadButton = ({ className = "" }: PDFDownloadButtonProps) => {
  return (
    <PDFDownloadLink
      document={<PlanDocument />}
      fileName="plan_prevencion.pdf"
      className={`bg-blue-600 text-white border-none rounded px-4 py-2 cursor-pointer text-base inline-block no-underline hover:bg-blue-700 transition-colors ${className}`}
    >
      {({ loading }) =>
        loading ? 'Generando PDF...' : 'Descargar PDF'
      }
    </PDFDownloadLink>
  );
};

export { PlanDocument, PDFDownloadButton }; 