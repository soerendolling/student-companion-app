const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        buddies: resolve(__dirname, 'code-buddys.html'),
        teams: resolve(__dirname, 'teams.html'),
        energy: resolve(__dirname, 'energy.html'),
      },
    },
  },
}
