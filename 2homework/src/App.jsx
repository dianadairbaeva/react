import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
      <Movies />
      <Students />
      <Todo />
      <Books />
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>Счетчик оценок</h2>
      <h3>Score: {score}</h3>
      <button onClick={() => setScore(score + 1)}>+1</button>
      <button onClick={() => setScore(score - 1)}>-1</button>
      <button onClick={() => setScore(0)}>Сбросить</button>

      {score >= 10 && <p>Отличный результат</p>}
    </div>
  );
}

function Movies() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Avatar", year: 2009 },
    { id: 2, title: "Titanic", year: 1997 },
    { id: 3, title: "Interstellar", year: 2014 }
  ]);

  function deleteMovie(id) {
    setMovies(movies.filter(movie => movie.id !== id));
  }

  return (
    <div>
      <h2>Фильмы</h2>

      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          deleteMovie={deleteMovie}
        />
      ))}
    </div>
  );
}

function MovieCard({ movie, deleteMovie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <button onClick={() => deleteMovie(movie.id)}>
        Удалить
      </button>
    </div>
  );
}

function Students() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [group, setGroup] = useState("");

  function addStudent(e) {
    e.preventDefault();

    if (!name || !age || !group) return;

    setStudents([
      ...students,
      {
        id: Date.now(),
        name,
        age,
        group
      }
    ]);

    setName("");
    setAge("");
    setGroup("");
  }

  return (
    <div>
      <h2>Студенты</h2>

      <form onSubmit={addStudent}>
        <input placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Возраст" value={age} onChange={e => setAge(e.target.value)} />
        <input placeholder="Группа" value={group} onChange={e => setGroup(e.target.value)} />

        <button>Добавить</button>
      </form>

      {students.map(student => (
        <p key={student.id}>
          {student.name} {student.age} {student.group}
        </p>
      ))}
    </div>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask() {
    if (!text) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text
      }
    ]);

    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div>
      <h2>Todo List</h2>

      <input value={text} onChange={e => setText(e.target.value)} />

      <button onClick={addTask}>
        Добавить
      </button>

      {tasks.length === 0 ? (
        <p>Задач пока нет</p>
      ) : (
        tasks.map(task => (
          <div key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>
              Удалить
            </button>
          </div>
        ))
      )}
    </div>
  );
}

function Books() {
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell", price: 3000 }
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  function addBook() {
    if (!title || !author || !price) return;

    setBooks([
      ...books,
      {
        id: Date.now(),
        title,
        author,
        price
      }
    ]);

    setTitle("");
    setAuthor("");
    setPrice("");
  }

  return (
    <div>
      <h2>Книги</h2>

      <input placeholder="Название" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Автор" onChange={e => setAuthor(e.target.value)} />
      <input placeholder="Цена" onChange={e => setPrice(e.target.value)} />

      <button onClick={addBook}>
        Добавить
      </button>

      {books.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}


