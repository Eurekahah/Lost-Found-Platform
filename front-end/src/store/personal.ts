import { defineStore } from 'pinia'

export const usePersonalSignature = defineStore('personalSignature', {
    state: () => {
        return {
            signature : localStorage.getItem('personalSignature') || '这个人很懒，什么也没留下'
        }
    },

    actions: {
        updateSignature(newSignature: string){
            this.signature = newSignature
            localStorage.setItem('personalSignature', newSignature)
        }
    }
})
