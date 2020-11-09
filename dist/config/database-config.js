"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATABASE_PASSWORD = exports.DATABASE_USER = exports.DATABASE_NAME = exports.HOST_MYSQL = void 0;
const HOST_MYSQL = process.env.HOST_MYSQL || 'localhost';
exports.HOST_MYSQL = HOST_MYSQL;
const DATABASE_NAME = process.env.DATABASE_NAME || 'fifo-server';
exports.DATABASE_NAME = DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER || 'root';
exports.DATABASE_USER = DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '';
exports.DATABASE_PASSWORD = DATABASE_PASSWORD;