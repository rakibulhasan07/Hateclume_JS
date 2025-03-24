console.log('hello World from inside!');






//datatype


console.log('wrong!');
var person = 'Rakib';

var some_thing ='anything';
var $name = 'Rakib';

var ame = 'Rakib';

var aNumber ='10';



var text ='I want to say smething'; 
var text2 = "this is exacitly the samw way, but use either one";
var isString = '10'; //is also a string, not a number
console.log(text,text2,isString);

var isString = '10' //is also a string , not anumber
console.log(isString)

// operator done!.\> console 

//10+10 

// <!-- ' condinational Statement' -->*/


//1. if Statement


    if( 3 < 5) {
        console.log('Yeah I will be excecuted!');
    };

    var  myName = 'Rakib';
    if ( myName === 'Rakib') {
        console.log('you are allowed');
    };
    
    

    var  myAge = 20;
    if ( 9 > 10) {
        console.log('Good to go');
    }
    if ( myAge >= 20) {
        console.log('You are adult!');
    }
    if ( myAge < 20) {
        console.log('You are not adult!');
    }



    var my_Age = 22;
    if ( my_Age > 20 && my_Age < 60) {
        console.log('You are a young person');
    };



//2. 'if..else Statement '


var  age = 11;
if ( age > 18) {
    console.log('Now You are Adult');
}   else {
        console.log('No You are not aged enough to be an Adult');
};

/*
3.if...else if Statement
*/

    var whatDay = 'Sunday';
    if ( whatDay === 'Friday') {
        console.log('it is closed today');
    }   else if (whatDay === 'Thursday'){
        console.log('It is partially closed');
    }   else if (whatDay === 'Saturday')    {
        console.log(' Some offices are closed today');
    } else {
        console.log('It is normal working day today')
    }

 /*
 'nonstring condinational Statement:---
 */
    var num = 14;
    if ( num > 1 )   {
        if (num > 16 )   {
            console.log('Greater than 10');
        }   else {
            console.log('Something between 2 - 10 ');
        }
    }
    
    /*
#Switch
*/

    var weekDay = 'Sunday'
    switch(weekDay) {
        case 'Saturday':
            console.log('Saturday! Today is closed');
            break;
        case 'Sunday':
            console.log('Sunday! It is normal day');
            break;
        case 'Monday':
                console.log('Monday! It is normal day');
            break;
        case 'Tuesday':
            console.log('Tuesday! It is normal day');
            break;
        case 'Wednesday':
            console.log('Wednesday! It is normal day');
            break;
        case 'Thursday':
            console.log('Thursday! It is normal day');
            break;
        case 'Friday':
            console.log('Friday! Today is closed');
            break;
        default:
            console.log('Not a Day')
    }

    /*
    # lop:
    1. for Statement
    2. do...while Statement 
    3. while Satement 
    4. break Satement
    5. continue Satement
    */
   
        for (var i = 0; i < 10; i++)    {
            console.log( 'Go ' + i + '  step')
        }


        var num = 15;
        do {
            console.log('inside the loop, num is: ' + num);
            num += 1;
        }   while(num < 10);
        console.log('Outside the loop');


        var num = 10;
        do {
            console.log('inside the loop, num is: ' + num);
            num += 1;
        }   while(num < 20);
        console.log('Outside the loop');


        var num = 20 ;
        while ( num < 10 ) {
            console.log('inside the loop');
            num += 1;
        }
        console.log('Out of the Loop')


        for ( var i = 0 ; i < 10; i++)  {
        if (i === 5) {
            break ;
        }
            console.log('i is now at: ' + 1 );
        }

        for ( var i = 0 ; i < 10; i++)  {
            if (i === 5) {
                console.log(i + 'is skipped');
                continue;
            }
                console.log('i is now at: ' + 1 );
            }


/*
# Array
*/

        var arrName = new Array('Rahim', 'Karim', 'Rafiq', 'Jabbar');
        console.log(arrName, arrName[3] = 'Rakib', arrName.length );



        for (var i = 0; i < arrName.length; i++)    {
            console.log('Name: ' + arrName[i]);
            
        }
        
        
        var newArr = [1,2,3,4,5,6,7,8,9,0];
        var spliceArr = newArr.splice(3)
        console.log(newArr);
        console.log(spliceArr);


// Oject

        let rahim = {
            fullName: 'Rakib Miya',
            age: 21,
            address: 'Dhaka',
            job: 'Job Holder',
            welcomeMsg: function()  {
                console.log('Hello There')
            }

            
        }    
        for (item in rahim) {
            console.log(item)
        }

        var objArr = {
            normal: 'Normal Item',
            name: ['Rahim','Karim', 'Rafiq', 'Shafiq'],
            age: [ 10, 20 , 30, 40, 50]

        }
        objArr.name[2]

        var arrObj = [
            'Rakib',
            {
                name: 'Rafiq',
                age: 21,
                job: 'Student',
            },
            'Bangladesh'
        ]
        
