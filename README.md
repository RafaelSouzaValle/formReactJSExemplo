# Formulário com ReactJS - Exemplo
Exemplo de formulário dinâmico usando React e json-server, com tabela dinâmica carregando dados do JSON.

### Após clonar repositório, é necessário configurar o json-server (porta 3001)

npm init -y

npm i --save json-server@0.13.0 -E

### Com o json-server ativo, para ativar a aplicação, basta iniciar o npm. O app responderá na posta 3000

npm start

Seguindo a configuração utilizada no projeto, as portas 3001 (json-server) e 3000 (react-app) atuam em simultâneo.
O arquivo db.json é alterado no json-server de acordo com as inserções, aletrações e exclusões no formulário,
bem como exibe as informações do json na tabela, em tempo real.

## Imagem do Formulário:
![Imagem Formulário](https://github.com/RafaelSouzaValle/formReactJSExemplo/blob/master/img-exemplo/form.png)


## Imagem do JSON no json-server:
![Imagem Formulário](https://github.com/RafaelSouzaValle/formReactJSExemplo/blob/master/img-exemplo/json-server.png)
