import fs from 'fs'

import Cell from './src/cell.js'
import Shape from './src/shape.js'
import Util from './src/util.js'

console.log("bsq")

console.log("Reading file...")

let text
try {
	text = fs.readFileSync('resources/board', { encoding: 'utf-8' }).trim()
} catch(ex) {
	throw ex
}

const lines = text.split("\n")

if(lines.length < 2) {
	throw new Error("File format is invalid: There should be at least two lines.")
}

const boardLines = lines.slice(1)

for(const line of boardLines) {
	if(line.length !== boardLines[0].length) {
		throw new Error(`File format is invalid: All lines should have the same length. (line: ${lines.indexOf(line)})`)
	} else if(line.length === 0) {
		throw new Error(`File format is invalid: Lines should at least have one character. (line: ${lines.indexOf(line)})`)
	} else {
		for(const char of [...line]) {
			if(Cell.CHARS_ALLOWED.includes(char) === false) {
				throw new Error(`File format is invalid: "${char}" is not a valid character. File should only contain the following characters: ${Cell.CHARS_ALLOWED.join(", ")}. (line: ${lines.indexOf(line) + 1})`)
			}
		}
	}
}

const columns = lines[1].length
const rows = parseInt(lines[0])

if(isNaN(rows) === true) {
	throw new Error(`File format is invalid: First line should be a number matching the number of lines. (Found "${lines[0]}" instead.)`)
}

if(rows !== boardLines.length) {
	throw new Error(`File format is invalid: First line should match the number of lines. (Found "${boardLines.length}" instead of "${rows}".)`)
}

console.log("Creating board...")

const board = Util.createBoard(boardLines, {
	columns,
	rows
})

console.log(`Board size is ${board.options.columns}x${board.options.rows}.`)

console.log("Creating shapes...")

for(const row of board.rows) {
	for(const cell of row.cells) {
		const {cells, width} = board.fill(Math.max(board.options.rows, board.options.columns), cell.x, cell.y)
		const shape = new Shape(width)
		cells.forEach(cell => shape.cells.push(cell))
		if(cells.length >= 1) {
			board.shapes.push(shape)
		}
	}
}

if(board.shapes.length >= 1) {
	console.log(`${board.shapes.length} shapes were created.`)
	let largestShape
	for(const shape of board.shapes) {
		if(typeof largestShape === "undefined" || shape.cells.length > largestShape.cells.length) {
			largestShape = shape
		}
	}
	console.log(`Largest shape is located at ${largestShape.cells[0].x},${largestShape.cells[0].y} and is ${largestShape.width} characters wide.`)
	console.log(board.text(largestShape))
} else {
	console.log(`No shapes were created. It might be because there was no room for it in the first place?`)
}
