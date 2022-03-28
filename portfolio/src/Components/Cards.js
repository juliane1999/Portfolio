import React from 'react'
import { Card } from "react-bootstrap";

export default function Cards() {
  const cardInfo = [
    {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        title: "HTML5",
        text: "HTML",
      },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      title: "CSS",
      text: "Cascading Style Sheets is a language used to help web pages be more accessible for users. ",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      title: "JavaScript",
      text: "JavaScript is a programming language that is said to be the language of the web, it evolves simple web pages into an advanced application.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      title: "Figma",
      text: "Figma is a design application that is great for collaboration and building mockups for your user interface within an app or website.",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
      title: "Sketch",
      text: "Sketch is considered an industry standard for building mockups and prototypes within an app or website.",
    },
    {
      image:
        "https://cdn.freelogovectors.net/wp-content/uploads/2021/07/whimsical-logo-freelogovectors.net_.png",
      title: "Whimsical",
      text: "Whimsical is a software that helps build user flows and wireframes for an application.",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      title: "Adobe Creative Cloud",
      text: "A set of applications that ranges from photo editing, video editing, and web development designs provided by Adobe Inc.",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React",
      text: "React is a JavaScript library for building user interfaces, especially reusable components.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg",
      title: "Digital Art",
      text: "An artistic work that uses digital technology to create multimedia art.",
    }
  ];

    const renderCard = (card, index) => {
      return(
        <>
      <div className='card card-front'>
      <Card style={{ width: "15rem", height: "16rem"  }} key={index} className="box">
      <Card.Img variant="top" src={card.image} />
      <Card.Body style={{ height: "3rem"  }} >
        
        <Card.Title>{card.title}</Card.Title>
        
      </Card.Body>
      <Card.Footer>
        <button>More Info</button>
      </Card.Footer>
      </Card>
    </div>

    <div className='card card-back'>
      <Card.Text id='card-body'>{card.text}</Card.Text>
    </div>
    </>
      );
    };  

    return <div className='card-front'>{cardInfo.map(renderCard)}</div>


};






    
