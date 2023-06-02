require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      exec_mode: "cluster",
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        // Add other environment variables from your .env file here
        GA_MEASUREMENT_ID: "G-F7VWJTHCXQ",
        // ...
      },
    },
  ],
};
