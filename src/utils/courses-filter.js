export default function coursesFilter(courses ){
    return {

        courses:[
            {
                title : "Documentaries",
                data : courses.filter((item) => item.genre === 'documentaries'),
            },

            {
                title : "Children",
                data : courses.filter((item) => item.genre === "children"),
            },

            {
                title : "Crime",
                data : courses.filter((item) => item.genre === "crime"),
            },

            {
                title : "Feel good",
                data : courses.filter((item) => item.genre === "feel-good"),
            },

            {
                title : "Comedies",
                data : courses.filter((item) => item.genre === "comedies"),
            },
        ]
    }
}