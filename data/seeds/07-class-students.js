/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class_students').del()
    .then(function () {
      // Inserts seed entries
      return knex('class_students').insert([
        { student_id: 3, class_id: 1},
        { student_id: 4, class_id: 2},
        { student_id: 2, class_id: 3},
        { student_id: 1, class_id: 4},
        { student_id: 4, class_id: 1},
        { student_id: 3, class_id: 3},
      ]);
    });
};
