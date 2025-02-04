import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={styles.input}
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        style={styles.button}
        onClick={() => {
          if (!title || !description) {
            alert("Please fill out both fields.");
            return;
          }
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert("Todo Added");
              setTitle("");
              setDescription(""); // Clear the form after submitting
            });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
    margin: "0 auto",
  },
  input: {
    padding: "10px",
    margin: "10px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
};

