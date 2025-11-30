#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

function generateExpression() {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operator = Math.random() > 0.5 ? '+' : '-';
  return { num1, num2, operator };
}

function runGame() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i++) {
    const { num1, num2, operator } = generateExpression();
    const expression = `${num1} ${operator} ${num2}`;
    const answer = readlineSync.question(`What is the result of the expression?: ${expression} = `);
    const correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;

    if (Number(answer) !== correctAnswer) {
      console.log(`It is wrong answer ;(. Correct answer was: ${correctAnswer}. Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

runGame();