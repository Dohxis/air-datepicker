import { Config } from '@stencil/core';

export const config: Config = {
	namespace: 'air-datepicker',
	outputTargets: [
		{
			type: 'dist'
		},
		{
			type: 'www',
			serviceWorker: null
		}
	]
};
