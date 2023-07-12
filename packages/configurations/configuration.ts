import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const GATEWAY_CONFIG_FILENAME = 'gateway.config.yaml';

const assetsPath = process.env.DEV
  ? join(__dirname, '../../configurations')
  : join(__dirname, '../../../assets/configurations');

export default () => {
  return yaml.load(
    readFileSync(join(assetsPath, GATEWAY_CONFIG_FILENAME), 'utf-8'),
  ) as Record<string, any>;
};
