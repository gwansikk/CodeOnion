import { Logger } from '@nestjs/common';
import { cpus, totalmem } from 'os';

export const BootIntro = () => {
  Logger.log(process.version, '  Node');
  Logger.log(process.env.MODE || 'none', '   ENV');
  Logger.log(cpus().length, '  Core');
  Logger.log(`${totalmem() / 1024 ** 3}GB`, 'Memory');
  Logger.log(process.env.PORT || 3000, '  Port');
  Logger.log('===========================================================');
};
