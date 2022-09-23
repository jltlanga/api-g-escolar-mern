import {useState, useEffect} from 'react'  
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateP() {
  const [nomeP, setNomeP] = useState('');
  const [emailP, setEmailP] = useState('');
  const [materiaP, setMateriaP] = useState('');
  const [turmaP, setTurmaP] = useState('');
  const [professorData, setProfessorData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(id){ 
      axios.get('http://localhost:5000/professor/details/' + id)
      .then((response) => {
        setProfessorData(response.data);
        setNomeP(response.data[0].Nome);
        setEmailP(response.data[0].Email);
        setMateriaP(response.data[0].Materia);
        setTurmaP(response.data[0].Turma);
      })
      console.log(professorData);
    }
}, [])

  const postData = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/professor/interest`, {
      Nome: nomeP,
      Email: emailP,
      Materia: materiaP,
      Turma: turmaP
    });

    setNomeP('');
    setEmailP('');
    setMateriaP('');
    setTurmaP('');
    navigate('/professor');
  }

  function updateP(e) {
    e.preventDefault();
    axios.put('http://localhost:5000/professor/interest/' + id, {
      Nome: nomeP,
      Email: emailP,
      Materia: materiaP,
      Turma: turmaP
      });
      navigate('/professor');
  }


  return (
    <Form onSubmit={id ? updateP : postData}>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Nome</Form.Label>
        <Form.Control 
          value={nomeP} 
          type="text"
          placeholder="Nome"
          onChange={(e) => setNomeP(e.target.value)} />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          value={emailP} 
          type="email" 
          placeholder="Email"
          onChange={(e) => setEmailP(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Materia</Form.Label>
        <Form.Control 
          value={materiaP} 
          type="text" 
          placeholder="Nome da Materia"
          onChange={(e) => setMateriaP(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Turma</Form.Label>
        <Form.Control 
          value={turmaP} 
          type="text" 
          placeholder="Turma"
          onChange={(e) => setTurmaP(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {id ? "Atualizar" : "Salvar"}
      </Button>
    </Form>
  )
}
    
export default CreateP;  
    