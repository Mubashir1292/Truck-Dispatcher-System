import PdfViewer from "../PDFViewer/PDFViewer";
import document from "./sampleTesting3.pdf";
const ViewDocument = () => {
  return (
    <div className="w-full min-h-screen p-3">
      <div className=" h-screen">
        <PdfViewer fileUrl={document} />
      </div>
    </div>
  );
};

export default ViewDocument;
