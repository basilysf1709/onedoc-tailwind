'use client'
import React, { useState, useEffect } from "react";
import { htmlContent } from "./OneDocComponent";



export const OneDoc = () => {
  const [pdfData, setPdfData] = useState<any>(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch("/api/v1/getPDF", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ html: htmlContent }),
        });
        const blob = await response.blob();
        setPdfData(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    fetchPdf();
  }, []);
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      {pdfData ? (
        <object
          data={pdfData}
          type="application/pdf"
          style={{ width: "100%", height: "100%", border: "none" }}
        >
          <p>
            Your browser does not support PDFs.{" "}
            <a href={pdfData}>Download the PDF</a>.
          </p>
        </object>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};
