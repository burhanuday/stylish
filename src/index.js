import React from "react";
import domElementsUtil from "./util/domElements.util";

import {
  createAndInjectCSSClassName,
  generateUniqueClassname,
  getExistingClassNameIfExists,
  preprocessStyles,
} from "./util/styles.util";

const stylish = (Tag) => (styles) => {
  return function NewComponent({ children, ...props }) {
    const preprocessedStyles = preprocessStyles(styles[0]);

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

const enhancedStylish = {};

domElementsUtil.forEach((domElement) => {
  enhancedStylish[domElement] = stylish(domElement);
});

export default enhancedStylish;
