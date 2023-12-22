import { useEffect, useState } from "react";
import { useDeleteData } from "./udeDeleteData";
import { useCreationFolder } from "./useCreationFolder";
import { useData } from "./useData";
import { useUploadFile } from "./useUploadFile";

export const useDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useData();
  const combinedData = data?.folders.concat(data?.files);

  const [filteredData, setFilteredData] = useState(combinedData);

  const { mutate: mutateDeleteData } = useDeleteData();
  const { mutate: mutateUploadFile } = useUploadFile();
  const { mutate: mutateCreateFolder } = useCreationFolder();

  console.log(filteredData);

  useEffect(() => {
    console.log("useEffect triggered");
    const filtered = combinedData?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const handleDeleteData = (dataName: string) => {
    mutateDeleteData(dataName);
  };

  const handleUploadFile = (file: FormData) => {
    console.log("file", file);
    mutateUploadFile(file);
  };

  const handleAddFolder = (folderNames: string) => {
    console.log(folderNames);
    mutateCreateFolder({ folderName: folderNames });
  };

  const handleAddFolderClick = () => {
    const folderName = prompt("Enter the name for the new folder:");

    if (folderName) {
      handleAddFolder(folderName);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      handleUploadFile(formData);
    }
  };

  return {
    setSearchTerm,
    filteredData,
    handleUploadFile,
    handleAddFolder,
    handleDeleteData,
    handleAddFolderClick,
    handleFileChange,
  };
};
