import React from "react";
import { Button, Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to proshop</h1>
          <Button variant="warning"> test</Button>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
