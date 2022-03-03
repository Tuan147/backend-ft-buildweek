const bycrypt = require('bcrypt');

const hash = bycrypt.hashSync('password', 10);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Spongebob', password: hash, role_id: 1},
        { username: 'Patrick', password: hash, role_id: 1},
        { username: 'Sandy', password: hash, role_id: 2},
        { username: 'Squidward', password: hash, role_id: 2},
      ]);
    });
};
