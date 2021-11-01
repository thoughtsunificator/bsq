import Cell from './cell.js'

/**
 * @global
 */
class Row {

	/**
	 * @param  {number} y
	 */
	constructor(y) {
		this._y = y
		this._cells = []
	}

	/**
	 * @param {Cell} cell
	 */
	addCell(cell) {
		this.cells.push(cell)
	}

	/**
	 * @returns {Cell[]}
	 */
	getFreeCells() {
		return this.cells.filter(cell => cell.char === Cell.CHAR_FREE)
	}

	/**
	 * @readonly
	 * @type {Cell[]}
	 */
	get cells() {
		return this._cells
	}

	/**
	 * @readonly
	 * @type {number}
	 */
	get y() {
		return this._y
	}

}

export default Row
