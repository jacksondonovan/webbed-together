'use strict'

const Database = use('Database')
// await Database
//   .table('users')
//   .where('username', 'john')
//   .first()



// const { getCampaigns, getTotalClicks, getAllProducts, getAllSources, addCampaignData } = require('../../../database/db-query')
// const csv = require('csv-parser')
// const fs = require('fs')

class UserController {
	async get({ request, response, view, params, auth }) {

		return view.render('profile.edge', {
			user: user || 'JACKIE DEE'
		 })
	}

	async add({ request, response, view, params, auth }) {
		const data = request.except(['_csrf', 'password_repeat'])

		await Database
	      .insert(data)
		  .into('users')

		return view.render('profile.edge', {
			user_data: data || 'JACKIE DEE'
		})
	}

	async getSignUpPage({ request, response, view, params, auth }) {

		return view.render('sign-up.edge')
	}

	async login({ request, response, view, params, auth }) {


		return view.render('login.edge')
	}

	async profile({ request, response, view, params, auth }) {
		const data = request.except(['csrf'])
		console.log(data);

		return view.render('profile.edge', {
			username: data.username
		})
	}
}

module.exports = UserController
