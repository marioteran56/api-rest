const express = require('express');

function sum(req, res, next) {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    res.send(`${n1} + ${n2} = ${n1 + n2}`);
}

function mult(req, res, next) {
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    res.send(`${n1} * ${n2} = ${n1 * n2}`);
}

function div(req, res, next) {
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    res.send(`${n1} / ${n2} = ${n1 / n2}`);
}

function pow(req, res, next) {
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    res.send(`${n1} ^ ${n2} = ${Math.pow(n1, n2)}`);
}

function sub(req, res, next) {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    res.send(`${n1} - ${n2} = ${n1 - n2}`);
}

module.exports = { sum, mult, div, pow, sub };