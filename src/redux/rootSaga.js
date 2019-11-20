import { all, call } from 'redux-saga/effects'

import { onSignInGoogle, onSignInEmail, onGetCurrentUser } from './sagas/userSagas'

export default function* () {
  yield all([
    call(onSignInEmail),
    call(onSignInGoogle),
    call(onGetCurrentUser)
  ])
}