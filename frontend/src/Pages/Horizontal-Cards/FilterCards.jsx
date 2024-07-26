import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import jarfilling from "./../../assets/images/Filter-water/jar-can-filling-machine-img2.jpg";
import jarfil2 from "./../../assets/images/Filter-water/jar-fill-machine-img1.png";
import jarimg from "./../../assets/images/Filter-water/jar-img2.jpg";
import jug1 from "./../../assets/images/Filter-water/water-jug1.jpg";
import bottal from "./../../assets/images/Filter-water/pack-bottol1.jpg";
import jug2 from "./../../assets/images/Filter-water/water-jug2.jpg";
import plantImg from "./../../assets/images/Filter-water/ss-plant-img1.webp";

import { CContainer } from "@coreui/react";

const cardData = [
  {
    img: jarfilling,
    title: "Card Title 1",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
  {
    img: jarfil2,
    title: "Card Title 2",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
  {
    img: jarimg,
    title: "Card Title 3",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
  {
    img: jug1,
    title: "Card Title 4",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
  {
    img: plantImg,
    title: "Card Title 5",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
  {
    img: jug2,
    title: "Card Title 6",
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.`,
    buttonText: "Go somewhere"
  },
];

function FilterCards() {
  return (
    <CContainer fluid className='my-3'>
      <div className='row'>
        {cardData.map((card, index) => (
          <div className='col-sm-12 col-md-6 col-lg-4 mb-3 mt-4' key={index}>
            <Card>
              <Card.Img variant="top" src={card.img} className="card-img-top-100"/>
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

export default FilterCards;
