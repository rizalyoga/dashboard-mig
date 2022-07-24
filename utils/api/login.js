import Cookies from "js-cookie";

export const loginAccount = async (payload) => {
  try {
    const response = await fetch(
      `https://mitramas-test.herokuapp.com/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (data.access_token) {
      const timestamp = new Date().getTime(); // current time
      const exp = timestamp + 60 * 60 * 24 * 1000 * 7;

      const authentication = true;

      Cookies.set("userAuth", data.access_token, {
        expires: exp,
      });

      return authentication;
    } else {
      return data.error;
    }
  } catch (error) {
    console.log(error);
  }
};
