/**
 * @global
 */
class Cell {

	/**
	 * @type {String}
	 */
	static CHAR_FREE = "."

	/**
	 * @type {String}
	 */
	static CHAR_OBSTACLE = "o"

	/**
	 * @type {String}
	 */
	static CHAR_OCCUPIED = "x"

	/**
	 * @type {String[]}
	 */
	static CHARS_ALLOWED = [
		Cell.CHAR_FREE,
		Cell.CHAR_OBSTACLE,
		"\n"
	]

	/**
	 * @param  {number} x
	 * @param  {number} y
	 * @param  {string} char
	 * @param  {Row}    row
	 */
	constructor(x, y, char, row) {
		this._x = x
		this._y = y
		this._char = char
		this._row = row
	}

	/**
	 * @type {string}
	 */
	get char () {
		return this._char
	}

	set char (char) {
		this._char = char
	}

	/**
	 * @readonly
	 * @type {Row}
	 */
	get row () {
		return this._row
	}

	/**
	 * @readonly
	 * @type {number}
	 */
	get x () {
		return this._x
	}

	/**
	 * @readonly
	 * @type {number}
	 */
	get y () {
		return this._y
	}

}

export default Cell
