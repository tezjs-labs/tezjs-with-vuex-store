import { createStore } from 'vuex';
import userModule from './users/user.module'
const store= createStore({
    modules: {
        users: userModule,
    },
})

export default store;

