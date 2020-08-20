import React from "react";
import "./App.css";
import MultiStepForm from "./components/MultiStepForm";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container textAlign="center" className="card">
      <MultiStepForm />
    </Container>
  );
};

export default App;
