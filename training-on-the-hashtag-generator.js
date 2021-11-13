function hashTagGenerator(str) {
  // if str is an empty string return false
  // define a variable word
  // split and filter and return only the ones that are different than '' empty string
  // map and capitalize each word
  // join and concatenate a # to the start maybe in a new variable
  // check if length longer than 140 characters

  if (str === "" || str === "#") return false;

  let hashtag = str.split(" ").filter((word) => word !== "");

  hashtag = hashtag
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join("");

  hashtag = "#" + hashtag;

  return hashtag.length > 140 || hashtag === "#" ? false : hashtag;
}

// module.exports = hashTagGenerator;
module.exports = hashTagGenerator;
