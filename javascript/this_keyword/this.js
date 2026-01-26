const user = {
    name: "Sravani",

    greet: function(){
        console.log(this.name);
    },

    arrow: () =>{
        console.log(this.name); //undefined
    }
};
user.greet();
user.arrow();

