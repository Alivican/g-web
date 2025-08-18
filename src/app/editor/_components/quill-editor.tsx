"use client";

import { useEffect, useRef, useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "~/app/api/uploadthing/core";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

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
  const { startUpload } = useUploadThing("imageUploader");

  // Memoize the text change handler to avoid dependency issues
  const handleTextChange = useCallback(() => {
    if (quillRef.current) {
      const html = quillRef.current.root.innerHTML;
      // Only call onChange if the content has actually changed
      if (html !== value) {
        onChange(html);
      }
    }
  }, [value, onChange]);

  useEffect(() => {
    if (!editorRef.current) return;

    // Custom image handler for UploadThing
    const imageHandler = () => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files?.[0];
        if (file && quillRef.current) {
          const range = quillRef.current.getSelection(true);

          try {
            // Show loading state
            quillRef.current.insertEmbed(
              range.index,
              "image",
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJWNk0xMiAyVjZNMTIgMThWMjJNMTIgMThWMjJNNiAxMkgyTTYgMTJIMk0yMiAxMkgxOE0yMiAxMkgxOE02LjM0MzE1IDYuMzQzMTVMMTAuMjQyNiAxMC4yNDI2TTYuMzQzMTUgNi4zNDMxNUwxMC4yNDI2IDEwLjI0MjZNMTMuNzU3NCAxMy43NTc0TDE3LjY1NjkgMTcuNjU2OU0xMy43NTc0IDEzLjc1NzRMMTcuNjU2OSAxNy42NTY5TTEzLjc1NzQgMTAuMjQyNkwxNy42NTY5IDYuMzQzMTVNMTMuNzU3NCAxMC4yNDI2TDE3LjY1NjkgNi4zNDMxNU02LjM0MzE1IDE3LjY1NjlMMTAuMjQyNiAxMy43NTc0TTYuMzQzMTUgMTcuNjU2OUwxMC4yNDI2IDEzLjc1NzQiIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+",
            );

            // Upload the file
            const uploadResult = await startUpload([file]);

            if (uploadResult?.[0]) {
              // Replace the loading image with the actual uploaded image
              quillRef.current.deleteText(range.index, 1);
              quillRef.current.insertEmbed(
                range.index,
                "image",
                uploadResult[0].url,
              );
              quillRef.current.setSelection(range.index + 1);
            }
          } catch (error) {
            console.error("Image upload failed:", error);
            // Remove the loading image on error
            if (quillRef.current) {
              quillRef.current.deleteText(range.index, 1);
            }
          }
        }
      };
    };

    // Initialize Quill with simplified toolbar and fixed configurations
    const quill = new Quill(editorRef.current, {
      theme,
      placeholder,
      modules: {
        toolbar: {
          container: [
            [{ header: [1, false] }],
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ align: [] }],
            ["code-block"],
            ["link", "image", "video"],
            ["clean"],
          ],
          handlers: {
            image: imageHandler,
          },
        },
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
        "indent",
        "direction",
        "align",
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

        /* Enhanced list styles for better nesting */
        .quill-editor-container .ql-editor ol,
        .quill-editor-container .ql-editor ul {
          padding-left: 1.5rem;
        }

        .quill-editor-container .ql-editor li.ql-indent-1 {
          padding-left: 1.5rem;
        }

        .quill-editor-container .ql-editor li.ql-indent-2 {
          padding-left: 3rem;
        }

        .quill-editor-container .ql-editor li.ql-indent-3 {
          padding-left: 4.5rem;
        }

        .quill-editor-container .ql-editor li.ql-indent-4 {
          padding-left: 6rem;
        }

        .quill-editor-container .ql-editor li.ql-indent-5 {
          padding-left: 7.5rem;
        }

        .quill-editor-container .ql-editor li.ql-indent-6 {
          padding-left: 9rem;
        }

        .quill-editor-container .ql-editor li.ql-indent-7 {
          padding-left: 10.5rem;
        }

        .quill-editor-container .ql-editor li.ql-indent-8 {
          padding-left: 12rem;
        }

        /* Ensure proper list type inheritance for nested lists */
        .quill-editor-container .ql-editor ol li {
          list-style-type: decimal;
        }

        .quill-editor-container .ql-editor ul li {
          list-style-type: disc;
        }

        /* Fix for nested list styling */
        .quill-editor-container .ql-editor ol li.ql-indent-1 {
          list-style-type: lower-alpha;
        }

        .quill-editor-container .ql-editor ol li.ql-indent-2 {
          list-style-type: lower-roman;
        }

        .quill-editor-container .ql-editor ul li.ql-indent-1 {
          list-style-type: circle;
        }

        .quill-editor-container .ql-editor ul li.ql-indent-2 {
          list-style-type: square;
        }
      `}</style>
      <div ref={editorRef} />
    </div>
  );
}
