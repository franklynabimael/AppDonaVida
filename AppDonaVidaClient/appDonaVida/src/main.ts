import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'materialize-css';
import * as M from 'materialize-css';

M.AutoInit();

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
