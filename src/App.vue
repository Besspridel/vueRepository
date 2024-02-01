<template>
  <div id="app">
    <user-form @form-submitted="updateUserInfo" />
    <user-info :userInfo="userInfo" />
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  components: {
    UserForm,
    UserInfo
  },
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {
    updateUserInfo(userData) {
      this.userInfo = userData;
    }
  }
};
</script>

<style>
/* Добавьте общие стили для вашего приложения, если необходимо */
</style>