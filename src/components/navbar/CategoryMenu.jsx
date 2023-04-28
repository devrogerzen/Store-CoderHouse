import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export const CategoryMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={{
          color: "#fff",
          fontWeight: "600",
          padding: "10px",
          fontSize: "15px",
        }}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Categoria
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Link to={"/category/monitor"}>
          <MenuItem onClick={handleClose}>Monitor</MenuItem>
        </Link>
        <Link to={`/category/${"auriculares"}`}>
          <MenuItem onClick={handleClose}>Auriculares</MenuItem>
        </Link>
        <Link to={`/category/${"mouse"}`}>
          <MenuItem onClick={handleClose}>Mouse</MenuItem>
        </Link>
        <Link to={`/category/${"notebook"}`}>
          <MenuItem onClick={handleClose}>Notebook</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};
