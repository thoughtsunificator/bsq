/**
 * @global
 */
class Shape {

	/**
	 * @param  {number} width
	 */
	constructor(width) {
		this._cells = []
		this._width = width
	}

	/**
	 * @param {Cell} cell
	 */
	addCell(cell) {
		this.cells.push(cell)
	}

	/**
	 * @readonly
	 * @type {Cell[]}
	 */
	get cells() {
		return this._cells
	}

	/**
	 * @type {number}
	 */
	get width() {
		return this._width
	}

	set cells(cells) {
		this._cells = cells
	}
}

export default Shape
