const sql = require("./db.js");

// constructor
const PeopleAddress = function (address) {
  this.peopleId = address.peopleId;
  this.cep = address.cep;
  this.address = address.address;
  this.neighborhood = address.neighborhood;
  this.number = address.number;
  this.complement = address.complement;
  this.city = address.city;
  this.state = address.state;
};

PeopleAddress.create = (newPeopleAddress, result) => {
  sql.query("INSERT INTO peopleaddress SET ?", newPeopleAddress, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created People Address: ", {
      id: res.insertId,
      ...newPeopleAddress,
    });
    result(null, { id: res.insertId, ...newPeopleAddress });
  });
};

PeopleAddress.findByPeopleId = (id, result) => {
  sql.query(
    `SELECT * FROM peopleaddress WHERE peopleId = ${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found peopleaddress: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found People with the id
      result({ kind: "not_found" }, null);
    }
  );
};

PeopleAddress.findById = (id, result) => {
  sql.query(`SELECT * FROM peopleaddress WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found peopleaddress: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found People with the id
    result({ kind: "not_found" }, null);
  });
};

PeopleAddress.updateById = (id, address, result) => {
  sql.query(
    "UPDATE peopleaddress SET peopleId = ?, cep = ?, address = ?, neighborhood = ?, number = ?, complement = ?, city = ?, state = ? WHERE id = ?;",
    [
      address.peopleId,
      address.cep,
      address.address,
      address.neighborhood,
      address.number,
      address.complement,
      address.city,
      address.state,
      id,
    ],
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

PeopleAddress.remove = (id, result) => {
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

PeopleAddress.removeAll = (result) => {
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

module.exports = PeopleAddress;
