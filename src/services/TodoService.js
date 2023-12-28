class TodoService {
  static async fetchTodos() {
    const data = [
      {
        userId: 1,
        id: 1,
        title: "Wake Up",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "Break Fast",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "Playing",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "Dinner",
        completed: true,
      },
      {
        userId: 1,
        id: 5,
        title:
          "Praying",
        completed: false,
      },
      {
        userId: 1,
        id: 6,
        title: "Sleeping",
        completed: false,
      },
    ];
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const data = await response.json();
    return data;
  }

  static async updateTodoStatus(todoId, completed) {
    // Implement logic to update the todo status on the server
  }
}

export default TodoService;
