'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Loader2, FileText } from 'lucide-react'

// Worker setup for react-pdf
if (typeof window !== 'undefined') {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

interface PdfThumbnailProps {
    file: string
    className?: string
}

export default function PdfThumbnail({ file, className = '' }: PdfThumbnailProps) {
    const [numPages, setNumPages] = useState<number>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
        setLoading(false)
    }

    function onDocumentLoadError() {
        setError(true)
        setLoading(false)
    }

    return (
        <div className={`relative w-full h-full bg-slate-100 overflow-hidden ${className}`}>
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                    <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
                </div>
            )}

            {error ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-400">
                    <FileText className="w-12 h-12 mb-2" />
                    <span className="text-sm">Preview Unavailable</span>
                </div>
            ) : (
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    className="w-full h-full"
                    loading={
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                            <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
                        </div>
                    }
                >
                    <Page
                        pageNumber={1}
                        width={400} // Set a reasonable width for thumbnail
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="w-full h-full object-cover"
                    />
                </Document>
            )}
        </div>
    )
}
