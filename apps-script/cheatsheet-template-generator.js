// common singleton object for config values so that we can
// construct these in memory once.
var Config = (function () {
  var instance;

  function createInstance() {
    var object = {
      defaultFont: 'Cambria',
      cheatsheetName: 'cheatsheet generated',
      // start position for each key row
      keyrowStartPos: {
        0: [6, 3],
        1: [11, 3],
        2: [13, 3],
        3: [16, 12],
        4: [18, 12],
        5: [21, 14],
        6: [23, 14],
        7: [26, 16],
        8: [28, 16],
      },
      // change colors to your heart's content
      // c: command
      // m: motion
      // o: operator
      // x: extra
      /*
      cheatsheetColors: {
        'c': 'light blue 1',
        'm': 'light magenta 1',
        'o': 'light orange 1',
        'x': 'light gray 1',
      },
      */
      entersInsertModeColor: 'red',
      cheatsheetColors: {
        'c': 'light yellow 1',
        'm': 'light green 1',
        'o': 'light orange 1',
        'x': 'light gray 2',
      },
      qwertyKeyboard: [
        ['Esc'],
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
      ],
      colemakKeyboard: [
        ['Esc'],
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
        ['Q', 'W', 'F', 'P', 'G', 'J', 'L', 'U', 'Y', ':', '{', '}'],
        ['q', 'w', 'f', 'p', 'g', 'j', 'l', 'u', 'y', ';', '[', ']'],
        ['A', 'R', 'S', 'T', 'D', 'H', 'N', 'E', 'I', 'O', '"', '|'],
        ['a', 'r', 's', 't', 'd', 'h', 'n', 'e', 'i', 'o', "'", '\\'],
        ['Z', 'X', 'C', 'V', 'B', 'K', 'M', '<', '>', '?'],
        ['z', 'x', 'c', 'v', 'b', 'k', 'm', ',', '.', '/'],
      ],
      dvorakKeyboard: [
        ['Esc'],
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}'],
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '[', ']'],
        ['"', '<', '>', 'P', 'Y', 'F', 'G', 'C', 'R', 'L', '?', '+'],
        ["'", ',', '.', 'p', 'y', 'f', 'g', 'c', 'r', 'l', '/', '='],
        ['A', 'O', 'E', 'U', 'I', 'D', 'H', 'T', 'N', 'S', '_', '|'],
        ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's', '-', '\\'],
        [':', 'Q', 'J', 'K', 'X', 'B', 'M', 'W', 'V', 'Z'],
        [';', 'q', 'j', 'k', 'x', 'b', 'm', 'w', 'v', 'z'],
      ],
      lessons: [
        {
          name: 'lesson 1 - basic editing',
          keys: ['Esc', '$', '^', '0', 'W', 'E', 'R', 'w', 'e', 'u', 'i', 'A', ':', 'X', 'B', 'x', 'b'],
        },
        {
          name: 'lesson 2 - operators and repitition',
          keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 't', 'd', 'F', 'f', 'c', 'v', 'V', '.'],
        },
        {
          name: 'lesson 3 - yank & paste',
          keys: ['y', 'O', 'o', 'P', 'p', '"'],
        },
        {
          name: 'lesson 4 - searching',
          keys: ['#', '*', 'N', 'n', '?', '/'],
        },
        {
          name: 'lesson 5 - marks & macros',
          keys: ['`', '@', 'q', "'", 'm'],
        },
        {
          name: 'lesson 6 - various motions',
          keys: ['%', '(', ')', '-', '+', '{', '}', '[', ']', 'G', 'H', 'K', 'L', 'M'],
        },
        {
          name: 'lesson 7 - various commands',
          keys: ['~', '=', 'r', 'Y', 'S', 's', 'D', 'J', 'C', '<', '>'],
          notes: [
            {
              title: 'Basics:',
              notes: [
                '[J] joins the current line with the next one, or all the lines in the',
                'current visual selection.',
                '',
                '[r] followed by any character replaces the current character with',
                'that one.',
                '',
                '[C] is shorthand for [c][$], changes to end of line.',
                '',
                '[D] is shorthand for [d][$], deletes to end of line.',
                '',
                '[Y] is shorthand for	[y][y], yanks the whole line.',
                '',
                '[s] deletes the character under the cursor and enters insert mode.',
                '',
                '[S] clears the current line and enters insert mode.',
              ],
            },
            {
              title: 'Extras:',
              notes: [
                '[>] and a motion to indent one or more lines.',
                '',
                '[<] and a motion to unindent',
                '',
                '[=] and a motion to reformat a range of text.',
                '',
                'All of them work in visual mode, or can be repeated ([>][>], etc...)',
                'to operate on the current line.',
                '',
                '[~] toggles the case of the character under the cursor.',
                '',
                '',
                'Now go grab the full cheat sheet and learn the rest.',
                'Start with [I][a][,] and [;]. Piece of cake!',
              ],
            },
          ],
        },
      ],
      gsheetsNamedColors: {
        'black': '#000',
        'dark gray 4': '#444',
        'dark gray 3': '#666',
        'dark gray 2': '#999',
        'dark gray 1': '#b7b7b7',
        'gray': '#ccc',
        'light gray 1': '#d9d9d9',
        'light gray 2': '#efefef',
        'light gray 3': '#f3f3f3',
        'white': '#fff',
        'red berry': '#980000',
        'red': '#f00',
        'orange': '#f90',
        'yellow': '#ff0',
        'green': '#0f0',
        'cyan': '#0ff',
        'cornflower blue': '#4a86e8',
        'blue': '#00f',
        'purple': '#90f',
        'magenta': '#f0f',
        'light red berry 3': '#e6b8af',
        'light red 3': '#f4cccc',
        'light orange 3': '#fce5cd',
        'light yellow 3': '#fff2cc',
        'light green 3': '#d9ead3',
        'light cyan 3': '#d0e0e3',
        'light cornflower blue 3': '#c9daf8',
        'light blue 3': '#cfe2f3',
        'light purple 3': '#d9d2e9',
        'light magenta 3': '#ead1dc',
        'light red berry 2': '#dd7e6b',
        'light red 2': '#ea9999',
        'light orange 2': '#f9cb9c',
        'light yellow 1': '#ffd966',
        'light green 2': '#b6d7a8',
        'light cyan 2': '#a2c4c9',
        'light cornflower blue 2': '#a4c2f4',
        'light blue 2': '#9fc5e8',
        'light purple 2': '#b4a7d6',
        'light magenta 2': '#d5a6bd',
        'light red berry 1': '#cc4125',
        'light red 1': '#e06666',
        'light orange 1': '#f6b26b',
        'light yellow 2': '#ffe599',
        'light green 1': '#93c47d',
        'light cyan 1': '#76a5af',
        'light cornflower blue 1': '#6d9eeb',
        'light blue 1': '#6fa8dc',
        'light purple 1': '#8e7cc3',
        'light magenta 1': '#c27ba0',
        'dark red berry 1': '#a61c00',
        'dark red 1': '#c00',
        'dark orange 1': '#e69138',
        'dark yellow 1': '#f1c232',
        'dark green 1': '#6aa84f',
        'dark cyan 1': '#45818e',
        'dark cornflower blue 1': '#3c78d8',
        'dark blue 1': '#3d85c6',
        'dark purple 1': '#674ea7',
        'dark magenta 1': '#a64d79',
        'dark red berry 2': '#85200c',
        'dark red 2': '#900',
        'dark orange 2': '#b45f06',
        'dark yellow 2': '#bf9000',
        'dark green 2': '#38761d',
        'dark cyan 2': '#134f5c',
        'dark cornflower blue 2': '#15c',
        'dark blue 2': '#0b5394',
        'dark purple 2': '#351c75',
        'dark magenta 2': '#741b47',
        'dark red berry 3': '#5b0f00',
        'dark red 3': '#600',
        'dark orange 3': '#783f04',
        'dark yellow 3': '#7f6000',
        'dark green 3': '#274e13',
        'dark cyan 3': '#0c343d',
        'dark cornflower blue 3': '#1c4587',
        'dark blue 3': '#073763',
        'dark purple 3': '#20124d',
        'dark magenta 3': '#4c1130',
      },
    };
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();


