import { compile, serialize, stringify } from "stylis";
import { nanoid } from "nanoid";
import { ClassNameCacheFactory } from "./cache.util";

export const preprocessStyles = (styles) =>
  serialize(compile(styles), stringify);

export const createAndInjectCSSClassName = (className, styles) => {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    `
        .${className} {
          ${styles}
        }
      `,
  );
};

export const getExistingClassNameIfExists = (styles) => {
  const classNameCache = ClassNameCacheFactory.getInstance();
  return classNameCache.get(styles);
};

export const generateUniqueClassname = (styles) => {
  const classNameCache = ClassNameCacheFactory.getInstance();
  const uniqueId = nanoid(10);
  classNameCache.set(styles, uniqueId);
  return uniqueId;
};
