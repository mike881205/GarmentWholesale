var passport = require("./config/passport");
const express = require("express");
const router = express.Router();
const db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthenticated");

router.post("/api/register", (req, res) => {
  console.log("registering user");

  //****
  //Do validation here before attempting to register user, such as checking for password length, capital letters, special characters, etc.
  //****

  db.User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).then(() => {
    res.json("user registered");
  }).catch(err => {
    console.log(err);
    res.json(err);
  });

});

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.get("/api/logout", (req, res) => {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/api/user", (req, res) => {
  if (req.query.username) {
    db.User.find({
      where: { username: req.query.username }
    }).then(result => {
      res.json(result ? { length: result.length } : { length: 0 });
    }).catch(err => {
      res.json(err);
    })
  } else {
    res.json({ message: "no username entered for query" });
  }
});

router.put("/api/addStock", (req, res) => {
  db.Stock.update(
    { qty: req.body.qty },
    {
      where: {
        SizeId: req.body.product,
        WarehouseId: req.body.warehouse
      }
    }
  ).then(info => {
    res.json(info);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.get("/api/getStock", (req, res) => {
  db.Stock.findAll({
    // where: {
    //   WarehouseId: ''
    // }
    // include: { all: true, nested: true}
  })
    .then(dbResults => res.json(dbResults))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/searchStock", (req, res) => {
  db.Stock.findAll({
    where: {
      WarehouseId: req.query.WarehouseId,
      SizeId: req.query.SizeId
    }
  })
    .then(dbResults => res.json(dbResults))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/getWarehouses", (req, res) => {
  db.Warehouse.findAll({
    // include: { all: true, nested: true}
  })
    .then(dbResults => res.json(dbResults))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/getBrands", (req, res) => {
  db.Brand.findAll({
    // include: { all: true, nested: true}
  })
    .then(dbResults => res.json(dbResults))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/getStyles", (req, res) => {
  db.Style.findAll({
    where: { BrandId: req.query.BrandId }
  })
    .then(dbResults => res.json(dbResults))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/getColors", (req, res) => {
  db.Color.findAll({
    where: { StyleId: req.query.StyleId },
  })
    .then(dbResults => res.json(dbResults))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/getSizes", (req, res) => {
  db.Size.findAll({
    where: {
      ColorId: req.query.ColorId
    }
  })
    .then(dbResults => res.json(dbResults))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
