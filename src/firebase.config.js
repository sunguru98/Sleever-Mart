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
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider)

export const getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribeAuth = auth.onAuthStateChanged(userAuth => {
     unsubscribeAuth()
     resolve(userAuth)
  }, reject)
})

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // userAuth refers to the onAuthStateObject or the createUsingEmailAndPassword which firebase returns
  if (!userAuth) return
  // If you want to query collection (table) use .collection() or if you want to query a particular row using id
  // then use .doc()
  const userDocumentRef = await firestore.doc(`users/${userAuth.uid}`)
  // With that userDocumentRef we can use all of the CRUD operations
  const userDocumentSnapshot = await userDocumentRef.get()
  // If the document of the given uid is present in the database, then the exists property will return as true
  if (!userDocumentSnapshot.exists) {
    // If there is no document (row) then create one using .set()
    const userObj = { displayName: userAuth.displayName, createdAt: Date.now(), email: userAuth.email, ...additionalData }
    await userDocumentRef.set(userObj)
  }
  // This is returned inorder to track any snapshot (data at this id) changes and update into the state the same
  return userDocumentRef
}

export default firebase