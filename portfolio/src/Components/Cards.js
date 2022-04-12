import React from 'react'
import { Card } from "react-bootstrap";
import { cardInfo } from '../Data/Cards';

export default function Cards() {

    const renderCard = (card, index) => {

      return(
      <>
      <div className='card card-front'>
        <Card style={{ width: "12rem", height: "12rem"  }} key={index} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body style={{ height: "2rem"  }} > 
        <Card.Title>{card.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
        <button>More Info</button>
        </Card.Footer>
        </Card>
      </div>

      {/* <div className='card card-back'>
        <Card.Text id='card-body'>{card.text}</Card.Text>
      </div> */}
      </>
      );
    };  

    return <div className='card-front'>{cardInfo.map(renderCard)}</div>
};






    
