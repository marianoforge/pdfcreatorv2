/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from '@react-pdf/renderer'
import '../index.css'
import { tw } from '../utils/tailwind'
import { getFooterType } from '../utils/utils'
import Section from '../components/section/Section'
import RenderComponent from './RenderComponent'

import testData from '../testdata.json'

const Generator = () => {
  return (
    <Document style={tw('font-aeonik')}>
      {Object.entries(testData.sections).map(([sectionId, section]) => {
        return (
          <Section key={sectionId} footerType={getFooterType(section)}>
            {(section as any[]).map((content: any, key: number) => {
              return RenderComponent(content, key)
            })}
          </Section>
        )
      })}
    </Document>
  )
}

export default Generator