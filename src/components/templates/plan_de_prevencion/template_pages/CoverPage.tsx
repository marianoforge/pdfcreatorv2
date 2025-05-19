import { Page, Text, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import { styles } from '../../../../styles/pdf/planPdfStyles';
import PDFFooter from '../../../common/PDFFooter';

interface CoverPageProps {
  title?: string;
  subtitle?: string;
  brand?: string;
  contractNumber?: string;
  date?: string;
}

const CoverPage = ({ 
  title = "PLAN DE PREVENCIÓN Y REDUCCIÓN DE RIESGOS PERSONALIZADO",
  subtitle = "",
  brand = "MYBOX VIDACARE", 
  contractNumber = "",
  date = "Fecha del documento" 
}: CoverPageProps) => {
  const { t } = useTranslation();
  
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.brand}>{brand}</Text>
        {contractNumber && <Text style={styles.contractNumber}>Nº {contractNumber}</Text>}
        <Text>{date}</Text>
      </View>
      <PDFFooter />
    </Page>
  );
};

export default CoverPage; 