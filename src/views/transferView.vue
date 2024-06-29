<!-- eslint-disable vue/valid-v-else -->
<!-- eslint-disable vue/valid-template-root -->
// eslint-disable-next-line vue/valid-template-root
<template  >
    <div
   
   class="font-color"
    >
   <v-overlay persistent="true" v-model="overlay" class="text-center" style="padding-top:50px;">


<div style="display:inline-block;width:80%;text-align:center !important;">
  
<!-- <v-card
    class="mx-auto pa-5 "
    
  >
    <v-card-item title="Daniels Group Ltd">
      <template v-slot:subtitle>
        <v-icon
          icon="mdi-alert"
          size="18"
          color="error"
          class="me-1 pb-1"
        ></v-icon>

        investment not operational now due to unpaid investment dues.
      </template>
    </v-card-item>
<hr>
    <v-card-text class="py-0"> -->
      
    

    <!-- <div class="d-flex py-0  justify-space-between mx-auto pa-5">
    <span>unpaid dues</span>
    <hr>
    <h4>£‎70,000</h4>
   
    </div> -->
    
     
     <v-sheet
    

    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="pa-4 text-center mx-auto"
  >
    <v-icon
      class="mb-5"
      color="danger"
      icon="mdi-alert"
      size="112"
    ></v-icon>
    <p class="text-h5">Your account is in a state of restricted withdrawal</p>

    <p class="mb-6 title">[BU-24093] Your account may be at risk,In order to keep your funds safe, withdrawal has been temporarily disabled. <br>Please contact customer support for further assistance</p>


    <v-divider class="mb-4"></v-divider>

    <div class="text-end">
      <v-btn
        class="text-none"
        color="success"
        rounded
        block
        variant="flat"
        width="90"
        @click="closeoverlay"
      >
        Ok
      </v-btn>
    </div>
  </v-sheet>
<!-- </v-card-text>
    
  </v-card> -->
</div>
 </v-overlay>
 <div class="d-flex justify-space-between align-middle">
<p class="text-center display-4  pa-2" style="position:sticky;top:0%;z-index:2;">
   <v-avatar size="x-large"><img src="../assets/bremen.png" width="50" alt="" srcset="" ></v-avatar>
    &nbsp;Citii Standard </p>
    
    </div>
<div class="icon-col">
<v-row>
    <v-col cols="1" justify="start" align="center">
       



    </v-col >
     <v-col  cols="10">
        <p class="text-center mt-2 fs-4 fw-bold">Send Money</p>
        
     </v-col>
</v-row>
</div>
<!-- balance -->
<v-card   class="shadow pr-3 pl-3 main-bg-color icon-col " >
<v-row justify="space-between" align="center"
>
      <v-col
        cols="6"
      >
        <v-avatar class="mt-2 mr-2">
      <v-img
        src="../assets/images.jpg"
        alt="John"
      ></v-img>
    </v-avatar> <br><span class="">Jon Ryan Pardi</span>         
      </v-col>

      <v-col
        cols="6"
      >
    <div class="mt-4" style="text-align: right;">
        
         <v-switch v-model="swi" class="mb-1   " style=" text-align: right;display:inline-block;"  label="Hide/Show"></v-switch>

    </div>
    
      </v-col>
    </v-row>
    <h4 class="pl-3 fw-bold" >
                {{ hideorshow }}
            
    </h4>
    <hr>
   <v-card-action >
    

   
           
        </v-card-action>
    
          
   


  </v-card>
 <!-- <p class="text-red">To tranfer you must verify your account</p>
    <v-btn
    color="success"
    @click="overlay=!overlay"
    >verify account</v-btn> -->
    <hr class="shadow">
<div class="">
    <form >
    <v-text-field
     label="beneficiary name"
     class=""
     required
      v-model="ben_name"
    >

    </v-text-field>
   
        <v-text-field
     label="account number"
     class=""
     required
     v-model="acct_num"
    >

    </v-text-field>
           <v-text-field
     label="Bankname"
     class=""
   required
   v-model="reference"
    >

    </v-text-field>
        <v-text-field
     label="amount"
     class=""
    required
v-model="amount"
    >

    </v-text-field>

    <v-text-field
     label="OTP"
     class=""
    >

    </v-text-field>
     

    <v-btn  :loading="spinner" class="light-icon-col" block style="background:#ff4921;" @click="openoverlay">Send</v-btn>
    </form>
    <hr class="shadow">
    <v-card
title="History"
class="mt-2"
style="background-color: transparent;border: none !important;font-size: 11px;"
>
<v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Bank
        </th>
        <th class="text-left">
          Amount
        </th>
        <th class="text-left">
          Status
        </th>
        <th class="text-left">
          time
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in transfer_data"
        :key="item.name"
      >
        <td class="pa-3">{{ item.beneficiary }}</td>
        <td>{{ item.reference }}</td>
       <td>{{ formattedAmount(item.amount) }}</td>
       <td>{{ item.status }} <v-avatar color="green"  v-if="item.status=='Completed'" size="15"><v-icon>mdi-check</v-icon></v-avatar></td>
       
       <td style="font-size: 10px; padding: 4px;">{{item.date}}</td>
      </tr>
    </tbody>
  </v-table>
</v-card>
</div>

</div>
</template>

<script>
import db from '@/fire'
import { Timestamp, addDoc, collection } from "firebase/firestore";
export default{
  props:{
       transfer_data :Object 
    },
    data(){
        return{
           overlay:false, 
           swi:true,
           spinner:false,
           sheet:false,
           ben_name:"",
           acct_num:"",
           reference:"",
           amount:"",
           
           
        }
    }
    , computed: {
        hideorshow() {

            return this.swi ? "$650,0007" : "*********";
        }
    },
    methods: {
      formattedAmount(v) {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR'
            });

            return formatter.format(v);
        },
        openoverlay(){
        if(this.ben_name=="" || this.reference=="" || this.acct_num=="" || this.amount=="" ){alert("field cannot                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          empty")
        }  else{
                // this.spinner = "true"
                // setTimeout(() => {
                //     this.overlay = true
                //     this.spinner = "false"
                // }, 10000)
                this.add_to_db();

        }  
            
        },
        closeoverlay(){
            this.sheet = false
            this.spinner = false
            this.overlay=false
        },
        async add_to_db(){
            if(this.amount===""){
                alert("fill amount field");
            }else{
            //    this phase insert data to firestore
            this.spinner=true

                try {
                    const docRef = await addDoc(collection(db.db, "transfer_transaction"), {
                        id: this.$route.params.id,
                        amount: this.amount,
                        beneficiary: this.ben_name,
                        account_number: this.acct_num,
                        reference:this.reference,
                        date:new Date().toDateString(),
                        status:'pending',
                    });
                    console.log("Document written with ID: ", docRef.id);
                    alert('transfer in pending it will take time to process transaction')
                    this.spinner = false
                } catch (e) {
                    this.spinner = false
                    console.error("Error adding document: ", e);
                    alert('error while initiating transaction')
                }
            }

        },
    },
}
</script>

<style>

.font-color{
   
}
.m2m{
  
}
</style>