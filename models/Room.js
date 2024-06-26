const { Schema } = require('mongoose')

const roomSchema = new Schema(
  {
    name: String,
    img: String,
    type: String,
    available: Boolean,
    facilities: [String],
    price: Number
  },
  { timestamps: true }
)

module.exports = roomSchema
