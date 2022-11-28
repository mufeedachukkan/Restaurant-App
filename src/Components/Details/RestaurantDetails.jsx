import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react'
import { Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function RestaurantDetails() {
    const [data,setData]=useState([])
    const params=useParams()
    const fetchData=async()=>{
        await axios.get('res.json').then( res => setData(res.data.restaurants))
    }
    useEffect(() => {
      fetchData()
    }, []);
    const param=parseInt(params.id)
    const details=data.find((i)=>i.id === param)
  return (
    <>
    {
        details?(
            <Row>
                <Col md={3}> 
                    <Image className='img pt-4'src={details.photograph1} alt={details.name} style={{height:'500px',width:'500px'}} fluid></Image>
                </Col>
                <Col md={4}>
                    <ListGroup>
                    <ListGroupItem>
                        <h2>{details.name}</h2>
                        <p>{details.description}</p>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h2>{details.address}</h2>
                        <p>cuisine_type:{details.cuisine_type}</p>
                    </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                        <ListGroupItem>
                            <h4>Operating Hours</h4>
                            <p>Monday:{details.operating_hours.Monday}</p>
                            <p>Tuesday:{details.operating_hours.Tuesday}</p>
                            <p>Wednesday:{details.operating_hours.Wednesday}</p>
                            <p>Thursday:{details.operating_hours.Thursday}</p>
                            <p>Friday:{details.operating_hours.Friday}</p>
                            <p>Saturday:{details.operating_hours.Saturday}</p>
                            <p>Sunday:{details.operating_hours.Sunday}</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        ):'null'
    }
    </>
  );
}

export default RestaurantDetails;
