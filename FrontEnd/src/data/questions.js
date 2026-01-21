export const questions = [
  {
    id: 1,
    title: "Square of a Number",
    description: "Given T test cases, for each test case read integer N and print N*N.",
    functionName: "square",
    constraints: "1 ≤ T ≤ 100\n0 ≤ N ≤ 1000",
    languageTemplates: {
      cpp: `int square(int n) {
  // Write your code here
  return 0;
}`,
      python: `def square(n):
  # Write your code here
  return 0`,
      node: `function square(n) {
  // Write your code here
  return 0;
}`,
      java: `public static int square(int n) {
  // Write your code here
  return 0;
}`
    },
    testCases: [
      {"input": "5 4 5 10 0 7", "expected": "16\n25\n100\n0\n49"},
      {"input": "3 2 3 2", "expected": "4\n9\n4"},
      {"input": "2 1 100", "expected": "1\n10000"}
    ]
  },
  {
    id: 2,
    title: "Even or Odd",
    description: "Given T test cases, for each test case read integer N and print 1 if even, 0 if odd.",
    functionName: "isEven",
    constraints: "1 ≤ T ≤ 100\n0 ≤ N ≤ 10^9",
    languageTemplates: {
      cpp: `int isEven(int n) {
  // Write your code here
  return 0;
}`,
      python: `def isEven(n):
  # Write your code here
  return 0`,
      node: `function isEven(n) {
  // Write your code here
  return 0;
}`,
      java: `public static int isEven(int n) {
  // Write your code here
  return 0;
}`
    },
    testCases: [
      {"input": "4 2 3 4 1", "expected": "1\n0\n1\n0"},
      {"input": "3 0 100 99", "expected": "1\n1\n0"},
      {"input": "1 5", "expected": "0"}
    ]
  },
  {
    id: 3,
    title: "Factorial",
    description: "Given T test cases, for each test case read integer N and print N! (factorial).",
    functionName: "factorial",
    constraints: "1 ≤ T ≤ 20\n0 ≤ N ≤ 20",
    languageTemplates: {
      cpp: `int factorial(int n) {
  // Write your code here
  return 0;
}`,
      python: `def factorial(n):
  # Write your code here
  return 0`,
      node: `function factorial(n) {
  // Write your code here
  return 0;
}`,
      java: `public static int factorial(int n) {
  // Write your code here
  return 0;
}`
    },
    testCases: [
      {"input": "4 0 1 5 3", "expected": "1\n1\n120\n6"},
      {"input": "2 4 6", "expected": "24\n720"},
      {"input": "1 10", "expected": "3628800"}
    ]
  },
  {
    id: 4,
    title: "Prime Check",
    description: "Given T test cases, for each test case read integer N and print 1 if prime, 0 otherwise.",
    functionName: "isPrime",
    constraints: "1 ≤ T ≤ 100\n2 ≤ N ≤ 10^6",
    languageTemplates: {
      cpp: `int isPrime(int n) {
  // Write your code here
  return 0;
}`,
      python: `def isPrime(n):
  # Write your code here
  return 0`,
      node: `function isPrime(n) {
  // Write your code here
  return 0;
}`,
      java: `public static int isPrime(int n) {
  // Write your code here
  return 0;
}`
    },
    testCases: [
      {"input": "4 2 3 4 7", "expected": "1\n1\n0\n1"},
      {"input": "3 1 17 25", "expected": "0\n1\n0"},
      {"input": "1 11", "expected": "1"}
    ]
  },
  {
    id: 5,
    title: "Fibonacci Number",
    description: "Given T test cases, for each test case read integer N and print Nth Fibonacci number.",
    functionName: "fibonacci",
    constraints: "1 ≤ T ≤ 20\n0 ≤ N ≤ 40",
    languageTemplates: {
      cpp: `int fibonacci(int n) {
  // Write your code here
  return 0;
}`,
      python: `def fibonacci(n):
  # Write your code here
  return 0`,
      node: `function fibonacci(n) {
  // Write your code here
  return 0;
}`,
      java: `public static int fibonacci(int n) {
  // Write your code here
  return 0;
}`
    },
    testCases: [
      {"input": "5 0 1 5 8 10", "expected": "0\n1\n5\n21\n55"},
      {"input": "3 3 6 13", "expected": "2\n8\n233"},
      {"input": "1 20", "expected": "6765"}
    ]
  },
  {
    id: 6,
    title: "Sum of Digits",
    description: "Given T test cases, for each test case read integer N and print sum of its digits.",
    functionName: "sumOfDigits",
    constraints: "1 ≤ T ≤ 100\n1 ≤ N ≤ 10^9",
    languageTemplates: {
      cpp: `int sumOfDigits(int n) {
  // Write your code here
  return 0;
}`,
      python: `def sumOfDigits(n):
  # Write your code here
  return 0`,
      node: `function sumOfDigits(n) {
  // Write your code here
  return 0;
}`,
      java: `public static int sumOfDigits(int n) {
  // Write your code here
  return 0;
}`
    },
    testCases: [
      {"input": "4 123 456 999 10", "expected": "6\n15\n27\n1"},
      {"input": "2 1000 12345", "expected": "1\n15"},
      {"input": "1 987654321", "expected": "45"}
    ]
  },
  {
    id: 7,
    title: "Reverse Integer",
    description: "Given T test cases, for each test case read integer N and print its reverse.",
    functionName: "reverseNumber",
    constraints: "1 ≤ T ≤ 100\n0 ≤ N ≤ 10^9",
    languageTemplates: {
      cpp: `int reverseNumber(int n) {
  // Write your code here
  return 0;
}`,
      python: `def reverseNumber(n):
  # Write your code here
  return 0`,
      node: `function reverseNumber(n) {
  // Write your code here
  return 0;
}`,
      java: `public static int reverseNumber(int n) {
  // Write your code here
  return 0;
}`
    },
    testCases: [
      {"input": "3 123 0 456", "expected": "321\n0\n654"},
      {"input": "2 100 987", "expected": "1\n789"},
      {"input": "1 123456789", "expected": "987654321"}
    ]
  },
  {
    id: 8,
    title: "Palindrome Check",
    description: "Given T test cases, for each test case read integer N and print 1 if palindrome, 0 otherwise.",
    functionName: "isPalindrome",
    constraints: "1 ≤ T ≤ 100\n0 ≤ N ≤ 10^9",
    languageTemplates: {
      cpp: `int isPalindrome(int n) {
  // Write your code here
  return 0;
}`,
      python: `def isPalindrome(n):
  # Write your code here
  return 0`,
      node: `function isPalindrome(n) {
  // Write your code here
  return 0;
}`,
      java: `public static int isPalindrome(int n) {
  // Write your code here
  return 0;
}`
    },
    testCases: [
      {"input": "4 121 123 0 11", "expected": "1\n0\n1\n1"},
      {"input": "2 12321 12345", "expected": "1\n0"},
      {"input": "1 1001", "expected": "1"}
    ]
  },
  {
    id: 9,
    title: "GCD of Two Numbers",
    description: "Given T test cases, for each test case read integers A B and print GCD(A,B).",
    functionName: "gcd",
    constraints: "1 ≤ T ≤ 100\n1 ≤ A,B ≤ 10^9",
    languageTemplates: {
      cpp: `int gcd(int a, int b) {
  // Write your code here
  return 0;
}`,
      python: `def gcd(a, b):
  # Write your code here
  return 0`,
      node: `function gcd(a, b) {
  // Write your code here
  return 0;
}`,
      java: `public static int gcd(int a, int b) {
  // Write your code here
  return 0;
}`
    },
    testCases: [
      {"input": "3 12 18 48 18 7 1", "expected": "6\n6\n1"},
      {"input": "2 100 50 25 125", "expected": "50\n25"},
      {"input": "1 999 1", "expected": "1"}
    ]
  },
  {
    id: 10,
    title: "Power of Two",
    description: "Given T test cases, for each test case read integer N and print 1 if N is power of 2, 0 otherwise.",
    functionName: "isPowerOfTwo",
    constraints: "1 ≤ T ≤ 100\n1 ≤ N ≤ 10^9",
    languageTemplates: {
      cpp: `int isPowerOfTwo(int n) {
  // Write your code here
  return 0;
}`,
      python: `def isPowerOfTwo(n):
  # Write your code here
  return 0`,
      node: `function isPowerOfTwo(n) {
  // Write your code here
  return 0;
}`,
      java: `public static int isPowerOfTwo(int n) {
  // Write your code here
  return 0;
}`
    },
    testCases: [
      {"input": "5 1 2 3 4 8", "expected": "1\n1\n0\n1\n1"},
      {"input": "3 16 7 32", "expected": "1\n0\n1"},
      {"input": "1 6", "expected": "0"}
    ]
  }
]
