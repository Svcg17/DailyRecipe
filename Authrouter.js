var express = require("express");
var Authrouter = express.Router();

//Authentications all TABs.
Authrouter.get("/pages-login", function(req, res) {
  res.render("Authentication/pages-login");
});
Authrouter.get("/pages-404", function(req, res) {
  res.render("Authentication/pages-404");
});
Authrouter.get("/pages-500", function(req, res) {
  res.render("Authentication/pages-500");
});

Authrouter.get("/pages-comingsoon", function(req, res) {
  res.render("Authentication/pages-comingsoon");
});
Authrouter.get("/pages-lock-screen", function(req, res) {
  res.render("Authentication/pages-lock-screen");
});
Authrouter.get("/pages-lock-screen-2", function(req, res) {
  res.render("Authentication/pages-lock-screen-2");
});
Authrouter.get("/pages-login-2", function(req, res) {
  res.render("Authentication/pages-login-2");
});
Authrouter.get("/pages-maintenance", function(req, res) {
  res.render("Authentication/pages-maintenance");
});

Authrouter.get("/pages-recoverpw", function(req, res) {
  res.render("Authentication/pages-recoverpw");
});
Authrouter.get("/pages-recoverpw-2", function(req, res) {
  res.render("Authentication/pages-recoverpw-2");
});
Authrouter.get("/pages-register", function(req, res) {
  res.render("Authentication/pages-register");
});
Authrouter.get("/pages-register-2", function(req, res) {
  res.render("Authentication/pages-register-2");
});

module.exports = Authrouter;
