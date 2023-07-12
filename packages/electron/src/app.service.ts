import { Injectable } from '@nestjs/common';
import { join } from 'path';
import pm2 from 'pm2';

// pm2.connect((error) => {
//   console.log('path: ', __dirname)
//   if (error) console.error('pm2Error: ', error);
//   pm2.start(
//     {
//       script: join(__dirname, '../gateway/main.js'),
//       name: 'gateway',
//       autorestart: false,
//       max_restarts: 1,
//     },
//     (err, apps) => {
//       if (err) {
//         console.error('pm2.appsError: ', err);
//         return pm2.disconnect();
//       }
//       pm2.list((err, list) => {
//         console.log(err, list[0].name);

//         pm2.restart('api', (err, proc) => {
//           // Disconnects from PM2
//           pm2.disconnect();
//         });
//       });
//     },
//   );
// });

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
