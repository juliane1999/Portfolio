import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Projects() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }
    
  
    return (
        <div className = 'project-container'>

    <Carousel>
    <Carousel.Item interval={3000}>

        <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1637345540120-38bb0bbb7871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="First slide"
        width='1920'
        height='1080'
        />
        <Carousel.Caption>
        <h3>Human Rights First DocDB </h3>
        </Carousel.Caption>
        {values.map((v, idx) => (
            <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
              Full screen
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
            ))}
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Frontend & UX/UI Contribution</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Modal body content
            </Modal.Body>
        </Modal>
        </Carousel.Item>

        <Carousel.Item interval={3000}>

            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1547534887-8d299f2c126b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"/>

            <Carousel.Caption>
            <h3>African Marketplace</h3>
            {values.map((v, idx) => (
            <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
              Full screen
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Christine</Modal.Title>
            </Modal.Header>
            <Modal.Body>Second modal</Modal.Body>
            </Modal>    
            </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1619796124432-c8b1670a190b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>E-Comm</h3>
            {values.map((v, idx) => (
            <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
              Full screen
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>POtato</Modal.Title>
            </Modal.Header>
            <Modal.Body>third modal</Modal.Body>
            </Modal>
            </Carousel.Caption>
            </Carousel.Item>

        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1631219892100-608317dd6c68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4N3w2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Fourth slide"/>

            <Carousel.Caption>
            <h3>Portfolio</h3>
            {values.map((v, idx) => (
            <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
              Full screen
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Hello</Modal.Title>
            </Modal.Header>
            <Modal.Body>fourth modal</Modal.Body>
            </Modal>
            </Carousel.Caption>
            </Carousel.Item>

    </Carousel>

      </div>
    )
    }
// }




 
 
  

     

    
  
  
 