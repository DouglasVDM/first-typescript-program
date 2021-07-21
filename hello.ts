// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Brendan", Date());

/*
  When there is an error in hello.ts File,
  using --noEmitOnError does not Update hello.js
 */
