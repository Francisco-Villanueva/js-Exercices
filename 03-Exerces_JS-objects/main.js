//--------------------------------------------------------------------------
/* EXERCICE 1 ==> CallBack function

 Make a function which is given a callback (cb) as a parameter.
It must return a function with 2 parameters "a" and "b" which calls and
returns the value of cb passing a and b as arguments
*/
function callBack(cb) {}

//--------------------------------------------------------------------------
/* EXERCICE 2 ==> Deposit Profit

You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

Example

For deposit = 100, rate = 20, and threshold = 170, the output should be
solution(deposit, rate, threshold) = 3.

Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:

year 0: 100;
year 1: 120;
year 2: 144;
year 3: 172.8.
Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.
*/
function depositProfit(deposit, rate, threshold) {
  // your code here
}
//--------------------------------------------------------------------------
/* EXERCICE 3 ==> Find th max depending the param
Given an array of students with the following format:

  alumnos = [
    {nombre:'Juan',
    edad:23,
    promedio: 9.7,
    materias: 3
    },
    {nombre:'Martin',
    edad:22,
    promedio: 9.5,
      materias: 6
    },
    {nombre:'Raul',
    edad:29,
    promedio: 8.7,
    materias: 2
    },
  ]

Return the name of the student that has, according to the argument "arg", 
the highest result

---- EXAMPLE : 
findTheMax(alumno, 'promedio') ===> 'Juan'
findTheMax(alumno, 'edad') ===> 'Raul'
*/

function findTheMax(alumnos, arg) {
  // your code here
}
module.exports = {
  callBack,
  depositProfit,
  findTheMax,
};
