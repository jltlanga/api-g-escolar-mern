import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoPersonAddSharp } from "react-icons/io5";
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
            <Table variant="dark" responsive>
             <thead>
             <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Materia</th>
                <th>Turma</th>
                <th>Ação</th>
             </tr>
             </thead>
             <tbody>
          {data?.map((professor, index) => {
            return(
             <tr key={professor._id}>
                <td>{index + 1}</td>
                <td>{professor.Nome}</td>
                <td>{professor.Email}</td>
                <td>{professor.Materia}</td>
                <td>{professor.Turma}</td>
                <td>
                  <Button variant='danger' onClick={() => handleDelete(professor._id)}><RiDeleteBin6Line/></Button>
                  <Link to={`/professor/adicionar/${professor._id}`}><Button className='edit' variant='warning'><BiEditAlt/></Button></Link>
                </td>
            </tr>
            )
            })}
            </tbody>
        </Table>
      
      <Link to='/professor/adicionar'><Button className='botao1' variant="success"><IoPersonAddSharp/> Adicionar</Button></Link>
    </div>
  )
}

export default Home