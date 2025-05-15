# Relato sobre o projeto Lista de tarefas

Em julho do ano de 2024, eu, Lorenzo Fernandes Aguiar, concluí minha graduação em Análise e Desenvolvimento de Sistemas. Esse curso, que foi ofertado pela Universidade Estácio de Sá, permitiu que eu obtivesse os conhecimentos necessários para analisar, desenvolver, testar e manutenir um software.

Atualmente, eu realizo projetos pessoais voltados para a área de desenvolvimento de software. Faço isso com o intuito de ganhar a experiência que eu preciso para ingressar no mercado de trabalho como desenvolvedor de software.

Um desses projetos pessoais eu denominei de Lista de tarefas. Nesse projeto, eu utilizei habilidades e tecnologias que estão sendo bastante requisitadas pelo atual mercado de trabalho. Entre as habilidades e as tecnologias que eu utilizei durante o projeto Lista de tarefas, eu posso citar: programação orientada a objetos, API REST, Java, Spring Boot, bancos de dados relacionais, aplicação web e Angular.

Feita a introdução acima, agora eu explicarei o motivo pelo qual eu escrevo o presente texto. Eu escrevo o presente texto como forma de relatar as etapas que eu segui para finalizar o projeto Lista de tarefas. Através do presente texto eu busco comprovar minhas habilidades e meus conhecimentos para as empresas que estão precisando de um desenvolvedor de software.

Vale ressaltar que, por questões de organização, eu dividi o presente texto em tópicos e subtópicos. Esses tópicos e subtópicos podem ser vistos abaixo.

* Tópico 1: Levantamento de requisitos
* Tópico 2: Git e GitHub
* Tópico 3: Desenvolvimento da API REST
    * Subtópico 3.1: Spring Initializr e Spring Tool Suite
    * Subtópico 3.2: Classe Tarefa
    * Subtópico 3.3: Classe TarefaDTO
    * Subtópico 3.4: Interface TarefaRepository
    * Subtópico 3.5: Arquivo application-local.properties
    * Subtópico 3.6: Classe TarefaService
    * Subtópico 3.7: Classe TarefaController
    * Subtópico 3.8: Classe WebConfiguration
* Tópico 4: Testes unitários para validar a API REST
    * Subtópico 4.1: Classe TarefaRepositoryTest
    * Subtópico 4.2: Classe TarefaServiceTest
    * Subtópico 4.3: Classe TarefaControllerTest
    * Subtópico 4.4: Rodando os testes unitários para validar a API REST
* Tópico 5: Desenvolvimento do front-end da aplicação web
    * Subtópico 5.1: Angular CLI e Visual Studio Code
    * Subtópico 5.2: Arquivo index.html
    * Subtópico 5.3: Arquivo styles.css
    * Subtópico 5.4: Arquivo tarefa.ts
    * Subtópico 5.5: Serviço e componentes
    * Subtópico 5.6: Arquivo app.routes.ts
    * Subtópico 5.7: Arquivo app.config.ts
    * Subtópico 5.8: Arquivo main.ts
    * Subtópico 5.9: Arquivo app.component.ts
    * Subtópico 5.10: Arquivo app.component.html
    * Subtópico 5.11: Arquivo app.component.css
    * Subtópico 5.12: Arquivo tarefa.service.ts
    * Subtópico 5.13: Arquivo lista-de-tarefas.component.ts
    * Subtópico 5.14: Arquivo lista-de-tarefas.component.html
    * Subtópico 5.15: Arquivo lista-de-tarefas.component.css
    * Subtópico 5.16: Arquivo adicionar-tarefa.component.ts
    * Subtópico 5.17: Arquivo adicionar-tarefa.component.html
    * Subtópico 5.18: Arquivo adicionar-tarefa.component.css
    * Subtópico 5.19: Arquivo editar-tarefa.component.ts
    * Subtópico 5.20: Arquivo editar-tarefa.component.html
    * Subtópico 5.21: Arquivo editar-tarefa.component.css
    * Subtópico 5.22: Arquivo excluir-tarefa.component.ts
    * Subtópico 5.23: Arquivo excluir-tarefa.component.html
    * Subtópico 5.24: Arquivo excluir-tarefa.component.css
