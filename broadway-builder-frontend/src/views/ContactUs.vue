<template>
  <div id="contact-us">
    <h1 class="hidden-sm-and-up text-xs-center font-weight-bold display-1">Contact Us</h1>
    <h1 class="hidden-xs-only hidden-md-and-up text-xs-center font-weight-bold display-2">Contact Us</h1>
    <h1 class="hidden-sm-and-down hidden-lg-and-up text-xs-center font-weight-bold display-2">Contact Us</h1>
    <h1 class="hidden-md-and-down text-xs-center font-weight-bold display-3">Contact Us</h1>
    <v-container class="container">
      <!-- <form action="submit-contact-request"> -->
        <div style="grid-area: fname;">
          <label for="fname"> First Name* </label>
          <div> <input type="text" id="fname" name="firstname" required> </div>
        </div>
        <div style="grid-area: lname;">
          <label for="lname"> Last Name* </label>
          <div> <input type="text" id="lname" name="lastname" required> </div>
        </div>
        <div style="grid-area: email;">
          <label for="email"> Email* </label>
          <div> <input type="text" id="email" name="email" required> </div>
        </div>
        <div style="grid-area: number;">
          <label for="phonenumber"> Phone Number* </label>
          <div> <input type="text" id="phonenumber" name="Phone Number" required> </div>
        </div>
        <div style="grid-area: cname;">
          <label for="cname"> Company Name </label>
          <div> <input type="text" id="cname" name="Company Name"> </div>
        </div>
        <div style="grid-area: cemail;">
          <label for="cemail"> Company Email </label>
          <div> <input type="text" id="cemail" name="Company Email"> </div>
        </div>
        <div style="grid-area: message;">
          <label for="message"> Message* </label>
          <div> <textarea id="message" name="Message" rows="5" required></textarea> </div>
        </div>
        <div style="grid-area: submit;"> <input type="button" value="Submit" v-on:click="msg()"> </div>
       <!-- </form> -->
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
  name: "contact us",
  created() {
    console.log("Contact us page loaded");
  },
  methods: {
    msg() {
      alert("Message Sent!");
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
  }

  #contact-us input[type=text], select, textarea {
    width: 100%;
    background-color: white;
    padding: 12px 10px;
    margin: 0px 0px 12px 0px;
    display: inline-block;
    border-style: solid;
    border-color: #cccccc;
    border-width: 2px;
    border-radius: 4px;
  }

  #contact-us input[type=button] {
    width: 100%;
    font-weight: bold;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 14px 20px;
    margin: 8px 0;
    border-radius: 4px;
  }

  #contact-us input[type=button]:hover{
    background-color: #45a049;
  }

  #contact-us img {
    max-width: 100%;
    display: block;
    height: auto;
  }

</style>