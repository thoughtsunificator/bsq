import Board from './board.js'
import Row from './row.js'
import Cell from './cell.js'

/**
 * @global
 */
class Util {

	/**
	 * @param  {Array} 	lines
	 * @param  {Object} options
	 * @return {Board}
	 */
	static createBoard(lines, options) {
		const board = new Board(options)

		for (let y = 0; y < options.rows; y++) {
			const row = new Row(y)
			for (let x = 0; x < options.columns; x++) {
				const char = lines[y][x]
				const cell = new Cell(x, y, char, row)
				row.addCell(cell)
			}
			board.addRow(row)
		}

		return board
	}

}

export default Util
