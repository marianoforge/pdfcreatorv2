const PDFViewerPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Vista del PDF</h1>
      </div>
      <div className="flex-grow">
        <iframe 
          src="/pdf-viewer-content" 
          className="w-full h-full border-0"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default PDFViewerPage; 