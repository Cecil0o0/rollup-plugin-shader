export default function shader(options = {}) {
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
