<template >
  <div>
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>
