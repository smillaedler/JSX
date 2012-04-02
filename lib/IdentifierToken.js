"use strict";

var Token = require("./Token");

var IdentifierToken = module.exports = Token.extend({

	initialize: function (identifier, filename, pos) {
		Token.prototype.initialize.call(this, filename, pos);
		this.identifier = identifier;
	},

	serialize: function () {
		return this._serialize("identifier", this.identifier);
	}
});