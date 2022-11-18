<template>
  <div v-if="error">{{error}}</div>
  <div v-else-if="posts.length">
    <PostList :posts="FilteredTagPost"></PostList>
  </div>
  <div v-else>Loading</div>
</template>

<script>
import PostList from '../components/PostList'
import { computed } from '@vue/runtime-core';
import getPost from '../Composable/getPost';
export default {
  components: { PostList },
props:['tag'],
setup(props){
    console.log(props.tag);
   let {posts,error,load}= getPost();
   load();
   let FilteredTagPost=computed(()=>{
    return posts.value.filter((post)=>{
        return post.tags.includes(props.tag);
    })
   })
   return{posts,error,FilteredTagPost};
}
}
</script>

<style>

</style>


