#!/usr/bin/env node

import readlineSync from 'readline-sync';

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const NUMBER_OF_ROUNDS = 3;

console.log('Welcome to the Brain Games!');

function runGame() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${a} ${b}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = gcd(a, b);

    if (Number(answer) !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}

runGame();