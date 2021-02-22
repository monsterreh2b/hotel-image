var today = new Date();
var hourNow = today.getHours();
var greeting;
var body = document.getElementsByTagName("body")[0];

if (hourNow > 18) {
    greeting = 'Good evening!';
    body.style.background =
      "url('https://images.unsplash.com/photo-1604096901583-12bdc5c68ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80') no-repeat center center";
      body.style.backgroundSize = "cover";
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
    body.style.background =
      "url('https://images.unsplash.com/photo-1561409037-c7be81613c1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80') no-repeat center center";
    body.style.backgroundSize = "cover";
} else if (hourNow > 0) {
    greeting = 'Good morning!';
    body.style.background =
      "url('https://images.unsplash.com/photo-1486591038957-19e7c73bdc41?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80') no-repeat center center";
    body.style.backgroundSize = "cover";
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

