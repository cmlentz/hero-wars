import Table from "./Table";
import tableData2 from "../../tableData2.json";

const columns = [
  { label: "Name", accessor: "name", sortable: true, sortbyOrder: "asc" },
  { label: "Element", accessor: "element", sortable: true },
];

const RenderAnotherTable = () => {
  return (
    <>
      <Table
        caption="Titans"
        data={tableData2}
        columns={columns}
      />
    </>
  );
};

export default RenderAnotherTable;