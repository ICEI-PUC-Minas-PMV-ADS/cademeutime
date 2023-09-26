# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Aqui oferecemos uma síntese das áreas que serão abordadas nesta seção do documento, destacando as técnicas e/ou instrumentos empregados para a elaboração das especificações do projeto.

## Personas

Desta forma, constatou-se que o presente projeto possui 2 principais personas:

•	Atletas amadores

•	Pessoas que buscam uma rede de contatos para determinado esporte

A seguir, passamos à análise detalhada das personas e suas respectivas histórias de usuários.

|NOME  | PERFIL  |HISTÓRIA  | MOTIVAÇÕES | FRUSTRAÇÃO | 
| ------------ | -------------- |------------ | ------------ | -------- | 
| *Murilo Gonçalves*  ![BikeRegistradasegurodebicicletabaratoecompleto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-pmv-ads-2023-2-e4-g4-t5/assets/103230282/70c3191e-fd11-43f4-9379-43593f1fbb3d)  | Idade: 35 anos Ocupação: Atleta amador |  Murilo sempre foi uma pessoa muito ativa e tem o ciclismo como paixão. Com sua intensa rotina de treinos para as competições, busca uma rede de contatos dentro nicho ao qual possa fazer parte, principalmente para o acompanhar nas longas horas de treino.| Conversar sobre o esporte ao qual dedica a maior parte do seu tempo com pessoas que realmente o entendem os seus anseios e conquistas. Murilo também sente que tem uma missão: Incentiva a nova geração às práticas esportivas. | Ele sente que, com exceção do futebol, nenhuma modalidade esportiva é incentivada no Brasil.|
| *Alice Ferreira*  ![10-dicas-de-saude-mental-para-mulheres-1024x768](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-pmv-ads-2023-2-e4-g4-t5/assets/103230282/64061110-251d-446f-af81-6ef40958b09e) |  Idade: 27 anos  Ocupação: Psicologa.     |  Alice vive o sonho de trabalhar com o que ama. Após conhecer o yoga aos 19 anos, entendeu o poder que a mente equilibrada na vida pessoas decidiu seguir carreira. Com muitos pacientes hoje e a rotina bastante cheia, Alice procura formas que a fizessem aliviar as pressões do dia-a-dia e viu o tênis como uma uma excelente opção.|Com o intuito de manter sua constância na prática, Alice busca amigos tanto para a partida e quanto como uma forma de incentivo.| Seus amigos não são ligados aos esporte, preferindo ambientes fechados como a academia.  |

## Histórias de Usuários

Visualizar eventos e grupos de pessoas interessadas próximas a mim

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`        |
|--------------------|------------------------------------|----------------------------------------|
|Atleta amador  | Encontrar um parceiro de esporte | Treinarmos na mesma intensidade  |
|Atleta amador   | Formar uma rede de contatos | Praticar um esporte pouco difundido |
|Esportista | Visualizar eventos e grupos esportivos disponíveis | Participar ativamente da comunidade |
|Esportista  | Ser notificado de eventos que confirmei presença | Gerenciar e lembrar dos meus compromissos |
|Esportista  | Ter praticidade na inscrição de eventos esportivos | Me manter ativo na comunidade e gerenciar o meu cronograma semanal|
|Esportista  | Criar eventos esportivos para a comunidade | Manter uma comunidade ativa|
|Esportista  | Ter feedback dos meus eventos criados | Melhorar a experiência dos participantes|

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Proposta de uma aplicação voltada para o encontro! Encontrar parceiros que compartilham do mesmo interesse pelo seu esporte preferido, seja ele qual for! Encontre o seu time, a sua dupla, organize o seu evento e pratique o seu esporte favorito de forma simples e dinâmica!  

### Descrição Geral da Proposta

O aplicativo tem como fundamento norteador ser um facilitador para a prática de esporte ao usuário, propiciando ao mesmo uma ferramenta dinâmica para organização de eventos esportivos, otimizando assim também o seu tempo. Optou-se por uma interface simples e intuitiva, que propicie ao usuário um acesso rápido sem exigir uma demanda alta de tempo para usufruir da aplicação.  

Como mecanismo de escolha, a aplicação irá apresentar os eventos existentes para o usuário; Eventos estes que podem ser personalizadas e ou criados conforme a rotina do mesmo. 

### Processo 1 – LOGIN 
### Processo 2 – Controle de eventos

Os processos são ilustrados abaixo de acordo com o padrão BPMN. 

![MODELAGEM DE PROCESSO DE NEGOCIO](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/assets/103156976/ab5b2464-c6fa-4959-8f2a-d16e5aaf75ed)


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
|RNF-001| Desempenho: A aplicação deve ter tempos de resposta de 5s ao carregar eventos e atualizar informações.| MÉDIA |
|RNF-002| A integração com uma API de geolocalização não deve causar atrasos visíveis na exibição do mapa.| MÉDIA |
|RNF-003| Compatibilidade com Dispositivos: A aplicação deve ser responsiva e funcionar bem em dispositivos móveis, tablets e desktops. |  BAIXA | 
 
## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o dia 10/12/2023. |
|02| Não pode contratar terceiros para a implementação do projeto.        |

## Diagrama de Casos de Uso

Na linguagem de modelagem unificada (UML), o objetivo do diagrama de caso de uso é demonstrar as diferentes maneiras que o usuário pode interagir com um sistema. O caso de uso abaixo apresenta as possibilidades de interação do usuário com o aplicativo CADÊ MEU TIME?

![diagramacasodeuso (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/assets/103156976/4bb1ce71-58ad-46d1-b914-580c798afa32)



# Matriz de Rastreabilidade

A principal finalidade de uma matriz de rastreabilidade é proporcionar uma visão clara e organizada das conexões entre diferentes partes de um projeto, permitindo que os envolvidos compreendam facilmente como as mudanças em um requisito afetam os outros elementos e vice-versa. Isso também é extremamente útil em situações de auditoria, onde é necessário demonstrar a rastreabilidade e a conformidade ao longo do processo de desenvolvimento.

Em resumo, a matriz de rastreabilidade é uma ferramenta poderosa para garantir a consistência, a integridade e a qualidade de um projeto, ao manter o rastreamento das relações entre os diferentes componentes envolvidos no processo de desenvolvimento.

|ID        |DESCRIÇÃO DO REQUISITO           |PRIORIDADE         |REQUISITOS RELACIONADOS     |
|----------|---------------------------------|-------------------|----------------------------|
|RF-001    |Cadastro de Usuário              |ALTA               |-                           |
|RF-002    |Autenticação e Autorização       |MÉDIA              |RF-001                      |
|RF-003    |Criação de Eventos Esportivos    |MÉDIA              |RF-006                      |
|RF-004    |Visualização de Eventos          |MÉDIA              |RF-006, RF-003              |
|RF-005    |Participação em Eventos          |MÉDIA              |RF-003                       
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
