export default {
    getUsers(state: any) {

        return Object.keys(state.users)
            .map((t) => {
                return { id: state.users[t].id, fullName: state.users[t].fullName };
            })
            .sort((item1: any, item2: any) => item1.fullName.localeCompare(item2.fullName));

    }
}