// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(bimbo) {
  cats.push(bimbo);
}

function destructivelyPrependCat(bimbo) {
  cats.unshift(bimbo);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(bimbo) {
  const newCats = cats.slice();
  newCats.push(bimbo);
  return newCats;
}

function prependCat(bimbo) {
  const newCats = cats.slice();
  newCats.unshift(bimbo);
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice();
  newCats.pop();
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice();
  newCats.shift();
  return newCats;
}

