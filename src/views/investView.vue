<!-- eslint-disable no-undef -->
<!-- eslint-disable vue/valid-v-model -->
<!-- eslint-disable vue/valid-template-root -->
<template>
     
    <div

    style="background:transparent;margin:0"
    >
<!-- overlay -->
<v-overlay v-model="overlay"  :model-value="overlay"
      class="align-center justify-center">
      <div v-if="error_display" class="icon-bg-col light-icon-col pt-5" style="text-align:center;padding:10px;width:390px;height:100vh;background:white;display:block !important">
<v-card
:loading="spinner"

>
<div class="d-flex justify-space-between align-middle">
<p class="text-center display-4  pa-2" style="position:sticky;top:0%;z-index:2;">
   <v-avatar size="x-large"><img src="../assets/bremen.png" width="50" alt="" srcset="" ></v-avatar>
    &nbsp;Citii Standard</p>
    <div>
    
</div>
    </div>
    <v-card-text>
        
       <div class="d-flex">

        <v-responsive
    class="mx-auto"
    max-width="144"
     style="font-weight: bold !important;"
  >
    <v-text-field
      v-model="amount"
      hide-details="auto"
      label="Amount"
      append-inner-icon="mdi-currency-usd"
     class="pt-3"
     type="number"
     rounded="2"
    ></v-text-field>
  </v-responsive>

  

       </div>
  
       <div class="icon-col">
        <hr>
    <v-form v-model="valid">
    <v-text-field
     label="beneficiary name"
     class=""
     required
      v-model="ben_name"
       :rules="[v => !!v || 'required']"
    >

    </v-text-field>
   
        <v-text-field
     label="account number"
     class=""
     required
     v-model="acct_num"
     type="number"
      :rules="[v => !!v || 'required']"
    >

    </v-text-field>
           <v-text-field
     label="Reference"
     class=""
   required
   v-model="reference"
   :rules="[v => !!v || 'required']"
    >
</v-text-field>
    
     

    <v-btn :disabled="!valid"  :loading="spinner" class="light-icon-col" block style="background:#3C2A35;" @click="add_to_db()">Send</v-btn>
    </v-form>

    <!-- list -->
    <hr>
    <div class="pa-3" style="height:270px;overflow-y: scroll;overflow-x: hidden;">
        <p class="text-left pa-2">Recent</p>
 <v-row v-for="item in invest_data" :key="item" class=""   justify="space-between" style="border-bottom: 2px solid #8b7e86;background:rgb(245, 230, 241)">
    <v-col class="text-left" align-self="end" >
        <span class="d-block" style="font-size:20px">{{item.beneficiary}}</span>
        <span class="d-block">{{item.date}}</span>
    </v-col>
    <v-col class="text-right ">
        <span class="d-block fw-bold" style="">{{formattedAmount(item.amount)}}</span>
        <span class="d-block ">pending</span>
    </v-col>
 </v-row>
  <v-row class="bg-success"   justify="space-between" style="border-bottom: 2px solid #f3dfeb;">
    <v-col class="text-left" align-self="end" >
        <span class="d-block" style="font-size:20px">humphrey daines</span>
        <span class="d-block">12/09/22</span>
    </v-col>
    <v-col class="text-right ">
        <span class="d-block fw-bold" style="">$10,000,000.67</span>
        <span class="d-block ">completed</span>
    </v-col>
 </v-row>
 
    </div>
    <!-- end of list -->
</div>
    </v-card-text>
    
</v-card>
 <div class="text-right " style="position:absolute;bottom:3%;right:1%">
    <v-btn class="bg-brown-lighten-4" @click="overlay = !overlay">back</v-btn>
 </div>
      </div>


      <!--  -->
<div v-if="success_display" class="icon-bg-col light-icon-col" style="text-align:center;padding:10px;width:390px;height:100vh;background:white;display:block !important">
<v-avatar
class="mt-5 mb-4 bg-yellow"
size="100"
>
<v-icon        
icon="mdi-alert"
size="50"
>

