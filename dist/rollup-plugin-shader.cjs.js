'use strict';

function shader(options = {}) {
  return {
    name: 'shader',
    transform(txt, id) {
      return {
        code: txt,
        map: { mappings: '' }
      }
    }
  }
}

module.exports = shader;
//# sourceMappingURL=rollup-plugin-shader.cjs.js.map
