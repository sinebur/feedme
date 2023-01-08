import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './helpers/auth.guard';
import { SecretComponent } from './secret/secret.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { PostPageComponent } from './post-page/post-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { ReAuthGuard } from './helpers/auth.reGuard';

const routes: Routes = [
  {
    path: '',
    component: SecretComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [ReAuthGuard]
  },

  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'result',
    component: ResultComponent,
  canActivate: [AuthGuard]
  },
  {
    path: 'history',
    component: HistoryPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'post',
    component: PostPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
