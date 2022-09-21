import React, { useEffect, useState } from 'react'
import firebaseDB from '../firebase'; //trocar banco de dados para mongodb
import './listAlunos.css';

const ListAlunos = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        // Pega dados do bd
        //trocar banco de dados para mongodb
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


    return (
        <div style={{ marginTop: '150px' }}>
            {/* cria estrutura da tabela para renderizar os dados trazidos de bd */}
            <h1>Estudantes</h1>
            <table className="table-stayled">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>ID</th>
                        <th style={{ textAlign: 'center' }}>Nome</th>
                        <th style={{ textAlign: 'center' }}>Email</th>
                        <th style={{ textAlign: 'center' }}>Contato</th>
                        <th style={{ textAlign: 'center' }}>Aval-1</th>
                        <th style={{ textAlign: 'center' }}>Aval-2</th>
                        <th style={{ textAlign: 'center' }}>Aval-3</th>
                        <th style={{ textAlign: 'center' }}>Média</th>
                        <th style={{ textAlign: 'center' }}>Situação</th>
                    </tr>
                </thead>

                {data && (
                    <tbody>
                        {/* mapping de dados um/um e adiciona-os na tabela de acordo */}
                        {Object.keys(data).map((id, index) => {
                            return (
                                <tr key={id}>
                                    <th>{index + 1}</th>
                                    <td>{data[id].name}</td>
                                    <td>{data[id].email}</td>
                                    <td>{data[id].contact}</td>
                                    <td>{data[id].aval1}</td>
                                    <td>{data[id].aval2}</td>
                                    <td>{data[id].aval3}</td>
                                    <td>{data[id].media}</td>
                                    <td>{data[id].status}</td>
                                    <td>

                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                )}
            </table>

        </div>
    )
}

export default ListAlunos