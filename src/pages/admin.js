import React from "react";
import DataTable from "./dataTable";
import CreateFoodForm from "./createFoodForm";
const style = {
  display: "flex",
  flexWrap: 'wrap'
};
const AdminPage = (props) => (
  <div style={style} className="admin">
    <CreateFoodForm />
    {props.campus.map((e) => (
      <div><DataTable campus={e} /></div>
    ))}
  </div>
);

export default AdminPage;
