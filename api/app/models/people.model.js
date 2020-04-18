const sql = require("./db.js");

// constructor
const People = function(people) {
  this.fullName = people.fullName;
  this.socialName = people.socialName;
  this.cpf_cnpj = people.cpf_cnpj;

  this.email = people.email;
  this.birthDate = people.birthDate;
  this.type = people.type;
  this.active = people.active;
};

People.create = (newPeople, result) => {
  sql.query("INSERT INTO peoples SET ?", newPeople, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created people: ", { id: res.insertId, ...newPeople });
    result(null, { id: res.insertId, ...newPeople });
  });
};

People.findById = (id, result) => {
  sql.query(`SELECT * FROM peoples WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);

      // if(err.code == "ER_DUP_ENTRY"){
      //   result({ error: 'Cadasto ja existe' }, null);
      //   return;
      // }

      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found people: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found People with the id
    result({ kind: "not_found" }, null);
  });
};

People.getAll = result => {
  sql.query("SELECT * FROM peoples", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("peoples: ", res);
    result(null, res);
  });
};

People.updateById = (id, people, result) => {
  sql.query(
    "UPDATE peoples SET fullName = ?, socialName = ?, cpf_cnpj = ?, email = ?, birthDate = ?, type = ? WHERE id = ?; ",
    [people.fullName, people.socialName, people.cpf_cnpj, people.email, people.birthDate, people.type, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found People with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated people: ", { id: id, ...people });
      result(null, { id: id, ...people });
    }
  );
};

People.remove = (id, result) => {
  sql.query("DELETE FROM peoples WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found People with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted people with id: ", id);
    result(null, res);
  });
};

People.removeAll = result => {
  sql.query("DELETE FROM peoples", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} peoples`);
    result(null, res);
  });
};

module.exports = People;