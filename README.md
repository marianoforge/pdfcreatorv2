# PDF Creator

Una aplicación web moderna para crear y gestionar documentos PDF con soporte multilingüe (Español y Catalán).

## Características

- Creación y vista previa de documentos PDF
- Soporte multilingüe (Español y Catalán)
- Visor de PDF interactivo
- Interfaz moderna con Tailwind CSS
- Diseño responsivo

## Tecnologías Utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- i18next para internacionalización
- @react-pdf/renderer para generación de PDF
- ESLint para calidad de código

## Estructura del Proyecto

```
src/
├── assets/         # Recursos estáticos
├── components/     # Componentes React
│   ├── common/     # Componentes compartidos
│   └── templates/  # Plantillas PDF
├── hooks/          # Hooks personalizados de React
├── locales/        # Archivos de traducción
├── styles/         # Estilos CSS
└── types/          # Definiciones de tipos TypeScript
```

## Comenzando

### Prerrequisitos

- Node.js (se recomienda la última versión LTS)
- npm o yarn

### Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd PDFCreator
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la construcción de producción
- `npm run lint` - Ejecutar ESLint
- `npm run update-translations` - Actualizar todas las traducciones
- `npm run update-translations:es` - Actualizar traducciones en español
- `npm run update-translations:ca` - Actualizar traducciones en catalán

## Características en Detalle

### Generación de PDF
La aplicación utiliza @react-pdf/renderer para generar documentos PDF con plantillas personalizables.

### Soporte Multilingüe
- Soporta Español (es) y Catalán (ca)
- Cambio fácil de idioma a través de la interfaz
- Sistema de gestión de traducciones

### Visor de PDF
- Vista previa interactiva de PDF
- Página dedicada al visor
- Visor de contenido para documentos de plan de prevención

## Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/IncreibleCaracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añadir alguna IncreibleCaracteristica'`)
4. Haz push a la rama (`git push origin feature/IncreibleCaracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto es privado y propietario.

## Contacto

Para cualquier pregunta o consulta, por favor contacta al propietario del repositorio.
# pdfcreatorv2
