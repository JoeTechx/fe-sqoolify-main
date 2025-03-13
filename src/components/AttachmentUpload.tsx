import React, { useState, ChangeEvent, useRef, MutableRefObject } from "react"
import { Paperclip } from "lucide-react"
import { Input } from "./ui/input"

const AttachmentUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
  }

  const handleClick = () => {
    inputRef.current?.click()
  }
  return (
    <div
      onClick={handleClick}
      className=" bg-[#F8F8FD] p-2 flex items-center justify-center rounded-md shadow-sm border-dashed border-2 border-primaryColor"
    >
      {selectedFile ? (
        <div className="flex items-center justify-center gap-4">
          <Paperclip className=" text-primaryColor mb-2" />
          <p className="text-gray-500">{selectedFile.name}</p>
        </div>
      ) : (
        <div className="flex justify-center gap-4 items-center">
          <Paperclip className=" text-primaryColor mb-2" />
          <p className="text-sm text-gray-500">Attach a document</p>
        </div>
      )}

      <Input
        type="file"
        id="fileInput"
        ref={inputRef}
        // accept=".pdf, .doc, .docx"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  )
}

export default AttachmentUpload
