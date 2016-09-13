import {
  compile,
  template
} from './htmlbars/htmlbars-compiler/compiler';

import hooks from './htmlbars/htmlbars-runtime/hooks';
import {

	handleRedirect

} from './htmlbars/htmlbars-runtime/hooks';

import DOMHelper from './htmlbars/dom-helper';

import { blockFor } from './htmlbars/htmlbars-util/template-utils';


module.exports = {
	DOMHelper: DOMHelper,
	
	Compiler: {
		compile: compile,
		template: template		
	},

	Runtime: {
		Hooks: {
			Default: hooks,
			Helpers: {
				handleRedirect: handleRedirect
			}
		}
	},

	Util: {
		Template: {
			blockFor: blockFor
		}
	}

};