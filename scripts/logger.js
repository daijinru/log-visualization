const chalk = require('chalk');
const stripAnsi = require('strip-ansi');

const format = (label, msg) => {
  return msg.split('\n').map((line, i) => {
    return i === 0
      ? `${label} ${line}`
      : line.padStart(stripAnsi(label).length)
  }).join('\n')
}
const chalkTag = msg => chalk.bgBlackBright.white.dim(` ${msg} `)

module.exports = {
  info (msg = '', tag = null) {
    console.log(format(chalk.bgBlue.black(' INFO ') + (tag ? chalkTag(tag) : ''), msg));
  },
  done (msg = '', tag = null) {
    console.log(format(chalk.bgGreen.black(' DONE ') + (tag ? chalkTag(tag) : ''), msg));
  },
  warn (msg = '', tag = null) {
    console.warn(format(chalk.bgYellow.black(' WARN ') + (tag ? chalkTag(tag) : ''), chalk.yellow(msg)))
  },
  error (msg = '', tag = null) {
    console.error(format(chalk.bgRed(' ERROR ') + (tag ? chalkTag(tag) : ''), chalk.red(msg)));
    if (msg instanceof Error) {
      console.error(msg.stack);
    }
  }
}
