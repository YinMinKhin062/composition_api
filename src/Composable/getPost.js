import { ref } from "vue";



let getPost = () => {

    let posts = ref([]);
    let error = ref("");

    let load = async () => {
        try {

            await new Promise((resolve,reject)=>{
                //resolve()
                setTimeout(resolve,2000);
            })
            let response = await fetch("http://localhost:3000/posts");
            // console.log(response);
            if (response.status == 404) {
                throw new Error("Not Found Url");
            }

            let data = await response.json();

            posts.value = data;
            // console.log(posts.value);
        } catch (e) {
            // console.log(e.message);
            error.value = e.message;
        }
    };

    return { posts, error, load };


}
export default getPost;