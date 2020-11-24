<template>
  <div>
    <h1>Vuex</h1>
    <hr>
    <span>counter</span>
    <Counter/>
    <span>result</span>
    <Result/>
    <span>AnotherResult</span>
    <AnotherResult/>
  </div>
</template>

<script>

import Counter from '@/components/Counter';
import Result from '@/components/Result';
import AnotherResult from '@/components/AnotherResult';

export default {
  name: 'App',
  components: {
  Counter,
  Result,
  AnotherResult 
  },
  data() {
    return{
    }
  }
}
</script>

<style>

</style>
