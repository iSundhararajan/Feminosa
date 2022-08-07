import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDoFtSC3PtPc7iThrJwN5QtPjMroaB1eWk",
  authDomain: "feminosa-25686.firebaseapp.com",
  projectId: "feminosa-25686",
  storageBucket: "feminosa-25686.appspot.com",
  messagingSenderId: "753060886776",
  appId: "1:753060886776:web:1ad2f6a70b343b3e72230d",
  measurementId: "G-WCHF1DK62V"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth, app }
