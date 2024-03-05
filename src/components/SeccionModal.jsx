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
  width: 550,
  height: "auto",
  bgcolor: "#13384f",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const modalContent = [
  {
    title: "LENTILLAS",
    description1:
      "Visión nítida y sin restricciones, día tras día, con nuestras lentillas de última generación.",
    description2:
      "Comodidad y claridad visual incomparables gracias a nuestras lentillas de ajuste perfecto.",
    description3:
      "Explora el mundo con confianza y estilo con nuestra amplia gama de lentillas de colores y efectos especiales.",
    description4:
      "Lentillas diseñadas para adaptarse a tu estilo de vida, proporcionando una visión clara y cómoda en cualquier situación.",
  },
  {
    title: "BAJA VISIÓN",
    description1:
      "Recupera la independencia visual y redescubre la vida con nuestros tratamientos personalizados para la baja visión.",
    description2:
      "Soluciones avanzadas para mejorar la calidad de vida de aquellos con baja visión, adaptadas a tus necesidades específicas.",
    description3:
      "Nuestro equipo de expertos en baja visión está comprometido a encontrar la mejor solución para tus necesidades visuales únicas.",
    description4:
      "Experimenta un mundo de posibilidades con nuestros servicios especializados que maximizan tu visión residual y optimizan tu bienestar visual.",
  },
  {
    title: "AUDÍFONOS",
    description1:
      "Disfruta de cada sonido de la vida con nuestros audífonos personalizados que se adaptan perfectamente a tu estilo de vida.",
    description2:
      "Sumérgete en el mundo del sonido con claridad cristalina y calidad excepcional con nuestros audífonos de última tecnología.",
    description3:
      "Nuestros audífonos te ofrecen una experiencia auditiva sin igual, permitiéndote disfrutar de conversaciones, música y más con confianza y comodidad.",
    description4:
      "Experimenta la libertad de una audición clara y natural con nuestros audífonos diseñados para mejorar tu calidad de vida.",
  },
  {
    title: "GAFAS",
    description1:
      "Descubre el equilibrio perfecto entre estilo y funcionalidad con nuestra colección de gafas de diseño exclusivo.",
    description2:
      "Expresa tu personalidad y estilo con nuestras gafas de moda que combinan innovación y elegancia.",
    description3:
      "Protege tus ojos con estilo y sofisticación con nuestras gafas de sol de alta calidad que ofrecen una protección óptima contra los rayos UV.",
    description4:
      "Encuentra el par de gafas perfecto que se adapte a tu estilo de vida y necesidades visuales entre nuestra amplia selección de monturas y lentes de alta calidad.",
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
        <Box sx={{ ...style }} className="custom-modal" onClick={handleClose}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="custom-close-icon"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          <h2
            id="parent-modal-title"
            className="parent-modal-title custom-modal-title"
          >
            {activeModal?.title}
          </h2>
          <p
            id="parent-modal-description"
            className="parent-modal-description custom-modal-description"
          >
            {activeModal?.description1}
          </p>
          <p
            id="parent-modal-description"
            className="parent-modal-description custom-modal-description"
          >
            {activeModal?.description2}
          </p>
          <p
            id="parent-modal-description"
            className="parent-modal-description custom-modal-description"
          >
            {activeModal?.description3}
          </p>
          <p
            id="parent-modal-description"
            className="parent-modal-description custom-modal-description"
          >
            {activeModal?.description4}
          </p>
        </Box>
      </Modal>
    </div>
  );
}
