// Statements

export function buildMustache(path, params, hash, raw, loc) {
  																				return {
    																				type: 'MustacheStatement',
    																				path: buildPath(path),
    																				params: params || [],
    																				hash: hash || buildHash([]),
    																				escaped: !raw,
    																				loc: buildLoc(loc)
  };
}

export function buildBlock(path, params, hash, program, inverse, loc) {
  																				return {
    																				type: 'BlockStatement',
    																				path: buildPath(path),
    																				params: params || [],
    																				hash: hash || buildHash([]),
    																				program: program || null,
    																				inverse: inverse || null,
    																				loc: buildLoc(loc)
  };
}

export function buildElementModifier(path, params, hash, loc) {
  																				return {
    																				type: 'ElementModifierStatement',
    																				path: buildPath(path),
    																				params: params || [],
    																				hash: hash || buildHash([]),
    																				loc: buildLoc(loc)
  };
}

export function buildPartial(name, params, hash, indent) {
  																				return {
    																				type: 'PartialStatement',
    																				name: name,
    																				params: params || [],
    																				hash: hash || buildHash([]),
    																				indent: indent
  };
}

export function buildComment(value) {
  																				return {
    																				type: 'CommentStatement',
    																				value: value
  };
}

export function buildConcat(parts) {
  																				return {
    																				type: 'ConcatStatement',
    																				parts: parts || []
  };
}

// Nodes

export function buildElement(tag, attributes, modifiers, children, loc) {
  																				return {
    																				type: 'ElementNode',
    																				tag: tag || '',
    																				attributes: attributes || [],
    																				modifiers: modifiers || [],
    																				children: children || [],
    																				loc: buildLoc(loc)
  };
}

export function buildComponent(tag, attributes, program, loc) {
  																				return {
    																				type: 'ComponentNode',
    																				tag: tag,
    																				attributes: attributes,
    																				program: program,
    																				loc: buildLoc(loc),

    // this should be true only if this component node is guaranteed
    // to produce start and end points that can never change after the
    // initial render, regardless of changes to dynamic inputs. If
    // a component represents a "fragment" (any number of top-level nodes),
    // this will usually not be true.
    																				isStatic: false
  };
}

export function buildAttr(name, value, loc) {
  																				return {
    																				type: 'AttrNode',
    																				name: name,
    																				value: value,
    																				loc: buildLoc(loc)
  };
}

export function buildText(chars, loc) {
  																				return {
    																				type: 'TextNode',
    																				chars: chars || '',
    																				loc: buildLoc(loc)
  };
}

// Expressions

export function buildSexpr(path, params, hash) {
  																				return {
    																				type: 'SubExpression',
    																				path: buildPath(path),
    																				params: params || [],
    																				hash: hash || buildHash([])
  };
}

export function buildPath(original) {
  																				if (typeof original === 'string') {
    																				return {
      																				type: 'PathExpression',
      																				original: original,
      																				parts: original.split('.')
    };
  } else {
    																				return original;
  }
}

export function buildString(value) {
  																				return {
    																				type: 'StringLiteral',
    																				value: value,
    																				original: value
  };
}

export function buildBoolean(value) {
  																				return {
    																				type: 'BooleanLiteral',
    																				value: value,
    																				original: value
  };
}

export function buildNumber(value) {
  																				return {
    																				type: 'NumberLiteral',
    																				value: value,
    																				original: value
  };
}

export function buildNull() {
  																				return {
    																				type: 'NullLiteral',
    																				value: null,
    																				original: null
  };
}

export function buildUndefined() {
  																				return {
    																				type: 'UndefinedLiteral',
    																				value: undefined,
    																				original: undefined
  };
}

// Miscellaneous

export function buildHash(pairs) {
  																				return {
    																				type: 'Hash',
    																				pairs: pairs || []
  };
}

export function buildPair(key, value) {
  																				return {
    																				type: 'HashPair',
    																				key: key,
    																				value: value
  };
}

export function buildProgram(body, blockParams, loc) {
  																				return {
    																				type: 'Program',
    																				body: body || [],
    																				blockParams: blockParams || [],
    																				loc: buildLoc(loc)
  };
}

function buildSource(source) {
  																				return source || null;
}

function buildPosition(line, column) {
  																				return {
    																				line: (typeof line === 'number') ? line : null,
    																				column: (typeof column === 'number') ? column : null
  };
}

function buildLoc(startLine, startColumn, endLine, endColumn, source) {
  																				if (arguments.length === 1) {
    																				var loc = startLine;

    																				if (typeof loc === 'object') {
      																				return {
        																				source: buildSource(loc.source),
        																				start: buildPosition(loc.start.line, loc.start.column),
        																				end: buildPosition(loc.end.line, loc.end.column)
      };
    } else {
      																				return null;
    }
  } else {
    																				return {
      																				source: buildSource(source),
      																				start: buildPosition(startLine, startColumn),
      																				end: buildPosition(endLine, endColumn)
    };
  }
}

export default {
  																				mustache: buildMustache,
  																				block: buildBlock,
  																				partial: buildPartial,
  																				comment: buildComment,
  																				element: buildElement,
  																				elementModifier: buildElementModifier,
  																				component: buildComponent,
  																				attr: buildAttr,
  																				text: buildText,
  																				sexpr: buildSexpr,
  																				path: buildPath,
  																				string: buildString,
  																				boolean: buildBoolean,
  																				number: buildNumber,
  																				undefined: buildUndefined,
  																				null: buildNull,
  																				concat: buildConcat,
  																				hash: buildHash,
  																				pair: buildPair,
  																				program: buildProgram,
  																				loc: buildLoc,
  																				pos: buildPosition
};
