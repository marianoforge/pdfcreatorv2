import { PDFDownloadButton } from "./_base/components/templates/plan_de_prevencion/PlanDePrevencionPDF"
import PDFViewer from "./_base/components/common/PDFViewer"
import PDFTemplate from "./_base/components/common/PDFTemplate"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { registerFonts } from './config/fonts'

registerFonts()

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
      <div className="h-screen flex flex-col">
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Vista del PDF</h1>
        </div>
        <div className="flex-grow">
          <iframe 
            src="/pdf-viewer" 
            className="w-full h-full border-0"
            title="PDF Viewer"
          />
        </div>
      </div> 
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pdf-viewer" element={<PDFViewer />} />
        <Route path="/pdf-template" element={<PDFTemplate />} />
      </Routes>
    </Router>
  )
}

export default App;
