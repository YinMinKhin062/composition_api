<template>
    <div>
      <h3>{{ post.title }}</h3>
      <!-- <p>{{ post.body }}</p> -->
      <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
          <p>{{ cutPostBody }}....</p>
     </router-link>
     <div v-for="tag in post.tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag:tag } }">
          {{ tag }}
     </router-link>

     </div>
    </div>
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