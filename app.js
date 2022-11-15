/** @format */
const API = "https://jsonplaceholder.typicode.com/users";

const app = Vue.createApp({
  data() {
    return {
      users: [],
    };
  },

  methods: {
    async fetchApi() {
      await axios
        .get(API)
        .then((response) => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchApi();
  },
});
app.mount("#app");
