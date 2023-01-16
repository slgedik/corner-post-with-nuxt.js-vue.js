<template>
  <PostFrom @submit="savePost($event)" />
</template>
<script>
import PostFrom from "@/components/admin/PostFrom";
export default {
  components: {
    PostFrom,
  },
  methods: {
    savePost(post) {
      console.log(post);
    },
  },
};
</script>
