# code-wars-challenges

repo about some code wars challenges I plan to solve

## training on the hashtag generator challenge

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

### Examples

    "Hello there thanks for trying my Kata" => #HelloThereThanksForTryingMyKata
    "Hello     World" =>  #HelloWorld
    "" => false

## human readable duration format

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns `now`. Otherwise, the duration is expressed as a combination of `years`, `days`, `hours`, `minutes` and `seconds`.

### It is much easier to understand with an example:

    formatDuration(62)    // returns "1 minute and 2 seconds"
    formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
