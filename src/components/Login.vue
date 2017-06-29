<template>
    <div class="login">
        <input id="login" type="button" @click="login()" value="clique para logar"/>
        <div id="fb"></div>
    </div>

</template>

<script>

// import Traveller from '../../src/Model/Traveller.js'
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
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
        let login = document.getElementById('login')
        login.innerHTML = ''
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
