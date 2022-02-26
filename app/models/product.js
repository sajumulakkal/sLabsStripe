var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category'},
  name: String,
  price: Number,
  image: String
});

ProductSchema.plugin(mongoosastic, {
  hosts: [
   //'https://elastic:XsumsRfAURlV8D5KjaqqwYoK@sajumulakkal-elastic-search.es.us-east4.gcp.elastic-cloud.com:9243'
   'http://34.125.10.220:9200'
  ]
});

module.exports = mongoose.model('Product', ProductSchema);
