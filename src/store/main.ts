import { defineStore } from 'pinia'

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        name: 'admin'
    }),
    getters: {
        nameLength: (state) => state.name.length,
    },
    actions: {
        async insertPosts (data: string) {
            this.name = data;
        }
    }
})