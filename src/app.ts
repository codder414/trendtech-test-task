import * as Express from 'express';
import * as bodyParser from 'body-parser';
import { log } from './logger';
import * as expressPinoLogger from 'express-pino-logger';

const getPackageJson = () => {
	let packageJson: { name: string; description: string; version: string };
	try {
		packageJson = require('../package.json');
	} catch (err) {
		packageJson = {
			description: 'Sample description',
			name: 'default',
			version: '0.0.1'
		};
	}
	return packageJson;
};

const packageJson = getPackageJson();

interface AppConfig {
	port: number;
	host: string;
}

const appConfig: AppConfig = {
	port: 8080,
	host: '0.0.0.0'
};

export async function createApp(options: AppConfig) {
	const app = Express();
	app.use(
		expressPinoLogger({
			logger: log
		})
	);
	app.use(bodyParser.json());
	app.get('/', (_, res) => {
		res.json({ msg: `Welcome to HELL ${packageJson.name}` });
	});

	app.listen(options.port, options.host, () => {
		log.info(`Listening on ${options.host}:${options.port}...`);
	});

	return app;
}
