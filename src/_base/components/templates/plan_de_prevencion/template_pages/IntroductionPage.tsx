import { Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../../../../styles/pdf/planPdfStyles';
import PDFFooter from '../../../common/PDFFooter';
import PDFHeader from '../../../common/PDFHeader';

interface Section {
  id: string | number;
  title: string;
  text: string;
}

interface IntroductionPageProps {
  headerTitle?: string;
  subtitle?: string;
  personName?: string;
  contractNumber?: string;
  date?: string;
  sections: Section[];
}

const IntroductionPage = ({ 
  headerTitle = "Introducción",
  subtitle = "PLAN DE PREVENCIÓN Y REDUCCIÓN DE RIESGOS PERSONALIZADO",
  personName = "", 
  contractNumber = "",
  date = "",
  sections = [] 
}: IntroductionPageProps) => {
  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader 
        sectionTitle={headerTitle} 
        personName={personName}
        contractNumber={contractNumber}
        date={date}
        subtitle={subtitle}
      />
      <View style={styles.gridContainer}>
        {sections.map((section) => (
          <View key={section.id} style={styles.gridItem}>
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionNumber}>{section.id}</Text>
              <Text> {section.title}</Text>
            </View>
            <Text style={styles.sectionText}>{section.text}</Text>
          </View>
        ))}
      </View>
      <PDFFooter />
    </Page>
  );
};

export default IntroductionPage; 