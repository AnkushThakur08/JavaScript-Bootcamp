/* There is a global object in JS which executes a lot of things 
JS has a Bigger Context where everything resides (In this case it is window)
Global context in not available in the Node
GLobal Context Differs a little bit when you executes the code NODE
In Node we don't call be WINDOW, BUT THERE ALWAYS BE A GLOBAL CONTEXT
*/
sayHello();

function sayHello() {
  console.log("Hello");
}

var myName = "Ankush";
if (myName === window.myName) {
  console.log("This is a true statement");
}
