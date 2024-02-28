module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './db/database.db'
  },
  useNullAsDefault: true,
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
}