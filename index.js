var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],

    // Bright color
    blackBright: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39],
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],

    // Bright color
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49],
  },
};

module.exports = {
  get: function get(style, inp, n) {
    if (n == 0) {
      return `\u001B[${styles[style][inp][n]}m\u001B[${styles["modifier"]["bold"][0]}m`;
    } else if (n == 1) {
      return `\u001B[${styles["modifier"]["bold"][1]}m\u001B[${styles[style][inp][n]}m`;
    }
  },
  auto: {
    id: {
      success: function success(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input dibutuhkan!'));

        return console.log(
          module.exports.get("color", "green", 0) +
            "[ SUKSES ]" +
            module.exports.get("color", "green", 1),
          inp
        );
      },
      error: function error(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input dibutuhkan!'));

        return console.log(
          module.exports.get("color", "red", 0) +
            "[ EROR ]" +
            module.exports.get("color", "red", 1),
          inp
        );
      },
      info: function info(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input dibutuhkan!'));

        return console.log(
          module.exports.get("color", "cyan", 0) +
            "[ INFO ]" +
            module.exports.get("color", "cyan", 1),
          inp
        );
      },
      warn: function warn(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input dibutuhkan!'));

        return console.log(
          module.exports.get("color", "yellow", 0) +
            "[ PERINGATAN ]" +
            module.exports.get("color", "yellow", 1),
          inp
        );
      },
    },
    en: {
      success: function success(inp) {
        if (!inp)
          throw new Error(module.exports.manual.en.error('input required!'));

        return console.log(
          module.exports.get("color", "green", 0) +
            "[ SUCCESS ]" +
            module.exports.get("color", "green", 1),
          inp
        );
      },
      error: function error(inp) {
        if (!inp)
          throw new Error(module.exports.manual.en.error('input required!'));

        return console.log(
          module.exports.get("color", "red", 0) +
            "[ ERROR ]" +
            module.exports.get("color", "red", 1),
          inp
        );
      },
      info: function info(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input required!'));

        return console.log(
          module.exports.get("color", "cyan", 0) +
            "[ INFO ]" +
            module.exports.get("color", "cyan", 1),
          inp
        );
      },
      warn: function warn(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input required!'));

        return console.log(
          module.exports.get("color", "yellow", 0) +
            "[ WARN ]" +
            module.exports.get("color", "yellow", 1),
          inp
        );
      },
    },
  },
  manual: {
    id: {
      success: function success(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input dibutuhkan!'));

        return module.exports.get("color", "green", 0) + "[ SUKSES ]" + module.exports.get("color", "green", 1) + ' ' + inp
      },
      error: function error(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input dibutuhkan!'));

        return module.exports.get("color", "red", 0) + "[ EROR ]" + module.exports.get("color", "red", 1) + ' ' + inp
      },
      info: function info(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input dibutuhkan!'));

        return module.exports.get("color", "cyan", 0) + "[ INFO ]" + module.exports.get("color", "cyan", 1) + ' ' + inp
      },
      warn: function warn(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input dibutuhkan!'));

        return module.exports.get("color", "yellow", 0) + "[ PERINGATAN ]" + module.exports.get("color", "yellow", 1) + ' ' + inp
      },
    },
    en: {
      success: function success(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input required!'));

        return module.exports.get("color", "green", 0) + "[ SUCCESS ]" + module.exports.get("color", "green", 1) + ' ' + inp
      },
      error: function error(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input required!'));

        return module.exports.get("color", "red", 0) + "[ ERROR ]" + module.exports.get("color", "red", 1) + ' ' + inp
      },
      info: function info(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input required!'));

        return module.exports.get("color", "cyan", 0) + "[ INFO ]" + module.exports.get("color", "cyan", 1) + ' ' + inp
      },
      warn: function warn(inp) {
        if (!inp)
          throw new Error(module.exports.manual.id.error('input required!'));

        return module.exports.get("color", "yellow", 0) + "[ WARN ]" + module.exports.get("color", "yellow", 1) + ' ' + inp
      },
    }
  }
};
