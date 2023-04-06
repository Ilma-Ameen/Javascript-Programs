//JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

let num_1 = +prompt("Enter number one:");
let num_2 = +prompt("Enter number two:");
console.log("Number one is : " + num_1);
console.log("Number two is : " + num_2);
if(num_1>num_2)
{
    console.log("The larger number is : " +num_1)
}
else
{
    console.log("The larger number is : " +num_2)
}


//JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

var num = prompt("Enter a number:");
if (num > 0) 
{
  alert("The sign is +");
} 
else if (num < 0) 
{
  alert("The sign is -");
}
else
{
  alert("The number is 0");
}


//JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

let num1 = +prompt("Enter number one:");
let num2 = +prompt("Enter number two:");
let num3 = +prompt("Enter number three:");
let num4 = +prompt("Enter number four:");
let num5 = +prompt("Enter number five:");

console.log("Number 1 : " + num1 + " ,Number 2 : " + num2 + " ,Number 3 : " + num3 + " ,Number 4 : " + num4 + " ,Number 5 : " + num5);

if(num1>num2 && num1>num3 && num1>num4 && num1>num5)
{
    console.log("The larger number is : " +num1);
}
else if(num2>num1 && num2>num3 && num2>num4 && num2>num5)
{
    console.log("The larger number is : " +num2)
}
else if(num3>num1 && num3>num2 && num3>num4 && num3>num5)
{
    console.log("The larger number is : " +num3)
}
else if(num4>num1 && num4>num2 && num4>num3 && num4>num5)
{
    console.log("The larger number is : " +num4)
}
else
{
    console.log("The larger number is : " +num5)
}

//JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for(let i = 0; i <= 15; i++)
{
    if(i % 2 === 0)
    {
        console.log(i +" is even");
    }
    else
    {
        console.log(i +" is odd");
    }
}

//JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

let student_marks = +prompt("Enter Your Average Marks :");
console.log("Average Marks of Student is :" +student_marks);
if(student_marks < 60)
{
    console.log("Grade is : F")
}
else if(student_marks < 70)
{
    console.log("Grade is : D")
}
else if(student_marks < 80)
{
    console.log("Grade is : C")
}
else if(student_marks < 90)
{
    console.log("Grade is : B")
}
else if(student_marks < 100)
{
    console.log("Grade is : A")
}
else
{
    console.log("You are Fail!")
}


//JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".


for(let i = 1; i<=100; i++)
{
    if(i % 3 === 0)
    {
        console.log("Fizz");
    }
    else if(i % 5 ===0)
    {
        console.log("Buzz")
    }
    else if(i % 3 === 0 && i % 5 === 0 )
    {
        console.log(FizzBuzz);
    }
    else{
        console.log(i);
    }
}

//JavaScript program to construct the following pattern, using a nested for loop.

/**
  * *
  * * *
  * * * *
  * * * * * */ 

for (var i = 1; i <= 5; i++) 
{
    let pattern = '';
    for (var j = 1; j <= i; j++) 
    {
         pattern += '* ';
    }
    console.log(pattern);
}



