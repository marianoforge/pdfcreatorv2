import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../../styles/pdf/planPdfStyles';

const PDFFooter: React.FC = () => {
  return (
    <View fixed style={styles.footer}>
      <Text style={styles.footerText}>
        Qida<Text style={styles.footerTextLight}>,Calidad de vida.</Text>
      </Text>
      <Text style={styles.pageNumber} render={({ pageNumber }) => (
        `${pageNumber}`
      )} />
    </View>
  );
};

export default PDFFooter; 