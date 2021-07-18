import React from "react";

import {
  createAndInjectCSSClassName,
  generateUniqueClassname,
  getExistingClassNameIfExists,
  preprocessStyles,
} from "./util/styles.util";

const stylish = (Tag) => (styles) => {
  return function NewComponent({ children, ...props }) {
    const preprocessedStyles = preprocessStyles(styles);

    let className = getExistingClassNameIfExists(preprocessedStyles);

    if (!className) {
      className = generateUniqueClassname(preprocessedStyles);

      createAndInjectCSSClassName(className, preprocessedStyles);
    }

    const combinedClassNames = props.className
      ? [className, props.className].join(" ")
      : className;

    return (
      <Tag className={combinedClassNames} {...props}>
        {children}
      </Tag>
    );
  };
};

export default stylish;
