import { FirebaseOptions, initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import {
  VITE_apiKey,
  VITE_appId,
  VITE_authDomain,
  VITE_messagingSenderId,
  VITE_projectId,
  VITE_storageBucket,
} from './Backend'

const firebaseConfig: FirebaseOptions = {
  apiKey: VITE_apiKey,
  authDomain: VITE_authDomain,
  projectId: VITE_projectId,
  storageBucket: VITE_storageBucket,
  messagingSenderId: VITE_messagingSenderId,
  appId: VITE_appId,
}

export const app = initializeApp(firebaseConfig)
export const auth: Auth = getAuth()
