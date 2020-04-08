'use strict'

class LandingController {
	async getSplash({ request, response, view, params, auth }) {
		// const user

		return view.render('welcome.edge')
	}
}

module.exports = LandingController
