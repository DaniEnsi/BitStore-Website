<script lang="ts">
import Vue from "vue"

export default Vue.extend({})

</script>

<template>
    <div class="w-full h-full">
        <span class="loader"></span>
    </div>
</template>

<style lang="css" scoped>
.loader {
  width: 6rem;
  height: 6rem;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #FFF;
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
  animation: animloader 1.2s linear infinite;
}
.loader::after {
  animation-delay: 0.6s;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
    
      





</style>