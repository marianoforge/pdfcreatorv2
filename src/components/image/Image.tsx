import { Image as ImageComponent } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'

interface ImageProps {
  src: string
  width?: string
  height?: string
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
}

const Image = ({ 
  src,
  width = 'auto',
  height = 'auto',
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}: ImageProps) => {
  return (
    <ImageComponent src={src} style={tw(`mb-${marginBottom} mt-${marginTop} ml-${marginLeft} mr-${marginRight} w-[${width}] h-[${height}]`)} />
  )
}

export default Image 