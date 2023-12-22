import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Navigation from "../../components/Navigation/Navigation";
import DataTable from "../../components/Table/Table";
import { useDashboard } from "./hooks/useDashboard";

const Dashboard = () => {
  const {
    setSearchTerm,
    filteredData,
    handleDeleteData,
    handleAddFolderClick,
    handleFileChange,
  } = useDashboard();

  return (
    <>
      <BreadCrumbs />
      <Navigation
        setSearchTerm={setSearchTerm}
        handleAddFolderClick={handleAddFolderClick}
        handleFileChange={handleFileChange}
      />
      <DataTable data={filteredData} handleDeleteData={handleDeleteData} />
    </>
  );
};

export default Dashboard;
