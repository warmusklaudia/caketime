import { FirebaseOptions, initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCIn_nqu-vB-rXLH0RCj4EaH5boCl4N-OU',
  authDomain: 'caketime-561e3.firebaseapp.com',
  projectId: 'caketime-561e3',
  storageBucket: 'caketime-561e3.appspot.com',
  messagingSenderId: '1077966224376',
  appId: '1:1077966224376:web:0e2cdb6657a10f04d1740d',
  measurementId: 'G-E3FTD88FJE',
}

export const app = initializeApp(firebaseConfig)
export const auth: Auth = getAuth()
