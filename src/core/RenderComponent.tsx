/* eslint-disable @typescript-eslint/no-explicit-any */
import PageBreak from '../components/pageBreak/PageBreak'
import TestModule from '../components/TestModule'
import HeaderPage from '../components/header/HeaderPage'
import HeaderSection from '../components/header/HeaderSection'
import FooterLogo from '../components/footer/footerLogo/FooterLogo'
import FooterCover from '../components/footer/footerCover/FooterCover'
import Cover from '../components/cover/Cover'
import GridIndex from '../components/gridIndex/GridIndex'
import Text from '../components/text/Text'  
import Title from '../components/title/Title'
import Image from '../components/image/Image'
import Banner from '../components/banner/Banner'
import List from '../components/list/List'
import SectionSummary from '../components/sectionSummary/SectionSummary'
import Warning from '../components/warning/Warning'
import NumberedList from '../components/numberedList/NumberedList'
import TableBlackHeader from '../components/tableBlackHeader/TableBlackHeader'
import ScalePerYear from '../components/scalePerYear/ScalePerYear'
import TableList from '../components/tableList/TableList'
import GridWorkSheets from '../components/gridWorkSheets/GridWorkSheets'
import LinkList from '../components/linkList/LinkList'
import ImageBanner from '../components/imageBanner/ImageBanner'
import ColoredTable from '../components/coloredTable/ColoredTable'
import TipList from '../components/tipList/TipList'

const componentsMap = {
  TestModule,
  PageBreak,
  HeaderPage,
  HeaderSection,
  FooterLogo,
  FooterCover,
  Cover,
  GridIndex,
  Text,
  Title,
  Image,
  Banner,
  List,
  SectionSummary,
  Warning,
  NumberedList,
  TableBlackHeader,
  ScalePerYear,
  TableList,
  GridWorkSheets,
  LinkList,
  ImageBanner,
  ColoredTable,
  TipList
} as const

const RenderComponent = (content: any, key: number | string) => {
  const Component = componentsMap[content.type as keyof typeof componentsMap]
  return Component ? <Component key={key} {...content.props} /> : null
}

export default RenderComponent