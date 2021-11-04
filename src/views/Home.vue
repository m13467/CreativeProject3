<template>
  <div>
    <h1 id="h_title">Get your horoscope!</h1>

    <div id="intr">
    <div id='submit_form'>
      <div>
      <form id='sign_choice'>
        <h2>Select your sign</h2>
        <input type='radio' id='Aries' name='sign' value='aries'>
        <label for='Aries'>Aries</label><br>
        <input type='radio' id='Taurus' name='sign' value='taurus'>
        <label for='Taurus'>Taurus</label><br>
        <input type='radio' id='Gemini' name='sign' value='gemini'>
        <label for='Gemini'>Gemini</label><br>
        <input type='radio' id='Cancer' name='sign' value='cancer'>
        <label for='Cancer'>Cancer</label><br>
        <input type='radio' id='Leo' name='sign' value='leo'>
        <label for='Leo'>Leo</label><br>
        <input type='radio' id='Virgo' name='sign' value='virgo'>
        <label for='Virgo'>Virgo</label><br>
        <input type='radio' id='Libra' name='sign' value='libra'>
        <label for='Libra'>Libra</label><br>
        <input type='radio' id='Scorpio' name='sign' value='scorpio'>
        <label for='Scorpio'>Scorpio</label><br>
        <input type='radio' id='Sagittarius' name='sign' value='sagittarius'>
        <label for='Sagittarius'>Sagittarius</label><br>
        <input type='radio' id='Capricorn' name='sign' value='capricorn'>
        <label for='Capricorn'>Capricorn</label><br>
        <input type='radio' id='Aquarius' name='sign' value='aquarius'>
        <label for='Aquarius'>Aquarius</label><br>
        <input type='radio' id='Pisces' name='sign' value='pisces'>
        <label for='Pisces'>Pisces</label><br>
      </form>
    </div>
        <br>
        <div>
        <form id='day_choice'>
        <h2>Select the day</h2>
        <input type='radio' id='Yesterday' name='day' value='yesterday'>
        <label for='Yesterday'>Yesterday</label><br>
        <input type='radio' id='Today' name='day' value='today'>
        <label for='Today'>Today</label><br>
        <input type='radio' id='Tomorrow' name='day' value='tomorrow'>
        <label for='Tomorrow'>Tomorrow</label><br><br>
      </form>
    </div>
    </div>
    <input id="submit_button" type="submit" value="Submit">
      <div id="signResults">
      </div>
    </div>

  </div>
</template>

<script>
//src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js" integrity="sha256-4iQZ6BVL4qNKlQ27TExEhBN1HFPvAvAMbFavKKosSWQ=" crossorigin="anonymous";
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  }
}

</script>

<style>
*{
  background-image: url("/images/const..jpg");
  color: #EFEFEF;
}

h1 {
  text-align: center;
  font-size: 10vw;
  font-family: Garamond;
  border: #5a3e64;
  border-style: double;
}


h2 {
    text-decoration: underline;
}

#submit_form{
  margin: auto;
}

#intr{
  display: flex;
  flex-direction: column
}

#signResults {
  text-align: center;
}

footer{
  margin-top: 10%;
  text-align:center;
}

#fimage{
  width: 10%;
}

#submit_button{
  width: auto;
  margin: auto;

}
/*Everything that isnt a phone*/
/*@media only screen and (min-width: 500px){*/

#intr{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#submit_form{
  width: 75%;
  display: flex;
  justify-content:space-evenly;
  margin-bottom: 10%;
  text-size: 4vw;
}

#submit_button{
  width: auto;
  margin-bottom: 5%;

}

#fimage{
  width: 5%;
}

form {
  font-size: 3vw;
}

h2 {
  font-size: 5vw;
}

p {
  font-size: 3vw;
}
</style>
