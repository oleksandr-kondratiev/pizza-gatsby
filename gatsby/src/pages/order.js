import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import useForm from "../utils/useForm";
import usePizza from "../utils/usePizza";
import styled from "styled-components";
import Img from "gatsby-image";
import formatMoney from "../utils/formatMoney";
import calculatePizzaPrice from "../utils/calculatePizzaPrice";
import PizzaOrder, { MenuItemStyles } from "../components/PizzaOrder";
import calculateOrderTotal from "../utils/calculateOrderTotal";

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  fieldset {
    display: grid;
    gap: 1rem;
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;

    label {
      display: grid;
      gap: 1rem;
      align-content: start;
    }

    label + label {
      margin-top: 1rem;
    }

    &.order,
    &.menu {
      grid-column: span 1;
      height: 600px;
    }
  }

  .mapleSyrup {
    display: none;
  }

  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;

const OrdersPage = ({ data }) => {
  const { values, updateValue } = useForm({
    name: "",
    email: "",
    mapleSyrup: "",
  });

  const {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  } = usePizza({
    pizzas: data.pizzas.nodes,
    values,
  });

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <>
      <SEO title="Order a pizza" description="Order your pizza" />
      <OrderStyles onSubmit={submitOrder}>
        <fieldset disabled={loading}>
          <legend>Your Info</legend>
          <label htmlFor="name">
            Name
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValue}
            />
          </label>
          <input
            type="mapleSyrup"
            name="mapleSyrup"
            id="mapleSyrup"
            value={values.mapleSyrup}
            onChange={updateValue}
            className="mapleSyrup"
          />
        </fieldset>
        <fieldset disabled={loading} className="menu">
          <legend>Menu</legend>
          {data.pizzas.nodes.map((pizza) => (
            <MenuItemStyles key={pizza.id}>
              <Img
                width="50"
                height="50"
                fluid={pizza.image.asset.fluid}
                alt={pizza.name}
              />
              <div>
                <h2>{pizza.name}</h2>
              </div>
              <div>
                {["S", "M", "L"].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() =>
                      addToOrder({
                        id: pizza.id,
                        size,
                      })
                    }
                  >
                    {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
                  </button>
                ))}
              </div>
            </MenuItemStyles>
          ))}
        </fieldset>
        <fieldset disabled={loading} className="order">
          <legend>Order</legend>
          <PizzaOrder
            order={order}
            removeFromOrder={removeFromOrder}
            pizzas={data.pizzas.nodes}
          />
        </fieldset>
        <fieldset disabled={loading}>
          <h3>
            Your Total is{" "}
            {formatMoney(calculateOrderTotal(order, data.pizzas.nodes))}
          </h3>
          <div aria-live="polite" aria-atomic="true">
            {error ? <p>Error: {error}</p> : ""}
          </div>
          <button type="submit" disabled={loading}>
            <span aria-live="assertive" aria-atomic="true">
              {loading ? "Placing Order..." : ""}
            </span>
            {loading ? "" : "Order Ahead"}
          </button>
        </fieldset>
      </OrderStyles>
    </>
  );
};

export default OrdersPage;

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
