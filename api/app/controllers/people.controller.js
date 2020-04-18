const People = require("../models/people.model.js");

// Create and Save a new people
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a People
  const people = new People({
    fullName: req.body.fullName,
    socialName: req.body.socialName,
    cpf_cnpj: req.body.cpf_cnpj,
    email: req.body.email,
    birthDate: req.body.birthDate,
    type: req.body.type,
    active: req.body.active
  });

  // Save People in the database
  People.create(people, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao criar ao cadastrar, verifique."
      });
    else res.send(data);
  });
};


// Retrieve all peoples from the database.
exports.findAll = (req, res) => {
    People.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Ocorreu um erro ao recuperar o cadastro."
          });
        else res.send(data);
      });
};

// Find a single people with a id
exports.findOne = (req, res) => {
    People.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Nenhum registro encontrado com o ID ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Erro ao recuperar os dados com o ID "+ req.params.id
            });
          }
        } else res.send(data);
      });
};

// Update a people identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo não pode ser vazio!"
    });
  }

  Customer.updateById(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Nenhum registro encontrado com o ID ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Erro ao atualizar os dados com o ID " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a people with the specified id in the request
exports.delete = (req, res) => {
    People.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
                message: `Nenhum registro encontrado com o ID ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Não foi possível excluir os dados com o ID" + req.params.customerId
            });
          }
        } else res.send({ message: `Registro excluido com sucesso!` });
      });
};

// Delete all peoples from the database.
exports.deleteAll = (req, res) => {
    People.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Ocorreu um erro ao remover todos os registros."
          });
        else res.send({ message: `Todos os registros foram excluídos com sucesso!` });
      });
};