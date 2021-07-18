import React from "react";
import { nanoid } from "nanoid";
import { compile, serialize, stringify } from "stylis";

const classNameCache = new Map();

const createAndInjectCSSClassName = (className, styles) => {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    `
      .${className} {
        ${styles}
      }
    `,
  );
};

const getExistingClassNameIfExists = (styles) => classNameCache.get(styles);

const preprocessStyles = (styles) => serialize(compile(styles), stringify);

const generateUniqueClassname = (styles) => {
  const uniqueId = nanoid(10);
  classNameCache.set(styles, uniqueId);
  return uniqueId;
};

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
