import React from 'react'

class Input extends React.Component{
    state = {
        
    usuario:"",
    mensagem:""
    
    }
   

    onChangeUsuario = (event) => {
        this.setState({usuario: event.target.value})

    }

    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }

    render(){
    
    return <div>
        <input
        value={this.state.usuario}
        onChange={this.onChangeUsuario}
        placeholder="Usuario"
        />

        <input
        value={this.state.mensagem}
        onChange={this.onChangeMensagem}
        placeholder="Mensagem"
        />
        
    </div>
}
}

export default Input