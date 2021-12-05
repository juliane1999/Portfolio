import React from 'react'
import tree from '../Assets/About.png'
import Cards from './Card'
import Card from 'react-bootstrap/Card'

export default function About() {

    return (
        <div className = 'about-img'>
            <img src = {tree} alt = 'tree'/>
            <Cards>
                <Card.Body>
                <Card.Title>HTML5</Card.Title>
                <Card.Text>
                    HI
                </Card.Text>
                </Card.Body>
            </Cards>
            <Cards>
            </Cards>

        </div>
    )
}
