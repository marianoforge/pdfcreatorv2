import { View, Text, Image } from '@react-pdf/renderer'
import { tw } from '../../../utils/tailwind'

import QidaLogo from '../../../assets/images/qida_logo.png'

import { styles as footerStyles } from '../styles'
import { styles } from './styles'

const FooterCover = () => {
  return (
    <View fixed style={tw(`${footerStyles.footerWrapper} ${styles.footerCoverWrapper}`)}>
      <View style={tw(`${styles.footerCoverText}`)}>
        <Text>Realizado por: <Text style={tw(`font-bold`)}>Marta Gimenez</Text></Text>
        <Text style={tw(`italic`)}>Orientador/a Personal y Tecnic@ de encendido de impresoras</Text>
      </View>
      <Image
        style={tw(`${styles.footerCoverLogo}`)}
        src={QidaLogo}
      />
    </View>
  )
}

export default FooterCover 
