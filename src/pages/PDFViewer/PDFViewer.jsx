import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
const PDFViewer = ({ fileUrl }) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="xl:w-full mx-auto mt-3 lg:w-10/12 md:w-8/12 sm:w-7/12 h-full flex justify-center items-center">
        <Viewer fileUrl={fileUrl} />
      </div>
    </Worker>
  );
};

export default PDFViewer;
