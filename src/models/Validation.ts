
class Validation {
  static existsOrError (value, msg) {
    if (!value) throw msg
    if (Array.isArray(value) && value.length === 0) throw msg
    if (typeof value === 'string' && !value.trim()) throw msg
  }

  static notExistsOrError (value, msg) {
    // eslint-disable-next-line no-useless-catch
    try {
      this.existsOrError(value, msg)
    } catch (msg) {
      throw msg
    }
    return true
  }

  static equalsOrError (valueA, valueB, msg) {
    if (valueA !== valueB) throw msg
  }

  static validateEmail (email, msg) {
    var re = /\S+@\S+\.\S+/
    if (!re.test(email)) throw msg
    return true
  }
}

export default Validation
