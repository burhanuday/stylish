import React from "react";

import stylish from "stylish";
import "stylish/dist/index.css";

const Button = stylish.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
`;

const RedButton = stylish(Button)`
  color: red;
`;

const P = stylish.p``;

const App = () => {
  return (
    <>
      <Button>Hi there</Button>
      <RedButton>Hi there</RedButton>
      <P>Some text without styles</P>
    </>
  );
};

export default App;
