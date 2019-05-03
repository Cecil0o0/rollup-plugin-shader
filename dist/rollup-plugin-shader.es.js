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

export default shader;
//# sourceMappingURL=rollup-plugin-shader.es.js.map
