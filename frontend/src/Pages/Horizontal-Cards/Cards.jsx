import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "./../../assets/images/web/web1.jpg";
import img2 from "./../../assets/images/web/web2.jpg";
import { CContainer } from "@coreui/react";

const cardData = [
  {
    img: img1,
    title: "Card Title 1",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
  {
    img: img2,
    title: "Card Title 2",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
  {
    img: img1,
    title: "Card Title 3",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
  {
    img: img2,
    title: "Card Title 4",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
  {
    img: img1,
    title: "Card Title 5",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
  {
    img: img2,
    title: "Card Title 6",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
];

function Cards() {
  return (
    <CContainer fluid className='my-3'>
      <div className='row'>
        {cardData.map((card, index) => (
          <div className='col-sm-12 col-md-6 col-lg-4 mb-3 mt-4' key={index}>
            <Card>
              <Card.Img variant="top" src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">{card.buttonText}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </CContainer>
  );
}

export default Cards;
