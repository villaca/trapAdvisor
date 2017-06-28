<template>
    <div class="login">
        <h1>{{ msg }}</h1>
        <form action="www.google.com" method="POST">
            <input type="text"/>
            <input type="submit" value="Logar"/>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Facebook login'
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
