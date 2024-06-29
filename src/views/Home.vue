<!-- eslint-disable vue/multi-word-component-names -->

<template>
 <div class="bg-main">
<v-container

>
<!-- <homeView/> -->
<addCard   style="margin-bottom:50px !important;" v-show="addcard"/>
<homeView  style="margin-bottom:30px !important;" v-show="home" @toggleTransfer="toggle_transfer()"/>
<transfer :transfer_data="tr"   style="margin-bottom:100px !important;" v-show="transfer" @toggleHome="toggle_home()"/>
<investView :invest_data="inv"   style="margin-bottom:100px !important;" v-show="invest"/>
    <!-- bottom navigation -->
    <v-bottom-navigation 
    mode="shift"
    grow
    style="margin-top:30px !important;"
    >
 

  <v-btn value="favorites" @click="toggle_home()">
    <v-icon>mdi-bank</v-icon>

    Home
  </v-btn>

  <v-btn value="recent" @click="toggle_invest()">
    <v-icon>mdi-finance</v-icon>

    Portfolio
  </v-btn>

  <v-btn value="h" @click="toggle_transfer()">
    <v-icon>mdi-arrow-right</v-icon>

    transfer
  </v-btn>
  <v-btn value="u" @click="toggle_addcard()">
    <v-icon>mdi-credit-card</v-icon>

    Add Card
  </v-btn>

  
   
</v-bottom-navigation>
<!-- end of bottom navigation -->
</v-container>
 </div>
</template>

<script >
import { collection, query, where, onSnapshot } from "firebase/firestore"; 
 import addCard from "@/views/addCard.vue"
 import transfer from "@/views/transferView.vue"
 import homeView from "@/views/homeView.vue"
 import investView from '@/views/investView.vue'
 import db from '@/fire'
 export default {
   components:{
    addCard,transfer,homeView,investView
   },
    data() {
        return {
          home:true,
          addcard:false,
          transfer:false,
          invest:false,
          inv:[],
          tr:[]

        }
    },
    methods: {
        toggle_addcard(){
            this.addcard=true
            this.transfer = false
            this.home = false
            this.invest = false
        },
         toggle_transfer() {
            this.transfer = true
            this.addcard = false
            this.home = false
            this.invest = false
        },
         toggle_home() {
            this.home = true
            this.addcard = false
            this.transfer = false
           this.invest = false
        },
         toggle_invest() {
            this.home = false
            this.addcard = false
            this.transfer = false
            this.invest=true

        }
    },
    mounted() {
        console.log("Current cities in CA: ");
        // eslint-disable-next-line no-undef
        const q = query(collection(db.db, "investment_transaction"), where("id", "==", "Myw1wmooinfUdMscmtZwV6aMEFT2"));
        // eslint-disable-next-line no-unused-vars
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            this.inv = []
            querySnapshot.forEach((doc) => {
                
                this.inv.push(doc.data());
            });
           
        });







        const q1 = query(collection(db.db, "transfer_transaction"), where("id", "==", "Myw1wmooinfUdMscmtZwV6aMEFT2"));
        // eslint-disable-next-line no-unused-vars
      
        const unsubscribe1 = onSnapshot(q1, (querySnapshot) => {
            
            querySnapshot.docChanges().forEach((change) => {
              if (change.type === "added") {
                this.tr.push(change.doc.data());
               
    }
               
            });
           
        });
    }
 }
</script>
