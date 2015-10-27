module.exports = {
  attributes: {
	  pseudo: { type: 'string', size: 24 },
	  birthDate: { type: 'integer'},
	  classes: { model: 'classes' },
	  shortDescription: { type: 'string', size: 240 },
	  description: { type: 'text' }
  }
};