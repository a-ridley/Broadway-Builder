<template> 
  <div id="contact-us">
    <h1 class="hidden-sm-and-up text-xs-center font-weight-bold display-1">Contact Us</h1>
    <h1 class="hidden-xs-only hidden-md-and-up text-xs-center font-weight-bold display-2">Contact Us</h1>
    <h1 class="hidden-sm-and-down hidden-lg-and-up text-xs-center font-weight-bold display-2">Contact Us</h1>
    <h1 class="hidden-md-and-down text-xs-center font-weight-bold display-3">Contact Us</h1>
    <v-container class="container">
      <div style="grid-area: fname;">
        <label for="fname"> First Name* </label>
        <v-text-field v-model="fname" :rules="[rules.required]" solo id="styled-input" class="styled-input"> </v-text-field>
      </div>
      <div style="grid-area: lname;">
        <label for="lname"> Last Name* </label>
        <v-text-field v-model="lname" :rules="[rules.required]" solo id="styled-input" class="styled-input"> </v-text-field>
      </div>
      <div style="grid-area: email;">
        <label for="email"> E-mail* </label>
        <v-text-field v-model="email" :rules="[rules.required]" solo id="styled-input" class="styled-input"> </v-text-field>
      </div>
      <div style="grid-area: number;">
        <label for="phonenumber"> Phone Number* </label>
        <v-text-field v-model="phonenumber" :rules="[rules.required]" solo id="styled-input" class="styled-input"> </v-text-field>
      </div>
      <div style="grid-area: cname;">
        <label for="cname"> Company Name </label>
        <v-text-field v-model="cname" solo id="styled-input" class="styled-input"> </v-text-field>
      </div>
      <div style="grid-area: cemail;">
        <label for="cemail"> Company Email </label>
        <v-text-field v-model="cemail" solo id="styled-input" class="styled-input"> </v-text-field>
      </div>
      <div style="grid-area: message;">
        <label for="message"> Message* </label>
        <v-text-field v-model="message" :rules="[rules.required]" solo multi-line id="styled-input" class="styled-input"> </v-text-field>
      </div>
      <div style="grid-area: submit;"> 
        <p class="req"> * = Required </p>
        <v-btn text @click="submit"> Submit </v-btn>
      </div>
      <div style="grid-area: map;">
        <a href="#"> <img src="https://i.imgur.com/tHcBSr5.png" alt="Broadway Builder Map."> </a>
        <p> <br>1234 W. Street On Map<br>Short Beach, CA 90420 </p>
        <p style="color: #0000ee;"> contact.broadwaybuilder.xyz<br><br>(555)-318-2121 </p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  created() {
    console.log("Contact us page loaded");
  },
  data () {
    return {
      title: 'Form',
      fname: '',
      lname: '',
      email: '',
      phonenumber: '',
      cname: '',
      cemail: '',
      message: '',
      formHasErrors: false,
      rules: {
        required: value => !!value || 'Required.',
      }
    }
  },
  methods: {
    submit () {
      this.formHasErrors = false;
      if(this.fname=='' || this.lname=='' || this.email=='' || this.phonenumber=='' || this.message=='') {
        this.formHasErrors = true;
      }
      if(!this.formHasErrors) {
        alert("Message sent!");
      } else {
        alert("Please fill in all required fields.")
      }
    }
  }
}
</script>

<style lang="css">
  #contact-us {
    margin: 2em 1em;
  }

  #contact-us .container{
    height: auto;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    grid-template-rows: auto auto auto auto auto;
    grid-gap: 25px;
    grid-template-areas:
      "fname lname map" "email number map" "cname cemail map" "message message map" "submit submit map";
  }

  @media (max-width: 1265px) {
    #contact-us .container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto auto auto auto;
      grid-template-areas:
        "fname lname" "email number" "cname cemail" "message message" "submit submit" "map map";
    }
  }

  @media (max-width: 600px) {
    #contact-us .container {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto auto auto auto auto auto;
      grid-template-areas:
        "fname" "lname" "email" "number" "cname" "cemail" "message" "submit" "map";
    }
  }

  #contact-us label{
    font-size: 1em;
    font-weight: bold;
    margin: 0px 0px 0px 0px;
  }

  #contact-us #styled-input {
    width: 100%;
    padding: 12px 10px;
    margin: 0px 0px 0px 0px;
    display: inline-block;
    border: none;
    min-height: 50px;
    font-size: 1em;
  }

  #contact-us .req {
    color: red;
    font-weight: bold;
    font-size: 1em;
  }

  #contact-us .v-btn {
    width: 100%;
    height: 50px;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border-radius: 4px;
  }

  #contact-us img {
    max-width: 100%;
    display: block;
    height: auto;
  }

</style>