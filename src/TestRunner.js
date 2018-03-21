import React, { Component } from 'react';
import './TestRunner.css';

const sampleCases = [
  {
    args: [0, 0],
    expected: false
  },
  {
    args: [1, 1],
    expected: true
  },
  {
    args: [-2, 0],
    expected: false
  },
  // {
  //   args: [-3, -4],
  //   expected: true
  // }
];

function positiveSum(a, b) {
  // Sample test function
  return a + b > 0;
}

function testRunner(testCases, functionUnderTest) {
  const results = testCases.map(testCase => {
    // Create a copy of the test case
    const testCaseCopy = JSON.parse(JSON.stringify(testCase));

    // Obtain actual result
    testCaseCopy.actual = functionUnderTest(...testCase.args);

    // Test case passes if actual result equals expected result (works for boolean, number, string)
    testCaseCopy.pass = testCaseCopy.actual === testCaseCopy.expected;

    return testCaseCopy;
  });

  return results;
}

class TestRunner extends Component {
  renderHeader() {
    return (
      <div className="label-row">
        <span className="label-item">
          <p>Arguments</p>
        </span>
        <span className="label-item">
          <p>Expected</p>
        </span>
        <span className="label-item">
          <p>Actual</p>
        </span>
        <span className="label-item">
          <p>Result</p>
        </span>
      </div>
    );
  }

  renderResult(result) {
    return (
      <div className={`result-row ${result.pass ? "pass" : "fail"}`}>
        <span className="result-item">
          <p>{JSON.stringify(result.args)}</p>
        </span>
        <span className="result-item">
          <p>{JSON.stringify(result.expected)}</p>
        </span>
        <span className="result-item">
          <p>{JSON.stringify(result.actual)}</p>
        </span>
        <span className="result-item">
          <p>{result.pass ? "👍" : "👎"}</p>
        </span>
      </div>
    );
  }

  render() {
    const testResults = testRunner(sampleCases, positiveSum);

    const casesPassed = testResults.reduce((accumulator, current) => {
      return accumulator += current.pass ? 1 : 0;
    }, 0);

    const allPassed = casesPassed === testResults.length;

    return (
      <div className="test-runner-container">
        <div className="test-runner-header">
          <h1>A Simple Test Runner</h1>
        </div>

        {this.renderHeader()}

        {testResults.map(result => this.renderResult(result))}

        <div className="test-runner-footer">
          <h3>{`${casesPassed} / ${testResults.length} cases passed`}</h3>
          <h2>{allPassed ? "All passing! Great Job! 💯" : "Better luck next time... 😿"}</h2>
        </div>
      </div>
    );
  }
}

export default TestRunner;
