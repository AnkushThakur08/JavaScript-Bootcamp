function a() {
  var a = 7;

  /* return  */ function b() {
    console.log(a);
  }

  a = 1000;
  return b;
}

var z = a();

console.log(z);

// Thousands line of code
z();
