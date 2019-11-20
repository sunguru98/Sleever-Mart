import { all, call } from 'redux-saga/effects'
import userSagas from './sagas/userSagas'
import cartSagas from './sagas/cartSagas'


export default function*() {
  yield all([call(userSagas), call(cartSagas)])
}
