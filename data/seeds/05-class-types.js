/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('class_type').insert([
        { type_description: 'lifting'},
        { type_description: 'cycling'},
        { type_description: 'swimming'},
        { type_description: 'yoga'},
      ]);
    });
};
