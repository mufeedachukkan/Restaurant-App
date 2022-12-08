import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Restaurant = ({ item }) => {
  
    return (
    <Link style={{textDecoration :'none'}} to={`${item.id}`}>
        <Card className="my-3 p-3 rounded" style={{  height: "500px" }}>
          <Card.Img
            // variant="top"
            src={item.photograph1}
            style={{ height: "355px" }}
            className="p-3"
          />
          <Card.Body>
            <Card.Title><h4>{item.name}</h4></Card.Title>
            <Card.Text><p>{item.cuisine_type}</p></Card.Text>
            <Card.Text><p>Location : {item.neighborhood}</p></Card.Text>
          </Card.Body>
        </Card>
    </Link>
  );
};

export default Restaurant;