// Functions!


       // function funcName() {
            //statement
        //}
      //  funcName();

        function funcName() {
            console.log('Hellow I am From Function!')
        }
        funcName();


       var funcName = function funcName() {
            console.log('Hellow I am From Function!')
        }
        funcName();


        function aFunc (parameters) {
            // do domething with the parameters
            // return the result
        }
        //aFunc(arguments);

        function sumMachine (a, b) {
           var sum = a + b;
           return sum;
        }
        console.log(sumMachine(2,2));
        console.log(sumMachine(100,2));
        




        function printMyName(name, age) {
            console.log('My name is: ' + name + ' and I am ' + age + ' years old!');

        }
        printMyName('Rakib', 17);

        function callMyName(name, callback) {
            var myAge = 17;
            callback(myAge);
            console.log('Is it interesting ? yes it is Mr.' + name);
        }
        function hello (age) {
            console.log('I am passed through argument and my age is: ' + age);
        }
        callMyName('Rakib', hello);


        function welcomeMsg(name) {
            console.log('Welcome Mr. ' + name );
            return function option(menu) {
                console.log('Do you like ' + menu + 'Mr. ' + name); 
            }
        }
        welcomeMsg('Zonayed Ahmed') ('Coffee ');

        function changeValue (a) {
            console.log('Value of a inside function before changing : ' + a);
            a = 10;
            console.log('Value of a inside function after changing : ' + a);
            return a;
        }
        var a = 100; 
        console.log(' Value of a before changing function is applied : ' + a);
        changeValue(a);
        console.log('Value of after changing function is applied: ' + a);


        function aFunc(a) {
            console.log('Before changing the property: ' + a.one);
            a.one = 'Two',
            console.log('After changing the property: ' + a.one)
        }
        var a = {
            one: 'one'
        }

        aFunc(a)
        

        function aSimpleFunc() {
            console.log('A Simple Function');
        }
        aSimpleFunc();
// Statement & Expressions
        if (10 < 20) {
            console.log('Yeah! It is true')
        } else {
            console.log('No ! It is not true');
        }; 



// DRY Pricipals
        function printAText () {
            console.log(' This post is written by Zonayed Ahmmed');

        }
        // some code
        printAText()

        function addTwoNum (x, y) {
            var sum = x + y;
            console.log('sum of ' + x + ' and ' + y + ' is: ' + sum);
        }
        addTwoNum( 5, 80);

        // more example
        function welcomeMsg1(name) {
            console.log('Welcome Mr. ' + name)
        }
        welcomeMsg1('Rakib');
        welcomeMsg1('Rakib');
        welcomeMsg1('Rakib');
        welcomeMsg1('Rakib');
      

// behind the shin
        var a = 10 ;
        window.a


        first();
        function first () {
            console.log('jello')
        }

        console.log(welcome);
        var welcome = 'Hellow world!';
// Execution Stack example 1

var name = 'Rakib';
function first1() {
     var welcome = 'hello ';
     second() ;
     console.log( welcome + name );

}
function second () {
    var welcome2 = 'hi ! ';
    third();
    console.log( welcome2 + name)
}
function third () {
    var welcome3 = 'hey! ';
    console.log( welcome3 + name)
}
first1();

 // 16. scope
// 1. local 
// 2. global

function localScope () {
    var local = 'I am local to my own function';
    console.log(local);
}
localScope();



//2. Global Scope: 
var globalVar = ' I am global variable';
function globalScope() {
    console.log('Inside a function: ' + globalVar);

}
globalScope();
console.log('Out side : ' + globalVar);


function globalFunc() {
    console.log('global Function');

}
globalFunc();

function addGlobalFunc () {
    console.log('Global Function ');
    function localFunc() {
        console.log('Local function')
    }
    localFunc();
}
addGlobalFunc();

//18. IIFE - Immediately Invoked Function Expressions!
(function aDemoFunc() {
    console.log('Hello World');
}
) ();

let sum = (function()  {
    return 10 + 20;
}) ();

(function aDemoFunc() {
    console.log('Hlw World')
}) ();


let controller1 = ( function() {
    var a = {
        name: 'Rakib',
        uid: 1062
    };
    return a;
}) ();
let interface1 = (function() {
    return 'Hello ' + controller1.name  +  controller1.uid;
    
}) ();

// Automaticaly
function autoVar () {
    Name = 'Rakib';
}
autoVar();

// lexical Scoping:
function parentFunction () {
    // some code here
    function childFunction () {
        // some code here
    }
}

function parentFunction () {
    var a = 6;
    function childFunction () {
       var b = 4;
       console.log(' sum: ' + (a+b));
    }
    childFunction();
}
parentFunction(); 

// 17. Closure
function closuresDemo () {
    var x = 10 ;
    function anotherFunc() {
        var y = 20;
        console.log('sum: ' + (x+ y))
    }
    return anotherFunc;
}
var returnedFunc =closuresDemo();
returnedFunc();

function aParentFunc (a) {
    return function (b) {
        console.log('Sum: ' + (a+b));

    }
}

var aParentVar = aParentFunc(500);

var total = aParentFunc(400);



