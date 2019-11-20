import { all, call } from 'redux-saga/effects'

import { onSignInGoogle, onSignInEmail } from './sagas/userSagas'

export default function* () {
  yield all([
    call(onSignInEmail),
    call(onSignInGoogle )
  ])
}