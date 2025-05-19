import { PDFViewer as ReactPDFViewer } from '@react-pdf/renderer';
import { PlanDocument } from '../templates/plan_de_prevencion/PlanDePrevencionPDF';
import { pdfViewerStyle } from '../../styles/pdf/pdfViewerStyles';

const PDFViewer = () => {
  return (
    <div className="w-full h-screen">
      <ReactPDFViewer style={pdfViewerStyle}>
        <PlanDocument />
      </ReactPDFViewer>
    </div>
  );
};

export default PDFViewer; 