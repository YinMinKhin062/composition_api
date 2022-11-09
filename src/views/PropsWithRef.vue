<template>
  <!-- <h1>{{ posts }}</h1> -->
  <div v-if="error">
    {{ error }}
  </div>
  <div v-else-if="posts.length > 0">
    <PostList :posts="posts"></PostList>
  </div>
  <div v-else>
    Loading .....
    <Spinner></Spinner>

  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import PostList from "../components/PostList";
import getPost from "../Composable/getPost";
export default {
  components: { PostList,Spinner },
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