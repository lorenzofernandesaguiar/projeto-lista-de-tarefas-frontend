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

## Tópico 3: Desenvolvimento da API REST

Os subtópicos seguintes relatam as etapas que eu segui para desenvolver a API REST do projeto Lista de tarefas.

### Subtópico 3.1: Spring Initializr e Spring Tool Suite

Eu acessei o site Spring Initializr e promovi as configurações que podem ser vistas na captura de tela abaixo.

![Essa captura de tela mostra as configurações promovidas dentro do Spring Initializr](https://github.com/user-attachments/assets/6b452eae-52fe-458c-83f1-241dcd8f7a2b)

Sobre a captura de tela acima, vale destacar que:

* Eu escolhi a dependência Spring Web porque ela me permite lidar com requisições HTTP.
* Eu escolhi a dependência Spring Data JPA porque ela facilita a realização do mapeamento objeto-relacional. Além disso, através da referida dependência, eu conto com métodos capazes de criar, ler, atualizar e remover registros de um banco de dados.
* Eu escolhi a dependência PostgreSQL Driver porque ela permite que a API REST se comunique com um banco de dados criado no PostgreSQL.
* Eu escolhi a dependência H2 Database porque ela me permite trabalhar com um banco de dados em memória.

Após promover as configurações mostradas na captura de tela acima, o Spring Initializr me gerou uma pasta, chamada projetolistadetarefasapirest. Eu importei essa pasta para o meu workspace do Spring Tool Suite, IDE que eu utilizei para desenvolver a API REST. Foi dentro da pasta projetolistadetarefasapirest que eu incluí os arquivos que iriam compor a API REST.

Vale destacar que a pasta projetolistadetarefasapirest já veio com alguns arquivos básicos. Desse modo, antes de realizar qualquer alteração nessa pasta, eu fiz um commit para que esses arquivos básicos fossem adicionados dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/694943049dc62b412656879942934facaa1f88cf>.

### Subtópico 3.2: Classe Tarefa

Dentro do pacote principal da pasta projetolistadetarefasapirest, eu criei o pacote entities contendo a classe Tarefa.

O código Java que eu escrevi para a classe Tarefa pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/blob/main/src/main/java/com/projetolistadetarefasapirest/entities/Tarefa.java>. Cabe ressaltar que o código Java que eu escrevi para a classe Tarefa está hospedado no meu repositório chamado projeto-lista-de-tarefas-api-rest.

Sobre o código Java que eu escrevi para a classe Tarefa, vale destacar que:

* Por meio da anotação @Entity, eu indiquei que a classe Tarefa é uma entidade, ou seja, é uma classe que representa uma tabela no banco de dados. O nome dessa tabela é tarefas, conforme eu indiquei por meio da anotação @Table(name="tarefas").
* A classe Tarefa possui os atributos id, descricao e concluida. De forma análoga, no banco de dados, a tabela tarefas possui as colunas id, descricao e concluida.
* Por meio das anotações @Id e @GeneratedValue(strategy = GenerationType.IDENTITY), eu indiquei que a coluna id é a chave primária e o seu valor será gerado por auto-incremento.
* Por meio da anotação @Column(nullable = false, length = 25), eu indiquei que a coluna descricao não pode ser nula e que seu tamanho é 25. No caso da coluna concluida, eu simplesmente indiquei que ela não pode ser nula.
* Eu criei os métodos getters e setters para todos os atributos da classe Tarefa. Isso vai de encontro ao pilar encapsulamento da programação orientada a objetos.
* Eu sobrescrevi os métodos hashCode e equals para que eles levassem em consideração somente o atributo id.

Depois que eu escrevi o código Java para a classe Tarefa, eu fiz um commit para que a referida classe fosse adicionada dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/9260dc702bb5aa31a0868247b8b244ce94bf4c1c>.

### Subtópico 3.3: Classe TarefaDTO

Dentro do pacote principal da pasta projetolistadetarefasapirest, eu criei o pacote dto contendo a classe TarefaDTO.

O código Java que eu escrevi para a classe TarefaDTO pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/blob/main/src/main/java/com/projetolistadetarefasapirest/dto/TarefaDTO.java>. Cabe ressaltar que o código Java que eu escrevi para a classe TarefaDTO está hospedado no meu repositório chamado projeto-lista-de-tarefas-api-rest.

Sobre o código Java que eu escrevi para a classe TarefaDTO, vale destacar que:

* A classe TarefaDTO funciona como o DTO da entidade Tarefa. Isso significa que TarefaDTO somente irá conter os atributos de Tarefa que serão importantes para a comunicação entre a API REST e o cliente. No caso do projeto Lista de tarefas, todos os atributos de Tarefa são importantes para a comunicação entre a API REST e o cliente.
* Eu criei um construtor que recebe como parâmetro um objeto da classe Tarefa. A função desse construtor é permitir a conversão de um objeto da classe Tarefa para um objeto da classe TarefaDTO.

Depois que eu escrevi o código Java para a classe TarefaDTO, eu fiz um commit para que a referida classe fosse adicionada dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/6a4cfcb0dcce4abdd2a47d169019d7ce17c86dbc>.

### Subtópico 3.4: Interface TarefaRepository

Dentro do pacote principal da pasta projetolistadetarefasapirest, eu criei o pacote repositories contendo a interface TarefaRepository.

O código Java que eu escrevi para a interface TarefaRepository pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/blob/main/src/main/java/com/projetolistadetarefasapirest/repositories/TarefaRepository.java>. Cabe ressaltar que o código Java que eu escrevi para a interface TarefaRepository está hospedado no meu repositório chamado projeto-lista-de-tarefas-api-rest.

Sobre o código Java que eu escrevi para a inteface TarefaRepository, vale destacar que:

* Por meio da anotação @Repository, eu indiquei que a interface TarefaRepository é um repositório, ou seja, é responsável por acessar o banco de dados.
* A interface JpaRepository prevê métodos que permitem buscar registros de um banco de dados, adicionar registros em um banco de dados, atualizar registros de um banco de dados e remover registros de um banco de dados. Desse modo, quando a interface TarefaRepository estende a interface JpaRepository, o Spring Data JPA se encarrega de implementar os referidos métodos em tempo de execução.
* No momento em que eu fiz com que a interface TarefaRepository estendesse a interface JpaRepository, eu também indiquei que a classe Tarefa é a entidade a ser gerenciada.

Depois que eu escrevi o código Java para a interface TarefaRepository, eu fiz um commit para que a referida classe fosse adicionada dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/70beeeb9cf16fa49e9542a0b551de703978b6b41>.

### Subtópico 3.5: Arquivo application-local.properties

Quando eu importei a pasta projetolistadetarefasapirest para o meu workspace do Spring Tool Suite, a referida pasta já contava com o arquivo application.properties. Esse arquivo corresponde ao perfil default da API REST do projeto Lista de tarefas. Eu deixei esse arquivo em branco, pois eu não vi a necessidade de promover uma configuração específica para o perfil default.

No mesmo local em que se encontra o arquivo application.properties, eu criei o arquivo application-local.properties. Esse arquivo corresponde ao perfil local da API REST do projeto Lista de tarefas.

As configurações que eu escrevi para o arquivo application-local.properties podem ser vistas através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/blob/main/src/main/resources/application-local.properties>. Cabe ressaltar que as configurações que eu escrevi para o arquivo application-local.properties estão hospedadas no meu repositório chamado projeto-lista-de-tarefas-api-rest.

Sobre as configurações que eu escrevi para o arquivo application-local.properties, vale destacar que:

* O arquivo application-local.properties contém as configurações que devem ser carregadas quando o perfil local for ativado.
* Por meio da propriedade spring.datasource.url, eu informei a URL de conexão com o banco de dados. Vale lembrar que eu já havia criado o banco de dados chamado projetolistadetarefasbancodedados dentro do PostgreSQL.

Depois que eu escrevi as configurações para o arquivo application-local.properties, eu fiz um commit para que o referido arquivo fosse adicionado dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/f4cf0dd6b2d6756514068c58e05f22407b7576fc>.

### Subtópico 3.6: Classe TarefaService

Dentro do pacote principal da pasta projetolistadetarefasapirest, eu criei o pacote services contendo a classe TarefaService.

O código Java que eu escrevi para a classe TarefaService pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/blob/main/src/main/java/com/projetolistadetarefasapirest/services/TarefaService.java>. Cabe ressaltar que o código Java que eu escrevi para a classe TarefaService está hospedado no meu repositório chamado projeto-lista-de-tarefas-api-rest.

Sobre o código Java que eu escrevi para a classe TarefaService, vale destacar que:

* Por meio da anotação @Service, eu indiquei que a classe TarefaService é um serviço, ou seja, é responsável por implementar as regras de negócio, servindo como um intermediário entre o repositório e o controlador.
* Por meio da anotação @Autowired, eu indiquei que deveria ser realizada a injeção de dependência. Desse modo, o Spring injetará a dependência, que nesse caso é a interface TarefaRepository, dentro da classe TarefaService.
* Todos os métodos que eu criei para a classe TarefaService retornam um ResponseEntity. Eu utilizei o ResponseEntity porque ele me permite ter um controle maior sobre a resposta HTTP.
* Eu escrevi comentários dentro dos métodos da classe TarefaService. Fiz isso para que o código se torne mais compreensível.

Depois que eu escrevi o código Java para a classe TarefaService, eu fiz um commit para que a referida classe fosse adicionada dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/56164f33d73b4ea6131b6d314c992721f4027419>.

Subtópico 3.7: Classe TarefaController
Dentro do pacote principal da pasta projetolistadetarefasapirest, eu criei o pacote controllers contendo a classe TarefaController.

O código Java que eu escrevi para a classe TarefaController pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/blob/main/src/main/java/com/projetolistadetarefasapirest/controllers/TarefaController.java>. Cabe ressaltar que o código Java que eu escrevi para a classe TarefaController está hospedado no meu repositório chamado projeto-lista-de-tarefas-api-rest.

Sobre o código Java que eu escrevi para a classe TarefaController, vale destacar que:

* Por meio da anotação @RestController, eu indiquei que a classe TarefaController é um controlador, ou seja, é responsável por prover os endpoints da API REST. Esses endpoints são métodos que recebem as requisições que são enviadas pelo cliente.
* O papel de cada método que eu escrevi na classe TarefaController é chamar o método adequado da classe TarefaService.
* Por meio da anotação @RequestMapping(value = "/tarefas"), eu indiquei que o controlador em questão receberá as requisições feitas à URL http://localhost:8080/tarefas. O trecho localhost está presente na URL porque a API REST em questão será rodada no meu próprio computador.
* Por meio da anotação @GetMapping, eu indiquei que o método buscarTodasAsTarefas será chamado quando uma requisição HTTP do tipo GET for feita à URL http://localhost:8080/tarefas.
* Por meio da anotação @GetMapping(value = "/{id}"), eu indiquei que o método buscarTarefaPeloId será chamado quando uma requisição HTTP do tipo GET for feita a uma URL que segue o modelo http://localhost:8080/tarefas/id. Na prática, o trecho id corresponderá a um número que representa o id de uma determinada tarefa.
* Por meio da anotação @PathVariable, eu indiquei que o valor da variável id virá de uma informação presente na URL recebida.
* Por meio da anotação @PostMapping, eu indiquei que o método adicionarTarefa será chamado quando uma requisição HTTP do tipo POST for feita à URL http://localhost:8080/tarefas.
* Por meio da anotação @RequestBody, eu indiquei que o corpo da requisição recebida deve ser convertido em um objeto da classe TarefaDTO.
* Por meio da anotação @PutMapping(value = "/{id}"), eu indiquei que o método editarTarefa será chamado quando uma requisição HTTP do tipo PUT for feita à URL que segue o modelo http://localhost:8080/tarefas/id. Na prática, o trecho id corresponderá a um número que representa o id de uma determinada tarefa.

Depois que eu escrevi o código Java para a classe TarefaController, eu fiz um commit para que a referida classe fosse adicionada dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/b49f641dbf3ff0b20fb810d7537b1df744821d9a>.


### Subtópico 3.8: Classe WebConfiguration

Dentro do pacote principal da pasta projetolistadetarefasapirest, eu criei o pacote configurations contendo a classe WebConfiguration.

O código Java que eu escrevi para a classe WebConfiguration pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/blob/main/src/main/java/com/projetolistadetarefasapirest/configurations/WebConfiguration.java>. Cabe ressaltar que o código Java que eu escrevi para a classe WebConfiguration está hospedado no meu repositório chamado projeto-lista-de-tarefas-api-rest.

Sobre o código Java que eu escrevi para a classe WebConfiguration, vale destacar que:

* Para o projeto Lista de tarefas, o front-end da aplicação web e a API REST estarão em domínios diferentes. Por causa disso, eu criei a classe WebConfiguration a fim de realizar a configuração global do CORS na API REST.
* Por meio da anotação @Configuration, eu indiquei que a classe WebConfiguration é uma classe de configuração.
* Cabe ressaltar que, a exemplo da API REST, o front-end da aplicação web também será rodado no meu próprio computador. Desse modo, o front-end da aplicação web poderá ser acessado pela URL http://localhost:4200.
* Eu indiquei que o domínio http://localhost:4200 tem permissão para enviar requisições HTTP do tipo GET e do tipo POST para o domínio http://localhost:8080/tarefas.
* Eu indiquei que o domínio http://localhost:4200 tem permissão para enviar requisições HTTP do tipo DELETE, do tipo GET e do tipo PUT para qualquer domínio que parta de http://localhost:8080/tarefas/.

Depois que eu escrevi o código Java para a classe WebConfiguration, eu fiz um commit para que a referida classe fosse adicionada dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/f05ee8d42edf0cb58cfa656685fdd441a171e57a>.

## Tópico 4: Testes unitários para validar a API REST

Os subtópicos seguintes relatam as etapas que eu segui para escrever os testes unitários que devem validar a API REST do projeto Lista de tarefas.

### Subtópico 4.1: Classe TarefaRepositoryTest

Dentro da pasta projetolistadetarefasapirest, eu fui até a pasta destinada a testes e criei o pacote repositories contendo a classe TarefaRepositoryTest.

O código Java que eu escrevi para a classe TarefaRepositoryTest pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/blob/main/src/test/java/com/projetolistadetarefasapirest/repositories/TarefaRepositoryTest.java>. Cabe ressaltar que o código Java que eu escrevi para a classe TarefaRepositoryTest está hospedado no meu repositório chamado projeto-lista-de-tarefas-api-rest.

Sobre o código Java que eu escrevi para a classe TarefaRepositoryTest, vale destacar que:

* A classe TarefaRepositoryTest contém os testes unitários que devem validar a classe TarefaRepository.
* Por meio da anotação @DataJpaTest, eu indiquei que a classe TarefaRepositoryTest testará um repositório JPA.
* Cada anotação @DisplayName me permite deixar os relatórios de teste mais compreensíveis.
* Eu anotei todos os métodos da classe TarefaRepositoryTest com @Test. Assim, eu indiquei que todos os métodos de TarefaRepositoryTest são métodos de teste.

Depois que eu escrevi o código Java para a classe TarefaRepositoryTest, eu fiz um commit para que a referida classe fosse adicionada dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/8dd5a11a91a2f9bfccf3251ccff22ec6966301ee>.

### Subtópico 4.2: Classe TarefaServiceTest

Dentro da pasta projetolistadetarefasapirest, eu fui até a pasta destinada a testes e criei o pacote services contendo a classe TarefaServiceTest.

O código Java que eu escrevi para a classe TarefaServiceTest pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/blob/main/src/test/java/com/projetolistadetarefasapirest/services/TarefaServiceTest.java>. Cabe ressaltar que o código Java que eu escrevi para a classe TarefaServiceTest está hospedado no meu repositório chamado projeto-lista-de-tarefas-api-rest.

Sobre o código Java que eu escrevi para a classe TarefaServiceTest, vale destacar que:

* A classe TarefaServiceTest contém os testes unitários que devem validar a classe TarefaService.
* Por meio da anotação @SpringBootTest, eu indiquei que TarefaServiceTest é uma classe de teste que precisa de recursos do Spring Boot.
* Por meio da anotação @MockBean, eu criei um mock da interface TarefaRepository. Com esse mock e com o auxílio da classe Mockito, eu consegui simular o comportamento do repositório.
* Dentro do método deveBuscarTodasAsTarefasComSucesso, eu chamei o método toString da classe TarefaDTO para comparar dois objetos da classe TarefaDTO por meio do valor de seus atributos. Por isso eu sobrescrevi o método toString quando eu criei a classe TarefaDTO.

Depois que eu escrevi o código Java para a classe TarefaServiceTest, eu fiz um commit para que a referida classe fosse adicionada dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/a898921297310721a5106ba58f662159139329ad>.

### Subtópico 4.3: Classe TarefaControllerTest

Dentro da pasta projetolistadetarefasapirest, eu fui até a pasta destinada a testes e criei o pacote controllers contendo a classe TarefaControllerTest.

O código Java que eu escrevi para a classe TarefaControllerTest pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/blob/main/src/test/java/com/projetolistadetarefasapirest/controllers/TarefaControllerTest.java>. Cabe ressaltar que o código Java que eu escrevi para a classe TarefaControllerTest está hospedado no meu repositório chamado projeto-lista-de-tarefas-api-rest.

Sobre o código Java que eu escrevi para a classe TarefaControllerTest, vale destacar que:

* A classe TarefaControllerTest contém os testes unitários que devem validar a classe TarefaController.
* Por meio da anotação @WebMvcTest(TarefaController.class), eu indiquei que os testes relativos ao controlador TarefaController devem se restringir à camada web.
* A classe MockMvc me permite trabalhar com objetos de solicitação e resposta simulados.

Depois que eu escrevi o código Java para a classe TarefaControllerTest, eu fiz um commit para que a referida classe fosse adicionada dentro do meu repositório chamado projeto-lista-de-tarefas-api-rest. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-api-rest/commit/4074c37ad20924b01ffdb1461aa75eff7ca26315>.

### Subtópico 4.4: Rodando os testes unitários para validar a API REST

Dentro do meu workspace do Spring Tool Suite, eu tomei providências para que os testes unitários escritos ao longo dos tópicos anteriores fossem rodados com o perfil default.

Cabe ressaltar que foi necessária uma conexão com um banco de dados para a realização dos testes unitários relativos ao repositório da API REST. Sabendo disso, eu anotei a classe TarefaRepositoryTest com @DataJpaTest. Assim, eu fiz com que o Spring Boot automaticamente configurasse um banco de dados incorporado para o repositório da API REST. Esse banco de dados foi o H2 Database.

Todos os testes obtiveram sucesso, conforme pode ser visto na captura de tela abaixo.

![Essa captura de tela mostra que foram bem sucedidos os testes unitários que devem validar a API REST](https://github.com/user-attachments/assets/aebfc4e6-cda5-4914-b16d-5716bf756033)

## Tópico 5: Desenvolvimento do front-end da aplicação web

Os subtópicos seguintes relatam as etapas que eu segui para desenvolver o front-end da aplicação web do projeto Lista de tarefas.

### Subtópico 5.1: Angular CLI e Visual Studio Code

Eu instalei o Angular CLI em meu computador, pois o Angular CLI me fornece comandos úteis na hora de se desenvolver com Angular. Um desses comandos é o ng new.

Desse modo, dentro de uma ferramenta de linha de comando, eu digitei o comando ng new projeto-lista-de-tarefas-frontend. Assim, foi criada uma pasta chamada projeto-lista-de-tarefas-frontend. Eu abri a pasta projeto-lista-de-tarefas-frontend dentro do Visual Studio Code, IDE que eu utilizei para desenvolver o front-end da aplicação web. Foi dentro dessa pasta que eu incluí os arquivos que iriam compor o front-end da aplicação web.

Vale destacar que a pasta projeto-lista-de-tarefas-frontend já veio com alguns arquivos básicos. Desse modo, antes de realizar qualquer alteração nessa pasta, eu fiz um commit para que esses arquivos básicos fossem adicionados dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/2136e612f104e4df5f60198e4b42b0e5f8b2015d>.

### Subtópico 5.2: Arquivo index.html

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src. Essa última pasta já contava com o arquivo index.html.

O código HTML que eu escrevi para o arquivo index.html pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/index.html>. Cabe ressaltar que o código HTML que eu escrevi para o arquivo index.html está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código HTML que eu escrevi para o arquivo index.html, vale destacar que:

* Eu decidi usar a fonte Noto Sans em todo o front-end da aplicação web do projeto Lista de tarefas. Para isso, eu fui até o Google Fonts, procurei por essa fonte, copiei o código que me foi fornecido e o colei no final da tag head.
* Dentro da tag body há uma referência ao componente AppComponent. Desse modo, o conteúdo do template do referido componente será incluído dentro da tag body do arquivo index.html.

Depois que eu escrevi o código HTML para o arquivo index.html, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/c82825be01d5a004f1539613a117f333dece92a3>.

### Subtópico 5.3: Arquivo styles.css

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src. Essa última pasta já contava com o arquivo styles.css.

O código CSS que eu escrevi para o arquivo styles.css pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/styles.css>. Cabe ressaltar que o código CSS que eu escrevi para o arquivo styles.css está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código CSS que eu escrevi para o arquivo styles.css, vale destacar que:

* Através de propriedades personalizadas, eu atribuí nomes de fácil entendimento às cores que serão usadas com frequência no front-end da aplicação web.
* Eu indiquei que a fonte Noto Sans é a fonte a ser usada pelo front-end da aplicação web.
* Eu indiquei que os botões do front-end da aplicação web deverão ter uma borda sólida e com espessura de 1 pixel. Além disso, será de 10 pixels a distância entre o conteúdo de um botão e as bordas desse mesmo botão.
* Eu indiquei que, para os botões pertencentes à classe confirmar, tanto o fundo quanto a borda serão da cor preta.
* Eu indiquei que, quando o mouse estiver posicionado sobre um botão pertencente à classe confirmar, o referido botão terá o fundo da cor branca e terá o texto da cor preta.
* Eu indiquei que, para um botão que estiver desabilitado, tanto o fundo quanto a borda serão da cor cinza. Se o usuário posicionar o mouse sobre um botão desabilitado, o cursor mostrará que o clique não é permitido.

Depois que eu escrevi o código CSS para o arquivo styles.css, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/5b892e2d48e1f89caccfed4e1d86d886ac68c855>.

### Subtópico 5.4: Arquivo tarefa.ts

Eu abri um terminal integrado dentro do Visual Studio Code. Nesse terminal, eu digitei o comando ng generate class models/tarefa. Foram gerados os arquivos tarefa.ts e tarefa.spec.ts. Para acessar o arquivo tarefa.ts, eu, dentro da pasta projeto-lista-de-tarefas-frontend, fui até a pasta src e, depois, eu fui até a pasta models.

O código TypeScript que eu escrevi para o arquivo tarefa.ts pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/models/tarefa.ts>. Cabe ressaltar que o código TypeScript que eu escrevi para o arquivo tarefa.ts está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código TypeScript que eu escrevi para o arquivo tarefa.ts, vale destacar que:

* Eu criei a classe Tarefa, a qual possui as propriedades id, descricao e concluida.
* Eu criei um método construtor para que eu, ao instanciar um objeto da classe Tarefa, já informe quais os valores de todos as propriedades da referida classe.

Depois que eu escrevi o código TypeScript para o arquivo tarefa.ts, eu fiz um commit para que o referido arquivo fosse adicionado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/1ca5dbc63af5dc3990cad318d6cdf238f7834c88>.

### Subtópico 5.5: Serviço e componentes

Para o front-end da aplicação web, eu precisei criar o serviço TarefaService, o componente ListaDeTarefasComponent, o componente AdicionarTarefaComponent, o componente EditarTarefaComponent e o componente ExcluirTarefaComponent.

Para criar o serviço TarefaService, eu abri um terminal integrado dentro do Visual Studio Code e digitei o comando ng generate service services/tarefa. Desse modo, foram criados os arquivos tarefa.service.ts e tarefa.service.spec.ts.

Depois que foram criados os arquivos mencionados no parágrafo anterior, eu fiz um commit para que esses arquivos fossem adicionados dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/7f81b2791c8e7d2835744b7059830d75bb52baff>.

Para criar o componente ListaDeTarefasComponent, eu abri um terminal integrado dentro do Visual Studio Code e digitei o comando ng generate component pages/lista-de-tarefas. Desse modo, foram criados os arquivos lista-de-tarefas.component.ts, lista-de-tarefas.component.spec.ts, lista-de-tarefas.component.html e lista-de-tarefas.component.css.

Depois que foram criados os arquivos mencionados no parágrafo anterior, eu fiz um commit para que esses arquivos fossem adicionados dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/541b8c95ead1a770cafc4501dc87cbfb5b065051>.

Para criar o componente AdicionarTarefaComponent, eu abri um terminal integrado dentro do Visual Studio Code e digitei o comando ng generate component pages/adicionar-tarefa. Desse modo, foram criados os arquivos adicionar-tarefa.component.ts, adicionar-tarefa.component.spec.ts, adicionar-tarefa.component.html e adicionar-tarefa.component.css.

Depois que foram criados os arquivos mencionados no parágrafo anterior, eu fiz um commit para que esses arquivos fossem adicionados dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/76f3bc131d9b4d3009b631e840e0aa43810c7d19>.

Para criar o componente EditarTarefaComponent, eu abri um terminal integrado dentro do Visual Studio Code e digitei o comando ng generate component pages/editar-tarefa. Desse modo, foram criados os arquivos editar-tarefa.component.ts, editar-tarefa.component.spec.ts, editar-tarefa.component.html e editar-tarefa.component.css.

Depois que foram criados os arquivos mencionados no parágrafo anterior, eu fiz um commit para que esses arquivos fossem adicionados dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/742f1ca86bb1983e82c3c6903be743766ed0062a>.

Para criar o componente ExcluirTarefaComponent, eu abri um terminal integrado dentro do Visual Studio Code e digitei o comando ng generate component pages/excluir-tarefa. Desse modo, foram criados os arquivos excluir-tarefa.component.ts, excluir-tarefa.component.spec.ts, excluir-tarefa.component.html e excluir-tarefa.component.css.

Depois que foram criados os arquivos mencionados no parágrafo anterior, eu fiz um commit para que esses arquivos fossem adicionados dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/57eb26479306af1f5da9db0cc498cc056ebe1193>.

### Subtópico 5.6: Arquivo app.routes.ts

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Essa última pasta já contava com o arquivo app.routes.ts.

O código TypeScript que eu escrevi para o arquivo app.routes.ts pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/app.routes.ts>. Cabe ressaltar que o código TypeScript que eu escrevi para o arquivo app.routes.ts está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código TypeScript que eu escrevi para o arquivo app.routes.ts, vale destacar que:

* Dentro da constante routes, eu defini as rotas do front-end da aplicação web.
* Eu indiquei que, quando o usuário acessar a URL http://localhost:4200, deve ser instanciado o componente ListaDeTarefasComponent. Para a referida URL, o título da página será Lista de tarefas.
* Eu indiquei que, quando o usuário acessar a URL http://localhost:4200/adicionar-tarefa, deve ser instanciado o componente AdicionarTarefaComponent. Para a referida URL, o título da página será Adicionar tarefa.
* Eu indiquei que, quando o usuário acessar a URL que segue o modelo http://localhost:4200/editar/id, deve ser instanciado o componente EditarTarefaComponent. Na prática, o trecho id corresponderá a um número que representa o id de uma determinada tarefa. Para a URL que segue o referido modelo, o título da página será Editar tarefa.
* Eu indiquei que, quando o usuário acessar a URL que segue o modelo http://localhost:4200/excluir/id, deve ser instanciado o componente ExcluirTarefaComponent. Na prática, o trecho id corresponderá a um número que representa o id de uma determinada tarefa. Para a URL que segue o referido modelo, o título da página será Excluir tarefa.

Depois que eu escrevi o código TypeScript para o arquivo app.routes.ts, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/121666031571c834aa1a2018a23edf307a87ea47>.

### Subtópico 5.7: Arquivo app.config.ts

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Essa última pasta já contava com o arquivo app.config.ts.

O código TypeScript que eu escrevi para o arquivo app.config.ts pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/app.config.ts>. Cabe ressaltar que o código TypeScript que eu escrevi para o arquivo app.config.ts está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código TypeScript que eu escrevi para o arquivo app.config.ts, vale destacar que:

* A constante appConfig contém uma lista com providers que devem estar disponíveis para o componente raiz e para todos os filhos desse componente raiz.
* Dentro da lista com providers, eu adicionei a função provideRouter. Essa função permite configurar um conjunto de rotas para que haja a navegação entre componentes dentro do front-end da aplicação web. Eu defini esse conjunto de rotas dentro da constante routes, conforme pode ser visto no arquivo app.routes.ts. Por isso, a constante routes é passada como parâmetro da função provideRouter.
* Dentro da lista com providers, eu adicionei a função provideProtractorTestingSupport. Essa função adiciona o serviço Testability para o front-end da aplicação web.
* Dentro da lista com providers, eu adicionei a função provideHttpClient. Essa função permite configurar o serviço do Angular chamado HttpClient e o faz estar disponível para injeção de dependência.

Depois que eu escrevi o código TypeScript para o arquivo app.config.ts, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/30c98b0f83ddf25071d408c16e50468d7d6957d7>.

### Subtópico 5.8: Arquivo main.ts

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src. Essa última pasta já contava com o arquivo main.ts.

O código TypeScript do arquivo app.config.ts pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/main.ts>. Cabe ressaltar que o código TypeScript do arquivo app.config.ts está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

O Angular CLI me gerou o arquivo main.ts e eu não vi a necessidade de alterá-lo. Apesar disso, eu gostaria de destacar que:

* O método bootstrapApplication realiza a operação de bootstrap do front-end da aplicação web.
* O componente AppComponent é o primeiro parâmetro do método bootstrapApplication. Isso indica que AppComponent deve ser renderizado como componente raiz do front-end da aplicação web.
* A constante appConfig, exportada pelo arquivo app.config.ts, é o segundo parâmetro do método bootstrapApplication. Isso indica que appConfig contém um conjunto de opções de configuração que devem estar disponíveis durante a operação de bootstrap do front-end da aplicação web.

### Subtópico 5.9: Arquivo app.component.ts

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Essa última pasta já contava com o arquivo app.component.ts.

O código TypeScript que eu escrevi para o arquivo app.component.ts pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/app.component.ts>. Cabe ressaltar que o código TypeScript que eu escrevi para o arquivo app.component.ts está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código TypeScript que eu escrevi para o arquivo app.component.ts, vale destacar que:

* O decorator @Component indica que a classe AppComponent é um componente. Dentro do referido decorator estão definidos o seletor do componente, as dependências que devem ser importadas para o template do componente, o local onde está salvo o arquivo HTML correspondente ao template do componente e o local onde está salvo o arquivo CSS correspondente aos estilos do componente.
* A classe RouterOutlet é importada para o template do componente AppComponent. Desse modo, eu posso usar a diretiva router-outlet dentro do referido template.

Depois que eu escrevi o código TypeScript para o arquivo app.component.ts, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/36b4d848c35f01c4bbdc8ec3e985472a8f5f4aa6>.

Eu também fiz um commit para adicionar uma imagem dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/a9aa258f922922f80ed4a3f8fa91653acb714d6e>.

### Subtópico 5.10: Arquivo app.component.html

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Essa última pasta já contava com o arquivo app.component.html.

O código HTML que eu escrevi para o arquivo app.component.html pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/app.component.html>. Cabe ressaltar que o código HTML que eu escrevi para o arquivo app.component.html está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código HTML que eu escrevi para o arquivo app.component.html, vale destacar que:

* Eu utilizei tags semânticas para descrever o significado do conteúdo presente no template do componente AppComponent. Desse modo, eu dividi o referido template em cabeçalho, conteúdo principal e rodapé.
* O cabeçalho é composto por uma imagem e o texto Lista de tarefas.
* O rodapé é composto pelo texto Desenvolvido por Lorenzo Fernandes Aguiar.
* O cabeçalho e o rodapé estarão presentes em todas as URLs acessadas pelo usuário.
* Por meio da diretiva router-outlet, eu indiquei que o conteúdo principal mudará conforme a URL acessada pelo usuário.

Depois que eu escrevi o código HTML para o arquivo app.component.html, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/a764749424f3360886991c53ce525eb69e4dc2fa>.

### Subtópico 5.11: Arquivo app.component.css

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Essa última pasta já contava com o arquivo app.component.css.

O código CSS que eu escrevi para o arquivo app.component.css pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/app.component.css>. Cabe ressaltar que o código CSS que eu escrevi para o arquivo app.component.css está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código HTML que eu escrevi para o arquivo app.component.html, vale destacar que:

* Eu indiquei que, entre o cabeçalho e o conteúdo principal, existe uma linha horizontal sólida, de cor preta e com espessura igual a 1 pixel. Uma linha semelhante separa o conteúdo principal e o rodapé.
* Eu indiquei que, dentro do cabeçalho, a imagem e o texto Lista de tarefas ficam um ao lado do outro.

Depois que eu escrevi o código CSS para o arquivo app.component.css, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/55ec12d462bf6b2a5c5c8cd2da7f6754407f874b>.

### Subtópico 5.12: Arquivo tarefa.service.ts

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src. Em seguida, eu fui até a pasta app e, depois, eu fui até a pasta services. Nessa última pasta, eu acessei o arquivo tarefa.service.ts.

O código TypeScript que eu escrevi para o arquivo tarefa.service.ts pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/services/tarefa.service.ts>. Cabe ressaltar que o código TypeScript que eu escrevi para o arquivo tarefa.service.ts está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código TypeScript que eu escrevi para o arquivo tarefa.service.ts, vale destacar que:

* A classe TarefaService é um serviço. Todos os métodos dessa classe, com exceção do método manipularErro, constroem as requisições HTTP que serão enviadas para a API REST.
* O decorator @Injectable indica que o serviço TarefaService pode ser injetado como uma dependência.
* A propriedade url contém a URL básica para a qual a API REST espera receber requisições HTTP.
* A propriedade httpOptions constrói um cabeçalho HTTP, de modo que o Content-Type é igual a application/json.
* Eu utilizei o método constructor para realizar a injeção de dependência. Desse modo, o Angular injetará a dependência, que nesse caso é a classe HttpClient, dentro do serviço TarefaService. A classe HttpClient é muito importante, pois ela conta com métodos para executar requisições HTTP.

Depois que eu escrevi o código TypeScript para o arquivo tarefa.service.ts, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/36a2c4b98aa44fb5f3cde2b50f17769446ec31ff>.

### Subtópico 5.13: Arquivo lista-de-tarefas.component.ts

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta lista-de-tarefas. Nessa última pasta, eu acessei o arquivo lista-de-tarefas.component.ts.

O código TypeScript que eu escrevi para o arquivo lista-de-tarefas.component.ts pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/lista-de-tarefas/lista-de-tarefas.component.ts>. Cabe ressaltar que o código TypeScript que eu escrevi para o arquivo lista-de-tarefas.component.ts está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código TypeScript que eu escrevi para o arquivo lista-de-tarefas.component.ts, vale destacar que:

* A classe RouterLink é importada para o template do componente ListaDeTarefasComponent. Desse modo, dentro do referido template, eu posso usar a propriedade routerLink que pertence à classe RouterLink.
* A classe CommonModule é importada para o template do componente ListaDeTarefasComponent. Desse modo, dentro do referido template, eu posso usar a diretiva ngFor.
* Eu utilizei o método inject para realizar a injeção de dependência. Desse modo, o Angular injetará a dependência, que nesse caso é o serviço TarefaService, dentro da classe ListaDeTarefasComponent.

Depois que eu escrevi o código TypeScript para o arquivo lista-de-tarefas.component.ts, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/0afce5745acfa25902fcdc5287ba8714dbee76c5>.

### Subtópico 5.14: Arquivo lista-de-tarefas.component.html

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta lista-de-tarefas. Nessa última pasta, eu acessei o arquivo lista-de-tarefas.component.html.

O código HTML que eu escrevi para o arquivo lista-de-tarefas.component.html pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/lista-de-tarefas/lista-de-tarefas.component.html>. Cabe ressaltar que o código HTML que eu escrevi para o arquivo lista-de-tarefas.component.html está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código HTML que eu escrevi para o arquivo lista-de-tarefas.component.html, vale destacar que:

* O arquivo lista-de-tarefas.component.html é o template do componente ListaDeTarefasComponent. Isso significa que o referido template será exibido como o conteúdo principal da URL http://localhost:4200.
* Eu adicionei um parágrafo que informa a quantidade de tarefas contidas na lista de tarefas. Essa quantidade é informada pela propriedade numeroDeTarefas.
* A propriedade routerLink que pertence à classe RouterLink permite que o usuário navegue para as diferentes URLs do front-end da aplicação web.
* Quando o usuário clicar no botão Adicionar tarefa, esse usuário será direcionado para a URL http://localhost:4200/adicionar-tarefa.
* Quando o usuário clicar no botão Editar, esse usuário será direcionado para a URL que segue o modelo http://localhost:4200/editar/id. Na prática, no lugar do trecho id, estará um número que representa o id de uma tarefa.
* Quando o usuário clicar no botão Excluir, esse usuário será direcionado para a URL que segue o modelo http://localhost:4200/excluir/id. Na prática, no lugar do trecho id, estará um número que representa o id de uma tarefa.
* Por meio da diretiva ngFor, eu indiquei que cada tarefa salva no banco de dados corresponderá a um item da lista de tarefas.
* Por meio de @if e @else, eu indiquei que, caso a tarefa não esteja marcada como concluída, será exibido o botão Marcar como concluída e o botão Editar. Caso a tarefa esteja marcada como concluída, será exibido o botão Marcar como não concluída. O botão Excluir será exibido em ambos os casos.
* Eu indiquei que, quando o usuário clicar no botão Marcar como concluída, deverá ser chamado o método atualizarPropriedadeConcluida. O mesmo acontecerá quando o usuário clicar no botão Marcar como não concluída.
* Eu indiquei que, quando uma tarefa estiver marcada como concluída, a tag li que contém a referida tarefa deverá possuir a classe riscada.

Depois que eu escrevi o código HTML para o arquivo lista-de-tarefas.component.html, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/87fa5840dc0d877b01a8267e8c01b9690f1fc602>.

### Subtópico 5.15: Arquivo lista-de-tarefas.component.css

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta lista-de-tarefas. Nessa última pasta, eu acessei o arquivo lista-de-tarefas.component.css.

O código CSS que eu escrevi para o arquivo lista-de-tarefas.component.css pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/lista-de-tarefas/lista-de-tarefas.component.css>. Cabe ressaltar que o código CSS que eu escrevi para o arquivo lista-de-tarefas.component.css está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código CSS que eu escrevi para o arquivo lista-de-tarefas.component.css, vale destacar que:

* Para cada item da lista de tarefas, eu indiquei que devem ficar na mesma linha a descrição da tarefa e os botões que permitem que o usuário realize ações sobre a tarefa. Eu também indiquei que cada item da lista de tarefas deve ter a borda da cor preta e com espessura de 2 pixels. Além disso, para cada item da lista de tarefas, eu indiquei que será de 20 pixels a distância entre seu conteúdo e suas bordas.
* Eu indiquei que, quando uma tarefa estiver marcada como concluída, o item que corresponde à referida tarefa deverá ter sua borda da cor cinza. Além disso, a descrição dessa tarefa deverá ser riscada com um traço.
* Eu indiquei as cores dos botões que fazem parte do conteúdo principal da URL http://localhost:4200.
* Através de media queries, eu apliquei o design responsivo. Desse modo, eu fiz com que o conteúdo principal da URL http://localhost:4200 se adaptasse a diferentes resoluções de tela.

Depois que eu escrevi o código CSS para o arquivo lista-de-tarefas.component.css, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/4499888d911824de2aa837eea5831ed74eb87859>.

### Subtópico 5.16: Arquivo adicionar-tarefa.component.ts

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta adicionar-tarefa. Nessa última pasta, eu acessei o arquivo adicionar-tarefa.component.ts.

O código TypeScript que eu escrevi para o arquivo adicionar-tarefa.component.ts pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/adicionar-tarefa/adicionar-tarefa.component.ts>. Cabe ressaltar que o código TypeScript que eu escrevi para o arquivo adicionar-tarefa.component.ts está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código TypeScript que eu escrevi para o arquivo adicionar-tarefa.component.ts, vale destacar que:

* A classe FormsModule é importada para o template do componente AdicionarTarefaComponent. Desse modo, dentro do referido template, eu posso contar com recursos do Angular que me permitem vincular dados a um formulário.
* Em determinado trecho do código eu precisei utilizar a classe Router. Essa classe me permite navegar entre as diferentes URLs do front-end da aplicação web.

Depois que eu escrevi o código TypeScript para o arquivo adicionar-tarefa.component.ts, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/d9c40520e821280b8b68fe5aab10b05277e3f309>.

### Subtópico 5.17: Arquivo adicionar-tarefa.component.html

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta adicionar-tarefa. Nessa última pasta, eu acessei o arquivo adicionar-tarefa.component.html.

O código HTML que eu escrevi para o arquivo adicionar-tarefa.component.html pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/adicionar-tarefa/adicionar-tarefa.component.html>. Cabe ressaltar que o código HTML que eu escrevi para o arquivo adicionar-tarefa.component.html está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código HTML que eu escrevi para o arquivo adicionar-tarefa.component.html, vale destacar que:

* O arquivo adicionar-tarefa.component.html é o template do componente AdicionarTarefaComponent. Isso significa que o referido template será exibido como o conteúdo principal da URL http://localhost:4200/adicionar-tarefa.
* Eu criei um formulário composto basicamente por um campo input e pelo botão Confirmar. Dentro do campo input mencionado, o usuário deve escrever a descrição da tarefa que ele deseja adicionar na lista de tarefas.
* Por meio da diretiva ngModel que pertence à classe FormsModule, eu vinculei o valor do campo input à propriedade descricao que pertence à propriedade tarefa do componente AdicionarTarefaComponent.
* Eu indiquei que, quando o usuário clicar no botão Confirmar, deverá ser chamado o método adicionarTarefa.
* Eu adicionei uma validação ao campo input, indicando que o preenchimento do referido campo é obrigatório. Além disso, eu indiquei que o campo input deve conter, no mínimo, 3 caracteres e, no máximo, 25 caracteres.
* Eu indiquei que, caso o campo input não seja alterado ou caso ele não apresente erros de validação, a mensagem de alerta deverá ficar oculta.
* Eu indiquei que, caso o campo input não seja alterado ou caso ele apresente erros de validação, o botão Confirmar deverá ser desabilitado.

Depois que eu escrevi o código HTML para o arquivo adicionar-tarefa.component.html, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/769a42d82d7b8c3fe5f98dea1357ecf9862aca50>.

### Subtópico 5.18: Arquivo adicionar-tarefa.component.css

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta adicionar-tarefa. Nessa última pasta, eu acessei o arquivo adicionar-tarefa.component.css.

O código CSS que eu escrevi para o arquivo adicionar-tarefa.component.css pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/adicionar-tarefa/adicionar-tarefa.component.css>. Cabe ressaltar que o código CSS que eu escrevi para o arquivo adicionar-tarefa.component.css está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código CSS que eu escrevi para o arquivo adicionar-tarefa.component.css, vale destacar que eu indiquei que o campo input deverá ter uma borda sólida e com espessura de 1 pixel. Além disso, será de 10 pixels a distância entre o conteúdo do campo input e as bordas desse mesmo campo.

Depois que eu escrevi o código CSS para o arquivo adicionar-tarefa.component.css, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/350ac525d3c72998d0fee0934db7eea5b3f072c6>.

### Subtópico 5.19: Arquivo editar-tarefa.component.ts

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta editar-tarefa. Nessa última pasta, eu acessei o arquivo editar-tarefa.component.ts.

O código TypeScript que eu escrevi para o arquivo editar-tarefa.component.ts pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/editar-tarefa/editar-tarefa.component.ts>. Cabe ressaltar que o código TypeScript que eu escrevi para o arquivo editar-tarefa.component.ts está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código TypeScript que eu escrevi para o arquivo editar-tarefa.component.ts, vale destacar que a classe ActivatedRoute me permite lidar com informações relacionadas à atual URL que foi acessada pelo usuário.

Depois que eu escrevi o código TypeScript para o arquivo editar-tarefa.component.ts, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/55dcc4e9f3a3121c02da9eff75b24d6494589f83>.

### Subtópico 5.20: Arquivo editar-tarefa.component.html

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta editar-tarefa. Nessa última pasta, eu acessei o arquivo editar-tarefa.component.html.

O código HTML que eu escrevi para o arquivo editar-tarefa.component.html pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/editar-tarefa/editar-tarefa.component.html>. Cabe ressaltar que o código HTML que eu escrevi para o arquivo editar-tarefa.component.html está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código HTML que eu escrevi para o arquivo editar-tarefa.component.html, vale destacar que:

* O arquivo editar-tarefa.component.html é o template do componente EditarTarefaComponent. Isso significa que o referido template será exibido como o conteúdo principal da URL que segue o modelo http://localhost:4200/editar-tarefa/id. Na prática, o trecho id corresponderá a um número que representa o id de uma determinada tarefa.
* Eu criei um formulário composto basicamente por um campo input e pelo botão Confirmar. Dentro do campo input mencionado, o usuário deve escrever a nova descrição da tarefa que ele deseja editar.
* Eu indiquei que, quando o usuário clicar no botão Confirmar, deverá ser chamado o método editarTarefa.

Depois que eu escrevi o código HTML para o arquivo editar-tarefa.component.html, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/dc67664cd027a221f3d72dfd8c557f31cc9176de>.

### Subtópico 5.21: Arquivo editar-tarefa.component.css

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta editar-tarefa. Nessa última pasta, eu acessei o arquivo editar-tarefa.component.css.

O código CSS que eu escrevi para o arquivo editar-tarefa.component.css pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/editar-tarefa/editar-tarefa.component.css>. Cabe ressaltar que o código CSS que eu escrevi para o arquivo editar-tarefa.component.css está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Depois que eu escrevi o código CSS para o arquivo editar-tarefa.component.css, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/6990555d89fcda8d9eb7ce44c8f8590f9dfa8ad4>.

### Subtópico 5.22: Arquivo excluir-tarefa.component.ts

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta excluir-tarefa. Nessa última pasta, eu acessei o arquivo excluir-tarefa.component.ts.

O código TypeScript que eu escrevi para o arquivo excluir-tarefa.component.ts pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/excluir-tarefa/excluir-tarefa.component.ts>. Cabe ressaltar que o código TypeScript que eu escrevi para o arquivo excluir-tarefa.component.ts está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Depois que eu escrevi o código TypeScript para o arquivo excluir-tarefa.component.ts, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/4c1b6dfe27e7a86f77a886231d983aa7eed2f5b4>.

### Subtópico 5.23: Arquivo excluir-tarefa.component.html

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta excluir-tarefa. Nessa última pasta, eu acessei o arquivo excluir-tarefa.component.html.

O código HTML que eu escrevi para o arquivo excluir-tarefa.component.html pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/excluir-tarefa/excluir-tarefa.component.html>. Cabe ressaltar que o código HTML que eu escrevi para o arquivo excluir-tarefa.component.html está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Sobre o código HTML que eu escrevi para o arquivo excluir-tarefa.component.html, vale destacar que:

* O arquivo excluir-tarefa.component.html é o template do componente ExcluirTarefaComponent. Isso significa que o referido template será exibido como o conteúdo principal da URL que segue o modelo http://localhost:4200/excluir-tarefa/id. Na prática, o trecho id corresponderá a um número que representa o id de uma determinada tarefa.
* O template em questão é composto basicamente por uma mensagem e pelo botão Confirmar.
* Eu indiquei que, quando o usuário clicar no botão Confirmar, deverá ser chamado o método excluirTarefa.

Depois que eu escrevi o código HTML para o arquivo excluir-tarefa.component.html, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/b42fd4687c4ae5cd8dee294fcf7e542b8d145ebd>.

### Subtópico 5.24: Arquivo excluir-tarefa.component.css

Dentro da pasta projeto-lista-de-tarefas-frontend, eu fui até a pasta src e, depois, eu fui até a pasta app. Em seguida, eu fui até a pasta pages e, depois, eu fui até a pasta excluir-tarefa. Nessa última pasta, eu acessei o arquivo excluir-tarefa.component.css.

O código CSS que eu escrevi para o arquivo excluir-tarefa.component.css pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/blob/main/src/app/pages/excluir-tarefa/excluir-tarefa.component.css>. Cabe ressaltar que o código CSS que eu escrevi para o arquivo excluir-tarefa.component.css está hospedado no meu repositório chamado projeto-lista-de-tarefas-frontend.

Depois que eu escrevi o código CSS para o arquivo excluir-tarefa.component.css, eu fiz um commit para que o referido arquivo fosse atualizado dentro do meu repositório chamado projeto-lista-de-tarefas-frontend. Tal commit pode ser visto através do link <https://github.com/lorenzofernandesaguiar/projeto-lista-de-tarefas-frontend/commit/ee822f04e6f151fe358acd00e62d85fcfdc71499>.