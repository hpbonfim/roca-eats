module.exports = app => {
    const people = require("../controllers/people.controller.js");
    
    // Create a new People
    app.post("/api/people", people.create);
  
    // Retrieve all Peoples
    app.get("/api/people", people.findAll);
  
    // Retrieve a single People with id
    app.get("/api/people/:id", people.findOne);
  
    // Update a People with id
    app.put("/api/people/:id", people.update);
  
    // Delete a People with id
    app.delete("/api/people/:id", people.delete);
  
    // Create a new People
    app.delete("/api/people", people.deleteAll);
  };