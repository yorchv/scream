/**
 * Override the console behavior to set more visible messages.
 * Just by extending the console API. console.scream('example')
 *
 * Outputs:
 *  __                __       __
 * |_  \_/  /\  |\/| |__) |   |_
 * |__ / \ /--\ |  | |    |__ |__
 *
 */

console.scream = function scream(string) {
  var tl = [], ml = [], bl = [],
    lines = [tl, ml, bl], msg, chars,
    str = eval(string);

  if (str['toString'] && str['toString'] instanceof Function) {
    str = str.toString();
  }
  else if (str instanceof String){
    str = str;
  } else {
    str = JSON.stringify(str);
  }

  chars = str.split('');
  chars.forEach(function(singleChar, idx) {
    var char = dictionary[singleChar] || dictionary[' '];
    tl.push(char[0]);
    ml.push(char[1]);
    bl.push(char[2]);
  });

  msg = lines.map(function(line) {
    line.push('\n');
    return line.join('');
  }).join('');


  return console.log(msg.slice(1, msg.length));
};

var dictionary = {

  // NUMBERS
  '1': ['  ',
        '/|',
        ' |'],
  '2': ['__ ',
        ' _)',
        '/__'],
  '3': ['__ ',
        ' _)',
        '__)'],
  '4': ['    ',
        '|__|',
        '   |'],
  '5': [' __',
        '|_ ',
        '__)'],
  '6': [' __ ',
        '/__ ',
        '\\__)'],
  '7': ['___',
        '  /',
        ' / '],
  '8': [' __ ',
        '(__)',
        '(__)'],
  '9': [' __ ',
        '(__\\',
        ' __/'],
  '0': [' __ ',
        '/  \\',
        '\\__/'],

  // LETTERS
  'a': ['    ',
        ' /\\ ',
        '/~~\\'],
  'b': [' __ ',
        '|__)',
        '|__)'],
  'c': [' __ ',
        '/  `',
        '\\__,'],
  'd': [' __ ',
        '|  \\',
        '|__/'],
  'e': [' ___',
        '|__ ',
        '|___'],
  'f': [' ___',
        '|__ ',
        '|   '],
  'g': [' __ ',
        '/ _`',
        '\__>'],
  'h': ['    ',
        '|__|',
        '|  |'],
  'i': [' ',
        '|',
        '|'],
  'j': ['    ',
        '   |',
        '\\__/'],
  'k': ['    ',
        '|__/',
        '|  \\'],
  'l': ['    ',
        '|   ',
        '|___'],
  'm': ['    ',
        '|\\/|',
        '|  |'],
  'n': ['    ',
        '|\\ |',
        '| \\|'],
  'ñ': [' ~~ ',
        '|\\ |',
        '| \\|'],
  'o': [' __ ',
        '/  \\',
        '\\__/'],
  'p': [' __ ',
        '|__)',
        '|   '],
  'q': [' __ ',
        '/  \\',
        '\\__X'],
  'r': [' __ ',
        '|__)',
        '|  \\'],
  's': [' __ ',
        '/__`',
        '.__/'],
  't': ['___',
        ' | ',
        ' | ',],
  'u': ['    ',
        '|  |',
        '\__/'],
  'v': ['    ',
        '\\  /',
        ' \\/ '],
  'w': ['    ',
        '|  |',
        '|/\\|'],
  'x': ['   ',
        '\\_/',
        '/ \\'],
  'y': ['   ',
        '\\ /',
        ' | '],
  'z': ['__',
        ' /',
        '/_'],

  // SYMBOLS
  ' ': [' ',
        ' ',
        ' '],
  '!': ['  /',
        ' / ',
        '.  '],
  '_': ['   ',
        '   ',
        '___'],
  '-': ['  ',
        '__',
        '  '],
  ':': [' ',
        '.',
        '.'],
  '.': [' ',
        ' ',
        '.'],
  ',': [' ',
        ' ',
        ','],
  '/': ['  /',
        ' / ',
        '/  '],
  '"': ['..',
        '\'\'',
        '  '],
  '\\': ['\\  ',
         ' \\ ',
         '  \\']
};
