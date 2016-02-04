var prompt = require('prompt');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo_db'
});


// //Testing connection of sql package
// connection.connect(function(err) {
//   if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//   };
//   console.log('connected as id ' + connection.threadId);
// });    

//  //Testing SQL
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
 
//   console.log('The solution is: ', rows[0].solution);
// });    
 
// connection.end();


prompt.start();

prompt.message = "";


var zoo = {

  welcome: function() {
    console.log("Welcome to the Zoo And Friends App!");
  }, //end of welcome

  menu: function() {
    console.log("Enter (A): ------> to Add a new animal to the Zoo!");
    console.log("Enter (U): ------> to Update info on an animal in the zoo");
    console.log("Enter (V): ------> to Visit the animals in the Zoo!");
    console.log("Enter (D): ------> to Adopt an animal from the Zoo!");
    console.log("Enter (Q): ------> to Quit and exit the Zoo!");
  }, //end of menu


  visit: function() {
    console.log("Enter (I): ------> do you know the animal by it’s id? We will visit that animal!");
    console.log("Enter (N): ------> do you know the animal by it’s name? We will visit that animal!");
    console.log("Enter (A): ------> here’s the count for all animals in all locations!");
    console.log("Enter (C): ------> here’s the count for all animals in this one city!");
    console.log("Enter (O): ------> here’s the count for all the animals in all locations by the type you specified!");
    
  
  }, //End of visit

  add: function(input_scope) {
    var currentScope = input_scope;

    var query = ("INSERT INTO animals (name, type, age) VALUES (?,?,?)");
    var self = this;
    console.log("To add an animal to the zoo please fill out the following form for us!");
    

    prompt.get( ['->', 'name', 'type', 'age'], function (err, result) {
       
      //Log the results. 
      
      console.log("Command-line input to be Added:");
      console.log("  name: " + result.name);
      console.log("  type: " + result.type);
      console.log("  age: " + result.age); //result.age

      var query = (" ");

      connection.query(query, (result.name, result.type), function (err, rows, fields) {
        if (err) throw err;

        
        //currentScope.menu();
        //currentScope.promptUser();

      });   //End of connection

      
    });   //end of prompt.get function
    
  },   //end of key add

 

 

  view: function(input_scope) {
    
    var currentScope = input_scope;

    console.log("Please choose what you would like to visit!");

    prompt.get(['->', 'visit'], function (err, result) { 
      if( result.visit == "Q") { //Quit
        currentScope.menu();

      } else if ( result.visit == "O") {  //count for all the animals in all locations by the type you specified!
        currentScope.type(input_scope);

      } else if (result.visit == "I") {     //Id
        currentScope.id(input_scope);

      } else if (result.visit == "N") {     //Name
        currentScope.name(input_scope);

      } else if (result.visit == "A") {     //All
        currentScope.all(input_scope);

      } else if (result.visit == "C") {     //caretake
        currentScope.care(input_scope);

      } else {
        console.log("Sorry didn’t get that, come again?");
        
      }; 
    });

    currentScope.visit();
    currentScope.view(currentScope);
  }, //end of key view


  type: function (input_scope) {
    // var currentScope = input_scope;

    // prompt.get(['->', 'animal_type'], function (err, result) { 
    //   console.log("animal type: " + result.animal_type);
    //   var query = ("SELECT COUNT(type) AS animals_of_this_type FROM animals WHERE type=" + result.animal_type + ";");
      
    //   connection.query(query, function (err, rows, fields) {
    //     if (err) throw err;
    //     console.log(rows);

    //   });

    //   currentScope.menu();
    //   currentScope.promptUser();

    // });

  }, //end of type


  care: function (input_scope) {
    // var currentScope = input_scope;
    // console.log("Enter city name NY/SF");

    // prompt.get(['->', 'city_name'], function (err, result) { 
    //   console.log("city name:" + result.city_name);
    //   var query = (result.city_name+";");

    //   connection.query(query, function(err, rows, fields) {
    //     if (err) throw err;
    //     console.log(rows);

    //   });

    //   currentScope.visit();
    //   currentScope.view(currentScope);


    // });

  }, //end of car


  animId: function (input_scope) {
    // var currentScope = input_scope;


    // prompt.get( ['->', 'animal_id'], function (err, result) { 
    //   console.log("animal ID: " + result.animal_id);
      
    //   var query = ("SELECT * FROM animals WHERE id= " + result.animal_id +";");
      
    //   connection.query(query, function (err, rows, fields) {
    //     if (err) throw err;
        
    //     console.log(rows);

    //   });

    //   currentScope.visit();
    //   currentScope.view(currentScope);
    // });
  },

name: function (input_scope) {
    debugger

    var currentScope = input_scope;
    console.log(currentScope);

    prompt.get(['->', 'animal_name'], function (err, result) { 
      console.log("animal Name:" + result.animal_name);
      
      var query = ("SELECT * FROM animals WHERE name='" + result.animal_id +"';")
      
      connection.query(query, function (err, rows, fields) {
        if (err) throw err;
        console.log(rows);

      });

      // currentScope.visit();
      // currentScope.view(currentScope);

    });

  },

  all: function (input_scope) {
    // debugger
    // var currentScope = input_scope;

    // prompt.get(['->', 'total_of_all_animals'], function (err, result) { 
    //   console.log("Total Animals in the Zoos");
      
    //   var query = ("SELECT COUNT(*) FROM animals");
      
    //   connection.query(query, function (err, rows, fields) {
    //     if (err) throw err;
    //     console.log(rows);

    //   });

    //   currentScope.visit();
    //   currentScope.view(currentScope);

    // });
  },

  update: function (input_scope) {
    // debugger
    // var currentScope = input_scope;

    // prompt.get(['--->', 'id','new_name','new_age','new_type','new_caretaker_id'], function (err, result) { 
    // console.log("Updating with New Animal");

      
    //   var query = ("INSERT INTO animals (name, type, age, caretaker_id");
      
    //   connection.query(query, function (err, rows, fields) {
    //       if (err) throw err;
    //       console.log(rows);

    //   });

    // currentScope.visit();
    // currentScope.view(currentScope);

    // });
  },

  adopt: function (){
    // debugger
    // var currentScope = input_scope;

    // prompt.get(['->', 'animal_id'], function (err, result) { 
    //   console.log("animal_id");
    //   console.log(result.animal_id);
      
    //   var query = ("DELETE FROM animals WHERE id=" + result.animal_id);
    //   console.log(query);
      
    //   connection.query(query, function (err, rows, fields) {
    //       if (err) throw err;
    //       console.log(rows);

    //   });

    //   currentScope.visit();
    //   currentScope.view(currentScope);

    // });
  },

  promptUser: function () {
    debugger
    var self = this;

    prompt.get(['input'], function (err, result) { 
    console.log(result.input);
    

      if( result.input == "Q"  ){        // Q = quit or exit
        self.exit();
      
      } else if( result.input == "A" ) {        // A = Add
        self.add(self);

      } else if( result.input == "U" ) {        // U = Update
        self.update();
      
      } else if( result.input == "V" ) {        // V = View
        self.view(self);
        self.visit();

      } else if( result.input == "D" ) {        // D = Adopt
        self.adopt(self);

      } else {
        console.log("Sorry didn't get that, come again?");

      }; //end of if

    }); //end of prompt

  },  //end of propmtUser



  exit: function () {
    console.log("Thank you for visiting us, good bye~!");
    process.exit();
  },

  open: function () {
    // this.welcome();
    // this.menu();
    // this.promptUser();
  }


}; //End of the Zoo

zoo.welcome();  //<-- working
zoo.menu();     //<-- working
zoo.promptUser();     //<-- working

