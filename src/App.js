import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantDetails from "./Components/Details/RestaurantDetails.jsx";
import Review from "./Components/Review/Review.jsx";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Router>
      <Header></Header>
      <Container>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route
            path="/:id"
            element={<RestaurantDetails></RestaurantDetails>}
          ></Route>
          <Route path="/review" element={<Review></Review>}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
