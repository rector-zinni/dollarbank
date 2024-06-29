<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
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
    <v-card
    
    elevation="5"
    class="icon-bg-col light-icon-col pa-3 mb-5"
    >

        <v-row justify="space-between" align="center"
>
      <v-col
        cols="6"
      >
        <v-avatar class="mt-2 mr-2">
      <v-img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEUAAAD///9GRkbk5OR5eXn39/fHx8f8/Pze3t6EhIQ/Pz/x8fETExO6urofHx/h4eGYmJgMDAwyMjJhYWE5OTm0tLRpaWklJSUYGBjOzs7V1dWgoKCMjIxubm5VVVVLS0upqamW52d+AAAFHElEQVRogcWb7ZqCIBCFIRS/0ixTK13r/q9ys7K0BjiYPZy/m7yrwMwwMzBurWAjy9yrVvVhy7aHelV5eSk3gf1AzO7nYRrFB0bpEEdp+DN2cmzjNckdtI7bY7I82z95ey130N47+Yuyk2YFge9aNdjLI2zhWYDv8sQi7LCwJvcqzAvPxA7/ZpF7/ZneXc/2W/3C1mvd6ledli13X5B77eRMth99Se4VaV5dzT7WC6AZq4/27HYRcq/Wku3P21i0CsV3p9kCs5+o9vRuI9mnbFE0Y9kJZcuFyb2ozUaw0x+gGUsRNoo+e23TNK13ng3/YGMfvCqTIUgKkrKCnvn47O/sEzLK37uPwjzO+4J7YwtghZNGGjH92dtWm7J9YF9XtKXwgQ+/nz46ZQPWLCLJvQDXU6jZgA33lGjOgdBqYtvH7KP52ViD5jw2DzD2aiO2DzhNfRgkzAPUoykfsYH5yrVoznPzEKP18mIDRqU2xd0J8OleO/TJ9oENanpt6MV3z6/+ZCNxysbI3gCjPNf6wA6BYLgzojnvzMOsB4s8sBGDrAy8RkI+39+UHQKPUC74Q5AHDidsKDREznfAFn+aVoY/sRz7MdKdDR1yt8ipOtkiQ3kvdgL9swxiWwx1YzfYA8t9c9YMbB9MaJhNC2Zcrlr5DzYUo7EF9xi7x249G02n6OKGQTZjXdkJevg6m3OHARqt75MbGwhXHiJPVROh03cLYJjNSVsdJw7CUxXtjQ1EWQ8dTLtM0LlWSnHPRrznINNqs0gCXj0pszt2avNGdofn9Mq2yybpMma+1UjRlY1Pd69ODfeBmGWkmLMAXx43FSqPklimhw4BAw3wSzG92IXd97tqw2YkVxoCDbrCsSQr7R9iWTq1rkE6JzFVMiCaJ1RHUtz5gZDRvOxnzuxrAg9lcVdURRfPzsV5DMvT/EIVsynCLKsVWyZTPUc1szQtC+rAoHj6J3JHdkvfOp1vl+vc5f7+wq5tszr7YrlUc+z5Ou68iwxDIRIhwlBevM5QlCfl2fqxrMtl+Bk3+aHMO0uvklv5730jdceiQDY2ta0Sj1uKC3T2v8BhmwTjtX2L91AkLfb2GyhO7VK0feIuPwXC5Wucao7PY+0k0wqkeVjzuaQurcF3lQaLGRnPY5VFr8ybEr3ZSk3nUCTFopbutW7nUM2EZ5YNSh8K1eYm1ucdvkbr4K0237JVdyrgOqqczVGbZ6KOXfZSHNQeeSZFpuK8CJpzOuv1yK8pElP69AYu2mEMeUUyn1rbmVG1yJLfM59Kzkm1EJpzysQ888hk0htJnmKiltMrf079eTWj8ZJUQMzoqG5AZtyRihQiynSN6yVknWiuA5uKiskmdSKyPvY7uzatj5F1wRopkOglqA32VhfkgvKku2/3OFlcXg+vpK8Dx98t9oB0zx91YEX9ezc/bLmaDXrIz/q3wu7W8314SAdsRN1fVW/I5voUSYcNZL+Dss9jnh9X+G1Fn4cygPmzn/REVctX9LeoI7eD7XeXqsOOsq9HU4IvbMyMUA8z+R3cxwUfBhN1vU3bx6XrX9vmUA06V2dB9P1r+qJiZmrn90+eLvdg6Nsz1bjOuVCZ2UDk+kKssV/RXMHeR+Xn1CdlZDrwA32aWPn8HDUXeewlL02EFJ6h/lSnfblO+5Gd9mE77T/nLvvuudP7Bk7vWXCX90u403s13OV9ohvd2T2qXu7uj/Vyd2+ul7v7gjc5uyf5kKv7oYMWuxf7D19IQdzGx6mqAAAAAElFTkSuQmCC01/03/23"
        alt="John"
      ></v-img>
    </v-avatar> <br><span class="">Jon Ryan Pardi</span>
      </v-col>

      <v-col
        cols="6"
      >
    <div class="mt-4" style="text-align: right;">
        
         <v-switch class="mb-1   " style=" text-align: right;display:inline-block;" v-model="swi"  label="Hide/Show"></v-switch>
    </div>


        
    
       
      </v-col>
    </v-row>
    </v-card>
    <div class="titlebalance text-center"  style="">
        <span  class="display-6 icon-col">total balance</span>
        <p  class="icon col balance display-3 fw-bold ">{{ hideorshow }}</p>
        <v-row no-gutters justify="center" class="mt-5">
            <v-col cols="3" >
                <v-btn 
               
             
               class="icon-bg-col light-icon-col"
               size="large"
               v-model="overlay"
                @click="overlay = !overlay"
                >send</v-btn>
            </v-col>

             <v-col  cols="3">
                <v-btn 
               v-model="overlay"
              class="icon-bg-col light-icon-col"
               size="large"
                @click="overlay = !overlay"
                >recieve</v-btn>
            </v-col>


             <v-col  cols="3">
                <v-btn 
                v-model="overlay"
               class="icon-bg-col light-icon-col"
               size="large"
                @click="overlay = !overlay"
                >trade</v-btn>
            </v-col>
        </v-row>
    </div>

    <v-card class="icon-bg-col mt-5" elevation="5" >
       
        
             <v-tabs
      v-model="tab"
      bg-color=" #95cbae"
      align-tabs="center"
      class="main-bg-color"
      >
      <v-tab value="one">  Wallet</v-tab>
      <v-tab value="two">NFTs</v-tab>
     
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one"  >
         <v-list lines="two">
      <v-list-subheader ><h1>Assets</h1></v-list-subheader>

      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
        :title="folder.title"
        :subtitle="folder.subtitle"
      >
        
