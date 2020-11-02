module.exports = app => {
    function existsOrError(value, msg) {
        if (!value) throw msg;
        if (Array.isArray(value) && value.length === 0) throw msg;
        if (typeof value === 'string' && !value.trim()) throw msg;
    }

    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg)
        } catch (msg) {
            return true
        }
        throw msg;
    }

    function equalsOrError(valueA, valueB, msg) {
        if (valueA !== valueB) throw msg;
    }

    function validateEmail(email,msg) {
        var re = /\S+@\S+\.\S+/;
        if (!re.test(email)) throw msg;
        return true;
    }

    return {
        existsOrError,
        notExistsOrError,
        equalsOrError,
        validateEmail
    }
}