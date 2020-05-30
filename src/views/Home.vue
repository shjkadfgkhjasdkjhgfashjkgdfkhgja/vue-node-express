<template>
 <div class="content">
   <Exhibition></Exhibition>
   <Container></Container> 
 </div>
</template>

<script>
import Exhibition from '../components/Exhibition'
import Container from '../components/Container'
export default {
  name: 'home',
  components: {
    Exhibition,
    Container
  }
}
</script>
<style >
 .v-enter
        {
            opacity: 0;
            transform: translateX(100%);
              position:absolute;
        } 
        .v-leave-to{
           opacity: 0;
            transform: translateX(-100%);
            position:absolute;
        }
        
        .v-enter-active,
        .v-leave-active {
            transition: all 0.1s ease
        }
        .class{
          padding-top: 4.6rem;
          padding-bottom: 7.2rem;
        }
</style>