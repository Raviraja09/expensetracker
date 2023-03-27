export const getUserProfile = async (token, mail) => {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA6Bh9-tRa9uPURWKUS7JJc9T04h1Dph3M";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const existingUser = data.users.find((user) => user.email === mail);
    const user = {
      displayName: existingUser.displayName,
      photoUrl: existingUser.photoUrl,
    };
    return user;
  };
  export async function updateProfile(details) {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA6Bh9-tRa9uPURWKUS7JJc9T04h1Dph3M";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(details),
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
  export function addExpeses(exp) {
    return async () => {
      async function sendRequest() {
        const url = `https://expensetracker-c23d7-default-rtdb.firebaseio.com/expenses.json`;
        try {
          const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(exp),
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
          return;
        }
      }
      await sendRequest();
    };
  }
  