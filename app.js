//var Emitter = require("./emitter");
var Emitter = require("events");
const config = require("./config");

var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log("Somewhere, someone said hello.");
});

emtr.on("greet", () => {
    console.log("A greeting ocurred!");
});

console.log("Hello!");
emtr.emit("greet");

emtr.on("jump", () => {
    console.log("someone jumped!");
}
);

console.log(emtr)
emtr.emit("jump");




