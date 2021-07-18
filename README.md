# Stylish 💅

A lightweight css-in-js library for react with the same API as styled-components

[![NPM](https://img.shields.io/npm/v/stylish.svg)](https://www.npmjs.com/package/stylish) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save stylish
```

## Usage

```jsx
import React, { Component } from "react";

import stylish from "stylish";

const H1 = stylish("h1")(
  `
  color: green;
  `,
);

const App = () => {
  return <H1>Hi there</H1>;
};
```

## License

MIT © [burhanuday](https://github.com/burhanuday)
