import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './listAlunos.css';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaRegIdCard } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const ListAlunos = () => {
  const [dataA, setDataA] = useState([])
  const [nomeA, setNomeA] = useState('');
  const [emailA, setEmailA] = useState('');
  const [materiaA, setMateriaA] = useState('');
  const [turmaA, setTurmaA] = useState('');
  const [matricular, setMatricular] = useState('');
  const [turmas, setTurmas] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/alumno/details`, {
      Nome: nomeA,
      Email: emailA,
      Turma: materiaA,
      Sessao: turmaA
    }).then((response) => {
        setDataA(response.data);
    })
}, [])

const handleDelete = (idA) => {
  axios.delete('http://localhost:5000/alumno/interest/' + idA)
  .then(() => {getData();})
}

const getData = () => {
  axios.get('http://localhost:5000/alumno/details/')
  .then((getData) => {
    setDataA(getData.data);
  })
}

const fillMatricular = (id) => {
  setMatricular(id);
}

useEffect(() => {
  axios.get(`http://localhost:5000/Turma/details`, {}).then((response) => {
      setTurmas(response.data);
      console.log(turmas);
  })
}, [])

const handleMatricular = (id) => {
  //post matricular
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
          {dataA?.map((alumno, i) => {
            return(
             <tr key={alumno._id}>
                <td>{i + 1}</td>
                <td>{alumno.Nome}</td>
                <td>{alumno.Email}</td>
                <td>{alumno.Turma}</td>
                <td>{alumno.Sessao}</td>
                <td>
                  <Button variant='danger' onClick={() => handleDelete(alumno._id)}><RiDeleteBin6Line/></Button>
                  <Link to={`/alumno/adicionar/${alumno._id}`}><Button className='edit' variant='warning'><BiEditAlt/></Button></Link>
                  <Button variant='success' onClick={() => fillMatricular(alumno._id)}><FaRegIdCard/></Button>
                </td>
            </tr>
            )
            })}
            </tbody>
        </Table>
      
      <Link to='/alumno/adicionar'><Button className='botao1' variant="success"><IoPersonAddSharp/>&nbsp; Adicionar</Button></Link>

      {matricular && (
        <form onSubmit={handleMatricular}>
          <Form.Group className="mb-3">
            <Form.Label>Disabled input</Form.Label>
            <Form.Control placeholder="Disabled input" value={matricular} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Disabled select menu</Form.Label>
            <Form.Select disabled>
              <option value={'id'}>1 - español</option>
            </Form.Select>
          </Form.Group>
          
        </form>
      )}
       
    </div>
  )
}

export default ListAlunos;