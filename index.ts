#!  /usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk';

const currency: any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};

let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter the currency you are converting from:',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter the currency you are converting to:',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter the amount you want to convert:',
        type: 'number',
    }
]);

let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // Convert to base currency (USD)
let convertedAmount = baseAmount * toAmount;

console.log(chalk.green(`Converted Amount: ${convertedAmount.toFixed(2)} ${user_answer.to}`));
