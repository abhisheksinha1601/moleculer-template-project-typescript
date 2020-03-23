"use strict";
import { ServiceSchema, Context } from "moleculer";

const GreeterService: ServiceSchema = {
	name: "greeter",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		hello: {
			rest: {
				method: "GET",
				path: "/hello",
			},
			async handler(){
				return "Hello Moleculer!";
			},
		},
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},
};

export = GreeterService;
