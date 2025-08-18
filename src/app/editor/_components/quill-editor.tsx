"use client";

import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  theme?: "snow" | "bubble";
  height?: number;
}

export function QuillEditor({
  value,
  onChange,
  placeholder = "Write something...",
  theme = "snow",
  height = 400,
}: QuillEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Initialize Quill
    const quill = new Quill(editorRef.current, {
      theme,
      placeholder,
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          [{ align: [] }],
          ["blockquote", "code-block"],
          ["link", "image", "video"],
          ["clean"],
        ],
        clipboard: {
          matchVisual: false,
        },
      },
      formats: [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "color",
        "background",
        "script",
        "list",
        "bullet",
        "indent",
        "direction",
        "align",
        "blockquote",
        "code-block",
        "link",
        "image",
        "video",
      ],
    });

    quillRef.current = quill;

    // Set initial content if provided
    if (value) {
      quill.clipboard.dangerouslyPasteHTML(value);
    }

    // Listen for text changes
    const handleTextChange = () => {
      const html = quill.root.innerHTML;
      // Only call onChange if the content has actually changed
      if (html !== value) {
        onChange(html);
      }
    };

    quill.on("text-change", handleTextChange);

    // Cleanup
    return () => {
      if (quillRef.current) {
        quillRef.current.off("text-change", handleTextChange);
      }
    };
  }, []);

  // Update content when value prop changes
  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      const currentSelection = quillRef.current.getSelection();
      quillRef.current.clipboard.dangerouslyPasteHTML(value);

      // Restore selection if it existed
      if (currentSelection) {
        quillRef.current.setSelection(currentSelection);
      }
    }
  }, [value]);

  return (
    <div className="quill-editor-container">
      <style jsx global>{`
        .quill-editor-container .ql-editor {
          min-height: ${height}px;
          font-size: 16px;
          line-height: 1.6;
        }

        .quill-editor-container .ql-toolbar {
          border-top: 1px solid #ccc;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          border-radius: 4px 4px 0 0;
        }

        .quill-editor-container .ql-container {
          border-bottom: 1px solid #ccc;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          border-radius: 0 0 4px 4px;
        }

        .quill-editor-container .ql-editor.ql-blank::before {
          font-style: normal;
          color: #999;
        }

        /* Dark mode styles */
        .dark .quill-editor-container .ql-toolbar {
          border-color: #374151;
          background-color: #1f2937;
        }

        .dark .quill-editor-container .ql-container {
          border-color: #374151;
          background-color: #1f2937;
        }

        .dark .quill-editor-container .ql-editor {
          color: #f9fafb;
        }

        .dark .quill-editor-container .ql-editor.ql-blank::before {
          color: #6b7280;
        }

        .dark .quill-editor-container .ql-stroke {
          stroke: #9ca3af;
        }

        .dark .quill-editor-container .ql-fill {
          fill: #9ca3af;
        }

        .dark .quill-editor-container .ql-picker-label {
          color: #9ca3af;
        }

        .dark .quill-editor-container .ql-picker-options {
          background-color: #374151;
          border-color: #4b5563;
        }

        .dark .quill-editor-container .ql-picker-item {
          color: #f9fafb;
        }

        .dark .quill-editor-container .ql-picker-item:hover {
          background-color: #4b5563;
        }
      `}</style>
      <div ref={editorRef} />
    </div>
  );
}
