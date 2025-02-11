const mongoose = require('mongoose')

const cuisineSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        type: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('Cuisine', cuisineSchema)