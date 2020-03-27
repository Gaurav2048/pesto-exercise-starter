function privateProps(obj, isPrivate) {

  const handler = {
    get(target, property) {
      const value = target[property]
      if (typeof value === 'function' || typeof value === 'object') {
        return new Proxy(target[property], handler)
      }
      if (isPrivate(property)) return false
      return value
    },
    set(target, property, value) {
      if (isPrivate(property)) {
        throw new TypeError("Can't set property _private")
      } else {
        target[property] = value
        return true
      }
    },
    apply(target, thisArgs, argList) {
      return target.call([thisArgs, ...argList])
    },
    has(target, property) {
      return !isPrivate(property)
    },
    ownKeys(target) {
      return Object.keys(target).filter(key => !isPrivate(key))
    }


  }
  return new Proxy(obj, handler)

}


export {privateProps}