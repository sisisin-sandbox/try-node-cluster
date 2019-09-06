
module.exports = {
  apps: [
    {
      name: 'API',
      script: 'bin/www',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      // args: 'one two',
      instances: 'max',
      autorestart: true,
      watch: false,
      exec_mode: 'cluster',

      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
