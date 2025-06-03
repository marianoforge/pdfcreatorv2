import { Page } from "@react-pdf/renderer"
import { tw } from "../../utils/tailwind"
import { styles } from "./styles"

interface SectionProps {
  children: React.ReactNode
  id?: string
}

const Section = ({ 
  children, 
  id,
}: SectionProps) => {
  return (
    <Page id={id} size="A4" style={tw(`${styles.section}`)}>
      {children}
    </Page>
  )
}

export default Section;