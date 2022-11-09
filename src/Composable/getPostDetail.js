import { ref } from "vue";


let getPostDetail = (id) => {


    let postDetail = ref(null);
    let err = ref("");

    let loadPostDetail = async () => {

        try {

            new Promise((resolve,reject)=>{
                setTimeout(resolve,2000);
            });


            let res = await fetch('http://localhost:3000/posts/' + id);
            if (res.status == 404) {
                throw new Error("Not Found with this id");
            }
            let detail = await res.json();
            postDetail.value = detail;

        } catch (e) {
            err.value = e.message;
        }
    }
    return { postDetail, err, loadPostDetail };

}
export default getPostDetail;