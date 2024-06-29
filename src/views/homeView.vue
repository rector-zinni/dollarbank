<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div >
    <!-- bank banner -->




<!-- overlay -->
<v-overlay v-model="overlay" class="text-center" style="padding-top:50px;">
<div style="display:inline-block;width:80%;">
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
        @click="this.overlay = !this.overlay"
      >
        Ok
      </v-btn>
    </div>
  </v-sheet>
<!-- </v-card-text>
    
  </v-card> -->
</div>
 </v-overlay>
 <!-- overlay -->
<!-- bank banner -->
<div class="d-flex justify-space-between align-middle">
<p class="text-start  pa-1" >
   <v-avatar size="x-large"><img src="../assets/bremen.png" width="50" alt="" srcset="" ></v-avatar>
    &nbsp;Citi Standard </p>
    <div>
    <v-btn
    icon
   @click="signout"
   
    >
<v-icon
icon="mdi-logout"
></v-icon>
</v-btn>
<p>logout</p>
</div>
    </div> 
<!-- user profile  -->
<v-card   class="shadow pa-4 main-bg-color icon-col " >
<v-row justify="space-between" align="center"
>
      <v-col
        cols="6"
      >
        <v-avatar class="mt-2 mr-2">
      <v-img
      src="../assets/images.jpg"
      alt="pardi"
      ></v-img>
    </v-avatar> <br><span class="">Jon Ryan Pardi</span>
      </v-col>

      <v-col
        cols="6"
      >
    <div class="mt-2" style="text-align: right;">
        
         <v-switch v-model="swi" class="mb-1   " style=" text-align: right;display:inline-block;"  label="Hide/Show"></v-switch>
    </div>


        
    
       
      </v-col>
    </v-row>
    <hr>
<v-card class="pa-4 text-center   backgraph" elevation="3" rounded>
<span>Total balance</span> <v-icon
    icon="mdi-wallet"
    ></v-icon>
    <p class="balance">{{ hideorshow }}</p>
</v-card>
          
   


  </v-card>
  <!-- user profile -->
  <!-- transactions -->
  <v-card class="mt-2">
     <v-list lines="two">
      <v-list-subheader inset>transcations</v-list-subheader>

      <v-list-item
        v-for="(folder,index) in folders"
        :key="folder.title"
        :title="folder.title"
        :subtitle="folder.subtitle"
        class="recent-transaction"
        
      >
        

         <template v-slot:append>
          <v-row class="text-right" >
            <v-col
            cols="12"
            style="box-sizing: border-box !important;height:20px;"
            >
                 <span style="font-size:15px" :class="folder.ded==='-'?'red':'green'">{{folder.ded}}${{ folder.amount }}</span>
            </v-col>
           <v-col
           cols="12"
           style="box-sizing: border-box !important;"
           >

             <span style="font-size:12px">{{ folder.status }}</span>
           </v-col>
           
            
          </v-row>
        </template>
      </v-list-item>

      
    </v-list>
  </v-card>

</div>
</template>
 
<script>
import {  signOut } from "firebase/auth"
import auth from'@/fire'
import route from '@/router'
export default {
    data: () => ({
      titled:false,
      
        overlay:false,
        folders: [
            {
                subtitle: '23/06/23',
                title: 'DDA DEPOSIT',
                amount:"150,0000",
                ded:"+",
                colour:"green",
                status:"completed"

            },
            {
                subtitle: '01/06/23',
                title: 'DISCOVERY ST. LOUIS',
                amount:"249,000.00",
                ded:"+",
                colour:"success",
                status: "completed"
            },
            {
                subtitle: '30/05/23',
                title: 'DISCOVERY+ AD-FREE O123456789 TN',
                amount:"10,000.09",
                ded:"-",
                colour:"dark"
                ,
                status: "completed"
            },
            {
                subtitle: '20/05/23',
                title: 'ONLINE DOMESTIC WIRE',
                amount: "25,000.78",
                ded: "+",
                colour: "green",
            status: "completed"

            },
            {
                subtitle: '05/05/23',
                title: 'INVOICE PAYMENT',
                amount: "150,000.54",
                ded: "+",
                colour: "success",
                status: "completed"
            },
            {
                subtitle: '30/04/23',
                title: 'INVESTMENT FUNDS TRANSFER',
                amount: "60,000.87",
                ded: "-",
                colour: "dark",
                status: "completed"
            },
            {
                subtitle: '02/04/23',
                title: 'BARCLAYS BANK TRANSFER',
                amount: "1,065,990.03",
                ded: "+",
                colour: "green"
                ,
                status: "completed"

            },
            {
                subtitle: '12/03/23',
                title: 'SATANDER BANK TRANSFER - CA-WIRE',
                amount: "150,000.00",
                ded: "+",
                colour: "success",
                status: "completed"
            },
            {
                subtitle: '01/03/23',
                title: 'SUNTRUST FOREIGN WIRE',
                amount: "150,000.65",
                ded: "-",
                colour: "dark"
                ,
                status: "pending"
            },
        ],
        swi: true,
    }),
    methods:{
        signout(){
            
            signOut(auth.auth).then(() => {
                // Sign-out successful.
                    route.push('/')
            }).catch((error) => {
                // An error happened.
                alert('unable to log out <br>'+error)
            });
        },

    //     openmodal(myref){
    // this.popover.title=this.folders[myref].title
    // this.popover.ded=this.folders[myref].ded
    //  this.popover.status=this.folders[myref].status
    // this.popover.amount=this.folders[myref].amount
  
  //}
    },
    computed: {
        hideorshow() {

            return this.swi ? "$650,000" : "*********";
        }
    },
}
</script>
<style >


.main-bg-color{
   
}
.red{
color:rgb(252, 23, 23);
}
.green{
color:rgb(15, 165, 83);
}
.dark-green{
color:rgb(48, 58, 53) !important;
}
.backgraph{
   
   
}
.backgraph p{
   
   
}
.recent-transaction{
  cursor: pointer;
}
.recent-transaction[title]{
  background-color: red !important;
}

.recent-transaction:hover{
  background-color: #89305c;
  color: azure;
}
.balance{
  font-size: 20px;
  font-family: serif;

    text-align: center;
    color: #ff0037;
    line-height: 20px;
    font-weight: 600;
}
.transaction-popover{
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 23,0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}


.transactions{
  width: 90%;
  height: 90vh;
  background-color: rgb(255, 255, 255);
}
</style>

