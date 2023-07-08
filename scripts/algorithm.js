const uniqueSymbol = (inputText) => {
  const uniqueSymbols = [];
  const arrayOfWords = inputText.split(" ");

  const findUnique = (array) => {
    return array.filter(
      (letter) => array.indexOf(letter) === array.lastIndexOf(letter)
    )[0];
  };

  for (let i = 0; i < arrayOfWords.length; i++) {
    const arrayOfSymbols = arrayOfWords[i].split("");

    const uniqueWordSymbol = findUnique(arrayOfSymbols);
    uniqueSymbols.push(uniqueWordSymbol);
  }

  return findUnique(uniqueSymbols);
};
