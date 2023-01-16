<template>
  <div>
    <PostList :posts="fetchedPosts" />
    <About />
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";
import About from "@/components/home/About";
export default {
  components: {
    PostList,
    About,
  },
  // data() {
  //    return {
  //      fetchedPosts: [],
  //    };
  //  },

  created() {
    this.$store.dispatch("setPosts", this.fetchedPosts);
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    },
  },
  fetch(context) {
    console.log(context);
    return new Promise((resolve, reject) => {
      context.store.dispatch("setPosts", [
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
      ]);
      resolve();
    }).catch((e) => {
      context.error(new Error());
    });
    /* setTimeout(() => {
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
    }, 1000);*/
  },
};
</script>
