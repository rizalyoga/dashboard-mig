export const columns = [
  { id: "no", label: "No", minWidth: 10, align: "center" },
  { id: "name", label: "Name", minWidth: 130, align: "center" },
  { id: "phone_number", label: "Phone", minWidth: 150, align: "center" },
  { id: "address", label: "Address", minWidth: 100, align: "center" },
  {
    id: "job_title",
    label: "Job",
    minWidth: 120,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 120,
    align: "center",
    format: (value) => (value == true ? "Active" : "Non Active"),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "center",
  },
];
