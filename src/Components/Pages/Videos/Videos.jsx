import { useState, useRef } from "react";

const Videos = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  //   handle file change ---------------
  const handleFilesChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(Array.from(files));
  };

  // handle submit button ----------------
  const handleDeleteFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);

    // Reset the input value to trigger the onChange event for the same files
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  // handle file upload ---------------
  const handleUpload = () => {
    console.log("Uploading files:", selectedFiles);
    setUploading(true);
    setTimeout(() => {
      setSelectedFiles([]);
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }, 2000);
  };

  return (
    <div className="my-20 flex justify-center">
      <div>
        <h1 className="uppercase text-2xl text-center underline mb-10">
          Upload image
        </h1>
        <label htmlFor="fileInput">Selected Multiple Files:</label> <br />
        <input
          ref={fileInputRef}
          className="w-[120px]"
          id="fileInput"
          type="file"
          onChange={handleFilesChange}
          multiple
        />
        {/* Display the selected file names */}
        <div className="mt-5">
          <strong>Selected Files: </strong>
          <ul className="bg-black text-white w-[500px] p-5">
            {selectedFiles.map((file, index) => (
              <li key={index}>
                <span className="font-semibold bg-white text-black p-2 flex gap-5">
                  {file.name}
                  <button
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                    onClick={() => handleDeleteFile(index)}
                  >
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Upload button */}
        <div className="flex justify-center">
        <button
          className=" mt-5 px-4 py-2 bg-gray-500 hover:bg-slate-900 text-white rounded"
          onClick={handleUpload}
          disabled={uploading || selectedFiles.length === 0}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Videos;
