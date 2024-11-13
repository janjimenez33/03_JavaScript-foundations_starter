/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

//1.
// This will print "moo" to the console because the logical (&&) operator evaluates the second operand if the first operand is true.

//2.
// This will not print anything because the logical (&&) operator short-circuits and does not evaluate the second operand if the first operand is false.

//3.
// This will not print anything because the logical (||) operator short-circuits and does not evaluate the second operand if the first operand is true.

//4.
// This will print "bye friend" to the console because the logical (||) operator evaluates the second operand if the first operand is false.