<template>
    <div>
      <span>Doublecounter= {{doubleCounter}}</span> <br>
      <span>counter= {{stringCounter}}</span>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name:'Result',
computed:{
   ...mapGetters([
       'doubleCounter',
       'stringCounter'
   ])
}
}
</script>