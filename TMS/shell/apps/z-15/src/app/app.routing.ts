import { AppComponent } from './app.component';
import { Routes } from "@angular/router";
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AuthorizationGuard } from 'ngx-virous';
import {TestViewComponent} from "./test-view/test-view.component";

export const routes: Routes = [
    {
        path: 'app',
        component: AppComponent,
    },
    {
        path:'login',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'https://vorkurt-login.netlify.app/remoteEntry.js',
            exposedModule: './Module'
        }).then(m => m.SignInModule),
    },
  {
    path: 'test',
    component: TestViewComponent,
    canActivate: [AuthorizationGuard]
  }
]
