import { takeLatest, put, all, call } from 'redux-saga/effects'
import userActionTypes from '../actionTypes/userActionTypes'
import { clearCart } from '../actions/cartActions' 

export function* onSignoutSuccess () {
  yield takeLatest(userActionTypes.SIGN_OUT, function* () {
    yield put(clearCart())
  })
}

export default function* () {
  yield all([call(onSignoutSuccess)])
}