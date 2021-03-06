import { Footer } from "./components/Footer"
import Header from "./components/Header"
import { Container } from "react-bootstrap"
import HomeScreen from "./screens/HomeScreen"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
