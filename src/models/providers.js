const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
	fullName: String,
	city: String,
	address: String,
	status: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('provider', ProviderSchema);