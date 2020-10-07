const knex = require('../knexConfig')

async function drop(table){
  await knex.raw(`DROP TABLE IF EXISTS ${table};`)
}

async function truncate(){
  await drop('products')
  await drop('migrations')
  await drop('migrations_lock')
  await knex.migrate.latest()
  await knex.seed.run()
  await knex.destroy()
}

truncate()
