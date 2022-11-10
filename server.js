const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
	'21 savage': {
		'age': 29,
		'birthName': '21 Savage',
		'birthLocation': 'London'
	},
	'chance': {
		'age': 28,
		'birthName': 'Chancelor Bennett',
		'birthLocation': 'Illinois'
	},
	'unknown':{
		'age':0,
		'birthName':'unknown',
		'birthLocation':'unknown'
	}
}

app.get('/', (req, res) =>{
	res.sendFile(__dirname + '/index.html', )
})

app.get('/api/:name', (req, res) =>{
	const inputName = req.params.name.toLowerCase()

	if (rappers[inputName]){
		res.json(rappers[inputName])
	}else {
		res.json(rappers['unknown'])
	}
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`the server is now running on port ${PORT}`)
})