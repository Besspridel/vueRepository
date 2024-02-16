import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        posts: [],
        id: 5
    },
    getters: {
        getPosts(state) {
            return state.posts
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        addPost(state, newPost) {
            state.posts.push(newPost)
            console.log(state.posts)
        },
        deletePost(state, postId) {
            state.posts = state.posts.filter(post => post.id !== postId);
        },
    },
    actions: {
        async fetchPosts({commit}) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
            commit('setPosts', response.data);
        },
        async deletePost({ commit }, postId) {
            commit('deletePost', postId);
        },
        addPost({ commit }, newPost) {
            commit('addPost', newPost);
        }
    },
    modules: {

    }
})
