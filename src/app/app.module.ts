import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { NgxsModule, NGXS_PLUGINS } from '@ngxs/store'
import { environment } from 'src/environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserState } from './store/user/user.state'
import { AppState } from './store/app.state'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ChoresState } from './store/chores/chores.state'
import { HttpConfigInterceptor } from './services/api/http-interceptor'
import { logoutPlugin } from './services/meta.reducer'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState, UserState, ChoresState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: [AppState]
    })
  ],
  providers: [
    {
      provide: NGXS_PLUGINS,
      useValue: logoutPlugin,
      multi: true
    }, {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
