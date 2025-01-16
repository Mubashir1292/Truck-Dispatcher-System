import PdfViewer from "../PDFViewer/PDFViewer";
const ViewDocument = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full min-h-screen p-3">
      <div className=" h-screen">
        <PdfViewer pdfFile={"./sampleTesting3.pdf"} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ViewDocument;
