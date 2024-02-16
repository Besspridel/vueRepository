<template>
    <div>
    <h1 class="title">Создайте пост</h1>
    <form @submit.prevent="createPost" class="post-form">
        <label for="postTitle">Заголовок:</label>
        <input type="text" id="postTitle" v-model="postTitle" />
        <br />
        <label for="postBody">Текст:</label>
        <textarea id="postBody" v-model="postBody"></textarea>
        <br />
        <button type="submit" class="submit-button">Создать пост</button>
    </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CreatePost',
    data() {
        return {
            postTitle: '',
            postBody: ''
        }
    },
    methods: {
        createPost() {
            const newPost = {
                title: this.postTitle,
                body: this.postBody,
                id: ++this.$store.state.id
            }
            this.$store.dispatch('addPost', newPost);
            console.log(this.$store.getters.getPosts);
            this.$router.push('/posts');
        }
    }
   
  }
  </script>
  
  <style scoped>

.title {
    text-align: center;
}
.all-posts {
  text-align: center;
  padding: 20px;
}

.post-form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

.post-item {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}
  </style>
  