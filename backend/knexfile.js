// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'sagitta',
      user:     'sagitta',
      password: 'root'
    },

    migrations: {
      tableName: 'migrations',
      directory: `${__dirname}/src/database/migrations`
    },

    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }

};
