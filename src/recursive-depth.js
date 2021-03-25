module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;

    if (Array.isArray(arr)) {
      arr.forEach(el => {
        depth = Math.max(depth, this.calculateDepth(el));
      })
      depth++;
    }
    return depth;
  }
};
