const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoSchema = new Schema({
  type: {
    default: "Point",
    type: String
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
})

const coderSchema = new Schema({
  name:{
    type: String, required: [true, 'Name is required']
  },
  field: {
   type: String, required: true
  },
  available: {
    type: Boolean, default: false
  },
  geometry: geoSchema
})

const Coder = mongoose.model('coder', coderSchema)

module.exports = Coder;