</v-icon>
</v-avatar>
<p class="text-h5">
    Withdrawal Blocked
</p>

<p class="text-left pb-3 pl-3">
    your withdrawal was blocked because you owe existing funds.<br>Please contact customer support for further assistance
</p>

<v-card class="bg-yellow-accent-1">
    <v-card-text class="text-left">
        <p>Amout owed</p>
        <hr>
        <p class="text-h5">$40,000.638</p>
    </v-card-text>
</v-card>
 <div class="text-right " style="position:absolute;bottom:3%;right:1%">
    <v-btn class="bg-brown-lighten-4" @click="overlay=!overlay">back</v-btn>
 </div>

</div>
 </v-overlay>
<div class="d-flex justify-space-between align-middle">
<p class="text-center display-4  pa-2" style="position:sticky;top:0%;z-index:2;">
   <v-avatar size="x-large"><img src="../assets/bremen.png" width="50" alt="" srcset="" ></v-avatar>
    &nbsp;Citii Standard </p>
    <div>
    
</div>
    </div> 
<!-- end of overlay -->
<p class="text-left fw-bold fs-3">Assets</p>

<v-card class="main-bg-color icon-col">

    <v-card-text>

        <v-row class="ma-0" justify="space-between ">
            <v-col>
                <span>Invested</span>
            </v-col>
            <v-col class="text-right" >
 <span style="margin:0;">Current</span>
            </v-col>
        </v-row>

<v-row class="ma-0" justify="space-between ">
            <v-col>
                <h5 class="fw-bold fs-6">$888,103.96</h5>
            </v-col>
            <v-col class="text-right" >
 <h5 class="fw-bold fs-6" >$588,103.96</h5>
            </v-col>
        </v-row>

        <hr>


        <v-row justify="space-between " >
<v-col class="text-center">
    <v-btn
    icon
    class="icon-bg-col light-icon-col fw-bold"
     elevation="5"
     @click="openoverlay"
     :loading="loader"
    >
<v-icon icon="mdi-bank-transfer-out"></v-icon>

</v-btn
>
<h6>withdraw cash</h6>
</v-col>


<v-col class="text-center">
    <v-btn
    icon
    class="icon-bg-col light-icon-col fw-bold mb-1"
     elevation="5"
     disabled
     
    >
<v-icon icon="mdi-magnify"></v-icon>

</v-btn>
<h6>search</h6>
</v-col>

<v-col class="text-center">
    <v-btn
    icon
    class="icon-bg-col light-icon-col fw-bold"
    elevation="5"
    disabled
    >
<v-icon icon="mdi-plus"></v-icon>

</v-btn>
<h6>add account</h6>
</v-col>
        </v-row>
        
    </v-card-text>
</v-card>



    <!-- <v-row justify="space-between "
   
    >
        <v-col cols="4"
        align-self=""
        >
            <div class="d-flex justify-space-between pa-3 align-content-center">
                <v-icon
                icon="mdi-magnify"
                >

                </v-icon>
                <v-icon
                icon="mdi-filter-variant"
                >

                </v-icon>
            </div>
        </v-col>



         <v-col cols="4">
            <div class="d-flex text-right justify-space-between pa-3 align-content-center">
               <p class="d-inline">

                <v-icon
                icon="mdi-account-multiple"
                ></v-icon>Family
               </p>
                

                
                <v-icon
                icon="mdi-google-analytics"
                >

                </v-icon>
            </div>
        </v-col>
    </v-row> -->
