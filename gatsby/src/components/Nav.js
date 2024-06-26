import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const NAVIGATION_LINKS_MAP = [
  { to: "/", text: "Hot Now" },
  { to: "/pizzas", text: "Pizza Menu" },
  { to: "/", text: <Logo /> },
  { to: "/masters", text: "Slice Masters" },
  { to: "/order", text: "Order Ahead" },
];

const NavStyles = styled.nav`
  .logo {
    transform: translateY(-25%);
  }

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }

  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;

    &:nth-child(1) {
      --rotate: 1deg;
    }

    &:nth-child(2) {
      --rotate: -2.5deg;
    }

    &:nth-child(4) {
      --rotate: 2.5deg;
    }

    &:hover {
      --rotate: 3deg;
    }
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;

    &:hover {
      color: var(--red);
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <ul>
        {NAVIGATION_LINKS_MAP.map((link) => (
          <li key={link.text}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </NavStyles>
  );
};

export default Nav;
