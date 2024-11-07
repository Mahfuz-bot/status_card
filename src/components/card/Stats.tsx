import { FaRegComments } from "react-icons/fa"
import { FaRegCalendarDays } from "react-icons/fa6"
import { FiPaperclip } from "react-icons/fi"
import { Stats as StatsData } from "../../assets/data/dataType"
import { useState } from "react"
import axios from "axios"

function Stats({ taskStats }: { taskStats: StatsData }) {
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)
   const [fileList, setFileList] = useState<any[]>([]) // Store file data
   const [attachmentCount, setAttachmentCount] = useState(0)

   const openModal = () => {
      setIsModalOpen(true)
   }

   const closeModal = () => {
      setIsModalOpen(false)
   }

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files) {
         setSelectedFiles(files)
         const fileArray = Array.from(files).map((file) => ({
            name: file.name,
            type: file.type,
            size: file.size,
            url: URL.createObjectURL(file),
         }))
         setFileList(fileArray)
      }
   }

   const url =
      import.meta.env.VITE_API_URL || "http://localhost:3000/api/upload"

   const handleUpload = async () => {
      if (!selectedFiles) return

      const formData = new FormData()
      Array.from(selectedFiles).forEach((file) =>
         formData.append("files", file)
      )

      try {
         const response = await axios.post(url, formData, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         })
         console.log("Files uploaded:", response.data.files)
         setAttachmentCount(attachmentCount + selectedFiles.length)
      } catch (error) {
         console.error("File upload failed", error)
      }
      closeModal()
   }

   return (
      <section className="flex items-center gap-2">
         <div className="stats">
            <FaRegComments /> <span>{taskStats.comments}</span>
         </div>
         <div className="stats">
            <span className="cursor-pointer" onClick={openModal}>
               <FiPaperclip />
            </span>
            <span>{attachmentCount}</span>
            {isModalOpen && (
               <div className="modal">
                  <div className="modal-content">
                     <span className="close-btn" onClick={closeModal}>
                        &times;
                     </span>
                     <div>Attach Files</div>

                     <input
                        className="mt-4"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        accept="image/*, application/pdf, .doc, .docx, .xls, .xlsx, .txt"
                     />
                     <button
                        type="button"
                        className="px-4 py-1 mt-3 rounded text-[0.7rem] bg-slate-200"
                        onClick={handleUpload}
                        disabled={fileList.length === 0}
                     >
                        Upload
                     </button>

                     <div className="file-list">
                        {/* List of Uploaded Files */}
                        {fileList.length > 0 && (
                           <ul className="space-y-2">
                              {fileList.map((file, index) => (
                                 <li
                                    key={index}
                                    className="p-4 bg-white rounded-md shadow-md "
                                 >
                                    <div>
                                       <p className="font-semibold">
                                          {file.name}
                                       </p>
                                       <p className="text-sm text-gray-500">
                                          Extension:{" "}
                                          {file.name.split(".").pop()}
                                       </p>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </div>
                  </div>
               </div>
            )}
         </div>
         <div className="stats">
            <FaRegCalendarDays />
            <span>{taskStats.date}</span>
         </div>
      </section>
   )
}

export default Stats
