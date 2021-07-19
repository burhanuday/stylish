import React from "react";
import domElementsUtil from "./util/domElements.util";

import {
  createAndInjectCSSClassName,
  generateUniqueClassname,
  getExistingClassNameIfExists,
  preprocessStyles,
} from "./util/styles.util";

const stylish = (Tag) => (styles) => {
  const NewComponent = ({ children, ...props }) => {
    if (!styles[0]) {
      return <Tag className={props.className || ""}>{children}</Tag>;
    }

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
  // NewComponent.displayName = Tag.displayName;
  return NewComponent;
};

domElementsUtil.forEach((domElement) => {
  stylish[domElement] = stylish(domElement);
});

export default stylish;
