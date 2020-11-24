<template>
<div>
  <div class="main">
      <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link class="nav-link" active-class="active" exact to="/">Домашня сторінка</router-link>
    </li>
     <li class="nav-item">
      <router-link class="nav-link" active-class="active" to="/persone/">Персона</router-link>
      </li>
    <li class="nav-item">
      <router-link class="nav-link" active-class="active" to="/addPersone">Додати персону</router-link>
      </li>
        <li class="nav-item">
      <router-link class="nav-link" active-class="active" to="/viewPersone/">Переглянути персон</router-link>
      </li>
  </ul>
  </div>
  <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
.main{
  text-align: center;
  
}
.nav{
  justify-content: center;
  background-color: cadetblue;
  border:solid 3px  rgb(64, 112, 63);
  border-radius: 20px;
  height: 60px;
  align-items: center;
}
.active{
  background-color:rgb(135, 204, 162) ;
}
</style>
