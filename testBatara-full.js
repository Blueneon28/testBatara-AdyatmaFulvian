// Buatlah sebuah fungsi untuk mencari nilai faktorial.
// Contoh :
// Input: 4
// Output: 24

// Input: 8
// Output: 40320

factorial = (n) => {
  let int = 1;
  let factor = 1;
  while (int <= n) {
    factor = factor * int;
    int = int + 1;
  }
  console.log(`Nilai Faktorial dari ${n} adalah ${factor}.`);
};

factorial(8);

// Buatlah sebuah fungsi untuk memasukan dash “-” di antara angka genap

// 	Contoh : input = 553847
// 			   Output = 5538-47
// 	Contoh : input 2468
//             Output = 2-4-6-8

insertDash = (n) => {
  let convertStr = String(n);
  let strArr = convertStr.split("");
  let numArr = strArr.map(Number);
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i - 1] % 2 === 0 && numArr[i] % 2 === 0) {
      numArr.splice(i, 0, "-");
    }
  }
  return numArr.join("");
};

console.log(insertDash(2468));

// Buatlah sebuah fungsi untuk memvalidasi braces “{” “}” “(” “)” “[” “]”

// 	Contoh : isTrue(“([()])”) = True
// 			   isTrue(“{{))”) = False
// 			   isTrue(“({[]))”) = False

checkBrackets = (str) => {
  let x = 0;
  for (let i in str) {
    if (str[i] == "(") {
      x++;
    } else if (str[i] == ")") {
      x--;
    }
    if (x < 0) return false;
  }
  if (x > 0) return false;
  return true;
};

console.log(checkBrackets("([()])"));
console.log(checkBrackets("{{))"));
console.log(checkBrackets("({[]))"));
