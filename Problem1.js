function myFunction(input) {
  const parsed = parseInt(input);
  if (isNaN(parsed) || parsed === false) {
    return 0;
  }
  return parsed;
}
console.log(myFunction("absvcjasvjav"));

//-----------------------------------------
