export const mapKeys = (mapper, obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [mapper(key), value]),
  )

export const mapValues = (mapper, obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, mapper(value)]),
  )

export const pick = (props, obj) =>
  Object.fromEntries(props.map((prop) => [prop, obj[prop]]))

export const shallowMergeAll = (objs) => Object.assign({}, ...objs)
