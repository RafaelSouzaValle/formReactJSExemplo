import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'user-circle',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    // Função a ser chamada quando um componente é exibido na tela.
    // Consulta o JSON server
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    // Estado inicial do formulário
    state = { ...initialState }

    // Função que limpa o formulário
    clear() {
        this.setState({ user: initialState.user })
    }

    // Inclui ou altera usuário
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    // Retorna lista de usuários atualizada
    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    // Atualiza campo
    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    // Carrega formulário
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" value={this.state.user.name} onChange={e => this.updateField(e)} placeholder="Digite o nome..." />
                        </div>
                    </div>


                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={e => this.updateField(e)} placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-success" onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>


                    </div>
                </div>
            </div>


        )
    }

    // Atualiza estado do objeto
    load(user) {
        this.setState({ user })
    }

    // Remove objeto da lista
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user,false)
            this.setState({ list })
        })
    }

    renderTable() {
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
               <tr key={user.id}>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>
                       <button className="btn btn-warning"
                        onClick={() => this.load(user)}>
                           <i className="fa fa-pencil"></i>
                       </button>
                       <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                           <i className="fa fa-trash"></i>
                       </button>
                   </td>
               </tr>
            )
        })
    }

    render() {

        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )

    }
}
