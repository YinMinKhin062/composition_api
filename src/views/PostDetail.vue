<template>
  <!-- <h1>This is post detail {{ id }}</h1> -->
  <div v-if="postDetail">
    <h3>{{ postDetail.title }}</h3>
    <p>{{ postDetail.body }}</p>
  </div>
  <div v-else>Loading</div>
</template>

<script>
import getPostDetail from "../Composable/getPostDetail";

export default {
  props: ["id"],
  setup(props) {
    let { postDetail, err, loadPostDetail } = getPostDetail(props.id);
    loadPostDetail();
    return { postDetail, err };
  },
};
</script>

<style>
</style>