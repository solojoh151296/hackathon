<template>
  <div class="xd">
    <h1>HOLIIIIIIIIIIIIIII</h1>
    <h2> {{subtitulo}}</h2>
    
  </div>
</template>

<script>
export default {
  name: 'XD',
  props: {
    msg: String
  },
  data (){
    return {
      subtitulo: 'Soy Johana'
    }
  }
}
</script>
