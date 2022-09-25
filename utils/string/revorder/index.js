String.prototype.revorder = function (...params) {
  if (typeof params[0] === "string") {
    return this.split(params[0])
      .reverse()
      .join(params[1] || "");
  } else {
    throw "Expected at least one argument for splitting symbol, but got undefined.";
  }
};