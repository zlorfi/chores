import { CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { NavController } from '@ionic/angular'
import { Store } from '@ngxs/store'
import { UserState } from 'src/app/store/user/user.state'
import { Logout } from 'src/app/store/user/user.action'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  public constructor(
    private navController: NavController,
    public store: Store
  ) { }

  public canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.navController.navigateRoot('/login')
      return false
    }

    return true
  }

  public logout(): void {
    this.store.dispatch(new Logout)
  }

  public isAuthenticated(): boolean {
    if (this.store.selectSnapshot(UserState.getApiKey) != null) {
      return true
    }

    return false
  }
}
