<script lang="ts">
import headerComponent from "../components/header.vue";
import footerComponent from "../components/footer.vue";
import { defineComponent } from "vue";
import { mapGetters, Store, useStore } from "vuex";

interface DataProps {
  users: any[];
  store: any;
}
export default defineComponent({
  components: {
    headerComponent: headerComponent,
    footerComponent: footerComponent,
  },
  head: {
    title: "tezjs: Vuex Store",
  },
  data(): DataProps {
    return {
      users: [],
      store: Store,
    };
  },
  computed: {
    ...mapGetters({
      appUsers: "users/getUsers",
    }),
  },
  watch: {
    appUsers(users) {
      this.users = [];
      users.forEach((user: any) => {
        this.users.push(user);
      });
    },
  },
  mounted() {
    this.store = useStore();
    this.store.dispatch("users/fetchUsers");
  },
  methods: {
    addUser() {
      var textArray = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "T",
        "U",
      ];

      var user = {
        id: this.users.length + 1,
        fullName: textArray[this.users.length] + " Name",
      };
      this.store.dispatch("users/addUser", user);
    },
  },
});
</script>
<template>
  <headerComponent></headerComponent>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-end mt-2 mr-2">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-end"
        v-on:click="addUser"
      >
        Add User
      </button>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Id
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b" v-for="user of users" :key="user.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ user.id }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ user.fullName }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerComponent></footerComponent>
</template>
