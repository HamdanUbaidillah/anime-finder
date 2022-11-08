import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ModalDetail = (props) => {
  return (
    <section>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{props.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="flex items-center ">
            <img className="rounded-md max-md:w-24" src={props.details.img} alt="images" />
            <ul className="-ml-4">
              <li className="max-md:text-sm">Title English : {props.data.title_english}</li>
              <li className="max-md:text-sm">Title Japanse : {props.data.title_japanese}</li>
              <li className="max-md:text-sm">Total Episode : {props.data.episodes}</li>
              <li className="max-md:text-sm">Status : {props.data.status}</li>
              <li className="max-md:text-sm">Score : {props.data.score}</li>
              <li className="max-md:text-sm">studio : {props.details.studio}</li>
              <li className="max-md:text-sm">genre : {`${props.details.genre}`}</li>
              <a className="max-md:text-sm" href={props.data.url} target="_blank" rel="noopener noreferrer">
                See More
              </a>
            </ul>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
