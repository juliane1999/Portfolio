/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Power from './Power'
import clip from '../Assets/Clipboard.png'
import DarkMode from '../Themes/DarkMode'


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
          <img src={clip} class= 'clipboard' alt='clipboard'/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default function Nav() {
    const [modalShow, setModalShow] = React.useState(false);



    return (
      

        <div className='nav-container'>
            <nav>
                <div className='logo'>
                    <h1>JULIANE VO's PORTFOLIO</h1>
                </div>
                
                
                <div className = 'links'>
                <a>
                <Link to = '/' style={{textDecoration: 'none'}}>Home</Link>
                </a>
                <a>
                <Link to = '/projects' style={{textDecoration: 'none'}}>Projects</Link>
                </a>
                <a>
                <Link to = '/about'style={{textDecoration: 'none'}}>About</Link>
                </a>
                

                <>
                    <Button variant="primary" id="nav-contact" onClick={() => setModalShow(true)}>
                    Contact 
                    </Button>
            
                    <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
                    
                </>
                </div>
                
                
            </nav>
         </div>
         
    )
}


