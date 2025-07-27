import Table from "./components/Table/Table";
import titanData from "./titanData.json";
import "./index.css";

const columns = [
  { label: "Name", accessor: "name", sortable: true, sortbyOrder: "asc" },
  { label: "Element", accessor: "element", sortable: true },
];

const Titans = () => {
  return (
    <div className="table_container">
      <h1>Titans</h1>
      <Table
        caption="* best group"
        data={titanData}
        columns={columns}
      />
    </div>
  );
};

export default Titans;