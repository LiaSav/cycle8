let n = prompt("Hi, friend! \nEnter a number N, greater than 0.");
if (n) {
  alert(
    "The function returns the following amount: 1 + 1.5 + 2 + 2.5 + ... + N\n\n" +
      cycle(n)
  );
} else {
  alert("You didn`t enter number N");
}
function cycle(n) {
  let x = 0;
  for (let i = 1; i <= n; i += 0.5) {
    x += i;
  }
  return x;
}