export const log = (module, message) =>
  process.env.NODE_ENV === "development"
    ? console.log(`[${module}]: ${message.toString()}`)
    : null;
