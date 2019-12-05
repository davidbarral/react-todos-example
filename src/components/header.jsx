import React from "react";
import Title from "./title";
import Counters from "./counters";

const Header = ({ counters }) => (
  <header>
    <Title text="My Todos" />
    <Counters counters={counters} />
  </header>
);

export default Header;
