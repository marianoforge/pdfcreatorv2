import { PDFDownloadButton } from "./components/templates/plan_de_prevencion/PlanDePrevencionPDF";
import PDFViewer from "./components/common/PDFViewer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PDFViewerPage from './components/PDFViewerPage';


const HomePage = () => {

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-8">
        <div className="flex flex-wrap justify-center gap-3"> 
          <div className="min-w-[180px] flex justify-center items-center h-[40px]">
            <PDFDownloadButton />
          </div>
        </div>
      </header>
      <PDFViewerPage /> 
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
 
        <Route path="/pdf-viewer-content" element={<PDFViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
