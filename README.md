# Anagram

Write a program that, given a word and a list of possible anagrams, selects the correct sublist.

Given `"listen"` and a list of candidates like `"enlists" "google"
"inlets" "banana"` the program should return a list containing
`"inlets"`.

## Making the Test Suite Pass

Execute the tests with:

```bash
$ jasmine-node anagram_test.spec.js
```

All but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.
