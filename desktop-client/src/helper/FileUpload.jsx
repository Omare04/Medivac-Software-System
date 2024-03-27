import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css"; // Import FilePond styles

// Optionally, you can import additional plugins if needed

const FileUploadComponent = ({ title }) => {
  const [files, setFiles] = useState([]);

  // Handle file upload
  const handleFileUpload = (fileItems) => {
    setFiles(fileItems.map((fileItem) => fileItem.file));
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h1
        style={{
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          width: "100%",
          gap: "10px",
        }}
      >
        {title}
      </h1>
      <FilePond
        files={files}
        onupdatefiles={handleFileUpload}
        allowMultiple={true} // Allow multiple files to be uploaded
        maxFiles={9} // Limit the maximum number of files
        acceptedFileTypes={["image/*", "application/pdf"]} // Accept only certain file types
        maxFileSize="5MB" // Limit the maximum file size
      />
    </div>
  );
};

export default FileUploadComponent;
