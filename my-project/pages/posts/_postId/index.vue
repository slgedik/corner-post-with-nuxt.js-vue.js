<template>
  <PostDetail :post="fetchedPost" />
</template>
<script>
import PostDetail from "@/components/post/PostDetail";

export default {
  components: {
    PostDetail,
  },
  //this.$route.params._postId =>>> this async data içince kullanılmadıgından context.params.postId kullanacagız
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPost: {
          id: "1",
          title: "yazılım mühendisliğine giriş",
          subTitle: "ID bilgisi : " + context.params.postId,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Sıla Gedik",
        },
      });
    }, 1500);
  },
};
</script>
