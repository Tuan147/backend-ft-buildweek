/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class_level').del()
    .then(function () {
      // Inserts seed entries
      return knex('class_level').insert([
        { intensity_level: 'easy' },
        { intensity_level: 'medium' },
        { intensity_level: 'hard' }
      ]);
    });
};
