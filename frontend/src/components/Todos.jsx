export function Todos({ todos }) {
  // Filter out todos where 'completed' is true
  const incompleteTodos = todos.filter((todo) => todo.completed === false);

  return (
    <div style={styles.container}>
      {incompleteTodos.length > 0 ? (
        incompleteTodos.map((todo) => {
          return (
            <div key={todo._id} style={styles.todoCard}>
              <h1 style={styles.title}>{todo.title}</h1>
              <h2 style={styles.description}>{todo.description}</h2>
              <button
                onClick={() => {
                  fetch("http://localhost:3000/completed", {
                    method: "PUT",
                    body: JSON.stringify({
                      id: todo._id,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      alert("Todo updated");
                    });
                }}
                style={todo.completed ? styles.completedButton : styles.incompleteButton}
              >
                {todo.completed === true ? "Completed" : "Mark as Complete"}
              </button>
            </div>
          );
        })
      ) : (
        <h2>No incomplete todos</h2>
      )}
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    fontFamily: "'Arial', sans-serif",
  },
  todoCard: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderLeft: "5px solid #007bff",
    transition: "transform 0.2s ease-in-out",
  },
  title: {
    fontSize: "1.5rem",
    margin: "0 0 10px",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "15px",
  },
  incompleteButton: {
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  completedButton: {
    padding: "10px 15px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "not-allowed",
  },
};

