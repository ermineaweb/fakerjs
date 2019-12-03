# Faker Data Generator

## Usage examples

Create a faker generator :
```javascript
const faker = require("./faker");
const fk = faker.create("fr_FR");
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
fk.getFake("day"); // output : "Février"
```

## Need more datas ?

1. Go in 'src/data/' folder
2. You want some Models of car : create a 'cars' folder
3. In the 'src/data/cars/' create the file 'model.js'
4. In 'model.js', put :
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
fk.getFake("model"); // output : "Toyota"
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

