
const withId = document.getElementById.bind(document)
const dumper = withId('dumper')

const editor = ace.edit("editor", {
	mode: "ace/mode/javascript",
	theme: 'ace/theme/xcode',
	fontSize: '15px'
})

dumper.innerHTML = cute.html(esprima.parse(editor.getValue()).body)

editor.on('change', () => {
	dumper.innerHTML = cute.html(esprima.parse(editor.getValue()).body)
})
// dumper.innerHTML = cute.html()