import React from "react";

const Counters = ({ counters: { pending, done } }) => (
  <div>
    Pending: {pending} Done: {done}
  </div>
);

export default Counters;
