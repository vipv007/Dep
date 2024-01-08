import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    // pathMatch: 'prefix',
    // canActivate: [AuthGuard],
  },
  {
    path: 'mulberry',
    loadChildren: () => import('./Pages/mulberry/mulberry.module').then( m => m.MulberryPageModule)
  },
  {
    path: 'mulberryseedling',
    loadChildren: () => import('./Pages/mulberryseedling/mulberryseedling.module').then( m => m.MulberryseedlingPageModule)
  },
  {
    path: 'diseases',
    loadChildren: () => import('./Pages/diseases/diseases.module').then( m => m.DiseasesPageModule)
  },
  {
    path: 'moult',
    loadChildren: () => import('./Pages/moult/moult.module').then( m => m.MoultPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./Pages/weather/weather.module').then( m => m.WeatherPageModule)
  },
 
  {
    path: 'irrigation',
    loadChildren: () => import('./Pages/irrigation/irrigation.module').then( m => m.IrrigationPageModule)
  },
  {
    path: 'harvesting',
    loadChildren: () => import('./Pages/harvesting/harvesting.module').then( m => m.HarvestingPageModule)
  },
  {
    path: 'login-form',
    loadChildren: () => import('./login-form/login-form.module').then( m => m.LoginFormPageModule)
  },
  {
    path: 'leafspot',
    loadChildren: () => import('./Pages/leafspot/leafspot.module').then( m => m.LeafspotPageModule)
  },
  {
    path: 'powderymildew',
    loadChildren: () => import('./Pages/powderymildew/powderymildew.module').then( m => m.PowderymildewPageModule)
  },
  {
    path: 'leafrust',
    loadChildren: () => import('./Pages/leafrust/leafrust.module').then( m => m.LeafrustPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'lifecycle',
    loadChildren: () => import('./Pages/lifecycle/lifecycle.module').then( m => m.LifecyclePageModule)
  },
  {
    path: 'silkworms',
    loadChildren: () => import('./Pages/silkworms/silkworms.module').then( m => m.SilkwormsPageModule)
  },
  {
    path: 'disinfection',
    loadChildren: () => import('./Pages/disinfection/disinfection.module').then( m => m.DisinfectionPageModule)
  },
  {
    path: 'translator',
    loadChildren: () => import('./translator/translator.module').then( m => m.TranslatorPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./Pages/information/information.module').then( m => m.InformationPageModule)
  },  {
    path: 'fertilizer',
    loadChildren: () => import('./Pages/fertilizer/fertilizer.module').then( m => m.FertilizerPageModule)
  },
  {
    path: 'manuring',
    loadChildren: () => import('./Pages/manuring/manuring.module').then( m => m.ManuringPageModule)
  },
  {
    path: 'frame',
    loadChildren: () => import('./Pages/frame/frame.module').then( m => m.FramePageModule)
  },
  {
    path: 'mulberry-saplings',
    loadChildren: () => import('./Pages/mulberry-saplings/mulberry-saplings.module').then( m => m.MulberrySaplingsPageModule)
  },
  {
    path: 'popup',
    loadChildren: () => import('./Pages/popup/popup.module').then( m => m.PopupPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./Pages/otp/otp.module').then( m => m.OtpPageModule)
  }






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
