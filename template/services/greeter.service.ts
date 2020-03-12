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
			handler: async () => "Hello Moleculer!",
		},

		/**
		 * Welcome a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string",
			},
			/** @param {Context} ctx  */
			handler: async (ctx: Context<any>) => `Welcome, ${ctx.params.name}`,
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
