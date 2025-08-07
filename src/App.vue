<template>
  <div id="app">
    <header>
      <h2>My <span>Portfolio</span></h2>
      <nav v-show="visible">
        <router-link to="/">Home</router-link>
        <p>|</p>
        <router-link to="/about">About</router-link>
        <p>|</p>
        <router-link to="/services">Services</router-link>
        <p>|</p>
        <router-link to="/sociality">Contact & Blog</router-link>
      </nav>
      <button @click="setVisible" class="menuBtn">≡</button>
    </header>
    <hr>
    <router-view />
    <footer>
      <p>2025 <sup>©</sup> - Portfolio</p>
    </footer>
  </div>
</template>

<script>
export default{
  data(){
    return {
      visible: true
    }
  },
  methods:{
    setVisible() {
      this.visible = !this.visible;
      console.log('hello');
      
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  text-transform: capitalize;
  cursor: default;
  text-decoration: none;
  transition: all .5s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #00152b;
  color: #fff;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
}

main, section, footer{
  padding: 35px;
}

span,a{
  color: #42b983;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 10vh;
}

nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

nav a {
  font-weight: bold;
  margin: 0 10px;
  text-decoration: none;
  cursor: pointer;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a{
  color: #fff;
}

.menuBtn{
  background: transparent;
  font-size: 2em;
  border: none;
  display: none;
}

footer{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
  background: #000;
}

@media (max-width:768px){
  .menuBtn{
    display: block;
  }

  nav{
    flex-direction: column;
  }

  header{
    min-height: 10vh;
    height: auto;
    max-width: 80vh;
  }

  header p{
    display: none;
  }
}
</style>