<template>
<div>
  <h1>Petition the Gods</h1>
  <h3>Request a specific horoscope</h3>

  <div id="IHaveADream">
  <input v-model="date" placeholder="Date">
  <input v-model="sign" placeholder="Sign">
  <input v-model="color" placeholder="Color">
  <input v-model="number" placeholder="Lucky Number">
  <input v-model="time" placeholder="Lucky Time">
  </div>
  <textarea v-model="description" placeholder="Description"></textarea>
  <input id="submit_button" type="submit" value="Submit" v-on:click="submit()">
  <p>{{this.$root.$data.content}}</p>
</div>
</template>

<script>
export default {
props: ["value"],
data() {
  return {
    date: this.value,
    sign: this.value,
    description: this.value,
    color: this.value,
    number: this.value,
    time: this.value
  }
},
model: {
  prop: 'value',
  event: 'change'
},
methods: {
  async submit(){
    this.$root.$data.content = "The Gods are reviewing your request";
    await new Promise(resolve => setTimeout(resolve, Math.random()*1500));
    this.$root.$data.content += " .";
    await new Promise(resolve => setTimeout(resolve, Math.random()*1500));
    this.$root.$data.content += " .";
    await new Promise(resolve => setTimeout(resolve, Math.random()*1500));
    this.$root.$data.content += " .";
    await new Promise(resolve => setTimeout(resolve, Math.random()*1500));
    this.$root.$data.content += " .";
    await new Promise(resolve => setTimeout(resolve, Math.random()*1500));
    this.$root.$data.content += " .";
    await new Promise(resolve => setTimeout(resolve, Math.random()*1500));
    this.$root.$data.content += " .";
    await new Promise(resolve => setTimeout(resolve, Math.random()*5500));
    this.$root.$data.content = "";

    let index = Math.floor(Math.random() * this.$root.$data.responses.length);
    this.$root.$data.content = this.$root.$data.responses[index];
  },
  delay() {
    setTimeout(function(){
      console.log("God's Decision");
    }, 5000);
  }
},

  beforeMount(){
    this.$root.$data.content = "";
  }
}
</script>

<style>
  h3{
    font-size: 3vw;
  }
  input {
    color: black;
    margin: 3vw;
    font-size: 1.8vw;
  }
  textarea {
    color: black;
    width: 90%;
    height: 7vw;
    font-size: 1.8vw;
  }
  IHaveADream {
    width: 100%;
  }
</style>
