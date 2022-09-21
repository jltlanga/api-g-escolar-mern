import Table from 'react-bootstrap/Table';

function TableMatriculas() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome do Estudante</th>
          <th>Email</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Email</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableMatriculas;