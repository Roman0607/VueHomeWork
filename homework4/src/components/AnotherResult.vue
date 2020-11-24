<template>
    <div>
      <span>counter+= {{stringCounter}}</span>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'AnotherResult',
computed:{
  ...mapGetters([
      'stringCounter'
  ])
}
}
</script>