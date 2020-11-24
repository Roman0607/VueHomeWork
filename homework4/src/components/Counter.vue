<template>
<div>
    <button @click="incrementAction">Increment</button>
    <button @click='decrement'>Decrement</button>
</div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex' 
export default {
    name:'Counter',
methods:{
    ...mapMutations([
        'increment',
        'decrement'
    ]),
    ...mapActions([
        'incrementAction'
    ])
    
}
}
</script>