export async function Signup(user) {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6Bh9-tRa9uPURWKUS7JJc9T04h1Dph3M";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw data.error.message;
      }
    } catch (error) {
      alert(error);
    }
  }
  
  export async function login(user) {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6Bh9-tRa9uPURWKUS7JJc9T04h1Dph3M";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw data.error.message;
      }
      return data.idToken;
    } catch (error) {
      alert(error);
      return;
    }
  }