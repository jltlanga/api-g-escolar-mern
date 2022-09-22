import Table from 'react-bootstrap/Table';
import {useState, useEffect} from 'react';
import './matricula.css'
import { useParams } from 'react-router-dom';

function TableMatriculas() {
    const [matriculasData, setMatriculasData] = useState([]);
    const apiUrl = 'http://localhost:5000/'
    const { id } = useParams();

    const getMatriculas = () => {
        const options = {method: 'GET', headers: {'Content-Type': 'application/json'}};
    
        fetch( apiUrl + 'matricula/details?Turma=' + id, options)
        .then(response => response.json())
        .then(response => {setMatriculasData(response)})
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getMatriculas();
    }, [])

  return (
    <div className='contenedorMa'>
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
           {matriculasData?.map(matricula => {
            return(
             <tr key={matricula.Id_Matricula}>
                <td>{matricula.Id_Matricula}</td>
                <td>{matricula.Estudante[0].Nome}</td>
                <td>{matricula.Estudante[0].Email}</td>
                <td>{matricula.Estado}</td>
            </tr>
            )
           })}
            </tbody>
        </Table>
    </div>
  );
}

export default TableMatriculas;