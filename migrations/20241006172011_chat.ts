import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  knex.schema.alterTable('users', (table) => {
    table.string('avatar')
  })

  knex.schema.alterTable('messages', (table) => {
    table.bigint('createdAt')
    table.bigint('userId').references('id').inTable('users')
  })
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.alterTable('users', (table) => {
    table.dropColumn('avatar')
  })

  knex.schema.alterTable('messages', (table) => {
    table.dropColumn('createdAt')
    table.dropColumn('userId')
  })
}