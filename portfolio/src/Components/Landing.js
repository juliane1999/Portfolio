import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../Style/Button.scss'
  
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Email me @ julianevo1999@gmail.com</h5>
          <h5>Link up @ https://www.linkedin.com/in/juliane-nguyen-8858a5206/</h5>
          <h5>Phone: 669-237-9950</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default function Landing() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
        <div className = 'land-container'>
      <>
        <Button variant="primary" className="contact" onClick={() => setModalShow(true)}>
        Contact Me Here For Web Development & Design !
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
      </div>
    );
  }
  