function main() {
  var config = Config.getInstance();
  var sheet = getSheet(config.cheatsheetName);
  var keyboard = config.colemakKeyboard
  vimkeys = getVimKeys(keyboard);

  for (var i = 0; i < vimkeys.length; i++) {
    var keyrow = vimkeys[i];
    for (var j = 0; j < keyrow.length; j++) {
      var key = keyrow[j];
      createKey(sheet, key);
    }
  }
}


function createKey(sheet, key) {
  var config = Config.getInstance();
  var startPos = Config.getInstance().keyrowStartPos;
  var cheatsheetTheme = Config.getInstance().cheatsheetColors;
  var gsheetsColors = config.gsheetsNamedColors;
  var keycolor = gsheetsColors[cheatsheetTheme[key.type]];

  var pos = startPos[key.row];
  var cellrow = pos[0];
  var cellcol = pos[1] + (key.col * 7);

  // set up the key text and merge
  var keyname;
  var keytext;
  var hasFootnote = (typeof (key.footnote) !== 'undefined');
  if (key.isSingleUseKey) {
    keyname = sheet.getRange(cellrow, cellcol, 2, 6);
    keytext = sheet.getRange(cellrow + 2, cellcol + 2, 2, 4 - (hasFootnote ? 1 : 0));

    var keyname_spacer = sheet.getRange(cellrow + 2, cellcol, 2, 2);
    keyname_spacer.merge();

    keyname.setHorizontalAlignment("left");
  }
  else {
    keyname = sheet.getRange(cellrow, cellcol, 2, 2);
    keytext = sheet.getRange(cellrow, cellcol + 2, 2, 4 - (hasFootnote ? 1 : 0));

    keyname.setHorizontalAlignment("center");
  }

  // key name
  keyname.merge();
  var name = "'" + key.name;
  if (key.argument) {
    name += "·";
  }
  keyname.setValue(name);
  keyname.setFontSize(22);
  keyname.setVerticalAlignment("middle");
  if (key.entersInsertMode) {
    var insmdColor = config.gsheetsNamedColors[config.entersInsertModeColor];
    keyname.setFontColor(insmdColor);
  }

  // key text
  keytext.merge();
  var size = (typeof (key.size) === 'undefined' ? '' : key.size);
  if (size == 'bigger') {
    keytext.setFontSize(18);
  }
  else {
    keytext.setFontSize(10);
  }
  keytext.setValue("'" + key.text);
  keytext.setVerticalAlignment("middle");
  keytext.setHorizontalAlignment("center");
  keytext.setFontWeight("bold");

  // footnote
  if (hasFootnote) {
    var footnote = sheet.getRange(cellrow, cellcol + 5, 1, 1);
    footnote.setValue(key.footnote);
    footnote.setFontSize(8);
    footnote.setFontWeight('bold');
    footnote.setFontColor(config.gsheetsNamedColors['dark red 1']);
    footnote.setHorizontalAlignment("right");
    footnote.setVerticalAlignment("middle");
  }

  // make the whole key area and color it in
  var keyarea;
  if (key.isSingleUseKey) {
    // ex: Escape key
    keyarea = sheet.getRange(cellrow, cellcol, 4, 6);
  }
  else {
    keyarea = sheet.getRange(cellrow, cellcol, 2, 6);
  }
  keyarea.setBackground(keycolor);
  keyarea.setBorder(true, true, true, true, false, false, "black", SpreadsheetApp.BorderStyle.SOLID_THICK);
}


