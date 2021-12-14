import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import Carousel from 'react-bootstrap/Carousel'
import { Modal, Button } from 'antd';
import HRF from '../Assets/Search.png'
import ecomm from '../Assets/Ecomm.png'
import market from '../Assets/Market.png'
import port from '../Assets/Port.png'

export default function Projects() {

        const [isModalVisible, setIsModalVisible] = useState(false);
        const [isModalVisible1, setIsModalVisible1] = useState(false);
        const [isModalVisible2, setIsModalVisible2] = useState(false);
        const [isModalVisible3, setIsModalVisible3] = useState(false);
      
        const showModal = () => {
          setIsModalVisible(true);
        };

        const showModal1 = () => {
        setIsModalVisible1(true);
        };

        const showModal2 = () => {
        setIsModalVisible2(true);
        };

        const showModal3 = () => {
        setIsModalVisible3(true);
        };
      
        const handleOk = () => {
        setIsModalVisible(false);
        };

        const handleOk1 = () => {
        setIsModalVisible1(false);
        };

          const handleOk2 = () => {
        setIsModalVisible2(false);
        };

          const handleOk3 = () => {
        setIsModalVisible3(false);
        };
      
        const handleCancel = () => {
          setIsModalVisible(false);
        };

        const handleCancel1 = () => {
        setIsModalVisible1(false);
        };

        const handleCancel2 = () => {
        setIsModalVisible2(false);
        };

        const handleCancel3 = () => {
        setIsModalVisible3(false);
        };


  
    return (
        <div className = 'project-container'>

    <Carousel>
        <Carousel.Item interval={3000}>

        <img
        className="d-block"
        src={HRF}
        alt="First slide"
        />

        <Carousel.Caption>
        <h3>Human Rights First DocDB </h3>
        <>
        <Button type="primary" onClick={showModal}>
            More Info
        </Button>
        <Modal title="Frontend & UX/UI Contribution" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some ...</p>
        </Modal>
        </>
        </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item interval={3000}>
            <img
            className="d-block"
            src={ecomm}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>E-Comm</h3>
        <>
        <Button type="primary" onClick={showModal1}>
            More Info
        </Button>
        <Modal title="Frontend & UX/UI Contribution" visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
        </>
            </Carousel.Caption>
            </Carousel.Item>


        <Carousel.Item interval={3000}>

        <img
        className="d-block"
        src={market}
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>African Marketplace</h3>
        <>
        <Button type="primary" onClick={showModal2}>
        More Info
        </Button>
        <Modal title="Frontend & UX/UI Contribution" visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel2}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        </Modal>
        </>
        </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item interval={3000}>
            <img
            className="d-block"
            src={port}
            alt="Fourth slide"/>

            <Carousel.Caption>
            <h3>Portfolio</h3>
            <>
            <Button type="primary" onClick={showModal3}>
                More Info
            </Button>
            <Modal title="Frontend & UX/UI Contribution" visible={isModalVisible3} onOk={handleOk3} onCancel={handleCancel3}>
                <p>Some contents...</p>
            </Modal>
            </>
            </Carousel.Caption>
            </Carousel.Item>

    </Carousel>

      </div>
    )
    }




 
 
  

     

    
  
  
 