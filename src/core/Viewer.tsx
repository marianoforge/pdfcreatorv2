/* eslint-disable @typescript-eslint/no-explicit-any */
import { PDFViewer } from '@react-pdf/renderer'

import Generator from './Generator';

const Viewer = () => {
  return (
    <div className="w-full h-screen">
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <Generator />
      </PDFViewer>
    </div>
  );
};

export default Viewer