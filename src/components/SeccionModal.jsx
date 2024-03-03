import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/SeccionModal.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#13384f",
  border: "2px solid white",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const modalContent = [
  {
    title: "Modal 1",
    description: "Contenido del modal 1",
  },
  {
    title: "Modal 2",
    description: "Contenido del modal 2",
  },
  {
    title: "Modal 3",
    description: "Contenido del modal 3",
  },
  {
    title: "Modal 4",
    description: "Contenido del modal 4",
  },
];

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [activeModal, setActiveModal] = React.useState(null);

  const handleOpen = (index) => {
    setActiveModal(modalContent[index]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container-modals">
      <div className="button-row">
        <div className="button-1" onClick={() => handleOpen(0)}></div>
        <div className="button-2" onClick={() => handleOpen(1)}></div>
        <div className="button-3" onClick={() => handleOpen(2)}></div>
        <div className="button-4" onClick={() => handleOpen(3)}></div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 300, height: 100 }} onClick={handleClose}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <h2 id="parent-modal-title" className="parent-modal-title">
            {activeModal?.title}
          </h2>
          <p id="parent-modal-description" className="parent-modal-description">
            {activeModal?.description}
          </p>
        </Box>
      </Modal>
    </div>
  );
}
