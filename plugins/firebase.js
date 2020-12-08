import firebase from 'firebase/app'
import '@firebase/storage'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBVfGC9aY9w-btJYrrA1Vlo-TImjEQuTDk',
  authDomain: 'illariaproject-ac19c.firebaseapp.com',
  databaseURL: 'https://illariaproject-ac19c.firebaseio.com',
  projectId: 'illariaproject-ac19c',
  storageBucket: 'illariaproject-ac19c.appspot.com',
  messagingSenderId: '970120962361',
  appId: '1:970120962361:web:2963d0c18bd587959c08e8',
  measurementId: 'G-Z7KTMTL9XM',
}

firebase.initializeApp(firebaseConfig)
export const storage = firebase.storage()
export const db = firebase.firestore()

export default firebase
