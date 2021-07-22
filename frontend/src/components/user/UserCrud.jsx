import React, { Component } from 'react'

import Main from '../template/Main'

const headerProps = {
    icon: 'user-circle',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )

    }
}
