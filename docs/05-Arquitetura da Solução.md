# Arquitetura da Solução

Ilustração de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/assets/103156976/b2ddb8d0-7311-435c-8bc5-a315616f3614)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

Neste diagrama de classes, temos três principais classes: "Usuario", "Esporte" e "Evento", sendo elas classes do tipo entity. A classe "Usuario" representa os usuários da aplicação e possui métodos para cadastro, login, criação de eventos, inscrição em eventos e avaliação de eventos. A classe esporte representa os esportes da aplicação e possui método para cadastrar esporte, definir quantidade de pessoas participantes e tipo de local em que o esporte é praticado, e por fim a classe "Evento" representa os eventos esportivos e possui atributos como localização, data, horário, tipo de esporte e número de participantes.

Além disso, há uma classe do tipo boundary "API de Geolocalizacao" que representa a integração com a API de geolocalização mencionada no requisito RF-006. Esta classe possui um método para exibir a localização dos eventos no mapa.

![diagramadeclassesfeedback1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/assets/103156976/c97c6b45-acf2-43f6-a8c3-e846c3abe52a)


## Modelo ER
O Diagrama Entidade-Relacionamento (ER) é uma ferramenta de modelagem de dados que descreve as entidades - coisas, objetos - em um sistema e como elas se relacionam entre si. É amplamente utilizado em projetos de banco de dados, pois permite visualizar de forma clara e concisa a estrutura do sistema.

O diagrama ER é composto por entidades, atributos e relacionamentos. As entidades representam os objetos do mundo real que são relevantes para o sistema, como usuários, produtos ou atividades. Os atributos são as características dessas entidades, como nome, id ou data de criação. Os relacionamentos indicam como as entidades se conectam entre si, por exemplo, um usuário pode fazer rastrear varias atividades e uma atividade pode ser rastreada por apenas um usuário.

Em um modelo ER as entidades são representadas por retângulos, os atributos por elipses e os relacionamentos por losangos. As conexões entre as entidades são indicadas por linhas, que podem ser simples ou duplas, dependendo da natureza do relacionamento.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/assets/90113699/660ff981-ea4e-4076-afdb-63c0b728a8d0)


## Esquema Relacional

O esquema Entidade-Relacionamento (ER) é uma representação gráfica que descreve a estrutura de um banco de dados e seus relacionamentos, sendo utilizado para ilustrar a forma como as entidades (como tabelas) se relacionam entre si, incluindo os atributos e chaves primárias de cada entidade.

O esquema apresentado possui três tabelas, que estão relacionadas entre si. Todos esses relacionamentos são definidos por meio de chaves estrangeiras, que são usadas para conectar as tabelas. No geral, o esquema ER apresenta uma estrutura bem definida, permitindo que sejam facilmente identificadas as relações entre as diferentes tabelas e como os dados estão organizados no banco de dados.

![prisma-erd](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/assets/103156976/d5127fb9-a4ab-49c8-89ae-f943f44b195b)


## Modelo Físico

A seguir apresenta-se um link para o arquivo banco.sql, contendo os scripts de criação das tabelas do banco de dados. Este arquivo está localizado na pasta src\bd e pode ser usado para criar a estrutura inicial do banco de dados. 

[BANCO.sql](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/blob/main/src/bd/banco.sql)

Scripts  DML
O Scripts foram desenvolovidos pela ferramenta PRISMA Studio, o script pode ser visualizado neste repositório pelo caminho [Schema - Prisma](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/blob/main/src/backEnd/prisma/schema.prisma)

## Tecnologias Utilizadas

