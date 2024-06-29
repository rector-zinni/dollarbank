<template>
  <div class="home fit">
 
<div class="center-div mb-4">
    <v-avatar size="large" ><img src="../assets/bremen.png" alt="" srcset="" style="width: inherit;" ></v-avatar>
<p class="display-5 fw-bold icon-col mb-4" style="margin:0;">Citi Standard </p>
<v-progress-circular
      :size="50"
      color="red"
      indeterminate
      v-show="spin_loader"
    ></v-progress-circular>
<div  class="login-form light-icon-col" v-if="log">
<!--  -->

  <!-- Email input -->
  <v-text-field
label="Online access"
v-model="oa"
variant="solo-inverted"
></v-text-field>

  <!-- Password input -->
<v-text-field
label="passcode"
v-model="pw"
type="password"
variant="solo-inverted"
></v-text-field>
  <!-- 2 column grid layout for inline styling -->
  <div class="row mt-2">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check checkmack">
        <input class="form-check-input "  type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <!-- Simple link -->
      <a href="#!" class="text-dark">Forgot password?</a>
    </div>
  </div>

  <!-- Submit button -->
  <div class="d-grid gap-2">
     <button class="btn  btn-md mt-3 fw-bold " style="background:#ff0101;color:rgb(255, 255, 255)" type="button" @click="login">{{log_status}} 
&nbsp;&nbsp;&nbsp;
        <v-progress-circular
      :size="30"
      color="light"
      indeterminate
      v-show="spin"
    ></v-progress-circular>
     </button>
</div>
  <!-- Register buttons -->
 <!--  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    
  </div> -->

<!--  -->

</div>
</div>

  </div>
</template>

<script>
// @ is an alias to /src
import auth from '@/fire'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import router from '@/router'

export default {
    name: 'HomeView',
    components: {

    },
    data() {
        return {
            log: false,
            oa:"",
            pw:"",
            spin_loader:true,
            spin:false,
            log_status:"Log in"

        }
    },
    mounted() {
        

        
        onAuthStateChanged(auth.auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // eslint-disable-next-line no-unused-vars
                const uid = user.uid;
                router.push('home/'+uid);
                // ...
            } else {
                // User is signed out
                router.push('/');
                // ...
            }
        });

        setTimeout(() => {
            this.log = true
            this.spin_loader=false;
        }, 10000)
    },
    methods: {
        login(){
           if(this.oa=="2075000125"&&this.pw=="johnpardi@999"){
             this.spin = true
                signInWithEmailAndPassword(auth.auth, "lauramikemiller@gmail.com", "rector99")
                    .then((userCredential) => {
                        // Signed in 
                        router.push('home/' + userCredential.uid);
                        console.log();

                        // ...
                    })
                    .catch((error) => {
                        this.spin = false
                        console.log(error)
                        alert('Error occur while initiating login')
                    });
           }else{
            alert("incorrect login crendentials")

           }
        }
    },
}
</script>
<style>
.home {
    height: 100vh;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
}

.center-div {
    display: inline-block;
    width: 90%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.login-form {}

.form-control:focus {
    outline: 0 !important;
    border-color: initial;
    box-shadow: none !important;
}
.checkmack:hover input{
  background-color: #ffffff;
}

/* When the radio button is checked, add a blue background */
.checkmack input:checked{
  background-color: #f90800;
}
.fit{
   /* background-image: url('../assets/mobile-back.jpg');
  background-size: cover; /* This property scales the background image to fit within the container */
  background-repeat: no-repeat; /* This property prevents the background image from repeating */
  background-position: center; /* This property centers the background image within the container */
}
</style>