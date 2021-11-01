import chalk from 'chalk'

import Cell from './cell.js'

/**
 * @global
 */
class Board {

	/**
	 * @param  {Object} options
	 * @param  {number} options.rows
	 * @param  {number} options.columns
	 */
	constructor(options) {
		this._options = options
		this._rows = []
		this._shapes = []
	}

	/**
	 * @param  {number} width
	 * @param  {number} x
	 * @param  {number} y
	 * @returns {Cell[]}
	 */
	fill(width, x, y) {
		const cells = []
		if(y + width > this.rows.length) {
			width = this.rows.length - y
		}
		if(x + width > this.options.columns) {
			width = this.options.columns - x
		}
		for (let i = 0; i < width; i++) {
			for (let ii = 0; ii < width; ii++) {
				const cell = this.rows[y + i].cells[x + ii]
				if(cell.char === Cell.CHAR_OBSTACLE) {
					width = Math.max(i, ii)
				}
			}
		}
		for (let i = 0; i < width; i++) {
			for (let ii = 0; ii < width; ii++) {
				const cell = this.rows[y + i].cells[x + ii]
				if(cell.char === Cell.CHAR_FREE) {
					cells.push(cell)
				}
			}
		}
		return { cells, width }
	}

	/**
	 * @param  {Shape} shape
	 * @return {string}
	 */
	text(shape) {
		return this.rows.map(row => row.cells.map(cell => {
			if (typeof shape !== "undefined" && shape.cells.includes(cell) === true) {
				return chalk.green(Cell.CHAR_OCCUPIED)
			} else if(cell.char === Cell.CHAR_FREE) {
				return cell.char
			} else {
				return chalk.red(cell.char)
			}
		}).join("") + "\n").join("")
	}

	/**
	* @param {Row}
	*/
	addRow(row) {
		this.rows.push(row)
	}

	/**
	* @returns {Row[]}
	*/
	get rows() {
		return this._rows
	}

	/**
	* @returns {Object}
	*/
	get options() {
		return this._options
	}

	/**
	* @returns {Shape[]}
	*/
	get shapes() {
		return this._shapes
	}

}

export default Board
