import R from 'ramda'
const curry = R.curry

const Maybe = function(x) {
    this.__value = x
}

Maybe.of = function(x) {
    return new Maybe(x)
}
Maybe.prototype.isNothing = function() {
    return (this.__value === null || this.__value === undefined)
}

Maybe.prototype.is = function(x) {
    return this.__value === x
}

Maybe.prototype.map = function(f) {
    return this.isNothing()? Maybe.of(null) : Maybe.of(f(this.__value))
}

export const map = curry(function(f, any_functor_at_all) {
  return any_functor_at_all.map(f);
});

export default Maybe

