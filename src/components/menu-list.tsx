import * as React from "react";

import { Link } from "react-scroll";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#c0c0c0",
          boxShadow: "1px 1px 4px #0000008f",
          "&:focus, &:active": {
            outline: "none",
          },
          "&:hover": { border: " 1px solid #ec683b" },
          backgroundColor: "#494949",
          borderRadius: "8px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.9rem",
          letterSpacing: "0.08rem",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#242424",
          border: "outset 1px #c0c0c0",
        },
      },
    },
  },
});

const options = [
  { label: "Home", anchor: "home-header-anchor" },
  { label: "Projects", anchor: "projects-anchor" },
  { label: "Contact", anchor: "contact-anchor" },
];

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {options.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              <Link
                activeClass="active"
                to={option.anchor}
                spy={true}
                smooth="easyInAnimation"
                duration={600}
                onClick={handleClose}
                style={{ fontWeight: "bold" }}
              >
                {option.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </ThemeProvider>
    </div>
  );
}
