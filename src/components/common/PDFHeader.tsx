import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../../styles/pdf/planPdfStyles';

interface PDFHeaderProps {
  sectionTitle?: string;
  subtitle?: string;
  personName?: string;
  contractNumber?: string;
  date?: string;
}

const PDFHeader: React.FC<PDFHeaderProps> = ({ 
  sectionTitle, 
  subtitle = "",
  personName = "", 
  date = "" 
}) => {
  return (
    <>
      <View fixed style={styles.documentHeader}>
        <Text style={styles.headerTitle}>
          {subtitle}
        </Text>
      </View>
      <View fixed style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderTitle}>
          {sectionTitle}
        </Text>
        <View style={styles.headerInfoContainer}>
          <Text style={styles.headerDate}>
            {date}
          </Text>
          <View style={styles.headerPersonInfo}>
            <Text style={styles.headerName}>
              {personName}
            </Text>
          
          </View>
        </View>
      </View>
      <View fixed style={styles.headerDivider} />
    </>
  );
};

export default PDFHeader; 