# Faker Data Generator

## Usage examples

First, create a faker generator :
```javascript
const faker = require("./faker");
const fk = faker.create("fr_FR");
or 
const fk = faker.create("en_EN");
or
const fk = faker.create("bzh_FR");
or
const fk = faker.create(); // default "fr_FR" if locale is not defined
```
Then, get a random french firstname :
```javascript
fk.getFake("firstname"); // output : "Charles"
```
Get a random french city :
```javascript
fk.getFake("city"); // output : "Quimper"
```
Get a random french month :
```javascript
fk.getFake("month"); // output : "Février"
```
Get a random french day :
```javascript
fk.getFake("day"); // output : "Mercredi"
```

## Need more fake datas ?

1. Go in 'src/data/' folder
2. You want some car's brand : create a 'cars' folder
3. In the 'src/data/cars/' create the file 'brand.js' and put inside :
```javascript
model.exports = [
    "Renault",
    "Peugeot",
    "Toyota",
];
```
5. You can generate your data :
```javascript
fk = faker.create("cars");
fk.getFake("brand"); // output : "Toyota"
```

## Todo, some ideas

#### Money

Get a random french amount of money, between 10 € and 20 €
```javascript
fk.getFake("money", 10, 20); // output : "16,00 €"
```
Get a random french amount of money, between 10 000 € and 20 000 €
```javascript
fk.getFake("money", 10000, 20000); // output : "15 500,00 €"
```

