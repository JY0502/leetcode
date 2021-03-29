// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Your code here.`
  if (str1.length < str2.length) {
    const temp = str1;
    str1 = str2;
    str2 = temp;
  }
  //find longest alphbet order in first string and second string

}


// horse => osed
// output : 3

// remove h
// remove r
// add d

// {h: 0, o: 1, r: 2, s: 3, e: 4}

// {r: 0, o: 1, s: 2, e: 3}

// horse
// reo

// remove h
// remove o
// replace s -> e
// replace e -> o

// output : 2


// int e n tion -> ex e cu tion
// 3 e 1 t i o n -> 2 e 2 t i o n
// 3 -> 2      1 + 2 = 3
// 1 -> 2      1 + 1 = 2
