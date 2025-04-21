// stores/facultyStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFacultyStore = defineStore('facultyStore', {
    state: () => ({
        faculties: []  // Keep as an object to match your API structure
    }),

    actions: {
        async fetchFaculties() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/faculty-data') // update with your actual endpoint
                this.faculties = response.data
            } catch (error) {
                console.error('Failed to fetch faculties:', error)
            }
        }
    }
})
