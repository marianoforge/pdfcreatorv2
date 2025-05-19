import { Page, Text, View } from '@react-pdf/renderer';
import { additionalStyles } from '../../../../styles/pdf/additionalPdfStyles';
import PDFFooter from '../../../common/PDFFooter';
import PDFHeader from '../../../common/PDFHeader';

interface AdditionalPageProps {
  title?: string;
  content?: string;
  sectionNumber?: string;
}

const AdditionalPage = ({ 
  title = "Página Adicional", 
  content = "Esta es una página adicional para demostrar que el footer funciona correctamente en todas las páginas.",
  sectionNumber = "2"
}: AdditionalPageProps) => {
  return (
    <Page size="A4" style={additionalStyles.page}>
      <PDFHeader sectionTitle={`${sectionNumber}. ${title}`} />
      <View style={additionalStyles.contentContainer}>
        <Text style={additionalStyles.text}>{content}</Text>
      </View>  
      <PDFFooter />
    </Page>
  );
};

export default AdditionalPage; 