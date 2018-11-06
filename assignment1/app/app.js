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

/*let hallo = function (str) {
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

console.log(o);*/


//Value Type

/*let x = 10;
let y = x;

x = 20;

console.log("x =", x);
console.log("y = ", y);*/


//Reference Type

/*let x = {value: 10};
let y = x;

x.value = 20;

console.log("x =", x);
console.log("y =", y);*/


//Value Type


/*let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number);*/


//Reference Type

/*let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);*/


//Zusammenfassung 1

//Object Literal
/*const circle = {
    radius: 1,
    draw: function (){}
};

//Factory function
function createCircle(radius) {
    return{
        radius,
        draw: function () {}
    };

//Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {}
}*/


//Zusammenfassung 2

/*const x = {};
x.constructor;

Circle.name;
Circle.length;
Circle.constructor;
Circle.call({}, 1);
Circle.apply({}, [1]);

circle.location = {};
circle['location'] = {};

delete circle.location;*/


//Zusammenfassung 3

/*for(let key in circle) console.log(key, circle[key]);

Object.keys(circle);

if('location' in circle)

    function Circle(radius) {
        this.radius = radius;

        let defaultLocation = {};
    }

Object.defineProperty(this, 'defaultLocation',{
    get: function () {return defaultLocation;},
    set: function (value) {defaultLocation = value;}
});*/