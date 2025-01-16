import React, { useState, useRef } from "react";
import { PDFDocument } from "pdf-lib";
import { Document, Page, pdfjs } from "react-pdf";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "@mui/material";

// Set worker path
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfFile, onSubmit }) => {
  const [numPages, setNumPages] = useState(null);
  const [signedPdf, setSignedPdf] = useState(null);
  const signaturePad = useRef();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleClear = () => {
    signaturePad.current.clear();
  };

  const handleSaveSignature = async () => {
    try {
      const signatureDataUrl = signaturePad.current.toDataURL();
      const existingPdfBytes = await fetch(pdfFile).then((res) =>
        res.arrayBuffer()
      );
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      const pages = pdfDoc.getPages();
      const secondPage = pages[1];

      const pngImageBytes = await fetch(signatureDataUrl).then((res) =>
        res.arrayBuffer()
      );
      const pngImage = await pdfDoc.embedPng(pngImageBytes);
      const pngDims = pngImage.scale(0.5);

      secondPage.drawImage(pngImage, {
        x: 100,
        y: 50,
        width: pngDims.width,
        height: pngDims.height,
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setSignedPdf(url);

      if (onSubmit) onSubmit(pdfBytes);
    } catch (error) {
      console.error("Error saving signature:", error);
    }
  };

  return (
    <div>
      <h3>Sign the Document</h3>
      <div>
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading PDF..."
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
      <div style={{ marginTop: "20px" }}>
        <SignatureCanvas
          ref={signaturePad}
          penColor="black"
          canvasProps={{
            width: 500,
            height: 150,
            className: "signatureCanvas",
          }}
          backgroundColor="#fff"
        />
        <div>
          <Button onClick={handleClear} variant="contained" color="error">
            Clear
          </Button>
          <Button
            onClick={handleSaveSignature}
            variant="contained"
            color="success"
          >
            Save and Attach
          </Button>
        </div>
      </div>
      {signedPdf && (
        <div>
          <h4>Signed Document</h4>
          <a href={signedPdf} download="signed_document.pdf">
            Download Signed PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
