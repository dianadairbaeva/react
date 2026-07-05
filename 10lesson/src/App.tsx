

function App() {
  let username: string = "Qwerty"
  username = "React student"
  // let age: number = 20
  // let price: number = 4990
  // let raiting: number = 4.8
  // let isAuth: boolean = true
  // let isLoading: boolean = false

  // let token: string | null | number = null
  // let userName: string | undefined = undefined

// type Course ={
//   id: number,
//   title: string,
//   duration:number,
//   level: "beginner" | "middle" | "advanced"
//   isActive: boolean
// }

// const courses: Course[] = [
//   {
//    id: 2,
//    title: "qwerty",
//    duration: 24,
//    level: "beginner",
//    isActive: false
//   }
// ]

// function getActiveCourses(courses:Course[]): Course[]{
//   return courses.filter((course) => course.isActive)
// }
// console.log(getActiveCourses(courses))

type Users = {
  id: number,
  name: string,
  lastname: string,
  age: number 
}

const users: Users[] = [
  {
    id: 1,
    name: "Diana",
    lastname: "Dairbayeva",
    age: 18
  },
  {
    id: 2,
    name: "Tsai",
    lastname: "Violetta",
    age: 18
  },
  {
    id: 3,
    name: "Milisenta",
    lastname: "Sdobnikova",
    age: 17
  }
]

const adultUsers = users.map((user) => {
  if (user.age >= 18) {
    return user;
  }
});

console.log(adultUsers);

    return(
      <>
        <h1>TYPESCRIPT</h1>
      </>
    )

}

export default App
