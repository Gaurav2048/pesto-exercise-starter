const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  return bankBalances.filter((info) => {
    return info.amount > 100000
  })
}

function datasetWithRoundedDollar() {
  var array = []
  bankBalances.forEach((item) => {
    item.rounded = Math.round(item.amount)
    array.push(item)
  })
  return array
}

function sumOfBankBalances() {
  var sum = bankBalances.reduce((val,item) => parseFloat(item.amount)+val, 0);
  return parseFloat(sum.toFixed(2))
}

function sumOfInterests() { 
  
}

function higherStateSums() { }

//console.log(hundredThousandairs().length);
//console.log(datasetWithRoundedDollar());
console.log(sumOfBankBalances());


export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
