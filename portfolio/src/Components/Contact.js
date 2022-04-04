import React, {useState,useContext} from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import ThemeContext from '../Themes/ThemeContext'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import clip from '../Assets/Clipboard.png'
import CopyAllIcon from '@mui/icons-material/CopyAll';
import '../Style/Modal.css'

const MyVerticallyCenteredModal = (props,content) => {
  
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

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
            
          <div id='line1'>
          <h5>Email me @ julianevo1999@gmail.com</h5>
          <button onClick={() => navigator.clipboard.writeText('@julianevo1999@gmail.com')}>
          <CopyAllIcon />
          </button>
          </div>

          <div id='line2'>
          <h5>Link up @ https://www.linkedin.com/in/juliane-nguyen-8858a5206/</h5>
          <button onClick={() => navigator.clipboard.writeText('https://www.linkedin.com/in/juliane-nguyen-8858a5206/')}>
          <CopyAllIcon />
          </button>
          </div>

          <div id='line3'>
          <h5>Phone: 669-237-9950</h5> 
          <button onClick={() => navigator.clipboard.writeText('669-237-9950')}>
          <CopyAllIcon />
          </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Contact = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const theme = useContext(ThemeContext)
  
  return (
    <div>
  
        <Button variant="primary" id="nav-contact" onClick={() => setModalShow(true)}>
        Contact 
        </Button>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        style={theme}
        />          
          
    </div>
  )
}

export default Contact

