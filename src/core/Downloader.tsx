/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlobProvider } from '@react-pdf/renderer'

import Generator from './Generator';

const Viewer = () => {
  return (
    <BlobProvider document={<Generator />}>
      {({ url }) => {
        if (url) {
          window.location.href = url
        }
        return null
      }}
    </BlobProvider>
  )
}

export default Viewer