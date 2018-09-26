const webpack = require('webpack');
const chalk = require('chalk');
const webpack_prod_config = require('./webpack.base.config');

webpack(webpack_prod_config, (err, stats) => {
  if (err) throw err;
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + '\n\n',
  );

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'));
    process.exit(1);
  }

  //integrate knex here
  console.log(chalk.cyan('  Build complete.\n'));
  console.log(
    chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
        "  Opening index.html over file:// won't work.\n",
    ),
  );
  process.exit();
});
