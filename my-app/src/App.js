import React, { useState } from 'react';

const student_name = "Mingtianfang_Li";

function findBiggestNumber(map) {
  let biggestNumber = undefined;

  for (let row of map) {
    for (let value of row) {
      if (typeof value === 'number') {
        if (biggestNumber === undefined || value > biggestNumber) {
          biggestNumber = value;
        }
      }
    }
  }

  return biggestNumber;
}

function balancedString(str) {
  let map = {};

  for (let char of str) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  let counts = Object.values(map);
  return counts.every(count => count === counts[0]);
}

function additivePersistence(num) {
  let res = 0;

  while (num >= 10) {
    let sum = 0;
    for (let digit of num.toString()) {
      sum += parseInt(digit);
    }
    num = sum;
    res++;
  }

  return res;
}

function App() {
  const [results, setResults] = useState({
    biggestNumber: undefined,
    balancedString: undefined,
    additivePersistence: undefined,
  });

  const testCases = {
    findBiggestNumber: [
      { input: [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]], expected: 12 },
      { input: [[1, 1, 4, 1], [1, 6], [1, 2, 1, -3]], expected: 6 },
      { input: [[1, null, 1, null], [1, 0], [1, 2, 1, undefined]], expected: 2 },
      { input: [[-1, null], [], [0, -2, -1]], expected: 0 },
      { input: [[], [], []], expected: undefined },
    ],
    balancedString: [
      { input: "xxxyyyzzz", expected: true },
      { input: "xxxyyyzzzz", expected: false },
      { input: "abccbaabccba", expected: true },
      { input: "abcdefghijklmnopqrstuvwxyz", expected: true },
      { input: "pqq", expected: false },
      { input: "fdedfdeffeddefeeeefddf", expected: false },
      { input: "www", expected: true },
      { input: "x", expected: true },
      { input: "", expected: true },
    ],
    additivePersistence: [
      { input: 1234, expected: 2 },
      { input: 13, expected: 1 },
      { input: 9876, expected: 2 },
      { input: 199, expected: 3 },
      { input: 1679583, expected: 3 },
    ],
  };

  const runTests = () => {
    const biggestNumberResults = testCases.findBiggestNumber.map(({ input, expected }) => {
      const result = findBiggestNumber(input);
      return { input, expected, result, passed: result === expected };
    });

    const balancedStringResults = testCases.balancedString.map(({ input, expected }) => {
      const result = balancedString(input);
      return { input, expected, result, passed: result === expected };
    });

    const additivePersistenceResults = testCases.additivePersistence.map(({ input, expected }) => {
      const result = additivePersistence(input);
      return { input, expected, result, passed: result === expected };
    });

    setResults({
      biggestNumber: biggestNumberResults,
      balancedString: balancedStringResults,
      additivePersistence: additivePersistenceResults,
    });
  };

  return (
      <div style={{ padding: '20px' }}>
        <h1>Student: {student_name}</h1>
        <button onClick={runTests}>Run Tests</button>
        <h2>Results:</h2>

        <h3>Biggest Number Test Cases:</h3>
        {results.biggestNumber ? results.biggestNumber.map(({ input, expected, result, passed }, index) => (
            <p key={index}>
              Input: {JSON.stringify(input)}, Expected: {expected}, Result: {result}, Passed: {passed ? "✅" : "❌"}
            </p>
        )) : null}

        <h3>Balanced String Test Cases:</h3>
        {results.balancedString ? results.balancedString.map(({ input, expected, result, passed }, index) => (
            <p key={index}>
              Input: '{input}', Expected: {expected? "✅" : "❌"}, Result: {result? "✅" : "❌"}, Passed: {passed ? "✅" : "❌"}
            </p>
        )) : null}

        <h3>Additive Persistence Test Cases:</h3>
        {results.additivePersistence ? results.additivePersistence.map(({ input, expected, result, passed }, index) => (
            <p key={index}>
              Input: {input}, Expected: {expected}, Result: {result}, Passed: {passed ? "✅" : "❌"}
            </p>
        )) : null}
      </div>
  );
}

export default App;
