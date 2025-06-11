import { Table } from "react-bootstrap";

const NameList = ({ names }) => {
  return (
    <div>
      <Table  >
        {names.map((name, index) => (
          <Table key={index}>{name}</Table>
        ))}
      </Table>
    </div>
  );
};
export default NameList;