<template v-slot:prepend>
         <v-avatar>
      <v-img
        :src="folder.img"
        :lazy-src="folder.img"
        alt="John"
      ></v-img>
    </v-avatar>
        </template>
        <template v-slot:append>
          <v-row class="text-right" >
            <v-col
            cols="12"
            style="box-sizing: border-box !important;height:20px;"
            >
                 <span style="font-size:15px">{{ folder.coin }}</span>
            </v-col>
           <v-col
           cols="12"
           style="box-sizing: border-box !important;"
           >

             <span style="font-size:12px">${{ folder.amount }}</span>
           </v-col>
           
            
          </v-row>
        </template>
        
      </v-list-item>

      
    </v-list>
        </v-window-item>

        <v-window-item value="two">
           <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="pa-4 text-center mx-auto"
  >
    <v-icon
      class="mb-5"
      color="success"
      icon="mdi-hexagon-slice-4"
      size="112"
    ></v-icon>

    <h2 class="text-h5 mb-6">NFTs not available now</h2>

    

    <v-divider class="mb-4"></v-divider>

    <div class="text-end">
      <v-btn
        class="text-none"
        color="success"
        
        variant="flat"
       
        disabled
      >
        import NFT
      </v-btn>
    </div>
  </v-sheet>
        </v-window-item>

       
      </v-window>
    </v-card-text>
      
    </v-card>

    
  </div>
</template>

<script>
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdt from '../assets/usdt.png'
import bnb from '../assets/bnb.png'
export default {
    data() {
        return {
            forecast: [
                { day: 'USDT', icon: 'mdi-checkbox-marked-circle', temp: '03/11/22', amt: "200,000.89" },
                { day: 'USDT', icon: 'mdi-checkbox-marked-circle', temp: '25/03/23', amt: "1,200,000.89" },
                { day: 'Bitcoin', icon: 'mdi-checkbox-marked-circle', temp: '30/03/23', amt: "3,200,000.89" },
            ],
            expand: false,
            overlay: false,
            tab: null,
            folders: [
                {
                    subtitle: 'USDT',
                    title: 'USD Tether',
                    amount: "45,000",
                    ded: "+",
                    colour: "success",
                    coin: "0.2762USDT",
                    img: usdt

                },
                {
                    subtitle: 'ETH',
                    title: 'Ethereum',
                    amount: "249,000.00",
                    ded: "+",
                    colour: "success",
                    coin: "200.2762ETH",
                    img: eth

                },
                {
                    subtitle: 'BNB',
                    title: 'BNB',
                    amount: "10,000.09",
                    ded: "-",
                    colour: "dark",
                    coin: "200.2762BNB",
                    img: bnb
                },
                {
                    subtitle: 'BTC',
                    title: 'Bitcoin',
                    amount: "760,0000.78",
                    ded: "+",
                    colour: "green",
                    img: btc,
                    coin: "200.2762BTC",


                },


            ],
            swi: true
        }
    },
    computed: {
        hideorshow() {

            return this.swi ? "$650,000" : "*********";
        }
    },
}
</script>

<style></style>