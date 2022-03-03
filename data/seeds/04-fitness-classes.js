/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          class_name: 'Pirate Planks',
          class_duration: '1 hour',
          max_class_size: 15,
          class_date: '2021-11-17',
          start_time: '08:00:00',
          class_location: 'The Krusty Krab',
          class_instructor: 1,
          intensity_id: 1,
          type_id: 1,
        },
        {
          class_name: 'Lifting with Larry',
          class_duration: '45 min',
          max_class_size: 12,
          class_date: '2021-12-22',
          start_time: '10:30:00',
          class_location: 'Goo Lagoon',
          class_instructor: 2,
          intensity_id: 1,
          type_id: 2,
        },
        {
          class_name: 'Cycling with Gary the Snail',
          class_duration: '1.5 hours',
          max_class_size: 25,
          class_date: '2021-11-19',
          start_time: '19:00:00',
          class_location: 'The Pineapple',
          class_instructor: 1,
          intensity_id: 3,
          type_id: 3,
        },
        {
          class_name: 'Speed Swimming with Patrick',
          class_duration: '2 hours',
          max_class_size: 10,
          class_date: '2022-01-07',
          start_time: '16:45:00',
          class_location: 'Rock Bottom pools',
          class_instructor: 2,
          intensity_id: 2,
          type_id: 4,
        },
        {
          class_name: 'Pilates with Squilliam',
          class_duration: '30 min',
          max_class_size: 20,
          class_date: '2022-02-08',
          start_time: '18:30:00',
          class_location: 'The Chum Bucket',
          class_instructor: 2,
          intensity_id: 3,
          type_id: 1,
        }
      ]);
    });
};
