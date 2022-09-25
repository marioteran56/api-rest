const express = require('express');

function sumar(req, res, next) {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    res.send(`${n1} + ${n2} = ${n1 + n2}`);
}

function multiplicar(req, res, next) {
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    res.send(`${n1} * ${n2} = ${n1 * n2}`);
}

function dividir(req, res, next) {
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    res.send(`${n1} / ${n2} = ${n1 / n2}`);
}

function potencia(req, res, next) {
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    res.send(`${n1} ^ ${n2} = ${Math.pow(n1, n2)}`);
}

function restar(req, res, next) {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    res.send(`${n1} - ${n2} = ${n1 - n2}`);
}

module.exports = { sumar, multiplicar, dividir, potencia, restar };