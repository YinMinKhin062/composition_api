<template>
  <!-- <h1>{{ posts }}</h1> -->
  <div v-if="error">
    {{ error }}
  </div>
  <div v-else-if="posts.length > 0" class="layout">
    <PostList :posts="posts"></PostList>
    <TagCloud></TagCloud>
  </div>
  <div v-else>
    Loading .....
    <Spinner></Spinner>

  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from "../components/Spinner";
import PostList from "../components/PostList";
import getPost from "../Composable/getPost";
export default {
  components: {
    TagCloud, PostList,Spinner },
  setup() {
    // destructure and composable function
    let { posts, error, load } = getPost();

    // let showPost = ref(true);
    load();

    // Destructuring
    // let { name, age } = {
    //   name: "yin min khin",
    //   age: 21,
    // };
    // console.log(name);
    // console.log(age);

    return { posts, error };
  },
};
</script>

<style>
</style>