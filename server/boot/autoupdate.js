const async = require('async');
module.exports = function (app) {
	//data sources
	const db = app.dataSources.mysql;
	//create all models
	const default_models = [
		'User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'
	];
	let models = [
		"Album",
		"Education",
		"EmailAddress",
		"Media",
		"Owner",
		"PhoneNumber",
		"Post",
		"Project",
		"Work"
	];
	models.push(...default_models);
	models.forEach((model)=>{
		db.autoupdate(model, function (err) {
			if (err)
				throw new Error(err);
		});
	});
	console.log("Model migration completed!");
};