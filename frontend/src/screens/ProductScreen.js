import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import rating from "../components/Rating"
import { useDispatch, useSelector } from "react-redux"

import { Row, Col, ListGroup, Card, Button, Image } from "react-bootstrap"
import Rating from "../components/Rating"
import { listProductsDetials } from "../actions/productActions"
import Message from "../components/Message"
import Loader from "../components/Loader"

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProductsDetials(match.params.id))
  }, [match, dispatch])
  const productDetails = useSelector((state) => state.productDetails)
  console.log(productDetails)
  const { loading, error, product } = productDetails
  return (
    <>
      <Link to='/' className='my-3 btn btn-light'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            {/* {product.image} */}
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item variant='flush'>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} rating`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price:${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description:${product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={!product.countInStock}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
