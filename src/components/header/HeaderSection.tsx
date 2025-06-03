import { View, Text } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { styles } from './styles'

export interface HeaderSectionInterface {
  sectionTitle?: string
  headerText?: string
  personName?: string
  date?: string
  showHeaderOnEveryPage?: boolean
  showSectionTitleOnEveryPage?: boolean
}

const HeaderSection = ({ 
  sectionTitle, 
  headerText = "",
  personName = "", 
  date = "",
  showHeaderOnEveryPage = true,
  showSectionTitleOnEveryPage = false
}: HeaderSectionInterface) => {
  return (
    <>
      <View fixed={showHeaderOnEveryPage}>
        <Text style={tw(`${styles.headerText}`)}>
          {headerText}
        </Text>
      </View>
      <View fixed={(showHeaderOnEveryPage && showSectionTitleOnEveryPage)}>
        {sectionTitle && (
          <View style={tw(`${styles.headerTitleWrapper}`)}>
            <Text style={tw(`${styles.headerTitle}`)}>
              {sectionTitle}
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

export default HeaderSection 
