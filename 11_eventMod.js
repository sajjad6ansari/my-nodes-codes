const eventEmitter=require("node:events");

const emitter =new eventEmitter();

emitter.on("pizza-order",(size,topping)=>{
    console.log(`Order for ${size} pizza with ${topping} as topping has been placed.`);
});

emitter.on("pizza-order",(size)=>{
    if(size==="large"){
        console.log("Serving Complimentary Drink");
    }
});

// above code for event is non-blocking
console.log("Do work before event occurs in the system");

emitter.emit("pizza-order","large","kabab");
