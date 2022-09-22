import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './home.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([])
  const [nomeP, setNomeP] = useState('');
  const [emailP, setEmailP] = useState('');
  const [materiaP, setMateriaP] = useState('');
  const [turmaP, setTurmaP] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/professor/details`, {
      Nome: nomeP,
      Email: emailP,
      Materia: materiaP,
      Turma: turmaP
    }).then((response) => {
        setData(response.data);
    })
}, [])

const handleDelete = (idP) => {
  axios.delete('http://localhost:5000/professor/interest/' + idP)
  .then(() => {getData();})
}

const getData = () => {
  axios.get('http://localhost:5000/professor/details/')
  .then((getData) => {
    setData(getData.data);
  })
}

  return (
    <div className='contenedorP'>
            <Table responsive>
             <thead>
             <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Materia</th>
                <th>Turma</th>
             </tr>
             </thead>
             <tbody>
          {data?.map(professor => {
            return(
             <tr key={professor._id}>
                <td>{professor._id}</td>
                <td>{professor.Nome}</td>
                <td>{professor.Email}</td>
                <td>{professor.Materia}</td>
                <td>{professor.Turma}</td>
                <td>
                  <button onClick={() => handleDelete(professor._id)}>Deletar</button>
                  <Link to={`/professor/adicionar/${professor._id}`}><button>Atualizar</button></Link>
                </td>
            </tr>
            )
            })}
            </tbody>
        </Table>
      
      <Link to='/professor/adicionar'><button>Adicionar</button></Link>
    </div>
  )
}

export default Home