/*
 * @overview  HTMLBars
 * @copyright Copyright 2011-2014 Tilde Inc. and contributors
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/tildeio/htmlbars/master/LICENSE
 * @version   v0.14.24
 */

// Break cycles in the module loader.
import './htmlbars-syntax';

import {
  compile,
  compileSpec
} from './htmlbars-compiler/compiler';

export {
  compile,
  compileSpec
};
