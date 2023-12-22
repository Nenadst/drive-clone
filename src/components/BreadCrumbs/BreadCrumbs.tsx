import { Breadcrumbs, Button, Typography } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const BreadCrumbs = () => {
  return (
    <Breadcrumbs sx={{ display: "flex" }} aria-label="breadcrumb">
      <FileCopyIcon />
      <Typography>Processes</Typography>
      <Button
        sx={{
          padding: 0,
          textTransform: "none",
          fontSize: "16px",
        }}
        color="inherit"
      >
        IT Sector
      </Button>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
