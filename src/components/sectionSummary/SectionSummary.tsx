import { Text, View, Link, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import arrow from '../../assets/images/arrow-right.png'

interface SectionSummaryProps {
  number: number
  color: string
  title: string
  linkText: string
  linkUrl: string
  content: string
  tags?: {
    text: string
    color?: string
    selected?: boolean
  }[]
}

const SectionSummary = ({ 
  number,
  color,
  title,
  linkText,
  linkUrl,
  content,
  tags,
}: SectionSummaryProps) => {
  return (
    <>
      <View style={tw('mb-8 text-[12px]')} wrap={false}>
        <View style={tw('py-[2px] flex flex-row justify-between items-center border-t border-b border-lightGrey')}>
          <View style={tw('flex flex-row gap-2 justify-start items-stretch w-1/2')}>
            <View style={tw(`text-section-${color} font-black text-[20px] mr-1`)}>
              <Text>{String(number).padStart(2, '0')}</Text>
            </View>
            <View style={tw(`flex flex-col justify-center items-center font-bold`)}>
              <Link src={linkUrl} style={tw('no-underline text-black')}>
                {title}
              </Link>
            </View>
          </View>
          <View style={tw('w-1/2 pl-4')}>
            {tags && tags.length > 0 && (
              <View style={tw('flex flex-row items-center')}>
                {tags.map((tag, index) => {
                  const tagColor = tag.selected ? `bg-tag-${tag.color} text-white font-bold border-tag-${tag.color}` : 'text-grey border-lightGrey'
                  const lastStyles = index === tags.length - 1 ? 'border-r-0' : ''

                  return (
                    <View key={index} style={tw(`flex flex-row items-center p-2 px-4 border-r w-1/3 justify-center ${tagColor} ${lastStyles}`)}>
                      <Text>{tag.text}</Text>
                    </View>
                  )
                })}
              </View>
            )}
          </View>
        </View>
        <View style={tw('mt-4')}>
          <View>
            <Text>{content}</Text>
          </View>
        </View>
        <View style={tw('mt-8')}>
          <Link
            src={linkUrl}
            style={tw(
              'flex flex-row justify-between items-center no-underline text-black',
            )}
          >
            <View
              style={tw(
                'flex flex-row gap-2 items-center bg-neutral-100 px-4 py-2 font-bold rounded-2xl',
              )}
            >
              <Text style={tw('mt-[-2px]')}>{linkText}</Text>
              <Image src={arrow} style={tw('w-4 h-4')} />
            </View>
          </Link>
        </View>
      </View>
    </>
  )
}

export default SectionSummary