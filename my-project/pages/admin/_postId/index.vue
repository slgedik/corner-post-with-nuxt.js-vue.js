<template>
  <PostFrom :is-update="true" />
</template>
<script>
import PostFrom from "@/components/admin/PostFrom";
export default {
  components: {
    PostFrom,
  },
};
</script>
