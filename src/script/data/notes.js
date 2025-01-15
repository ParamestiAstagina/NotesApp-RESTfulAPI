const apiBaseUrl = "https://notes-api.dicoding.dev/v2";

class ApiNotes {
  static async createNote(title, body) {
    try {
      const response = await fetch(`${apiBaseUrl}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
        console.log(result.data);
        return result.data;
      } else {
        console.error(result.message);
        throw new Error(result.message || "Note creation failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async getNotes() {
    try {
      const response = await fetch(`${apiBaseUrl}/notes`, {
        method: "GET",
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
        console.log(result.data);
        return result.data;
      } else {
        console.error(result.message);
        throw new Error(result.message || "Failed to fetch notes");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async deleteNote(noteId) {
    try {
      const response = await fetch(`${apiBaseUrl}/notes/${noteId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
        return result.message;
      } else {
        console.error(result.message);
        throw new Error(result.message || "Failed to delete note");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default ApiNotes;
