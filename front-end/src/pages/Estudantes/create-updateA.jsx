import {useState, useEffect} from 'react'  
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateA() {
  const [nomeA, setNomeA] = useState('');
  const [emailA, setEmailA] = useState('');
  const [materiaA, setMateriaA] = useState('');
  const [turmaA, setTurmaA] = useState('');
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(id){ 
      axios.get('http://localhost:5000/alumno/details/' + id)
      .then((response) => {
        setData(response.data);
        setNomeA(response.data[0].Nome);
        setEmailA(response.data[0].Email);
        setMateriaA(response.data[0].Turma);
        setTurmaA(response.data[0].Sessao);
      })
    }
}, [])

  const postData = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/alumno/interest`, {
      Nome: nomeA,
      Email: emailA,
      Turma: materiaA,
      Sessao: turmaA
    });

    console.log(data);

    setNomeA('');
    setEmailA('');
    setMateriaA('');
    setTurmaA('');
    navigate('/alumno');
  }

  function updateA(e) {
    e.preventDefault();
    axios.put('http://localhost:5000/alumno/interest/' + id, {
      Nome: nomeA,
      Email: emailA,
      Turma: materiaA,
      Sessao: turmaA
    });
    navigate('/alumno');
  }


  return (
    <Form onSubmit={id ? updateA : postData}>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Nome</Form.Label>
        <Form.Control 
          value={nomeA} 
          type="text"
          placeholder="Nome"
          onChange={(e) => setNomeA(e.target.value)} />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          value={emailA} 
          type="email" 
          placeholder="Email"
          onChange={(e) => setEmailA(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Materia</Form.Label>
        <Form.Control 
          value={materiaA} 
          type="text" 
          placeholder="Nome da Materia"
          onChange={(e) => setMateriaA(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Turma</Form.Label>
        <Form.Control 
          value={turmaA} 
          type="text" 
          placeholder="Turma"
          onChange={(e) => setTurmaA(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {id ? "Atualizar" : "Salvar"}
      </Button>
    </Form>
  );
}
    
export default CreateA;  
    