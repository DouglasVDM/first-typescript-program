function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Brendan", new Date());

var msg = "hello there!"; //  Type String, even when not given
