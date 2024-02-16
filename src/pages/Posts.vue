<template>
    <div class="post-list">
      <h1 class="title">Список постов</h1>
      <ul>
        <li v-for="post in posts" :key="post.id" class="post-item">
          <div class="post-content">
            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-body">{{ post.body }}</p>
          </div>
          <button @click="deletePost(post.id)" class="delete-button">Удалить</button>
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
  computed: {
    posts() {
        if (this.$store.state.posts.length === 0) {
            this.$store.dispatch('fetchPosts')
        }
        const posts = this.$store.getters.getPosts;
        return posts;
    }
  },
  methods: {
    deletePost(postId) {
      this.$store.dispatch('deletePost', postId);
      console.log('clicked')
    },
  },
};
</script>

<style scoped>
.post-list {
  max-width: 800px;
  margin: 20px auto;
}

.title {
    text-align: center;
}

.post-item {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-content {
  flex: 1;
}

.post-title {
  color: #007BFF;
  margin-bottom: 10px;
  text-align: center;
}

.post-body {
  font-size: 16px;
  padding: 0px 40px;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
