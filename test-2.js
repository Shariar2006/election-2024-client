function outPut(number) {
  return number / 2 !== 0;
}

function number() {
  for (let i = 1; i <= 50;  i = i + 2) {
    if (outPut(i)) {
      console.log(i);
    }
  }
}

number();