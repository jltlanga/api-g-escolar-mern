import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom';
import axios from 'axios';

function CreateP() {
  const [nomeP, setNomeP] = useState('');
  const [emailP, setEmailP] = useState('');
  const [materiaP, setMateriaP] = useState('');
  const [turmaP, setTurmaP] = useState('');
  const [professorData, setProfessorData] = useState([]);
  const { id } = useParams();
  
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
  }

  function updateP(e) {
    e.preventDefault();
    axios.put('http://localhost:5000/professor/interest/' + id, {
      Nome: nomeP,
      Email: emailP,
      Materia: materiaP,
      Turma: turmaP
      });
  }


  return (
    <div style={{ marginTop: "50px" }}>
      <form style={{
        margin: "auto",
        padding: "1rem",
        maxWidth: "450px",
        alignItems: "center",
      }} onSubmit={id ? updateP : postData} >
        <label htmlFor='name'>Nome</label>
        <input type="text" placeholder='Nome...'
          id='name'
          name='name'
          value={nomeP}
          onChange={(e) => setNomeP(e.target.value)} />

        <label htmlFor='email'>Email</label>
        <input type="email" placeholder='Email...'
          name='email'
          value={emailP}
          onChange={(e) => setEmailP(e.target.value)} />

        <label htmlFor='materia'>Materia</label>
        <input type="text" placeholder='Materia responsável'
          id='materia'
          name='materia'
          value={materiaP}
          onChange={(e) => setMateriaP(e.target.value)} />

        <label htmlFor='turma'>Turma</label>
        <input type="text" placeholder='Turma resposável'
          id='turma'
          name='turma'
          value={turmaP}
          onChange={(e) => setTurmaP(e.target.value)} />

<input type="submit" value={id ? "Atualizar" : "Salvar"}/>
      </form>
    </div>
  )
}
    
export default CreateP;  
    