| Tecnologia  | Descrição |
| ------------ | ------------ |
| GitHub   |  [GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime) - Repositório de código fonte |
| Git | [Git](https://git-scm.com/) - Ferramenta para controle de versão  |
| GitHub - DOCS  |  [GitHub-DOCS](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/tree/main/docs) - Documentos do projeto |
| GitHub - Projects  |  [Github-Projects](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/459) - Gerenciamento do projeto  |
| Figma  |  [Figma](https://www.figma.com/) - Projeto de interface e wireframes  |
| VSCode  |  [Visual Studio Code](https://portal.azure.com/?Microsoft_Azure_Education_correlationId=482c7b3fd428421ebc975fb5a28dcb48#view/Microsoft_Azure_Education/EducationMenuBlade/~/software) - Editor de código / IDE.  |
| MongoDB  |  [MongoDB](https://www.mongodb.com/pt-br) - BancoNoSQL que permite gerenciamento em nuvem, multiplataforma.  |
| MongoCompass  | [MongoCompass](https://www.mongodb.com/products/tools/compass) - Compass é uma ferramenta interativa gratuita para consultar, otimizar e analisar os dados MongoDB. |
| Node.js  |  [Node.js](https://nodejs.org/en) - Runtime JavaScript desenvolvido com o interpretador V8 do Google que executa códigos fora de um navegador web, arquitetura assíncrona e orientada por eventos.  |
| Yarn | [Yarn](https://yarnpkg.com/) - Gerenciador de pacotes para aplicar comandos prontos ao código de uma aplicação, uso mais dinâmico e facilitado.    |
| Draw.io | [Draw.io](https://app.diagrams.net/) - Ferramenta online para desenho de diagrama padrão UML.  |
| Vite  | [Vite](https://vitejs.dev/guide/) - Ferramenta de construção front-end de última geração com código fonte em ESM nativo. |
| Prisma  | [Prisma.io](https://www.prisma.io/) - Node.js e TypeScript ORM de última geração, trabalha de forma intuitiva com bancos de dados com migrações automatizadas e seguras.  |
| Fastify  | [Fastify](https://fastify.dev/) - Framework web altamente focado em fornecer a melhor experiência de desenvolvedor com o mínimo de sobrecarga e uma poderosa arquitetura de plug-in.  |
| TypeScript   | [TypeScript](https://www.typescriptlang.org/) - TypeScript é uma linguagem de programação fortemente tipada baseada em JavaScript, oferecendo melhores ferramentas em qualquer escala.  |
| TailwindCSS   | [TailwindCSS](https://tailwindcss.com/) - Framework CSS de primeiro uso para criação rápida de sites modernos sem sair do HTML, é uma estrutura CSS utilitária repleta de classes que podem ser compostas para construir qualquer design, diretamente em sua marcação, sem sair do HTML. |

## Estilo arquitetural do projeto

![DDD – Domain Driven Design (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/assets/103156976/f6290220-4d01-4312-8a25-edf86a47337a)


Para o desenvolvimento do nosso projeto, seguimos o padrão arquitetural Domain Driven Design - DDD. Escolhemos o DDD, pois este estilo combina práticas de design e desenvolvimento. Oferecendo ferramentas de modelagem estratégica e tática para entregar um software de alta qualidade. Por definição em seus princípios, DDD é sobre discussão, escuta e compreensão. Todo um esforço para centralizar o conhecimento. 

O DDD foi desenvolvido por Eric Evans em seu livro "Domain-Driven Design: Tackling Complexity in the Heart of Software" e destina-se a ajudar a criar sistemas de software mais alinhados com a lógica de negócios e os processos do mundo real. Ele fornece diretrizes para a criação de modelos de domínio ricos, a colaboração entre especialistas de domínio e desenvolvedores, e a organização de código em torno desses modelos.

Escolhemos utilizar o DDD, pois em teoria significa aproximar os especialistas do domínio (Domain experts) do time de desenvolvimento. Criando uma linguagem única. Uma comunicação sem ruídos, limpa, que é o que prezamos para o nosso time.


O Domain-Driven Design (DDD) é uma abordagem arquitetural que se concentra na modelagem do domínio de uma aplicação para criar um sistema altamente coeso e com baixo acoplamento. Para criar o diagrama de componentes WEB API - BACK END utilizamos uma estrutura típica em camadas, conforme imagem abaixo:

![DDD – Domain Driven Design (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/assets/103156976/5b9263fd-4b23-43db-bafc-8741f8309595)

Para melhor entendimento, segue explicação das camadas representadas:

1. Application Layer:

- `Controllers` Esta camada lida com as solicitações HTTP e envia comandos para a camada de domínio. Eles são responsáveis por receber e validar os dados de entrada, chamando os serviços apropriados e retornando as respostas HTTP.
- `DTOs` (Data Transfer Objects): São objetos que transportam dados entre a camada de aplicação e a camada de domínio. Eles podem ser usados para serializar dados em respostas HTTP.
- `Services` Aqui, os serviços de aplicação coordenam a lógica de negócios. Eles orquestram chamadas para a camada de domínio e podem envolver várias entidades ou agregados.

2. Domain Layer:

- `Entities` Representam objetos de negócios com identidades únicas. Neste caso, são entidades como Usuário (User), Evento (Event), e Esporte (Sport).
- `Aggregates` São grupos de entidades relacionadas e suas operações associadas. Por exemplo, um agregado de Event pode incluir várias entidades de User.
- `Value Objects` São objetos imutáveis que não têm identidade própria, geralmente usados para representar informações que pertencem a uma entidade ou agregado.
- `Repositories` Fornecem métodos para acessar e persistir entidades no banco de dados.
- `Domain Services` São serviços que encapsulam a lógica de domínio que não pertence a uma entidade ou agregado específico.

3. Infrastructure Layer:

- `Database Context` Fornece acesso ao banco de dados e mapeia entidades para tabelas do banco de dados.
- `Database Migrations` Gerencia as migrações do banco de dados para manter a consistência do esquema.
- Repositories: Implementações concretas dos repositórios definidos na camada de domínio.
- `External Services` Integrações com serviços externos, como serviços de autenticação, armazenamento em nuvem, etc.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
