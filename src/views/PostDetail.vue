<template>
  <!-- <h1>This is post detail {{ id }}</h1> -->
  <div v-if="postDetail">
    <h3>{{ postDetail.title }}</h3>
    <p>{{ postDetail.body }}</p>
    <button @click="deletePost">Delete</button>
  </div>
  <div v-else>Loading
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPostDetail from "../Composable/getPostDetail";
import {useRoute} from 'vue-router'
import {db} from '../firebase/config'
import { deleteDoc, doc } from '@firebase/firestore';
import {useRouter} from 'vue-router'

export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let route=useRoute();//this.$router
    let router=useRouter();

    // let { postDetail, err, loadPostDetail } = getPostDetail(props.id);
    let { postDetail, err, loadPostDetail } = getPostDetail(router.params.id);
    loadPostDetail();

    let deletePost=()=>{
      let id=props.id;
      try{
        let docRef=doc(db,"posts",id);
        await deleteDoc(docRef);
      }catch(e){
        console.log(e.message);
      }
    }
    router.push('/PropsWithRef');

    



    return { postDetail, err };
  },
};
</script>

<style>
</style>