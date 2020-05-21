export const mapKeys = (mapper, obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[mapper(key)] = obj[key]
    return acc
  }, {})

export const mapValues = (mapper, obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key] = mapper(obj[key])
    return acc
  }, {})

export const pick = (props, obj) =>
  props.reduce((acc, prop) => {
    acc[prop] = obj[prop]
    return acc
  }, {})

export const shallowMergeAll = objs => Object.assign({}, ...objs)
