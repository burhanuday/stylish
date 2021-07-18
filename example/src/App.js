import React from "react";

import stylish from "stylish";
import "stylish/dist/index.css";

const H1 = stylish.h1`
  color: green;
`;

const H1Another = stylish.h1`
  color: green;
`;

const App = () => {
  return (
    <>
      <H1>Hi there</H1>
      <H1Another>Hi there again</H1Another>
    </>
  );
};

export default App;
