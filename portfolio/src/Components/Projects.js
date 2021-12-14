import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import Carousel from 'react-bootstrap/Carousel'
import { Modal, Button } from 'antd';

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
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1637345540120-38bb0bbb7871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="First slide"
        width='1920'
        height='1080'
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
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1619796124432-c8b1670a190b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1547534887-8d299f2c126b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"/>

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
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1631219892100-608317dd6c68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4N3w2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
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




 
 
  

     

    
  
  
 