# Faker Data Generator

## Usage examples

First, create a faker generator :
```javascript
const faker = require("./faker");
const fk = faker.create("fr_FR");
// create a faker with french locale

const fk = faker.create("en_EN");
// create a faker with english locale

const fk = faker.create("bzh_FR");
// create a faker with brittany locale

const fk = faker.create(); 
// default "en_EN"
```
Then, get a random firstname :
```javascript
fk.getFake("firstname"); 
// output can be "Charles"
```
Get a random city :
```javascript
fk.getFake("city"); 
// output can be "London"
```
Get a random month :
```javascript
fk.getFake("month"); 
// output can be "February"
```
Get a random day :
```javascript
fk.getFake("day"); 
// output can be "Tuesday"
```

## Need more fake datas ?

1. Go in 'src/data/' folder
2. You want some car's brand : create a 'cars' folder
3. In the 'src/data/cars/' create the file 'brand.js' and put inside :
```javascript
module.exports = [
    "Renault",
    "Peugeot",
    "Toyota",
    "Tesla",
];
```
5. You can generate your data :
```javascript
fk = faker.create("cars");
fk.getFake("brand"); 
// output can be "Toyota"
```

## Todo, some ideas

#### Money

Get a random french amount of money, between 10 € and 20 €
```javascript
fk.getFake("money", 10, 20); 
// output can be "16,00 €"
```
Get a random french amount of money, between 10 000 € and 20 000 €
```javascript
fk.getFake("money", 10000, 20000); 
// output can be "15 500,00 €"
```

