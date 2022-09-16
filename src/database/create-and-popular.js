import sqlite3 from "sqlite3";
sqlite3.verbose();
const db = new sqlite3.Database("cafeteria.db");

const BEBIDASQUENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "BEBIDASQUENTES" (
    "idProduto" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nomeProduto" text,
    "imagem" text,
    "descricao" text,
    "valor" real,
    "adicional" text
  );
`;

const BEBIDASGELADAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "BEBIDASGELADAS" (
    "idProduto" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nomeProduto" text,
    "imagem" text,
    "descricao" text,
    "valor" real,
    "adicional" text
  );
`;

const PADARIA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PADARIA" (
    "idProduto" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nomeProduto" text,
    "imagem" text,
    "descricao" text,
    "valor" real,
    "adicional" text
  );
`;

const DOCES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "DOCES" (
    "idProduto" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nomeProduto" text,
    "imagem" text,
    "descricao" text,
    "valor" real,
    "adicional" text
  );
`;

const STORE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "STORE" (
    "idProduto" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nomeProduto" text,
    "imagem" text,
    "descricao" text,
    "valor" real,
    "adicional" text
  );
`;

const BEBIDASQUENTES_ADD_DATA = `
INSERT INTO BEBIDASQUENTES (idProduto, nomeProduto, imagem, descricao, valor, adicional)
VALUES 
    (01, 'Expresso', 'imagem01', 'descrição01', 'R$ 1,00', 'Não'),
    (02, 'Café com Leite', 'imagem02', 'descrição02', 'R$ 5,00', 'Sim')
`;

const BEBIDASGELADAS_ADD_DATA = `
INSERT INTO BEBIDASGELADAS (idProduto, nomeProduto, imagem, descricao, valor, adicional)
VALUES 
    (04, 'Expresso Gelado', 'imagem01', 'descrição01', 'R$ 1,00', 'Não'),
    (05, 'Milkshake', 'imagem02', 'descrição02', 'R$ 5,00', 'Sim')
`;

const PADARIA_ADD_DATA = `
INSERT INTO PADARIA (idProduto, nomeProduto, imagem, descricao, valor, adicional)
VALUES 
    (03, 'Pão Frances', 'imagem01', 'descrição01', 'R$ 1,00', 'Não'),
    (06, 'Cookie', 'imagem02', 'descrição02', 'R$ 5,00', 'Sim')
`;

const DOCES_ADD_DATA = `
INSERT INTO DOCES (idProduto, nomeProduto, imagem, descricao, valor, adicional)
VALUES 
    (07, 'Brigadeiro', 'imagem01', 'descrição01', 'R$ 1,00', 'Não'),
    (08, 'Pudim', 'imagem02', 'descrição02', 'R$ 5,00', 'Sim')
`;

const STORE_ADD_DATA = `
INSERT INTO STORE (idProduto, nomeProduto, imagem, descricao, valor, adicional)
VALUES 
    (09, 'Avental', 'imagem01', 'descrição01', 'R$ 1,00', 'Não'),
    (10, 'Boné', 'imagem02', 'descrição02', 'R$ 5,00', 'Sim')
`;


function criaTabelaBebidasQuentes() {
    db.run(BEBIDASQUENTES_SCHEMA, (error) => {
        if (error)
            console.log(`Erro na criação da tabela de bebidas quentes: ${error.message}`);
    });
}

function populaTabelaBebidasQuentes() {
    db.run(BEBIDASQUENTES_ADD_DATA, (error) => {
        if (error)
            console.log(`Erro ao popular a tabela de bebidas quentes:  ${error.message}`)
    });
}

function criaTabelaBebidasGeladas() {
    db.run(BEBIDASGELADAS_SCHEMA, (error) => {
        if (error)
            console.log(`Erro na criação da tabela de bebidas geladas: ${error.message}`);
    });
}

function populaTabelaBebidasGeladas() {
    db.run(BEBIDASGELADAS_ADD_DATA, (error) => {
        if (error)
            console.log(`Erro ao popular a tabela de bebidas geladas:  ${error.message}`)
    });
}

function criaTabelaPadaria() {
    db.run(PADARIA_SCHEMA, (error) => {
        if (error)
            console.log(`Erro na criação da tabela de padaria: ${error.message}`);
    });
}

function populaTabelaPadaria() {
    db.run(PADARIA_ADD_DATA, (error) => {
        if (error)
            console.log(`Erro ao popular a tabela de padaria:  ${error.message}`)
    });
}

function criaTabelaDoces() {
    db.run(DOCES_SCHEMA, (error) => {
        if (error)
            console.log(`Erro na criação da tabela de doces: ${error.message}`);
    });
}

function populaTabelaDoces() {
    db.run(DOCES_ADD_DATA, (error) => {
        if (error)
            console.log(`Erro ao popular a tabela de doces:  ${error.message}`)
    });
}

function criaTabelaStore() {
    db.run(STORE_SCHEMA, (error) => {
        if (error)
            console.log(`Erro na criação da tabela de store: ${error.message}`);
    });
}

function populaTabelaStore() {
    db.run(STORE_ADD_DATA, (error) => {
        if (error)
            console.log(`Erro ao popular a tabela de store:  ${error.message}`)
    });
}

const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "dataPedido" text,
    "nomeCliente" text,
    "cpfCliente" text,
    "formaDeEntrega" text, 
    "valorTotal" real,
    "statusPagamento" text,
    "statusPedido" text
  );
`;

const PEDIDOS_ADD_DATA = `
INSERT INTO PEDIDOS (id, dataPedido, nomeCliente, cpfCliente, formaDeEntrega, valorTotal, statusPagamento, statusPedido)
VALUES 
(1, '16/09/2022', 'Adriano Silva', '24456634405', 'mesa', 'R$ 250', 'pago', 'preparando'),
(2, '15/09/2022', 'Olivia Rogéria', '48576088207', 'delivery', 'R$ 15,00', 'pago', 'entregue')
`

function criaTabelaPedidos() {
    db.run(PEDIDOS_SCHEMA, (error) => {
        if (error)
            console.log(`Erro na criação da tabela pedidos: ${error.message}`);
    });
}

function populaTabelaPedidos() {
    db.run(PEDIDOS_ADD_DATA, (error) => {
        if (error) console.log("Erro ao popular a tabela de pedidos")
    })
}

db.serialize(() => {
    criaTabelaBebidasQuentes()
    populaTabelaBebidasQuentes()
    criaTabelaBebidasGeladas()
    populaTabelaBebidasGeladas()
    criaTabelaPadaria()
    populaTabelaPadaria()
    criaTabelaDoces()
    populaTabelaDoces()
    criaTabelaStore()
    populaTabelaStore()
    criaTabelaPedidos()
    populaTabelaPedidos()
})
