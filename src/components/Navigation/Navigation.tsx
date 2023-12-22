import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import { NavigationProps } from "./Navigation.types";

const Navigation = ({
  setSearchTerm,
  handleAddFolderClick,
  handleFileChange,
}: NavigationProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "30px",
      }}
    >
      {" "}
      <Button
        variant="contained"
        onClick={handleAddFolderClick}
        sx={{ backgroundColor: "#4CAF50", color: "white" }}
      >
        <AddIcon />
        Add Folder
      </Button>
      <label htmlFor="file-input">
        <input
          type="file"
          id="file-input"
          onChange={handleFileChange}
          style={{
            display: "none",
          }}
        />
        <Button
          variant="contained"
          component="span"
          sx={{ backgroundColor: "#2196F3", color: "white" }}
        >
          <UploadIcon />
          Upload File
        </Button>
      </label>
      <TextField
        label="Search"
        variant="outlined"
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ width: "300px" }}
      />
    </Box>
  );
};

export default Navigation;
