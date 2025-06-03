/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, PDFViewer as ReactPDFViewer } from '@react-pdf/renderer'
import '../../../index.css'
import { tw } from '../../../utils/tailwind'

import PageBreak from '../../../components/pageBreak/PageBreak'
import Section from '../../../components/section/Section'
import TestModule from '../../../components/TestModule'
import HeaderSection from '../../../components/header/HeaderSection'
import FooterLogo from '../../../components/footer/footerLogo/FooterLogo'
import FooterText from '../../../components/footer/footerCover/FooterCover'

const testDataB = {
  "introduccion": {
    "cabecera": {
      "texto_1": "Introducción",
      "texto_2": "PLAN DE PREVENCIÓN Y REDUCCIÓN DE RIESGOS PERSONALIZADO",
      "texto_3": "María Cristina Mulet",
      "texto_4": "mayo de 2025"
    },
    "texto_de_introduccion": {
      "texto_1": "Plan de Prevención",
      "texto_2": "Subtítulo del plan de prevención",
      "texto_3": "Mybox Vidacare",
      "texto_4": "1234567890",
      "texto_5": "2023-01-01"
    },
    "texto_de_introduccion_2": {
      "texto_1": "Plan de Prevención 2",
      "texto_2": "Subtítulo del plan de prevención 2",
      "texto_3": "Mybox Vidacare",
      "texto_4": "1234567890",
      "texto_5": "2023-01-01"
    }
  }
} as any

const PDFTemplate = () => {
  return (
    <div className="w-full h-screen">
      <ReactPDFViewer style={{ width: "100%", height: "100%" }}>
        <Document style={tw('font-aeonik')}>
          <Section id="introduccion">
            <HeaderSection 
              sectionTitle={testDataB.introduccion.cabecera.texto_1}
              headerText={testDataB.introduccion.cabecera.texto_2}
              personName={testDataB.introduccion.cabecera.texto_3}
              date={testDataB.introduccion.cabecera.texto_4}
            />
            <FooterText />
            <TestModule
              title={testDataB.introduccion.texto_de_introduccion.texto_1}
              subtitle={testDataB.introduccion.texto_de_introduccion.texto_2}
              brand={testDataB.introduccion.texto_de_introduccion.texto_3}
              contractNumber={testDataB.introduccion.texto_de_introduccion.texto_4}
              date={testDataB.introduccion.texto_de_introduccion.texto_5}
            />
            <PageBreak />
            <TestModule 
              title={testDataB.introduccion.texto_de_introduccion_2.texto_1}
              subtitle={testDataB.introduccion.texto_de_introduccion_2.texto_2}
              brand={testDataB.introduccion.texto_de_introduccion_2.texto_3}
              contractNumber={testDataB.introduccion.texto_de_introduccion_2.texto_4}
              date={testDataB.introduccion.texto_de_introduccion_2.texto_5}
            />
          </Section>
        </Document>
      </ReactPDFViewer>
    </div>
  );
};

export default PDFTemplate