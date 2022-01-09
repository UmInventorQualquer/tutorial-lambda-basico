# Aula prática de AWS Lambda

Neste repositório você encontra os códigos de uma função lambda básica para demonstração.

Este código foi criado para o vídeo do YouTube https://youtu.be/RCK9fBwrZeY

### Esta função retorna:
As estatísticas de uso do Lambda através da função `lambda.getAccountSettings()` e retorna o objeto:
```json
{
  "TotalCodeSize": 1007,
  "FunctionCount": 1
}
```

### O Objetivo é demonstrar:
- A estrutura básica de uma função do AWS Lambda;
- Como criar permissões para o Lambda no IAM;
- Como criar uma trigger no API Gateway para chamar a função Lambda; 

### Estrutura
- `function/index.js`: Contém a função Lambda a ser executada
- `function/package.json`: Arquivo de dependências do nodejs
- `function.zip`: Versão zipada para upload

### Empacotamento da função
Esta função utiliza apenas o pacote do `aws-sdk` que não é necessário ser enviado para a AWS, mas por padrão ele é 
instalado e empacotado com a função. O conteúdo do arquivo `function/index.js` pode ser inserido diretamente no painel
do lambda sem a inclusão do diretório `node_modules`.

Para preparar o arquivo ZIP para upload basta executar o comando `pack.sh`. Se você utilizar este repositório como
modelo para desenvolver funcionalidades mais complexas e/ou que contenham mais arquivos necessários para ser executada,
não se esqueça de editar o arquivo `pack.sh` e incluir os arquivos adicionais. 

### Tutorial
Para seguir o passo-a-passo, acesse o [TUTORIAL](docs/TUTORIAL.md)

