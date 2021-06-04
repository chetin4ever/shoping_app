import React from "react"
import { Col, Row } from "react-bootstrap"
import Product from "../components/Product"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { listProducts } from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"

const HomeScreen = () => {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loding, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Product</h1>
      {loding ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
export default HomeScreen
