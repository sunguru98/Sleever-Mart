import { takeLatest, put, call, all } from 'redux-saga/effects'
import userActionTypes from '../actionTypes/userActionTypes'
import {
  auth,
  googleAuthProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase.config'

import { setUser } from '../actions/userActions'

export function* onRegister() {
  yield takeLatest(userActionTypes.REGISTER_USER, function*({
    payload: { email, password, displayName }
  }) {
    console.log('Hi')
    try {
      const { user } = yield auth.createUserWithEmailAndPassword(
        email,
        password
      )
      const userReference = yield createUserProfileDocument(user, {
        displayName
      })
      const snapshot = yield userReference.get()
      yield put(setUser({ id: snapshot.id, ...snapshot.data }))
      return true
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert(
          'Email already exists. Please register with a new email, or signin'
        )
      }
      yield put({ type: userActionTypes.SET_AUTH_ERROR, payload: err.message })
      return false
    }
  })
}

export function* onSignInEmail() {
  yield takeLatest(userActionTypes.SIGNIN_EMAIL, function*({
    payload: { email, password }
  }) {
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
  })
}

export function* onSignInGoogle() {
  yield takeLatest(userActionTypes.SIGNIN_GOOGLE, function*() {
    try {
      const { user } = yield auth.signInWithPopup(googleAuthProvider)
      const userReference = yield call(createUserProfileDocument, user)
      const snapshot = yield userReference.get()
      yield put(setUser({ id: snapshot.id, ...snapshot.data() }))
    } catch (err) {
      yield put({ type: userActionTypes.SET_AUTH_ERROR, payload: err.message })
      yield put(setUser(null))
    }
  })
}

export function* onGetCurrentUser() {
  yield takeLatest(userActionTypes.GET_CURRENT_USER, function*() {
    try {
      const userAuth = yield call(getCurrentUser)
      if (!userAuth) return
      const userReference = yield call(createUserProfileDocument, userAuth)
      const snapshot = yield userReference.get()
      yield put(setUser({ id: snapshot.id, ...snapshot.data }))
    } catch (err) {
      yield put({ type: userActionTypes.SET_AUTH_ERROR, payload: err.message })
      yield put(setUser(null))
    }
  })
}

export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT, function*() {
    try {
      yield auth.signOut()
      yield put(setUser(null))
    } catch (err) {
      yield put({ type: userActionTypes.SET_AUTH_ERROR, payload: err.message })
    }
  })
}

export default function*() {
  yield all([
    call(onGetCurrentUser),
    call(onSignInEmail),
    call(onSignInGoogle),
    call(onSignOut),
    call(onRegister)
  ])
}
