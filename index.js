
const withId = document.getElementById.bind(document)
const dumper = withId('dumper')

const editor = ace.edit("editor", {
	mode: "ace/mode/javascript",
	theme: 'ace/theme/dracula',
	fontSize: '15px'
})

function generateAST() {
	try {
		const value = editor.getValue()
		const ast = esprima.parse(value)
		const html = cute.html(ast)
		dumper.innerHTML = html
	}
	catch (message) {
		dumper.innerHTML = `<error>${message}</error>`
	}
}

generateAST()
editor.on('change', () => {
	generateAST()
})
