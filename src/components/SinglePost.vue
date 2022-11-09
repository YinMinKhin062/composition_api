<template>
  <h3>{{ post.title }}</h3>
  <!-- <p>{{ post.body }}</p> -->
  <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
    <p>{{ cutPostBody }}....</p>
  </router-link>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    let cutPostBody = computed(() => {
      return props.post.body.substring(0, 19);
    });
    // console.log(cutPostBody.value);
    return { cutPostBody };
  },
};
</script>

<style>
</style>