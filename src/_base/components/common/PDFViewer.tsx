/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, PDFViewer as ReactPDFViewer } from '@react-pdf/renderer'
import '../../../index.css'
import { tw } from '../../../utils/tailwind'

import PageBreak from '../../../components/pageBreak/PageBreak'
import Section from '../../../components/section/Section'
import TestModule from '../../../components/TestModule'
import HeaderSection from '../../../components/header/HeaderSection'
import FooterLogo from '../../../components/footer/footerLogo/FooterLogo'
import FooterCover from '../../../components/footer/footerCover/FooterCover'
import Cover from '../../../components/cover/Cover'
import GridIndex from '../../../components/gridIndex/GridIndex'

const testData = {
  sections: {
    portada: [
      {
        type: "Cover",
        props: {
          title: "PLAN DE PREVENCIÓN Y\nREDUCCIÓN DE RIESGOS",
          subtitle: "PERSONALIZADO (2025)",
          roundedTag: "Seguimiento proactivo",
          bottomLeftText1: "MYBOX VIDACARE",
          bottomLeftText2: "John Doe",
          bottomRightText1: "19 de mayo de 2025",
        }
      },
      {
        type: "FooterCover",
      },
    ],
    contenido: [
      {
        type: "HeaderSection",
        props: {
          sectionTitle: "Contenido",
          headerText: "PLAN DE PREVENCIÓN Y REDUCCIÓN DE RIESGOS PERSONALIZADO",
          personName: "John Doe",
          date: "mayo de 2025"
        }
      },
      {
        type: "FooterLogo",
      },
      {
        type: "GridIndex",
        props: {
          items: [
            {
              title: "Introducción",
              text: `La prevención continua de factores de riesgo modificables es crucial para reducir el riesgo de aparición y desarrollo de enfermedades neurodegenerativas. La evolución hacia hábitos saludables fortalece esta defensa a lo largo del tiempo.`,
            },
            {
              title: "Claves para tu bienestar",
              text: `Se presenta un resumen de la valoración realizada y de las recomendaciones a seguir para proporcionar una fotografía clara del punto de partida y de las principales acciones a llevar a cabo.`,
            },
            {
              title: "Recomendaciones",
              text: `Se establecen objetivos en cada área de recomendación para fomentar un envejecimiento saludable y prevenir el deterioro cognitivo y funcional. Se proporcionan pautas clave basadas en tu situación actual y con propuestas prácticas para alcanzar la meta deseada.`,
            },
            {
              title: "Próximos pasos",
              text: `Se establecen objetivos en cada área de recomendación para fomentar un envejecimiento saludable y prevenir el deterioro cognitivo y funcional. Se proporcionan pautas clave basadas en tu situación actual y con propuestas prácticas para alcanzar la meta deseada.`,
            },
            {
              title: "Autoría",
              text: `Se establecen objetivos en cada área de recomendación para fomentar un envejecimiento saludable y prevenir el deterioro cognitivo y funcional. Se proporcionan pautas clave basadas en tu situación actual y con propuestas prácticas para alcanzar la meta deseada.`,
            },
            {
              title: "Bibliografía",
              text: `Las recomendaciones emitidas en el siguiente documento han sido elaboradas en base a las directrices de la Organización Mundial de la Salud (OMS) y en consonancia con fuentes bibliográficas de máximo rigor y evidencia científica.`,
            },
          ]
        }
      }
    ],
    introduccion: [
      {
        type: "HeaderSection",
        props: {
          sectionTitle: "Contenido",
          headerText: "PLAN DE PREVENCIÓN Y REDUCCIÓN DE RIESGOS PERSONALIZADO",
          personName: "María Cristina Mulet",
          date: "mayo de 2025"
        }
      },
      {
        type: "FooterLogo",
      },
      {
        type: "TestModule",
        id: "text3",  
        props: {
          title: "Plan de Prevención 3",
          subtitle: "Subtítulo del plan de prevención 3",
          brand: "Mybox Vidacare",
          contractNumber: "1234567890",
          date: "2023-01-01"
        }
      },
      {
        type: "PageBreak",
      },
      {
        type: "TestModule",
        id: "text4",
        props: {
          title: "Plan de Prevención 4",
          subtitle: "Subtítulo del plan de prevención 4",
          brand: "Mybox Vidacare",
          contractNumber: "1234567890",
          date: "2023-01-01"
        }
      }
    ]
  }
} as any

const componentsMap = {
  TestModule,
  PageBreak,
  HeaderSection,
  FooterLogo,
  FooterCover,
  Cover,
  GridIndex
} as const

const PDFViewer = () => {
  return (
    <div className="w-full h-screen">
      <ReactPDFViewer style={{ width: "100%", height: "100%" }}>
        <Document style={tw('font-aeonik')}>
          {Object.entries(testData.sections).map(([sectionId, section]) => (
            <Section key={sectionId}>
              {(section as any[]).map((content: any) => {
                const Component = componentsMap[content.type as keyof typeof componentsMap]
                return Component ? <Component key={content.id} {...content.props} /> : null
              })}
            </Section>
          ))}
        </Document>
      </ReactPDFViewer>
    </div>
  );
};

export default PDFViewer; 