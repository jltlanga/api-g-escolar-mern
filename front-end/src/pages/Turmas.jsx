import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './turmas.css'

const Turmas = () => {
    const [turmasData, setTurmasData] = useState([])
    const apiUrl = 'http://localhost:5000/'

    const getTurmas = () => {
        const options = {method: 'GET', headers: {'Content-Type': 'application/json'}};
    
        fetch( apiUrl + 'Turma/details', options)
        .then(response => response.json())
        .then(response => setTurmasData(response))
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getTurmas();
        console.log('get turmas', turmasData);
      }, [])

  return (
    <div className='contenedor'>
        {turmasData?.map(turma => {
            return(
                <Card className="text-center" key={turma.Id_Turma}>
                <Card.Header>{turma.Nome}</Card.Header>
                <Card.Body>
                  <Card.Title className='card-tittle'>Turma {turma.Id_Turma}</Card.Title>
                  <Card.Text className='text-prof'>
                    Professor responsável: {turma.Professor}
                  </Card.Text>
                  <Button className='botao' variant="dark">Informações da turma</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Quantidade de estudantes: 10</Card.Footer>
              </Card>
            )
        })}
    </div>
  );
}

export default Turmas;