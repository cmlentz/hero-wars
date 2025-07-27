import Table from "./components/Table/Table";
import heroData from "./heroData.json";
// import RenderAnotherTable from "./components/Table/RenderAnotherTable";
import "./index.css";

const columns = [
  { label: "Picture", accessor: "picture", sortable: false },
  { label: "Name", accessor: "name", sortable: true },
  { label: "Position", accessor: "position", sortable: true },
  { label: "Main Stat", accessor: "stat", sortable: true },
  { label: "Role", accessor: "role", sortable: true },
  { label: "Faction", accessor: "faction", sortable: true, sortbyOrder: "asc" },
];

const Heroes = () => {
  return (
    <div className="table_container">
      <h1>Heroes</h1>
      <Table
        caption="* need picture"
        data={heroData}
        columns={columns}
      />
{/*      <br />
      <RenderAnotherTable /> */}
    </div>
  );
};

export default Heroes;