const hashTagGenerator = require("./training-on-the-hashtag-generator");

test("returns #HelloThereThanksForTryingMyKata", () => {
  expect(
    hashTagGenerator('"Hello there thanks for trying my Kata"').toBe(
      "#HelloThereThanksForTryingMyKata"
    )
  );
});
