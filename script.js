let employee ={
    firstname : "Nimal",
    'first name ' : "Mcodes",
    lastname :"Perera",
    age: 20,
    iscitizen : true,

    getmsg : function(p1){
        alert (this.firstname+ " " + this.lastname+ " is " +this.age+ " years old");

    }
}

// Call the method correctly
employee.getmsg();