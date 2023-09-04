# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Desta forma, constatou-se que o presente projeto possui 2 principais personas:

•	Esportistas 

•	Pessoas que buscam uma rede de contatos para determinado esporte

A seguir, passamos à análise detalhada das personas e suas respectivas histórias de usuários.

|NOME  | PERFIL  |HISTÓRIA  | MOTIVAÇÕES | FRUSTRAÇÃO | 
| ------------ | -------------- |------------ | ------------ | -------- | 
| *Murilo Gonçalves*  ![BikeRegistradasegurodebicicletabaratoecompleto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-pmv-ads-2023-2-e4-g4-t5/assets/103230282/70c3191e-fd11-43f4-9379-43593f1fbb3d)  | Idade: 35 anos Ocupação: Competidor internacional   |  Murilo sempre foi uma pessoa muito ativa e tem o ciclismo como paixão. Com sua intensa rotina de treinos para as competições, busca uma rede de contatos dentro nicho ao qual possa fazer parte, principalmente para o acompanhar nas longas horas de treino.| Conversar sobre o esporte ao qual dedica a maior parte do seu tempo com pessoas que realmente o entendem os seus anseios e conquistas. Murilo também sente que tem uma missão: Incentiva a nova geração às práticas esportivas. | Ele sente que, com exceção do futebol, nenhuma modalidade esportiva é incentivada no Brasil.|


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`        |
|--------------------|------------------------------------|----------------------------------------|
|Atleta profissional  | Encontrar um parceiro de esporte | Treinarmos na mesma intensidade  |
|Adepto à esportes  | Formar uma rede de contatos | Praticar um esporte pouco difundido |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro de Usuário:Os usuários devem poder criar contas na aplicação, fornecendo informações básicas como nome, e-mail e senha. | ALTA | 
|RF-002| Autenticação e Autorização:A aplicação deve permitir que os usuários façam login de forma segura e autorizada. | ALTA |
|RF-003| Criação de Eventos Esportivos: Os usuários devem ser capazes de criar eventos esportivos, definindo detalhes como localização, dados, horário e tipo de esporte.   | ALTA |
|RF-004| Visualização de Eventos: Os usuários devem poder ver uma lista de eventos esportivos disponíveis, com detalhes como localização no mapa, participantes confirmados e informações relevantes.   | MÉDIA |
|RF-005| Participação em Eventos: Os usuários devem poder se inscrever em eventos esportivos existentes e confirmar sua participação.   | MÉDIA |
|RF-006| Integração com API de Geolocalização:A aplicação deve integrar-se a uma API de geolocalização para exibir a localização dos eventos no mapa. Os eventos devem ser marcados de forma clara no mapa, permitindo que os usuários visualizem facilmente sua proximidade.   | MÉDIA |
|RF-007| Notificações: Os usuários devem receber notificações sobre eventos próximos, atualizações de eventos em que estão inscritos e outras informações relevantes.  | MÉDIA |
|RF-008| Avaliação e Comentários: Os usuários devem poder avaliar eventos após a participação e deixar comentários para compartilhar experiências. | MÉDIA |

### Requisitos não Funcionais


|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Desempenho: A aplicação deve ter tempos de resposta rápidos ao carregar eventos e atualizar informações. A integração com uma API de geolocalização não deve causar atrasos visíveis na exibição do mapa. | MÉDIA | 
|RNF-002| Compatibilidade com Dispositivos: A aplicação deve ser responsiva e funcionar bem em dispositivos móveis, tablets e desktops. |  BAIXA | 
 
## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode contratar terceiros para a implementação do projeto.        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

Na linguagem de modelagem unificada (UML), o objetivo do diagrama de caso de uso é demonstrar as diferentes maneiras que o usuário pode interagir com um sistema. O caso de uso abaixo apresenta as possibilidades de interação do usuário com o aplicativo CADÊ MEU TIME?

![diagramacasodeuso (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/assets/103156976/4bb1ce71-58ad-46d1-b914-580c798afa32)



# Matriz de Rastreabilidade

A principal finalidade de uma matriz de rastreabilidade é proporcionar uma visão clara e organizada das conexões entre diferentes partes de um projeto, permitindo que os envolvidos compreendam facilmente como as mudanças em um requisito afetam os outros elementos e vice-versa. Isso também é extremamente útil em situações de auditoria, onde é necessário demonstrar a rastreabilidade e a conformidade ao longo do processo de desenvolvimento.

Em resumo, a matriz de rastreabilidade é uma ferramenta poderosa para garantir a consistência, a integridade e a qualidade de um projeto, ao manter o rastreamento das relações entre os diferentes componentes envolvidos no processo de desenvolvimento.

|ID        |DESCRIÇÃO DO REQUISITO           |PRIORIDADE         |REQUISITOS RELACIONADOS     |
|----------|---------------------------------|-------------------|----------------------------|
|RF-001    |Cadastro de Usuário              |ALTA               |-                           |
|RF-002    |Autenticação e Autorização       |MÉDIA              |-                           |
|RF-003    |Criação de Eventos Esportivos    |MÉDIA              |RF-006                      |
|RF-004    |Visualização de Eventos          |MÉDIA              |RF-006                      |
|RF-005    |Participação em Eventos          |MÉDIA              |-                           |
|RF-006    |Integração em Eventos            |MÉDIA              |RF-003, RF-004              |
|RF-007    |Notificação                      |MÉDIA              |-                           |
|RF-008    |Avaliação e Comentários          |MÉDIA              |-                           |


# Gerenciamento de Projeto

No início de um projeto, é crucial questionar sua viabilidade e benefícios versus custos. O Guia PMBoK v6 é um recurso valioso para a gestão de projetos, abrangendo 10 áreas fundamentais. A equipe optou por usar a metodologia ágil Scrum e o quadro Kanban com a ferramenta GitHub Projects para facilitar o gerenciamento do projeto, oferecendo uma visão organizada das etapas, datas de entrega e requisitos.

Com a ferramenta registramos as etapas do projeto, elucidando as datas de entrega e requisitos, a ferramenta por sua vez apresenta uma visão hierárquica de todo o projeto, proporcionando assim uma melhor compreensão e/ou organização; Como pode ser observado pelo link: [Github-Projects](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/459).

![gerenciamentodequipe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-pmv-ads-2023-2-e4-g4-t5/assets/103156976/b2edef59-9965-4cf5-bd2e-8981cff6529a)

## Gerenciamento de Tempo e Gerenciamento de Equipe

A gestão de pessoas em projetos tem por objetivo fundamental tornar a relação entre o capital e o trabalho a mais produtiva e menos conflituosa possível. Nesta concepção as pessoas e seus conhecimentos, habilidades e competências passam a ser um dos pilares para um projeto bem sucedido.

Ter um controle adequado das tarefas e demandas de cada membro da equipe propicia uma visão mais ampla acerca do projeto, sendo também uma ferramenta útil de gestão, considerando que desta forma eventuais desvios do planejamento possam ser identificados pela equipe de forma mais rápida, alcançando assim uma solução imediata.

Este gerenciamento permite que o projeto alcance altos níveis de produtividade. Para facilitar este processo de gestão de tarefas e tempo a equipe optou por utilizar também a ferramenta Projects própria do Github. 

Com a ferramenta Projects, as tarefas podem ser rastreadas por status, bucket, prioridade e responsável, bem como seu estado de execução conforme exposto na tela abaixo:

![gerenciamento tempo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-pmv-ads-2023-2-e4-g4-t5/assets/103156976/d54b2c04-845d-4f6b-9d89-539f4ebea6e6)


## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

Ter uma visão clara dos dados financeiros do projeto ajudará a equipe economizar tempo, reduzir erros e garantir maior qualidade na entrega de cada etapa.

|Gasto estimado | Valor                                       |
|-----------------|-------------------------------------------------------|
| Recursos Humanos | R$ 20.000,00 |
| Design (R$ 25,00/Hora)) | R$ 5.000,00 |
| Desenvolvedor (R$ 70,00/Hora) | R$ 140.000,00 |
| Administrador (R$ 25,00/Hora) | R$ 3.000,00 |
| Hardware | R$ 0.000,00 |
| 2 Iphones11| R$ 6.400,00 |
| 2 SamsungS22 | R$ 10.800,00 |
| 1 IPAD PRO | R$ 9.400,00 |
| 1 Samsung Galax TAB 8 | R$ 4.800,00 |
| 6 notebooks | R$ 36.000,00 |
| Especialização Profissional | R$ 1.400,00 |
| Cursos e treinamentos | R$ 100.000,00 |
| Licenças de Softwares | R$ 50.000,00 |
| TOTAL | R$ 386.800,00 |
