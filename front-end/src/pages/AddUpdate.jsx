import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import firebaseDB from '../firebase';
import './addUpdate.css';


const initialState = {
  name: '',
  email: '',
  contact: '',
  status: '',
}
const AddUpdate = () => {
  const [state, setState] = useState(initialState)
  const [data, setData] = useState(initialState)
  const navigate = useNavigate()
  const { id } = useParams()
  const {
    name,
    email,
    contact,
    status
  } = state;


  useEffect(() => {
    // Acessa dados do bd
    firebaseDB.child('Estudante').on('value', (snapshot) => {
      if (snapshot.val() != null) {
        setData({ ...snapshot.val() })
      } else {
        setData({})
      }
    })

    return () => {
      setData({})
    }
  }, [])

  //retorna dados do id selecionado para editar
  useEffect(() => {
    if (id) {
      setState({ ...data[id] })
    } else {
      setState({ ...initialState })
    }
  }, [id, data])





  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      if (!name || !email || !contact || !status) {
        toast.error('Preencha todos campos, por favor!')
      } else {
        //adiciona os dados no bd cuja collaction-Name é Estudante
        firebaseDB.child('Estudante').push(state, (err) => {
          if (err) {
            toast.error(err)
          } else {
            toast.success('Estudante foi adicionado com sucesso!')
          }
        })
      }
    } else {
      //valida 
      firebaseDB.child(`Estudante/${id}`).set(state, (err) => {
        if (err) {
          toast.error(err)
        } else {
          toast.success('Dados do aluno atualizados com sucesso!')
        }
      });
    }

    setTimeout(() => navigate('/'), 500)
  }



  return (
    <div style={{ marginTop: "50px" }}>
      <form style={{
        margin: "auto",
        padding: "1rem",
        maxWidth: "450px",
        alignItems: "center",

      }} onSubmit={handleSubmit}>
        <label htmlFor='name'>Nome</label>
        <input type="text" placeholder='Nome...'
          id='name'
          value={name || ""}
          name='name'
          onChange={handleInputChange} />

        <label htmlFor='email'>Email</label>
        <input type="email" placeholder='Email...'
          id='email'
          value={email || ''}
          name='email'
          onChange={handleInputChange} />

        <label htmlFor='contact'>Contato</label>
        <input type="number" placeholder='Contato...'
          id='contact'
          value={contact || ""}
          name='contact'
          onChange={handleInputChange} />

        <label htmlFor='status'>Situação</label>
        <input type="text" placeholder='Status...'
          id='status'
          value={status || ""}
          name='status'
          onChange={handleInputChange} />

        <input type="submit" value={id ? "Atualizar" : "Salvar"} />
      </form>
    </div>
  )
}

export default AddUpdate;