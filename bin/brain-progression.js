#!/usr/bin/env node

import readlineSync from 'readline-sync';

function generateProgression() {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 20);
  const step = Math.max(1, Math.floor(Math.random() * 10));
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return { progression, answer };
}

const NUMBER_OF_ROUNDS = 3;

console.log('Welcome to the Brain Games!');

function runGame() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const { progression, answer } = generateProgression();

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } else {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${name}!`);
}

runGame();