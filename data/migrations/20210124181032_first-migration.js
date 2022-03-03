exports.up = async (knex) => {
  await knex.schema
    .createTable("roles", tbl => {
      tbl.increments("role_id");
      tbl.string("role_type", 128).notNullable().unique();
    })
    .createTable("users", tbl => {
      tbl.increments("user_id");
      tbl.string("username", 200).notNullable().unique();
      tbl.string("password", 200).notNullable();
      tbl.integer("role_id").notNullable()
        .unsigned()
        .notNullable()
        .references("role_id")
        .inTable("user_role")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      tbl.timestamps(false, true);
    })
    .createTable("class_level", tbl => {
      tbl.increments("level_id");
      tbl.string("difficulty").notNullable().unique()
    })
    .createTable("class_type", tbl => {
      tbl.increments("type_id")
      tbl.string("type_description", 128).notNullable().unique()
    })
    .createTable("classes", tbl => {
      tbl.increments("class_id")
      tbl.string("class_name", 128).notNullable()
      tbl.string("class_duration", 128).notNullable()
      tbl.integer("max_class_size").notNullable()
      tbl.date("class_date").notNullable()
      tbl.time("start_time").notNullable()
      tbl.string("class_location", 128).notNullable()
      tbl.integer("class_instructor").notNullable()
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      tbl.integer("level_id").notNullable()
        .unsigned()
        .notNullable()
        .references("level_id")
        .inTable("class_level")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT")
      tbl.integer("type_id").notNullable()
        .unsigned()
        .notNullable()
        .references("type_id")
        .inTable("class_type")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT")
    })
    .createTable("class_students", tbl => {
      tbl.increments("class_student_id")
      tbl.integer("student_id").notNullable()
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      tbl.integer("class_id").notNullable()
      .unsigned()
      .notNullable()
      .references("class_id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    })
};

exports.down = async (knex) => {
  return knex.schema
  .dropTableIfExists("class_students")
  .dropTableIfExists("classes")
  .dropTableIfExists("class_type")
  .dropTableIfExists("class_level")
  .dropTableIfExists("users")
  .dropTableIfExists("roles")
};