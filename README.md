#  Tezjs With Vuex

- Vuex is one of the great ways to manage a store in vue.

- To configure it with **Tezjs** you have to follow the simple below steps

-  First of all install vuex 

```
npm install vuex
```
- For adding the vuex store in the **tezjs project** add the store directory under the root of the project

```
  /root Directory/store 
```

- Under the store directory make one index.ts file. And also make one more directory for modules.

```
 /store/index.ts
 /store/users(Your module directory)
``` 

- Add store files inside your modules directory same as below.

```
  /store/users/

      /user.actions.ts
      /user.getters.ts
      /user.module.ts
      /user.mutations.ts
      /user.state.ts
```


- Now in /store/index.ts add the below code to create a store.

```
/store/index.ts

import { createStore } from 'vuex';
import userModule from './users/user.module'

const store = create store({
    modules: {
        users: user module,
    },
});

export default store;
```

- And in the user.module file you can export all store files same as below.

```
import userState from './user.state'
import userActions from './user.actions'
import userMutations from './user.mutations'
import userGetters from './user.getters'
export default {
    namespaced: true,
    state:userState,
    actions:userActions,
    mutations:userMutations,
    getters:userGetters
}
```

Add your remaining logic to store inside all other files. For more details about the vuex store read vuex store's docs

- It's done for the store now register this store to use it inside the project

- create a plugins directory under the root of the project and register the store same as shown below.

```
  /plugins/index.ts

  import store  from '../store';

  export default function(vue:any){
      vue.use(store)
  }
```
- Now use it inside the component check /pages/tezjsWithVuex.vue file. You can import store method from vuex same as below

```
import { mapGetters, Store, useStore } from "vuex";
```

``` 
pages/tezjsWithVuex.vue

 mounted() {
    this.store = useStore();
    this.store.dispatch("users/fetchUsers");
  },
```

Also, add a watch function to see those properties which will reflect after changes

```
pages/tezjsWithVuex.vue

 watch: {
    appUsers(users) {
      this.users = [];
      users.forEach((user: any) => {
        this.users.push(user);
      });
    },
  },
```

**Note:**  Refer Vuex Store docs for more details about vuex and store.