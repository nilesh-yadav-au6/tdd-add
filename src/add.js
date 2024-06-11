function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const numbersArray = numbers.split(delimiter).map(Number);
  const negativesNumbers = numbersArray.filter((num) => num < 0);

  if (negativesNumbers.length > 0) {
    throw new Error(
      `negative numbers are not allowed: ${negativesNumbers.join(",")}`
    );
  }

  return numbersArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
