<template>
  <h1>Authentication</h1>
</template>

<script lang="ts">
//imports
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonLabel,
  IonButton,
  IonItem,
} from "@ionic/vue";

import { auth, db } from "../main";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { AuthenticationStates } from "../Enums/AuthenticationStates.vue";
import { signInWithEmailAndPassword } from 'firebase/auth';


export default {
  name: "Authentication",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonLabel,
    IonButton,
    IonItem,
  },

  setup() {
    const router = useRouter();
    const state = reactive({
      name: "",
      email: "",
      password: "",
      mode: AuthenticationStates.LogIn,
      errorMsg: "",
    });

    const LogInWithEmailAndPassword = async (email: string, password: string) => {
      try {
        if (!email || !password){
            state.errorMsg = "E-Mail and Password is required!"
            return;
        }
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/");

      } catch (error) {
        //Handle this shit
    
      }
    };
  },
};
</script>
