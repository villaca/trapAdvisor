<template>
    <div class="login">
        <h1>{{ msg }}</h1>
        <form action="www.google.com" method="POST">
            <input type="text"/>
            <input type="submit" value="Logar"/>
        </form>
        <input type="button" @click="login()" value="a realidade é cruel"/>
        <h3>{{ traveller.id }}</h3>
        <h3>{{ traveller.name }}</h3>
        <div id="fb"></div>
    </div>
</template>

<script>

import Traveller from '../../src/Model/Traveller.js'
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Facebook login',
      traveller: new Traveller(1, 'safado'),
      facebook: ''
    }
  },
  methods: {
    login () {
      axios.get('http://trapadvisor.us-east-2.elasticbeanstalk.com/login', {})
      .then(response => {
        console.log(response)
        this.facebook = response.data
        let fb = document.getElementById('fb')
        fb.innerHTML = response.data
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
