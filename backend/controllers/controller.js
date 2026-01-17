const express = require("express");
const app = express();
const dress = require("../womanProducts/dress");
const Wjeans = require("../womanProducts/jeans");
const Mjeans = require("../manProducts/jeans");
const tops = require("../womanProducts/tops");
const lehenga = require("../womanProducts/lehenga");
const lehengaCholi = require("../womanProducts/lehengaCholi");
const gouns = require("../womanProducts/gouns");
const shirts = require("../manProducts/shirts");
const pants = require("../manProducts/pants");
const shoes = require("../manProducts/shoes");
const kurta = require("../manProducts/kurtas");
// const tops = require('../womanProducts/tops');

exports.getDress = async (req, res) => {
  try {
    await res.json(dress);
  } catch (err) {
    res.json({ message: "error " });
  }
};

exports.getWomanJeans = async (req, res) => {
  try {
    await res.json(Wjeans);
  } catch (err) {
    res.json({ message: "error " });
  }
};

exports.getTops = async (req, res) => {
  try {
    res.json(tops);
  } catch (err) {
    console.log(err);
  }
};

exports.getTops = async (req, res) => {
  try {
    res.json(tops);
  } catch (err) {
    console.log(err);
  }
};
exports.getGouns = async (req, res) => {
  try {
    res.json(gouns);
  } catch (err) {
    console.log(err);
  }
};
exports.getLehenga = async (req, res) => {
  try {
    res.json(lehenga);
  } catch (err) {
    console.log(err);
  }
};
exports.getLehengaCholi = async (req, res) => {
  try {
    res.json(lehengaCholi);
  } catch (err) {
    console.log(err);
  }
};

exports.getShirts = async (req, res) => {
  try {
    res.json(shirts);
  } catch (err) {
    console.log(err);
  }
};
exports.getPants = async (req, res) => {
  try {
    res.json(pants);
  } catch (err) {
    console.log(err);
  }
};
exports.getShoes = async (req, res) => {
  try {
    res.json(shoes);
  } catch (err) {
    console.log(err);
  }
};
exports.getKurta = async (req, res) => {
  try {
    res.json(kurta);
  } catch (err) {
    console.log(err);
  }
};
exports.getManJeans = async (req, res) => {
  try {
    await res.json(Mjeans);
  } catch (err) {
    res.json({ message: "error " });
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await [
      dress,
      Wjeans,
      Mjeans,
      tops,
      lehenga,
      lehengaCholi,
      gouns,
      shirts,
      pants,
      shoes,
      kurta,
    ];
    res.json(allProducts);
  } catch (err) {
    res.json({ message: "error" });
  }
};
