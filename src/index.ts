#!/usr/bin/env node

import { Customer } from "./Customer";
import { MovieCollection } from "./Movie";

import { Command } from "commander";
import { statement } from "./statement";
import { htmlStatement } from "./html-statement";

import { movieCategories } from "./commands/movieCategories";

const program: Command = require("commander");
const version: string = require("../package.json").version;

const customer: Customer = require("./data/customer.json");
const movies: MovieCollection = require("./data/movies.json");
const categories: any = require("./data/categories.json")

program
  .version(version)
  .description("A CLI for generating customer statements");

program
  .command("statement")
  .description("Prints out a plain-text statement for the customer")
  .action(() => console.log(statement(customer, movies)));

program
  .command("html-statement")
  .description("Prints out an HTML statement for the customer")
  .action(() => console.log(htmlStatement(customer, movies)))

  program
  .command("movie-categories")
  .description("Allows the company to edit movie categories")
  .action(() => console.log(movieCategories(categories)))

program.parse(process.argv);
