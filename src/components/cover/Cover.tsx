import { View, Text, Image } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'

import CoverImage from '../../assets/images/cover.png'

import { styles } from './styles'


interface CoverProps {
  title?: string
  subtitle?: string
  roundedTag?: string
  bottomLeftText1?: string
  bottomLeftText2?: string
  bottomRightText1?: string
  bottomRightText2?: string
}

const Cover = ({ 
  title,
  subtitle,
  roundedTag,
  bottomLeftText1,
  bottomLeftText2,
  bottomRightText1,
  bottomRightText2
}: CoverProps) => {
  return (
    <View style={tw(styles.coverWrapper)}>
      <View style={tw(styles.coverTitleWrapper)}>
        <View>
          <Text style={tw(`${styles.coverTitle} font-bold`)}>
            {title}
          </Text>
          <Text style={tw(styles.coverTitle)}>
            {subtitle}
          </Text>
        </View>
        {roundedTag && (
          <View>
            <View style={tw(styles.coverRoundedTag)}>
              <View style={tw(styles.coverRoundedTagInner)}>
                <Text style={tw(styles.coverRoundedTagText)}>{roundedTag}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
      <View style={tw(styles.coverImageWrapper)}>
        <View style={tw(styles.coverImage)}>
          <Image src={CoverImage} />
        </View>
      </View>
      <View style={tw(styles.coverBottomWrapper)}>
        <View>
          <Text style={tw(styles.coverBottomLeftText1)}>
            {bottomLeftText1}
          </Text>
          <Text style={tw(styles.coverBottomLeftText2)}>{bottomLeftText2}</Text>
        </View>
        <View>
          <Text style={tw(styles.coverBottomRightText1)}>
            {bottomRightText1}
          </Text>
          <Text style={tw(styles.coverBottomRightText2)}>
            {bottomRightText2}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Cover 