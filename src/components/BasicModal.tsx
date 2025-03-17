import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "87%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [hide, setHide] = React.useState<boolean>(false);
  const handleOpen = () => {
    if (!open) setOpen(true);
    setHide(false);
  };
  const handleClose = () => {
    setHide(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Chat</Button>
      {!hide && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>{children}</Box>
        </Modal>
      )}
    </div>
  );
}