function getSheet(name) {
  // gets sheet named 'name' or makes one if it's not there already
  config = Config.getInstance();
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(name);
  if (sheet != null) {
    spreadsheet.deleteSheet(sheet)
  }
  sheet = spreadsheet.insertSheet();
  sheet.setName(name);

  totalCols = sheet.getMaxColumns();
  desiredCols = 98;
  if (totalCols < desiredCols) {
    sheet.insertColumns(totalCols, desiredCols - totalCols);
  }
  sheet.setColumnWidths(1, desiredCols, 18);
  sheet.setRowHeights(1, 58, 20);

  allCells = sheet.getRange(1, 1, 58, sheet.getMaxColumns())
  allCells.setFontFamily(config.defaultFont);

  return sheet;
}


function getVimKeys(keyboard_keys) {
  var vimkeys = {
    // top row
    'Esc': { 'name': 'Esc', 'type': 'c', 'text': 'normal\nmode', isSingleUseKey: true },
    // number row
    '~': { 'name': '~', 'type': 'c', 'text': 'toggle\ncase' },
    '`': { 'name': '`', 'type': 'm', 'text': 'goto\nmark', 'argument': true },
    '!': { 'name': '!', 'type': 'o', 'text': 'external\nfilter' },
    '1': { 'name': '1', 'type': 'x', 'text': '', 'footnote': '2' },
    '@': { 'name': '@', 'type': 'c', 'text': 'play\nmacro', 'argument': true },
    '2': { 'name': '2', 'type': 'x', 'text': '' },
    '#': { 'name': '#', 'type': 'm', 'text': 'prev\nident' },
    '3': { 'name': '3', 'type': 'x', 'text': '' },
    '$': { 'name': '$', 'type': 'm', 'text': 'eol' },
    '4': { 'name': '4', 'type': 'x', 'text': '' },
    '%': { 'name': '%', 'type': 'm', 'text': 'goto\nmatch' },
    '5': { 'name': '5', 'type': 'x', 'text': '' },
    '^': { 'name': '^', 'type': 'm', 'text': '"soft"\nbol' },
    '6': { 'name': '6', 'type': 'x', 'text': '' },
    '&': { 'name': '&', 'type': 'c', 'text': 'repeat\n:s' },
    '7': { 'name': '7', 'type': 'x', 'text': '' },
    '*': { 'name': '*', 'type': 'm', 'text': 'next\nident' },
    '8': { 'name': '8', 'type': 'x', 'text': '' },
    '(': { 'name': '(', 'type': 'm', 'text': 'begin\nsentence' },
    '9': { 'name': '9', 'type': 'x', 'text': '' },
    ')': { 'name': ')', 'type': 'm', 'text': 'end\nsentence' },
    '0': { 'name': '0', 'type': 'm', 'text': '"hard"\nbol' },
    '_': { 'name': '_', 'type': 'm', 'text': '"soft" bol\ndown' },
    '-': { 'name': '-', 'type': 'm', 'text': 'prev\nline' },
    '+': { 'name': '+', 'type': 'm', 'text': 'next\nline', 'footnote': '' },
    '=': { 'name': '=', 'type': 'o', 'text': 'auto\nformat', 'footnote': '3' },
    // letter row Q
    'Q': { 'name': 'Q', 'type': 'c', 'text': 'ex\nmode' },
    'q': { 'name': 'q', 'type': 'c', 'text': 'record\nmacro', 'argument': true },
    'W': { 'name': 'W', 'type': 'm', 'text': 'next\nWORD' },
    'w': { 'name': 'w', 'type': 'm', 'text': 'next\nword' },
    'E': { 'name': 'E', 'type': 'm', 'text': 'end\nWORD' },
    'e': { 'name': 'e', 'type': 'm', 'text': 'end\nword' },
    'R': { 'name': 'R', 'type': 'c', 'text': 'replace\nmode', 'entersInsertMode': true },
    'r': { 'name': 'r', 'type': 'c', 'text': 'replace\nchar', 'argument': true },
    'T': { 'name': 'T', 'type': 'm', 'text': "back\n'till", 'argument': true },
    't': { 'name': 't', 'type': 'm', 'text': "'till", 'argument': true },
    'Y': { 'name': 'Y', 'type': 'c', 'text': 'yank\nline', 'footnote': '' },
    'y': { 'name': 'y', 'type': 'o', 'text': 'yank', 'footnote': '1,3' },
    'U': { 'name': 'U', 'type': 'c', 'text': 'undo\nline' },
    'u': { 'name': 'u', 'type': 'c', 'text': 'undo' },
    'I': { 'name': 'I', 'type': 'c', 'text': 'insert\nat bol', 'entersInsertMode': true },
    'i': { 'name': 'i', 'type': 'c', 'text': 'insert\nmode', 'entersInsertMode': true },
    'O': { 'name': 'O', 'type': 'c', 'text': 'open ln\nabove', 'entersInsertMode': true },
    'o': { 'name': 'o', 'type': 'c', 'text': 'open ln\nbelow', 'entersInsertMode': true },
    'P': { 'name': 'P', 'type': 'c', 'text': 'paste\nbefore', 'footnote': '' },
    'p': { 'name': 'p', 'type': 'c', 'text': 'paste\nafter', 'footnote': '1' },
    '{': { 'name': '{', 'type': 'm', 'text': 'begin\nparag.' },
    '[': { 'name': '[', 'type': 'm', 'text': 'misc', 'argument': true },
    '}': { 'name': '}', 'type': 'm', 'text': 'end\nparag.' },
    ']': { 'name': ']', 'type': 'm', 'text': 'misc', 'argument': true },
    // letter row A
    'A': { 'name': 'A', 'type': 'c', 'text': 'append\nat eol', 'entersInsertMode': true },
    'a': { 'name': 'a', 'type': 'c', 'text': 'append', 'entersInsertMode': true },
    'S': { 'name': 'S', 'type': 'c', 'text': 'subst\nline', 'entersInsertMode': true },
    's': { 'name': 's', 'type': 'c', 'text': 'subst\nchar', 'entersInsertMode': true },
    'D': { 'name': 'D', 'type': 'c', 'text': 'delete\nto eol', 'footnote': '' },
    'd': { 'name': 'd', 'type': 'o', 'text': 'delete', 'footnote': '1,3' },
    'F': { 'name': 'F', 'type': 'm', 'text': '"back"\nfind char' },
    'f': { 'name': 'f', 'type': 'm', 'text': 'find\nchar' },
    'G': { 'name': 'G', 'type': 'm', 'text': 'eof/\ngoto line', 'footnote': '' },
    'g': { 'name': 'g', 'type': 'x', 'text': 'extra\ncmds', 'footnote': '6' },
    'H': { 'name': 'H', 'type': 'm', 'text': 'screen\ntop' },
    'h': { 'name': 'h', 'type': 'm', 'text': '←', 'size': 'bigger' },
    'J': { 'name': 'J', 'type': 'c', 'text': 'join\nlines' },
    'j': { 'name': 'j', 'type': 'm', 'text': '↓', 'size': 'bigger' },
    'K': { 'name': 'K', 'type': 'c', 'text': 'help' },
    'k': { 'name': 'k', 'type': 'm', 'text': '↑', 'size': 'bigger' },
    'L': { 'name': 'L', 'type': 'm', 'text': 'screen\nbottom' },
    'l': { 'name': 'l', 'type': 'm', 'text': '→', 'size': 'bigger' },
    ':': { 'name': ':', 'type': 'c', 'text': 'ex cmd\nline' },
    ';': { 'name': ';', 'type': 'm', 'text': 'repeat\nt/T/f/F' },
    '"': { 'name': '"', 'type': 'x', 'text': 'reg.\nspec', 'argument': true, 'footnote': '1' },
    "'": { 'name': "'", 'type': 'm', 'text': 'goto\nmk. bol', 'argument': true, 'footnote': '' },
    '|': { 'name': '|', 'type': 'm', 'text': 'bol/\ngoto col' },
    '\\': { 'name': '\\', 'type': 'x', 'text': 'leader', 'argument': true },
    // letter row Z
    'Z': { 'name': 'Z', 'type': 'x', 'text': 'quit', 'argument': true, 'footnote': '4' },
    'z': { 'name': 'z', 'type': 'x', 'text': 'extra\ncmds', 'argument': true, 'footnote': '5' },
    'X': { 'name': 'X', 'type': 'c', 'text': 'back-\nspace' },
    'x': { 'name': 'x', 'type': 'c', 'text': 'delete\nchar' },
    'C': { 'name': 'C', 'type': 'c', 'text': 'change\nto eol', 'entersInsertMode': true, 'footnote': '1,3' },
    'c': { 'name': 'c', 'type': 'o', 'text': 'change', 'entersInsertMode': true, 'footnote': '' },
    'V': { 'name': 'V', 'type': 'c', 'text': 'visual\nlines' },
    'v': { 'name': 'v', 'type': 'c', 'text': 'visual\nmode' },
    'B': { 'name': 'B', 'type': 'm', 'text': 'back\nWORD' },
    'b': { 'name': 'b', 'type': 'm', 'text': 'back\nword' },
    'N': { 'name': 'N', 'type': 'm', 'text': 'prev\n(find)' },
    'n': { 'name': 'n', 'type': 'm', 'text': 'next\n(find)' },
    'M': { 'name': 'M', 'type': 'm', 'text': "screen\nmid'l" },
    'm': { 'name': 'm', 'type': 'c', 'text': 'set\nmark', 'argument': true },
    '<': { 'name': '<', 'type': 'o', 'text': 'un-\nindent', 'footnote': '3' },
    ',': { 'name': ',', 'type': 'm', 'text': 'reverse\nt/T/f/F', 'footnote': '' },
    '>': { 'name': '>', 'type': 'o', 'text': 'indent', 'footnote': '3' },
    '.': { 'name': '.', 'type': 'c', 'text': 'repeat\ncmd', 'footnote': '' },
    '?': { 'name': '?', 'type': 'm', 'text': 'find\n(rev.)', 'argument': true },
    '/': { 'name': '/', 'type': 'm', 'text': 'find', 'argument': true },
  };

  var result = []
  for (var rownum = 0; rownum < keyboard_keys.length; rownum++) {
    var row = keyboard_keys[rownum];
    keymapping = [];
    for (var colnum = 0; colnum < row.length; colnum++) {
      var col = row[colnum];
      var vimkey = vimkeys[col];
      vimkey.row = rownum;
      vimkey.col = colnum;

      var argument = (typeof (vimkey.argument) !== 'undefined') && vimkey.argument;  // defaults to false
      var entersInsertMode = (typeof (vimkey.entersInsertMode) !== 'undefined') && vimkey.entersInsertMode;  // defaults to false
      var isSingleUseKey = (typeof (vimkey.isSingleUseKey) !== 'undefined') && vimkey.isSingleUseKey;  // defaults to false

      vimkey.argument = argument;
      vimkey.entersInsertMode = entersInsertMode;
      vimkey.isSingleUseKey = isSingleUseKey;

      keymapping.push(vimkey);
    }
    result.push(keymapping);
  }
  return result;
}
