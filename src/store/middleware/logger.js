const logger = (param) => (store) => (next) => (action) => {
  console.log("logging:", param);
};

export default logger;
