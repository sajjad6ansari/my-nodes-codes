class Superhero{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
}

// expoting instance of superhero
// module.exports=new Superhero("Batman");

// exporting class itself
module.exports=Superhero;