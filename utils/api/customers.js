// GET CUSTOMER
export const getCustomers = async (token) => {
  try {
    const response = await fetch(
      `https://mitramas-test.herokuapp.com/customers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

// ADD CUSTOMER
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

// EDIT CUSTOMER
export const editCustomer = async (id, payload, token) => {
  try {
    const payloads = Object.assign(id, payload);

    const response = await fetch(
      `https://mitramas-test.herokuapp.com/customers`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(payloads),
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

// DELETE CUSTOMER
export const deleteCustomer = async (payload, token) => {
  try {
    const response = await fetch(
      `https://mitramas-test.herokuapp.com/customers`,
      {
        method: "DELETE",
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
