function add(numbers) {
  if (!numbers) return 0;

  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
