import { Config } from '../types';

let env = process.env.NODE_ENV || 'development';
let vport = process.env.PORT || '8081';

export let settings: Config = {
  name: 'kaamebot_customapis',
  version: '1.0.0',
  port: Number(vport),
  env: 'dev'
};

if (env === 'production') {
  settings.env = 'prod';
}
