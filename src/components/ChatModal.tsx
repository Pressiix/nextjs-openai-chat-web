"use client";
import { Grid, Button, Box } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ChatIcon from "@mui/icons-material/Chat";
import { IconButton } from "@mui/material";

interface ChatModalProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ChatModal = ({ style, className, children }: ChatModalProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const inLineStyle = {
    position: "fixed",
    top: "74%",
    left: "89%",
    width: "20%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    p: 4,
    border: "1px solid #000",
    height: "fit-content",
    padding: "unset",
  };

  const buttonStyle = {
    position: "fixed",
    right: "4vw",
    top: "93%",
  };

  return (
    <>
      <IconButton
        className="modal-btn"
        onClick={handleOpen}
        sx={buttonStyle}
        color="primary"
      >
        <ChatIcon />
      </IconButton>
      <Box
        className={className}
        sx={inLineStyle}
        style={{ ...style, display: `${open ? "" : "none"}` }}
      >
        <Grid container>
          <Grid item xs={11} />
          <Grid item xs={1}>
            <CloseIcon
              className="close-modal-btn"
              onClick={handleClose}
              style={{ paddingTop: "16%" }}
            />
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ChatModal;
