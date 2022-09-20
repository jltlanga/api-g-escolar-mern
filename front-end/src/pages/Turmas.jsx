import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './turmas.css'

const Turmas = () => {
  return (
    <div className='contenedor'>
    <Card className="text-center">
      <Card.Header>ESPANHOL</Card.Header>
      <Card.Body>
        <Card.Title className='card-tittle'>Turma 01</Card.Title>
        <Card.Text className='text-prof'>
          Professor responsável: Juan
        </Card.Text>
        <Button className='botao' variant="dark">Informações da turma</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Quantidade de estudantes: 10</Card.Footer>
    </Card>

    <Card className="text-center">
      <Card.Header>ESPANHOL</Card.Header>
      <Card.Body>
        <Card.Title className='card-tittle'>Turma 02</Card.Title>
        <Card.Text className='text-prof'>
          Professor responsável: Juan
        </Card.Text>
        <Button className='botao' variant="primary">Informações da turma</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Quantidade de estudantes: 10</Card.Footer>
    </Card>

    <Card className="text-center" id='cardI'>
      <Card.Header>INGLÊS</Card.Header>
      <Card.Body>
        <Card.Title className='card-tittle'>Turma 01</Card.Title>
        <Card.Text className='text-prof'>
          Professor responsável: Max
        </Card.Text>
        <Button className='botao' variant="primary">Informações da turma</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Quantidade de estudantes: 10</Card.Footer>
    </Card>

    <Card className="text-center" id='cardI'>
      <Card.Header>INGLÊS</Card.Header>
      <Card.Body>
        <Card.Title className='card-tittle'>Turma 02</Card.Title>
        <Card.Text className='text-prof'>
          Professor responsável: Max
        </Card.Text>
        <Button className='botao' variant="primary">Informações da turma</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Quantidade de estudantes: 10</Card.Footer>
    </Card>
    </div>
  );
}

export default Turmas;