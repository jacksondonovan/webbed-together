'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
	  table.string('password', 60).notNullable()
      table.string('email', 254).notNullable().unique()
	  table.string('phone').unique()
	  table.string('description')
	  table.string('profile_picture')
	  table.json('matches')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
