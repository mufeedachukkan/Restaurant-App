import React from "react";
// import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Restaurant from "../Restaurant/Restaurant";
import { listRestaurants } from "../../actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const datas = useSelector(state => state.restaurantList);
  const hotel  = datas.restaurant;
  // const [hotel, setHotels] = useState([]);
  // const testData = async () => {
  //   await axios("res.json").then((res) => setHotels(res.data.restaurants));
  // };
  useEffect(() => {
    // testData();
    dispatch(listRestaurants());
  }, []);
  // console.log("hotel", hotel);

  return (
    <Row>
      {hotel
        ? hotel.map((item) => (
            <Col sm={12} md={8} lg={6} xl={3}>
              <Restaurant item={item}></Restaurant>
            </Col>
          ))
        : null}
    </Row>
  );
};

export default Home;
