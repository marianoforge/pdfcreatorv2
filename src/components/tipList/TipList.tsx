/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, View, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'
import RenderComponent from '../../core/RenderComponent'
import { defaultFontSize } from '../../config/global'
import CheckboxChecked from '../../assets/images/checkbox--checked.png'


interface TipListProps {
  title: string
  list?: string[]
  content?: string | React.ReactNode
  fontSize?: number | string
  color?: string
  marginBottom?: number
  marginTop?: number
  marginLeft?: number
  marginRight?: number
}

const TipList = ({ 
  title,
  list,
  content,
  fontSize = defaultFontSize,
  color = 'grey',
  marginBottom = 8,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}: TipListProps) => {
  return (
    <View wrap={false} style={tw(`w-auto flex flex-row gap-4 mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight} text-[${fontSize}]`)}>
      <View style={tw(`w-1 h-full bg-${color}`)} />
      <View style={tw('flex flex-col pt-2 flex-1')} >
        <Text style={tw(`text-${color} font-semibold mb-3`)}>{title}</Text>
        <View style={tw(`flex flex-col gap-2 ml-6`)}>
          {content && (
            <>
              {Array.isArray(content) ? (
                content.map((content, key) => (RenderComponent(content, `${key}`))) 
              ) : ( 
                <Text>{renderText(content as string)}</Text>
              )}
            </>
          )}
          {list && list.map((tip, key) => (
            <View style={tw('flex flex-row gap-2')} key={key}>
              <Image src={CheckboxChecked} style={tw('w-4 h-4')} />
              <Text style={tw('flex-1')}>{renderText(tip)}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default TipList