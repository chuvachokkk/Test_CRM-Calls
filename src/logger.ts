import * as fs from 'fs'

export class Logger {
	private stream: fs.WriteStream

	constructor(filename: string) {
		this.stream = fs.createWriteStream(filename, { flags: 'a' })
	}

	log(line: string) {
		this.stream.write(line + '\n')
	}

	close() {
		this.stream.end()
	}
}
