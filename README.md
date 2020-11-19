# Desafio Nível02 - Database Upload

## Sobre

Para este desafio, teríamos que consumir uma API feita por nós no [Desafio 02 - NodeJS, Database Upload](https://github.com/Vitor-Franco/nivel02-database-upload), na qual registrávamos algumas transações do nosso App de **controle financeiro**.

O diferencial deste desafio, foi trazer uma experiência mais completa com o consumo de uma **API**, e o uso de **TypeScript** juntamente com **ReactJS**. E não menos importante, toda padronização de código, com o ESlint, Prettier e o .editorconfig.

## O desafio

Para este desafio, tinhamos que consumir nossa API para listar todas nossas **transactions**, nosso **balance**, e estes juntamente com suas respectivas informações.

Como complemento tinhamos que importar um arquivo **.CSV**, e fazer o envio dos dados do arquivo para nossa **rota de import**. A partir daí, o conteúdo já seria adicionado a nossa lista conforme tratativas feita no back-end.

Para isso utilizamos **duas rotas**, do nosso [Back-end](https://github.com/Vitor-Franco/nivel02-database-upload):

-**`GET /transactions:`** Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor da soma de entradas, retiradas e total de crédito.

-**`POST /transactions/import:`** A rota deve permitir a importação de um arquivo com formato **csv**.

## Aprovação

Para que o desafio seja dado como **finalizado**, temos alguns testes presentes. Dentre estes:

-**`should be able to list the total balance inside the cards`**

-**`should be able to list the transactions`**

-**`should be able to navigate to the import page`**

-**`should be able to upload a file`**

### Conclusão

O desafio foi bem completo, tanto para praticar **ReactJS** quanto para praticar o **TypeScript**. Este que, pode "complicar" bastante no começo pois exige que tenhamos bastante atenção no que precisamos consumir e declarar, mas no final se torna um grande aliado.

Fora o esperado, tive alguma dificuldade em enviar o arquivo CSV para o backend de forma correta. Mas, só questão de tempo para que as coisas fossem se esclarecendo.
