# Faker Data Generator

## Examples

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

