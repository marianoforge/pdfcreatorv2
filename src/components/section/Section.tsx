import { Page } from "@react-pdf/renderer"
import { tw } from "../../utils/tailwind"
import { pagePadding } from '../../config/global'

interface SectionProps {
  children: React.ReactNode
  id?: string
  footerType?: string
}

const Section = ({ 
  children, 
  id,
  footerType = ""
}: SectionProps) => {
  const footerTypes = {
    FooterLogo: pagePadding.bottomWithFooter,
    FooterCover: pagePadding.bottomWithCover
  }
  const paddingBottom = footerTypes[footerType as keyof typeof footerTypes] || pagePadding.bottom

  return (
    <Page id={id} size="A4" style={tw(`flex-col bg-white p-[${pagePadding.left}] pt-[${pagePadding.top}] pb-[${paddingBottom}]`)}>
      {children}
    </Page>
  )
}

export default Section;