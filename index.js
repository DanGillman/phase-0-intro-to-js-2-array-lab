const cats = [
    "Milo",
    "Otis",
    "Garfield"
  ];
function destructivelyAppendCat(Garfield) {
    cats.push("Ralph");
    }
function destructivelyPrependCat(Milo) {
    cats.unshift("Bob");
    }
function destructivelyRemoveLastCat(Milo) {
    cats.pop(Milo);
    }
function destructivelyRemoveFirstCat(Garfield) {
    cats.shift("Garfield");
    }
function appendCat(Broom) {
    return cats.concat("Broom");
    }
      
    const newCats = appendCat(cats, "Broom");
function prependCat(Arnold) {
        return [Arnold, ...cats];
      }
function removeLastCat() {
        return cats.slice(0, -1);
      }      
function removeFirstCat() {
        return cats.slice(1);
      }