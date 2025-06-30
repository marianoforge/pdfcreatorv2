/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import RenderComponent from '../../core/RenderComponent'
import { defaultFontSize, defaultLineHeight, letters } from '../../config/global'

interface NumberedListProps {
  items: {
    title: string
    content: string | any[]
  }[]
  color?: string
  withLetters?: boolean
  column?: boolean
  fontSize?: string
  lineHeight?: string
  marginBottom?: number
  marginTop?: number
  marginLeft?: number
  marginRight?: number
}

const NumberedList = ({ 
  items,
  color = 'secondary',
  withLetters = false,
  column = false,
  fontSize = defaultFontSize,
  lineHeight = defaultLineHeight,
  marginBottom = 5,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}: NumberedListProps) => {
  if (!items || !items.length || !Array.isArray(items)) return null

  return (
    <View style={tw(`mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight}`)}>
      {items?.map((item, index) => (
        <View style={tw(`text-[${fontSize}] leading-[${lineHeight}] mb-4`)} key={`pdf-view-2-${index}`}>
          <View style={tw(`${column ? 'flex flex-col' : ''}`)} break>
            <View style={tw(`flex flex-row items-center gap-2 h-[26px] mb-2 text-${color}`)}>
              <Text style={tw('font-semibold w-[10px] text-center')}>
                {withLetters ? letters[index] : index + 1}
              </Text>
              <View style={tw(`w-[2px] h-full rounded-sm bg-${color}`)}></View>
              <Text style={tw('font-semibold')}>{renderText(item.title)}</Text>
            </View>
            {Array.isArray(item.content) ? (
              item.content.map((content, key) => (RenderComponent(content, `${index}-${key}`))) 
            ) : ( 
              <Text style={tw('pl-[25px]')}>{renderText(item.content)}</Text>
            )}
          </View>
        </View>
      ))}
    </View>
  )
}

export default NumberedList