import React, { useState } from "react";
import "./project.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Project({ name, img, description, link }) {
  const [open, setOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <dv className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      {/* <a href={link} target="_blank" rel="noreferrer"><strong>{name}</strong></a> */}
      <img src={img} alt="" className="p-img" />
      <div className="principal">
        <div className="secundario">
          <Button color="primary" onClick={openModal}>
            Description
          </Button>
        </div>
      </div>

      <Modal isOpen={open}>
        <ModalHeader>Description</ModalHeader>
        <ModalBody>{description}</ModalBody>
        <ModalFooter>
          <a href={link} target="_blank" rel="noreferrer">
            <strong>{name}</strong>
          </a>
        </ModalFooter>
      </Modal>
    </dv>
  );
}

export default Project;
