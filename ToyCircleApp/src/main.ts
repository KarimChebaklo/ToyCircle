import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA10uSV2t-1LdVFU-As6EZMOkiqDADUV60",
  authDomain: "toycircle-a662c.firebaseapp.com",
  projectId: "toycircle-a662c",
  storageBucket: "toycircle-a662c.appspot.com",
  messagingSenderId: "252926431260",
  appId: "1:252926431260:web:cbd4ea1534d5652da44fd9",
  measurementId: "G-2Q2QWJDMWL"
};

firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

const app = createApp(App)
  .use(IonicVue)
  .use(router);


  
router.isReady().then(() => {
  app.mount('#app');
});