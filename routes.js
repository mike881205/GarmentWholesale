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

router.post("/api/addBrand", (req, res) => {
  //****
  //Do validation here before attempting to register user, such as checking for password length, capital letters, special characters, etc.
  //****
  console.log("Adding brand...");
  db.Brand.create({
    brandName: req.body.brandName
  }).then(info => {
    console.log("Brand Added")
    res.json(info);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.post("/api/addStyle", (req, res) => {
  //****
  //Do validation here before attempting to register user, such as checking for password length, capital letters, special characters, etc.
  //****
  console.log("Adding style...");
  db.Style.create({
    styleNum: req.body.styleNum,
    styleName: req.body.styleName,
    img: req.body.img,
    type: req.body.type,
    description: req.body.description,
    BrandId: req.body.BrandId
  }).then(info => {
    console.log("Style Added")
    res.json(info);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.post("/api/addColor", (req, res) => {
  //****
  //Do validation here before attempting to register user, such as checking for password length, capital letters, special characters, etc.
  //****
  console.log("Adding color...");
  db.Color.create({
    color: req.body.color,
    hexCode: req.body.hexCode,
    BrandId: req.body.BrandId,
    StyleId: req.body.StyleId
  }).then(info => {
    console.log("Color Added")
    res.json(info);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.post("/api/addSize", (req, res) => {
  //****
  //Do validation here before attempting to register user, such as checking for password length, capital letters, special characters, etc.
  //****
  console.log("Adding size...");
  db.Size.create({
    size: req.body.size,
    cost: req.body.cost,
    BrandId: req.body.BrandId,
    StyleId: req.body.StyleId,
    ColorId: req.body.ColorId
  }).then(info => {
    console.log("Color Added")
    res.json(info);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.post("/api/addStock", (req, res) => {
  //****
  //Do validation here before attempting to register user, such as checking for password length, capital letters, special characters, etc.
  //****
  console.log("Adding stock...");
  db.Stock.create({
    name: req.body.name,
    qty: req.body.qty,
    WarehouseId: req.body.WarehouseId,
    SizeId: req.body.SizeId,
  }).then(info => {
    console.log("Stock Added")
    res.json(info);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

module.exports = router;
