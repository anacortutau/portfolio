import React, { useState } from "react";
import "./project.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Project({ name, img, description, link }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleSubmit = (e) => {
    navigate("/projects");
  };
  return (
    <dv className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="container-galeria">
        <h1 className="nameProject">
          <strong>{name}</strong>
        </h1>
      </div>

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
            <button>
              <strong>{name}</strong>
            </button>
          </a>
          <form onSubmit={handleSubmit}>
            <button type="submit">Projects</button>
          </form>
        </ModalFooter>
      </Modal>
    </dv>
  );
}

export default Project;
