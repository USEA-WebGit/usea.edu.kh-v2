import { defineStore } from 'pinia';

export const useFacultyStore = defineStore('facultyStore', {
    state: () => ({
        faculties: [
            {
                slug: "business",
                name: "Faculty of Business",
                programs: [
                    { 
                        title: "Association's Degree", 
                        courses: 
                        [
                            {   
                                name: "Accounting", 
                                slug: "accounting" 
                            }
                        ] 
                
                    },
                    { 
                        title: "Bachelor's Degree",
                        courses: 
                        [
                            { 
                                name: "Marketing",
                                slug: "marketing" 
                            }
                        ] 
                    }
                ]
            },
            {
                slug: "it",
                name: "Faculty of IT",
                programs: [
                    { title: "Bachelor's Degree", courses: [{ name: "Software Engineering", slug: "software-engineering" }] }
                ]
            }
        ]
    }),
    getters: {
        getFacultyBySlug: (state) => (slug) => state.faculties.find(faculty => faculty.slug === slug)
    }
});
