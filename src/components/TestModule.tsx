import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { tw } from '../utils/tailwind'

import { styles } from '../_base/styles/pdf/planPdfStyles'

const TestModule = ({ 
  title = "", 
  subtitle = "",
  brand = "", 
  date = "",
  contractNumber = "",
}) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.brand}>{brand}</Text>
        {contractNumber && <Text style={styles.contractNumber}>Nº {contractNumber}</Text>}
        <Text>{date}</Text>
      </View>
    </>
  )
}

export default TestModule 
