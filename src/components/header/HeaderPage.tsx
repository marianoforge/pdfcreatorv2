import { View, Text } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { styles } from './styles'

export interface HeaderPageInterface {
  title?: string
  smallText?: string
  personName?: string
  date?: string
  showHeaderOnEveryPage?: boolean
  showSectionTitleOnEveryPage?: boolean
}

const HeaderPage = ({ 
  title, 
  smallText = "",
  personName = "", 
  date = "",
  showHeaderOnEveryPage = true,
  showSectionTitleOnEveryPage = false
}: HeaderPageInterface) => {
  return (
    <>
      <View fixed={showHeaderOnEveryPage}>
        <Text style={tw(`${styles.headerText}`)}>
          {smallText}
        </Text>
      </View>
      <View fixed={(showHeaderOnEveryPage && showSectionTitleOnEveryPage)}>
        {title && (
          <View style={tw(`${styles.headerTitleWrapper}`)}>
            <Text style={tw(`${styles.headerTitle}`)}>
              {title}
            </Text>
            <View style={tw(`${styles.headerDate}`)}>
              <Text style={tw(`${styles.headerDateText}`)}>
                <Text>{date}</Text>
              </Text>
              <Text style={tw(`${styles.headerPersonName}`)}>{personName}</Text>
            </View>
          </View>
        )}
        <View style={tw(`${styles.headerLine}`)}></View>
      </View>
    </>
  )
}

export default HeaderPage 
