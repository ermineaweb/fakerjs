# Faker Data Generator

Inspired by [Faker zaninotto](https://github.com/fzaninotto/Faker).


## Locales availables

- en_US
- fr_FR
- bzh_FR


## Usage

Install
```
npm install erminea-faker
```

First, create a faker generator :
```javascript
const faker = require("./faker");
const fk = faker.create("fr_FR");
// create a faker with french locales

const fk = faker.create("en_US");
// create a faker with us locales

const fk = faker.create("bzh_FR");
// create a faker with brittany locales

const fk = faker.create(); 
// default "fr_FR"
```
Then, get a random firstname :
```javascript
fk.getFake("firstname"); 
// output can be "Charles"
```


## Providers availables

```
username
firstname (male, female, mix)
lastname
mail
job
city
street
zipcode
region
country
month
day
```


## The guesser

If you don't know precisely the name of the provider, try some words.
Example :
login, logon, pseudo, username
