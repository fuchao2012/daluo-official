import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { SolutionComponent } from './solution/solution.component';
import { UnionComponent } from './union/union.component';
import { ProductComponent } from './product/product.component';
import { ConnectComponent } from './connect/connect.component';
import { FootComponent } from './foot/foot.component';
import { AboutComponent } from './about/about.component';

const router = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'product',
    component: ProductComponent
  }, {
    path: 'solution',
    component: SolutionComponent
  }, {
    path: 'union',
    component: UnionComponent
  }, {
    path: 'weather',
    component: WeatherComponent
  }, {
    path: 'connect',
    component: ConnectComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    WeatherComponent,
    SolutionComponent,
    UnionComponent,
    ProductComponent,
    ConnectComponent,
    FootComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
