'use client';

import { useCallback, useState, useEffect } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import * as BsIcons from "react-icons/bs";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import './PDFSection.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
  isEvalSupported: false,
};

const resizeObserverOptions = {};

const maxWidth = 800;

type PDFFile = string | File | null;

export default function PDFSection() {
  const file: PDFFile = './ONLINE.pdf';
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  const [showOriginal, setShowOriginal] = useState(false);
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute("data-bs-theme") === "dark"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.getAttribute("data-bs-theme") === "dark";
      setIsDark(dark);
      if (!dark) setShowOriginal(false);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-bs-theme"] });
    return () => observer.disconnect();
  }, []);

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className="PDF">
      <div className="PDF__container">
        <div className="PDF__container__load">
          <label htmlFor="file"></label>{' '}
        </div>
        {isDark && (
          <button
            className="pdf-view-toggle"
            onClick={() => setShowOriginal(prev => !prev)}
          >
            {showOriginal
              ? <><span key="moon" className="pdf-toggle-icon">{BsIcons.BsMoon({ 'aria-label': 'View Dark' })}</span> View Dark</>
              : <><span key="sun" className="pdf-toggle-icon">{BsIcons.BsSun({ 'aria-label': 'View Original' })}</span> View Original</>}
          </button>
        )}
        <div className={`PDF__container__document${isDark && !showOriginal ? ' pdf-dark' : ''}`} ref={setContainerRef}>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}