export class Phone {
	static format(text) {
		switch (true) {
			case text.length >= 7:
				return text.replace(/^(\d{3})(\d{3})/, "$1-$2-")
			case text.length >= 4:
				return text.replace(/^(\d{3})/, "$1-")
			default:
				return text
		}
	}
	static unformat(text) {
		return text.replace(/[^\d]/g, '')
	}
	static error(text) {
		return text.length !== 10
	}
}