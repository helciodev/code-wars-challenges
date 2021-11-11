const hashTagGenerator = require("./training-on-the-hashtag-generator");

test("returns #HelloThereThanksForTryingMyKata", () => {
  expect(hashTagGenerator("Hello there thanks for trying my Kata")).toBe(
    "#HelloThereThanksForTryingMyKata"
  );
});

test("returns #HelloWorld", () => {
  expect(hashTagGenerator("Hello     World")).toBe("#HelloWorld");
});

test("return false", () => {
  expect(hashTagGenerator("")).toBe(false);
});

test("return false if character count bigger than 140", () => {
  expect(
    hashTagGenerator(
      "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
    )
  ).toBe(false);
});
test("return #CodewarsIsNice", () => {
  expect(hashTagGenerator("Codewars is nice")).toBe("#CodewarsIsNice");
});
test("returns false is str equals(#)", () => {
  expect(hashTagGenerator("#")).toBe(false);
});
