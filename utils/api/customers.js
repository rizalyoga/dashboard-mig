export const addCustomer = async (payload, token) => {
  try {
    const response = await fetch(
      `https://mitramas-test.herokuapp.com/customers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
