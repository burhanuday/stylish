export const ClassNameCacheFactory = (function () {
  let instance;
  return {
    getInstance: function () {
      if (instance == null) {
        instance = new Map();
      }
      return instance;
    },
  };
})();
