import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import CloseButton from 'react-bootstrap/CloseButton'



export default function Cards() {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3"></Popover.Header>
            <CloseButton/>
            <Popover.Body>
            </Popover.Body>
        </Popover>
        );

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='holder.js/100px180' height='250' />
                <Card.Body>
                    {/* <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text> */}

                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="success">More Details</Button>
                </OverlayTrigger>

            </Card.Body>
            </Card>
        </div>
    )
}



