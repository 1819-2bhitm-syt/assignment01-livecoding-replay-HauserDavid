/*const data = require("./hallo.js");

console.log(data.name("Hallo "));

//  require("./unterordner/app.js");

require("./unterordner");*/


//Object Literal Syntax

/*const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
}

circle.draw();*/


//Factory Function

/* function createCircle(radius) {
    return{
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();*/


//Konstruktor 1

/*function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const another = new Circle(1);*/


//Konstruktor 2

/*function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const another = new Circle(1);*/


//Constructor Property

//Factory Function

/*function createCircle(radius) {
    return{
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function

function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const another = new Circle(1);*/


//Anzeige der erstellenden Funktion

/*let name = 'Susi';
console.log('name = ', name, name,constructor);

let ok = true;
console.log('ok = ', ok, ok.constructor);

let total = 100;
console.log('total = ', total, total.constructor);*/


//Pass-by-Value, Pass-by-Reference

let hallo = function (str) {
    str = "Hallo + " + str;
};

let welt = "Welt";
hallo(welt);
console.log(welt);

let halloObject = function (obj) {
    //obj.name = "Hallo " + obj.name;
    obj = null;
};

let o = {
    name: "Welt"
};

halloObject(o);

console.log(o);