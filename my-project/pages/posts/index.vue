<template>
  <div>
    <PostList :posts="fetchedPosts" />
  </div>
</template>
<script>
import PostList from "@/components/post/PostList";
export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPosts: [
          {
            id: 1,
            title: "Web teknolojileri",
            subTitle: "Nuxt hakkında her şey",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "Sıla Gedik",
          },
          {
            id: 2,
            title: "Database araçları",
            subTitle: "Postgresql mi mongoDB",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "Sıla Gedik",
          },
        ],
      });
    }, 1500);
  },
};
</script>
<style scoped></style>
