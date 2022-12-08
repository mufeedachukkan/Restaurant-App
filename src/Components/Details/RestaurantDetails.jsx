// import axios from "axios";
import React from "react";
// import { useState, useEffect } from "react";
import {
  Card,
  Col,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Review from "../Review/Review";
import { useSelector } from "react-redux";

function RestaurantDetails() {
  const datas = useSelector((state) => state.restaurantList);
  const data = datas.restaurant;
  // const [data, setData] = useState([]);
  const params = useParams();
  // const fetchData = async () => {
  //   await axios.get("res.json").then((res) => setData(res.data.restaurants));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const param = parseInt(params.id);
  const details = data.find((i) => i.id === param);
  return (
    <>
      {details ? (
        <div>
          <Row className="my-3">
            <Col md={3}>
              <Image
                className="img pt-4 fluid"
                src={details.photograph1}
                alt={details.name}
              ></Image>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h2>{details.name}</h2>
                  <p>{details.neighborhood}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>cuisine : {details.cuisine_type}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Address : {details.address}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h4>Operating Hours : </h4>
                  <p>Monday:{details.operating_hours.Monday}</p>
                  <p>Tuesday:{details.operating_hours.Tuesday}</p>
                  <p>Wednesday:{details.operating_hours.Wednesday}</p>
                  <p>Thursday:{details.operating_hours.Thursday}</p>
                  <p>Friday:{details.operating_hours.Friday}</p>
                  <p>Saturday:{details.operating_hours.Saturday}</p>
                  <p>Sunday:{details.operating_hours.Sunday}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Card className="my-3 mx-3 p-3 rounded">
              <Review data={details.reviews}></Review>
            </Card>
          </Row>
        </div>
      ) : (
        "null"
      )}
      <Link className="btn btn-outline-dark rounded my-2 btn-sm" to="/">
        Back
      </Link>
    </>
  );
}

export default RestaurantDetails;
