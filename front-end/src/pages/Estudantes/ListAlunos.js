import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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
  const [matricular, setMatricular] = useState('');
  const [tur, setTur] = useState([]);
  const [alumnoMatricular, setAlumnoMatricular] = useState('');
  const [turmaMatricular, setTurmaMatricular] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/alumno/details').then((response) => {
        setDataA(response.data);
    });

    axios.get(`http://localhost:5000/Turma/details`, {}).then((response) => {
      setTur(response.data);
    });

}, [])

const handleDelete = (idA) => {
  axios.delete('http://localhost:5000/alumno/interest/' + idA)
  .then(() => {getData();})
}

const getData = () => {
  axios.get('http://localhost:5000/alumno/details/')
  .then((getData) => {
    setDataA(getData.data);
  });
}

const fillMatricular = (id) => {
  setMatricular(id);
  setAlumnoMatricular(id);
}

const handleMatricular = (e) => {
  e.preventDefault();
  axios.post('http://localhost:5000/matricula/interest/', {
    Turma: turmaMatricular,
    Estudante: alumnoMatricular,
    Estado: 'Em curso'
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
        <Form onSubmit={handleMatricular}>
          <Form.Group className="mb-3">
            <Form.Label>ID do Estudante</Form.Label>
            <Form.Control placeholder="Disabled input" value={matricular} onLoadCapture={(e) => setAlumnoMatricular(e.target.value)} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Escolha a Materia</Form.Label>
            <Form.Select onChange={(e) => setTurmaMatricular(e.target.value)}>
              <option>Selecionar turma</option>
              {tur.map((tur)=>{
                return(
                  <option key={tur.Id_Turma} value={tur.Id_Turma}>{tur.Nome} - {tur.Secao}</option>
                )
              })
              }
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
              Matricular
          </Button>
        </Form>
      )}
       
    </div>
  )
}

export default ListAlunos;