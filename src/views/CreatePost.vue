<template>
  <div class="container mt-">
<form @submit.prevent="addPost">
    <div class="mb-3">
        <label for="title">Title</label>
        <input type="title" v-model="title" class="form-control" id="title" name="title" required>
    </div>
    <div class="mb-3">
        <label for="body">Body</label>
        <textarea  v-model="body" class="form-control" id="body" name="body" required></textarea>
    </div>

    <div class="mb-3">
        <label for="tag">Tag()</label>
        <input type="text" v-model="tag" placeholder="Hit enter to add a tag" class="form-control"
        @keydown.enter.prevent="handleKeyDown">
    </div>
    <div class="tag" v-for="tag in tags" :key="tag">
        <p>{{tag}}</p>
    </div>
    
    <button class="btn btn-primary">Submit</button>
</form>

  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
import {db} from '../firebase/config'
import { addDoc, collection } from '@firebase/firestore'


export default {
    setup(){
        let router=useRouter();//this.$router

        let body=ref("");
        let title=ref("");
        let tag=ref("");
        let tags=ref([]);

        let handleKeyDown=()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }
            // tag.value="";
        }


        let addPost=async()=>{
            let newPost={
                body:body.value,
                title:title.value,
                tags:tags.value
            }

            // start of json fetch with post method
            // await fetch('http://localhost:3000/posts',
            // {
            //     method:'POST',
            //     headers:{'content-type':'application/json'},
            //     body:JSON.stringify({
            //         body:body.value,
            //         title:title.value,
            //         tags:tags.value
            //     })
            // })
            // end of json fetch with post mehtod


            // start of inserting posts to firebase collection
          try{
                let dbRef=collection(db,"posts");
                let res =await addDoc(dbRef,newPost)
                console.log(res); 
          }catch(e){
                console.log(e.message);
          }
          






            // redirect from create to post page
                router.push('/')
        }




        return {body,title,tag,tags,addPost,handleKeyDown};

    }

}
</script>

<style>
.tag p{
            display: inline-block;
            border-radius: 0.4rem;
            background: lightblue;
            padding: 5px 10px 5px 10px;
            margin: 5px;
            gap:1rem;   
        }
</style>