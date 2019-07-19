import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA_9Pk5MpyhfcRpiHi_bA-ABIQALhd474Q",
  authDomain: "sleever-mart-bc367.firebaseapp.com",
  databaseURL: "https://sleever-mart-bc367.firebaseio.com",
  projectId: "sleever-mart-bc367",
  storageBucket: "",
  messagingSenderId: "506364561421",
  appId: "1:506364561421:web:54ae9666631fb5b0"
}


firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider)

export default firebase