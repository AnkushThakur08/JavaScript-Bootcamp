// TODO: SCOPE CHAIN OR LEXCIAL SCOPING
// Lexical scoping is the local space and refr to the lexical environment to the parent
// Local Space => func a, Lexical scope of a is Global
function a() {
  c();
  function c() {
    console.log(b);
  }
}

a();
var b = 10;

console.log(b);