* Tópico 6: Testes unitários para validar o front-end da aplicação web
    * Subtópico 6.1: Arquivo app.component.spec.ts
    * Subtópico 6.2: Arquivo tarefa.spec.ts
    * Subtópico 6.3: Arquivo db.ts
    * Subtópico 6.4: Arquivo mocktarefaservice.ts
    * Subtópico 6.5: Arquivo tarefa.service.spec.ts
    * Subtópico 6.6: Arquivo lista-de-tarefas.component.spec.ts
    * Subtópico 6.7: Arquivo adicionar-tarefa.component.spec.ts
    * Subtópico 6.8: Arquivo editar-tarefa.component.spec.ts
    * Subtópico 6.9: Arquivo excluir-tarefa.component.spec.ts
    * Subtópico 6.10: Rodando os testes unitários para validar o front-end da aplicação web
* Tópico 7: Utilizando a aplicação web
* Tópico 8: Considerações finais

## Tópico 1: Levantamento de requisitos

Abaixo estão listados os requisitos que eu identifiquei para o projeto Lista de tarefas.

* Requisito de número 1: O projeto Lista de tarefas deverá consistir no desenvolvimento de uma aplicação web.
* Requisito de número 2: O front-end da aplicação web deverá ser construído com a utilização do framework Angular.
* Requisito de número 3: O front-end da aplicação web deverá ser composto pela página principal, a página de adição de tarefa, a página de edição de tarefa e a página de exclusão de tarefa.
* Requisito de número 4: A página principal terá como sua principal responsabilidade a exibição da lista contendo as tarefas salvas pelo usuário. A página principal também deve permitir que o usuário marque uma tarefa como concluída ou como não concluída.
* Requisito de número 5: A página de adição de tarefa deverá permitir que o usuário adicione uma tarefa na lista.
* Requisito de número 6: A página de edição de tarefa deverá permitir que o usuário edite uma tarefa da lista.
* Requisito de número 7: A descrição de uma tarefa deve conter, no mínimo, 3 caracteres e, no máximo, 25 caracteres.
* Requisito de número 8: A página de exclusão de tarefa deverá permitir que o usuário exclua uma tarefa da lista.
* Requisito de número 9: O back-end da aplicação web deverá envolver um banco de dados criado no PostgreSQL e uma API REST, a qual também deverá ser desenvolvida.
* Requisito de número 10: Cada tarefa tem um id, uma descrição e uma indicação se ela está ou não concluída.
* Requisito de número 11: A API REST deverá ser construída com a utilização do Spring Framework em conjunto com a ferramenta Spring Boot.
* Requisito de número 12: A API REST deverá ser capaz de fazer operações no banco de dados criado no PostgreSQL. Essas operações incluem a busca por todas as tarefas que estão salvas no banco de dados, a busca por uma tarefa específica que está salva no banco de dados, a adição de uma tarefa no banco de dados, a edição de uma tarefa que está salva no banco de dados e a exclusão de uma tarefa que está salva no banco de dados.
* Requisito de número 13: O front-end da aplicação web deverá ser capaz de se comunicar com a API REST através de requisições HTTP. Essas requisições levarão a API REST a realizar as operações citadas no requisito de número 12.

## Tópico 2: Git e GitHub

Através do Git eu realizei o controle de versão dos arquivos relacionados ao projeto Lista de tarefas. Regularmente, eu enviava alterações de meu repositório local para um repositório que eu possuo dentro do GitHub.

Vale destacar que, para o projeto Lista de tarefas, eu criei dois repositórios dentro da minha conta do GitHub. O primeiro repositório se chama projeto-lista-de-tarefas-api-rest, sendo que tal repositório contém os arquivos relacionados com a API REST do projeto Lista de tarefas. O segundo repositório se chama projeto-lista-de-tarefas-frontend, sendo que tal repositório contém os arquivos relacionados com o front-end da aplicação web do projeto Lista de tarefas.

O repositório chamado projeto-lista-de-tarefas-api-rest pode ser acessado através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest>. Já o repositório chamado projeto-lista-de-tarefas-frontend pode ser acessado através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend>.