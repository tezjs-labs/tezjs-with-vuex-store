export default {
    fetchUsers({ commit }) {
        const users = [{ id: 1, fullName: 'A Name' }, { id: 2, fullName: 'B Name' }];
        commit('setUsers', users)
    },
    addUser(context: any, payload: any) {
        const users = context.state.users;
        users[payload.id] = payload;
        context.commit("setUsers", users);
    },
}