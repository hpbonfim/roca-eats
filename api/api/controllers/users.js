const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

module.exports = app => {

  let userTable = app.data.users;
  const controller = {};

  const {
    users: usersMock,
  } = userTable;

  controller.authenticate = (req, res) => {
    const { 
      email,
      password
    } = req.body;

    console.log(req.body);

    console.log(JSON.stringify(usersMock.data));

    var users = usersMock.data.find(user => user.email == email && user.password == password);
    
    console.log(users);

    if (!users || users == null || users.length == 0) {
      res.json({
        success: false,
        message: 'A autenticação falhou, verifique os dados informados!'
      });

      return;
    }

    // Retornamos um json dizendo que deu certo junto com o seu Token
    res.json({
      success: true,
      message: 'Usuário autorizado!'
    });
  }

  controller.list = (req, res) => res.status(200).json(userTable);

  controller.getUser = (req, res) => {
    const { 
      email,
    } = req.params;

    var user = usersMock.data.find(x => x.email == email);
    
    // if(user){
    //   user.password = "***********";
    // }
        
    res.status(200).json(user);
  }

  controller.listDonators = (req, res) => {
    var users = usersMock.data.filter(user => user.type == "1");

    res.status(200).json(users);
  }

  controller.listInstitutions = (req, res) => {
    var users = usersMock.data.filter(user => user.type == "2");

    res.status(200).json(users);
  }

  controller.register = (req, res) => {
    var userId = uuidv4();
    var addressId = uuidv4();

    let user = {
      id: userId,
      fullName: req.body.fullName,
      fantasyName: req.body.fantasyName,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phoneNumber
    };

    let address = {
      id: addressId,
      userId: userId,
      postalCode: req.body.address.postalCode,
      address: req.body.address.address,
      number: req.body.address.number,
      complement: req.body.address.complement,
      neighborhood: req.body.address.neighborhood,
      city: req.body.address.city,
      state: req.body.address.state
    }

    user.address = address;

    usersMock.data.push(user);
    
    fs.writeFile('./api/data/users.json', JSON.stringify(app.data.users), (err) => {
      if (err) throw err;      
    });

    let xxuser = usersMock.data.find(user => user.id == userId);    
    // user.password = "*************";

    res.status(201).json(user);
  };

  controller.update = (req, res) => {
    const { 
      id,
    } = req.params;

    const foundUserIndex = usersMock.data.findIndex(user => user.id === id);

    if (foundUserIndex === -1) {
      res.status(404).json({
        message: 'Usuário não encontrado.',
        success: false,
        users: usersMock,
      });
    } else {
      
      let user = usersMock.data.filter(user => user.id == id);

      if(user != null){
        user.fullName = req.body.fullName;
        user.fantasyName = req.body.fantasyName;
        user.email = req.body.email;
        user.phone = req.body.phoneNumber;

        user.addres.postalCode = req.body.address.postalCode;
        user.addres.address = req.body.address.address;
        user.addres.number = req.body.address.number;
        user.addres.complement = req.body.address.complement;
        user.addres.neighborhood = req.body.address.neighborhood;
        user.addres.city = req.body.address.city;
        user.addres.state = req.body.address.state;      

        usersMock.data.splice(foundUserIndex, 1, user);

        fs.writeFile('./api/data/users.json', JSON.stringify(app.data.users), (err) => {
          if (err) throw err;
          
        });

        res.status(200).json({
          message: 'Usuário atualizado com sucesso!',
          success: true,
          users: usersMock,
        });
      }

      res.status(200).json({
        message: 'Usuário não encontrado!',
        success: false,
        users: usersMock,
      });
      
    }
  }

  return controller;
}
