/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        { name: 'Fulan', email: 'fulan@example.com' },
        { name: 'Fulano', email: 'fulano@example.com' },
        { name: 'Fulana', email: 'fulana@example.com' },
      ])
    })
};
