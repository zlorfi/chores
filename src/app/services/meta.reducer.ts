import { getActionTypeFromInstance } from '@ngxs/store'
import { Logout } from '../store/user/user.action'

export function logoutPlugin(state, action, next): any {
  if (getActionTypeFromInstance(action) === Logout.type) {
    state = {}
  }

  return next(state, action)
}