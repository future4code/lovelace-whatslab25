import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const ContainerMensagem = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`

const ContainterInput = styled.div`
  display: flex;
`

const InputNome = styled.input`
  width: 100px;
`

const InputMensagem = styled.input`
  flex-grow: 1;
`

class App extends React.Component {
  state = {
    usuarioMensagem: [],
    usuario: '',
    mensagem: ''
  }

  onChangeusuario = (event) => {
    this.setState({usuario: event.target.value})
  }

  onChangemensagem = (event) => {
    this.setState({mensagem: event.target.value})
  }

  enviarMensagem = () => {
    const MensagemEnviada = {
      user: this.state.usuario,
      text: this.state.mensagem
    }

    const ArrayMensagens = [MensagemEnviada, ...this.state.usuarioMensagem]

    this.setState({usuarioMensagem: ArrayMensagens, mensagem: ''})
  }

  render() {
    return (
      <Container>
        <ContainerMensagem>
          {this.state.usuarioMensagem.map((msg, index) => {
            return <p key={index}>
              <strong>{msg.user}</strong>: {msg.text}
            </p>
          })}
        </ContainerMensagem>
        <ContainterInput>
          <InputNome
            onChange={this.onChangeusuario} 
            value={this.state.usuario} 
            placeholder={'Nome'}
          />
          <InputMensagem
            onChange={this.onChangemensagem} 
            value={this.state.mensagem} 
            placeholder={'Mensagem'}
          />
          <button onClick={this.enviarMensagem}>Enviar</button>
        </ContainterInput>
      </Container>
    );
  }
}

export default App;

