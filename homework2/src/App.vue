<template>
  <div >
    <Header/>
    <FrameworkList/>
    <Footer/>
  </div>
</template>

<script>
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import FrameworkList from "@/components/Framework/FrameworkList";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    FrameworkList,
  }
}
</script>

<style>
body{
  background-color: rgb(226, 243, 247);
}
</style>
