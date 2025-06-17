import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import { defaultFontSize, defaultLineHeight } from '../../config/global'

interface ListProps {
  items: string[]
  fontSize?: string
  lineHeight?: string
  itemsSeparation?: number | string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
}

const List = ({ 
  items,
  fontSize = defaultFontSize,
  lineHeight = defaultLineHeight,
  itemsSeparation = 0,
  marginBottom = 5,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0
}: ListProps) => {
  if (!items || !items.length || !Array.isArray(items)) return null

  return (
    <View style={tw(`flex flex-col gap-2 mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`)}>
      {items?.map((item, index) => {
        return (
          <View key={index} style={tw(`flex flex-row gap-2 pl-6 text-[${fontSize}] leading-[${lineHeight}] mb-${itemsSeparation}`)}>
            <Text>•</Text>
            <Text>{renderText(item)}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default List