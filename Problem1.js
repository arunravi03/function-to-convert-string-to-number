//1. Write a function to convert a input to a number

/**
 * Algorithm
 *
 * Step1 - Create a function with an input
 * Step2 - Then convert a input to number
 * Step3 - Check whether the input is falsey value (0, null, undefined, false)
 * Step3.1- If the input is falsey and NaN return 0
 */

function myFunction(input) {
  const parsed = parseInt(input);
  if (isNaN(parsed) || parsed === false) {
    return 0;
  }
  return parsed;
}
console.log(myFunction("absvcjasvjav"));

//-----------------------------------------
