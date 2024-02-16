<template>
  <div class="hello">
    <button @click="$router.push('/')" class="nav-button">Главная</button>
    <button @click="$router.push('/posts')" class="nav-button">Посты</button>
    <button @click="$router.push('/createPost')" class="nav-button">Создать пост</button>
  </div>
</template>

<script>
export default {
  name: 'navbar',
 
}
</script>

<style scoped>
    .nav-button {
        background-color: #007BFF;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;
        margin-left: 10px;
    }
    .nav-button:hover {
        background-color: #0056b3
    }
</style>
