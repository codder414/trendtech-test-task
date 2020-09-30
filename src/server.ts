import { createApp } from './app';
import { config } from './config';
import { log } from './logger';

try {
	const app = createApp({
		host: config.APP_HOST,
		port: config.APP_PORT
	});
} catch (err) {
	log.fatal(err);
}
