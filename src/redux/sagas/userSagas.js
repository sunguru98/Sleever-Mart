import { takeLatest, put, call } from 'redux-saga/effects'
import userActionTypes from '../actionTypes/userActionTypes'
import {
  auth,
  googleAuthProvider,
  createUserProfileDocument
} from '../../firebase.config'

import { setUser } from '../actions/userActions'

function* signInEmailAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    const userReference = yield call(createUserProfileDocument, user)
    const snapshot = yield userReference.get()
    yield put(setUser({ id: snapshot.id, ...snapshot.data }))
  } catch (err) {
    alert('Incorrect Credentials')
    yield put({ type: userActionTypes.SET_AUTH_ERROR, payload: err.message })
    yield put(setUser(null))
  }
}

function* signInGoogleAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleAuthProvider)
    const userReference = yield call(createUserProfileDocument, user)
    const snapshot = yield userReference.get()
    yield put(setUser({ id: snapshot.id, ...snapshot.data() }))
  } catch (err) {
    yield put({ type: userActionTypes.SET_AUTH_ERROR, payload: err.message })
    yield put(setUser(null))
  }
}

export function* onSignInEmail() {
  yield takeLatest(userActionTypes.SIGNIN_EMAIL, signInEmailAsync)
}

export function* onSignInGoogle() {
  yield takeLatest(userActionTypes.SIGNIN_GOOGLE, signInGoogleAsync)
}
