export const getMultiplicationTable = (num) => {
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += `${i} x ${num} = ${i * num}\n`;
  }

  return result;
};
