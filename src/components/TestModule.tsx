import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { tw } from '../utils/tailwind'


const TestModule = ({ 
  title = "", 
  subtitle = "",
  brand = "", 
  date = "",
  contractNumber = "",
}) => {
  return (
    <>
      <View>
        <Text>TEST MODULE</Text>
      </View>
    </>
  )
}

export default TestModule 
