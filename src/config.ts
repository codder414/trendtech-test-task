import * as envalid from 'envalid';

const { str, port } = envalid;

export const config = envalid.cleanEnv(process.env, {
	APP_PORT: port({ default: 8080 }),
	APP_HOST: str({ default: '0.0.0.0' }),
	NODE_ENV: str({ default: 'development' }),
	LOG_LEVEL: str({ default: 'debug' })
});
