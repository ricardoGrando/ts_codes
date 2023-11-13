function fibonacci(n) {
    var sequence = [];
    if (n < 1) {
        return sequence;
    }
    sequence.push(0);
    if (n === 1) {
        return sequence;
    }
    sequence.push(1);
    for (var i = 2; i < n; i++) {
        var nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }
    return sequence;
}
// Example usage to generate the first 10 Fibonacci numbers
var numTerms = 10;
var fibSequence = fibonacci(numTerms);
console.log(fibSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
