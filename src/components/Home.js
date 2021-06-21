import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        rightButton = "Existing Inventory"
        model="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
      />
      <Section
        model="Model 3"
        rightButton = "Existing Inventory"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
      />
      <Section
        description="Order Online for Touchless Delivery"
        model="Model X"
        rightButton = "Existing Inventory"
        backgroundImage="model-x.jpg"
      />
      <Section
        description="Order Online for Touchless Delivery"
        model="Model Y"
        rightButton = "Existing Inventory"
        backgroundImage="model-y.jpg"
      />
      <Section
        model="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        rightButton = "Existing Inventory"
        description="Money back gaurantee"
      />
      <Section
        model="Solar for New Roofs"
        description="Solar Roof costs Less Than a New Roof Plus Solar Panels"
        rightButton = "Existing Inventory"
        backgroundImage="solar-roof.jpg"
      />
      <Section
        model="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        rightButton = ""
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
