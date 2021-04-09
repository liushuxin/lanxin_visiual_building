import axios from "axios";

export const getList = () => {
  return axios.get("/api/employee/getEmployee.action");
};
