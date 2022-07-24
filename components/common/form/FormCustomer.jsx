import React, { useState } from "react";
import styles from "./FormCustomer.module.scss";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

//Api
import { addCustomer } from "@/utils/api/customers";

const FormCustomer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const token = Cookies.get("userAuth");

    setLoading((load) => !load);

    const data = {
      name: name,
      address: address,
      country: country,
      phone_number: phone,
      job_title: job,
      status: status,
    };

    addCustomer(data, token).then((res) => {
      Swal.fire({
        icon: "success",
        text: `${res.message}`,
      });
      setLoading((load) => !load);
    });
  };

  return (
    <div className={styles.add_customer__form_container}>
      <h1>Tambah Customer</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.form_name}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.form_contact_country}>
          <div className={styles.form_phone}>
            <label>Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className={styles.form_country}>
            <label>Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              required
            />
          </div>
        </div>
        <div className={styles.form_adress}>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
        </div>
        <div className={styles.form_job}>
          <label>Job</label>
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Job"
            required
          />
        </div>
        <div className={styles.form_status}>
          <label>Status Customer</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value={true}>Active</option>
            <option value={false}>Non Active</option>
          </select>
        </div>
        <div className={styles.form_action}>
          <input
            type="submit"
            value={loading ? "Please wait..." : "Add Customer"}
          />
        </div>
      </form>
    </div>
  );
};

export default FormCustomer;