<!-- <div
class="mt-2 "
style=""
>
  
         <v-list  class="pa-4 list0" >
      <v-list-subheader>Investment</v-list-subheader>

      <v-list-item
        v-for="folder in stock"
        :key="folder.percentage"
        class=""
      >
      <template v-slot:prepend>
       <v-row class="text-left" >
            
            <v-col
            cols="12"
            style="box-sizing: border-box !important;height:20px;"
            >
                
            <span style="font-size:15px" >{{ folder.name}}</span>
            </v-col>
           <v-col
           cols="12"
           style="box-sizing: border-box !important;"
           >

             <span style="font-size:12px">Invested {{ folder.invested }}</span>
           </v-col>
           
            
          </v-row>
       
      </template>

         <template v-slot:append>
          <v-row class=" text-right" >
            
            <v-col
            cols="12"
            style="height:20px;"
            >
                
            <span style="font-size:15px;font-weight:bold">{{ folder.ded }}${{ folder.profit }}</span>
            </v-col>
           <v-col
           cols="12"
           style="box-sizing: border-box !important;"
           >

             <span style="font-size:12px" :class="folder.ded === '-' ? 'red' : 'green'">{{ folder.ded }}{{ folder.percentage }}</span>
           </v-col>
           
            
          </v-row>
        </template>
      </v-list-item>

      
    </v-list>
</div> -->
    <v-card
    class="pa-3 mt-2"
    title="Recent investment"
    >
        <v-row   v-for="folder in stock"
        justify="space-between"
        :key="folder.percentage"
        class="pl-3 pr-3 list0"
        style="border-bottom: 1px solid black;border-left: 2px solid rgb(211, 209, 108);"
        
        >
            <!-- first column -->
            <v-col class="m-0">
<p style="margin:0px;font-size:12px;" class="fw-bold">{{ folder.name }}</p>
<p style="margin:0px;font-size:10px;" class="">Invested {{ folder.invested }}</p>
            </v-col>
             <!-- first column -->
            <v-col class="text-right">
              <p style="margin:0px;font-size:13px;" class="fw-bold">{{ folder.ded }}${{ folder.profit }}</p>  
                <p style="margin:0px;font-size:10px" :class="folder.ded === '-' ? 'red' : 'green'">{{ folder.ded }}{{ folder.percentage }}</p>
            </v-col>
            
        </v-row>
    </v-card>


</div>
    
</template>
<script>
import db from '@/fire'
import { addDoc, collection } from "firebase/firestore";
export default{
    props:{
       invest_data :Object 
    },
    data() {
        return {
            
            spinner:false,
            valid:true,
            ben_name:"",
            acct_num:"",
            reference:"",
            amount:"",
            overlay:false,
            loader:false,
            stock:[{
                name:"ANBUJACEM",
                invested:"67,500.01",
                percentage:"10%",
                profit:"6,750.09",
                ded:"-"
            },
            {
                name: "BAJFINANCE",
                invested: "40,861.83",
                percentage: "10%",
                profit: "4,750.87",
                ded: "+"
            }
            ,
            {
                name: "BANKBARODA",
                invested: "33,991.02",
                percentage: "9.2%",
                profit: "3,750.09",
                ded: "-"
            },
            {
                name: "CRYTOMART",
                invested: "303,391.47",
                percentage: "15%",
                profit: "43,043.59",
                ded: "+"
            }
            ,
            {
                name: "BANKBARODA",
                invested: "33,991.07",
                percentage: "9.2%",
                profit: "3,750.09",
                ded: "+"
            }
            ,
            {
                name: "CYRILLSTO",
                invested: "433,991.07",
                percentage: "9.2%",
                profit: "3,750.09",
                ded: "+"
            }
                    ],
                    success_display:false,
                    error_display: false,
        }
    },
    methods:{
        openoverlay() {

            this.loader = "true"
            setTimeout(() => {
                this.overlay = true
                this.loader = false
                this.error_display=true
                this.success_display = false
                 
            }, 1000)
        },
        formattedAmount(v) {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            });

            return formatter.format(v);
        },
        async add_to_db(){
            if(this.amount===""){
                alert("fill amount field");
            }else{
            //    this phase insert data to firestore
            this.spinner=true

                try {
                    const docRef = await addDoc(collection(db.db, "investment_transaction"), {
                        id: this.$route.params.id,
                        amount: this.amount,
                        beneficiary: this.ben_name,
                        account_number: this.acct_num,
                        reference:this.reference,
                        date:new Date().toDateString()
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
        
    }
}
</script>
<style>
.list0{
  
}
.list0:hover{
 
}
</style>