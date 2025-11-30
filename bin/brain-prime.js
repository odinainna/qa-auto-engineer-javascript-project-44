#!/usr/bin/env node

import readlineSync from 'readline-sync';

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const NUMBER_OF_ROUNDS = 3;

console.log('Welcome to the Brain Games!');

function runGame() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const number = Math.floor(Math.random() * 50) + 2;
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } else {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${name}!`);
}

runGame();