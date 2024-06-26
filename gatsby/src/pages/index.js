import React from "react";
import styled from "styled-components";
import ItemGrid from "../components/ItemGrid";
import useLatestData from "../utils/useLatestData";
import LoadingGrid from "../components/LoadingGrid";

const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
  }
`;

const Masters = ({ masters }) => {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Masters On</span>
      </h2>
      <p>Standing by, ready to slice you up!</p>
      {!masters && <LoadingGrid count={4} />}
      {masters && !masters?.length && <p>No one is working right now!</p>}
      {masters?.length && <ItemGrid items={masters} />}
    </div>
  );
};

const Pizzas = ({ pizzas }) => {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Pizzas!</span>
      </h2>
      <p>Come on by, buy the slice!</p>
      {!pizzas && <LoadingGrid count={4} />}
      {pizzas && !pizzas?.length && <p>Nothing in the Case</p>}
      {pizzas?.length && <ItemGrid items={pizzas} />}
    </div>
  );
};

const HomePage = () => {
  const { masters, pizzas } = useLatestData();

  return (
    <div className="center">
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <Masters masters={masters} />
        <Pizzas pizzas={pizzas} />
      </HomePageGrid>
    </div>
  );
};

export default HomePage;
