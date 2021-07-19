import { compile, serialize, stringify } from "stylis";
import { customAlphabet } from "nanoid";
import { ClassNameCacheFactory } from "./cache.util";
import { log } from "./log.util";

const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const nanoid = customAlphabet(alphabet, 10);

export const preprocessStyles = (styles) =>
  serialize(compile(styles), stringify);

export const createAndInjectCSSClassName = (className, styles) => {
  log("css injection", [className, styles]);
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    `
        .${className} {
          ${styles}
        }
      `,
  );
  const classNameCache = ClassNameCacheFactory.getInstance();
  classNameCache.set(styles, className);
};

export const getExistingClassNameIfExists = (styles) => {
  const classNameCache = ClassNameCacheFactory.getInstance();
  return classNameCache.get(styles);
};

export const generateUniqueClassname = (styles) => {
  const uniqueId = nanoid(10);
  return uniqueId;
};
