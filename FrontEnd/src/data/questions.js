export const questions = [
  {
    id: 1,
    title: "Square of a Number",
    description: "Given T test cases, for each test case read integer N and print N*N.",
    functionName: "square",
    constraints: "1 ≤ T ≤ 100\n0 ≤ N ≤ 1000",
    testCases: [
      {"input": "1 4", "expected": "16"},
      {"input": "1 5", "expected": "25"},
      {"input": "1 10", "expected": "100"},
      {"input": "1 0", "expected": "0"},
      {"input": "1 7", "expected": "49"}
    ]
  },
  {
    id: 2,
    title: "Even or Odd",
    description: "Given T test cases, for each test case read integer N and print 1 if even, 0 if odd.",
    functionName: "isEven",
    constraints: "1 ≤ T ≤ 100\n0 ≤ N ≤ 10^9",
    testCases: [
      {"input": "1 2", "expected": "1"},
      {"input": "1 3", "expected": "0"},
      {"input": "1 4", "expected": "1"},
      {"input": "1 1", "expected": "0"},
      {"input": "1 0", "expected": "1"}
    ]
  },
  {
    id: 3,
    title: "Factorial",
    description: "Given T test cases, for each test case read integer N and print N! (factorial).",
    functionName: "factorial",
    constraints: "1 ≤ T ≤ 20\n0 ≤ N ≤ 20",
    testCases: [
      {"input": "1 0", "expected": "1"},
      {"input": "1 1", "expected": "1"},
      {"input": "1 5", "expected": "120"},
      {"input": "1 3", "expected": "6"},
      {"input": "1 10", "expected": "3628800"}
    ]
  },
  {
    id: 4,
    title: "Prime Check",
    description: "Given T test cases, for each test case read integer N and print 1 if prime, 0 otherwise.",
    functionName: "isPrime",
    constraints: "1 ≤ T ≤ 100\n2 ≤ N ≤ 10^6",
    testCases: [
      {"input": "1 2", "expected": "1"},
      {"input": "1 3", "expected": "1"},
      {"input": "1 4", "expected": "0"},
      {"input": "1 7", "expected": "1"},
      {"input": "1 11", "expected": "1"}
    ]
  },
  {
    id: 5,
    title: "Fibonacci Number",
    description: "Given T test cases, for each test case read integer N and print Nth Fibonacci number.",
    functionName: "fibonacci",
    constraints: "1 ≤ T ≤ 20\n0 ≤ N ≤ 40",
    testCases: [
      {"input": "1 0", "expected": "0"},
      {"input": "1 1", "expected": "1"},
      {"input": "1 5", "expected": "5"},
      {"input": "1 8", "expected": "21"},
      {"input": "1 10", "expected": "55"}
    ]
  },
  {
    id: 6,
    title: "Sum of Digits",
    description: "Given T test cases, for each test case read integer N and print sum of its digits.",
    functionName: "sumOfDigits",
    constraints: "1 ≤ T ≤ 100\n1 ≤ N ≤ 10^9",
    testCases: [
      {"input": "1 123", "expected": "6"},
      {"input": "1 456", "expected": "15"},
      {"input": "1 999", "expected": "27"},
      {"input": "1 10", "expected": "1"},
      {"input": "1 987654321", "expected": "45"}
    ]
  },
  {
    id: 7,
    title: "Reverse Integer",
    description: "Given T test cases, for each test case read integer N and print its reverse.",
    functionName: "reverseNumber",
    constraints: "1 ≤ T ≤ 100\n0 ≤ N ≤ 10^9",
    testCases: [
      {"input": "1 123", "expected": "321"},
      {"input": "1 0", "expected": "0"},
      {"input": "1 456", "expected": "654"},
      {"input": "1 100", "expected": "1"},
      {"input": "1 987", "expected": "789"}
    ]
  },
  {
    id: 8,
    title: "Palindrome Check",
    description: "Given T test cases, for each test case read integer N and print 1 if palindrome, 0 otherwise.",
    functionName: "isPalindrome",
    constraints: "1 ≤ T ≤ 100\n0 ≤ N ≤ 10^9",
    testCases: [
      {"input": "1 121", "expected": "1"},
      {"input": "1 123", "expected": "0"},
      {"input": "1 0", "expected": "1"},
      {"input": "1 11", "expected": "1"},
      {"input": "1 1001", "expected": "1"}
    ]
  },
  {
    id: 9,
    title: "GCD of Two Numbers",
    description: "Given T test cases, for each test case read integers A B and print GCD(A,B).",
    functionName: "gcd",
    constraints: "1 ≤ T ≤ 100\n1 ≤ A,B ≤ 10^9",
    testCases: [
      {"input": "1 12 18", "expected": "6"},
      {"input": "1 48 18", "expected": "6"},
      {"input": "1 7 1", "expected": "1"},
      {"input": "1 100 50", "expected": "50"},
      {"input": "1 25 125", "expected": "25"}
    ]
  },
  {
    id: 10,
    title: "Power of Two",
    description: "Given T test cases, for each test case read integer N and print 1 if N is power of 2, 0 otherwise.",
    functionName: "isPowerOfTwo",
    constraints: "1 ≤ T ≤ 100\n1 ≤ N ≤ 10^9",
    testCases: [
      {"input": "1 1", "expected": "1"},
      {"input": "1 2", "expected": "1"},
      {"input": "1 3", "expected": "0"},
      {"input": "1 4", "expected": "1"},
      {"input": "1 8", "expected": "1"}
    ]
  }
]
