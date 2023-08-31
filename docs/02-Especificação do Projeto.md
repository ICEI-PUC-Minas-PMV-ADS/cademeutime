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
| *Alice Ferreira*  ![10-dicas-de-saude-mental-para-mulheres-1024x768](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-pmv-ads-2023-2-e4-g4-t5/assets/103230282/64061110-251d-446f-af81-6ef40958b09e) |  Idade: 27 anos  Ocupação: Personal trainer.     |  Alice vive o sonho de trabalhar com o que ama. Após conhecer o musculação aos 19 anos, decidiu seguir carreira. Com muitos alunos hoje e a rotina bastante cheia, Alice procura formas que a fizessem aliviar as pressões do dia-a-dia e viu o tênis como uma uma excelente opção.|Com o intuito de manter sua constância na prática, Alice busca amigos tanto para a partida e quanto como uma forma de incentivo.| Seus amigos não são ligados aos esporte, preferindo ambientes fechados como a academia.  |

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
|RF-002| Autenticação e Autorização:A aplicação deve permitir que os usuários façam login de forma segura e autorizada. | MÉDIA |
|RF-003| Criação de Eventos Esportivos: Os usuários devem ser capazes de criar eventos esportivos, definindo detalhes como localização, dados, horário e tipo de esporte.   | MÉDIA |
|RF-004| Visualização de Eventos: Os usuários devem poder ver uma lista de eventos esportivos disponíveis, com detalhes como localização no mapa, participantes confirmados e informações relevantes.   | MÉDIA |
|RF-005| Participação em Eventos: Os usuários devem poder se inscrever em eventos esportivos existentes e confirmar sua participação.   | MÉDIA |
|RF-006| Integração com API de Geolocalização:A aplicação deve integrar-se a uma API de geolocalização para exibir a localização dos eventos no mapa. Os eventos devem ser marcados de forma clara no mapa, permitindo que os usuários visualizem facilmente sua proximidade.   | MÉDIA |
|RF-007| Notificações: Os usuários devem receber notificações sobre eventos próximos, atualizações de eventos em que estão inscritos e outras informações relevantes.  | MÉDIA |
|RF-008| Avaliação e Comentários: Os usuários devem poder avaliar eventos após a participação e deixar comentários para compartilhar experiências. | MÉDIA |

### Requisitos não Funcionais


|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Desempenho: A aplicação deve ter tempos de resposta rápidos ao carregar eventos e atualizar informações. A integração com uma API de geolocalização não deve causar atrasos visíveis na exibição do mapa. | MÉDIA | 
|RNF-002| Segurança: As senhas dos usuários devem ser armazenadas de forma segura utilizando técnicas de hash e salting. As comunicações entre a aplicação e os servidores devem ser criptografados usando HTTPS. |  BAIXA |
|RNF-003| Escalabilidade: A aplicação deve ser capaz de lidar com um aumento no número de usuários e eventos sem liberação significativa do desempenho. |  BAIXA | 
|RNF-004| Disponibilidade:A aplicação deve ter alta disponibilidade, minimizando o tempo de inatividade não planejado. |  BAIXA |
|RNF-005| Compatibilidade com Dispositivos: A aplicação deve ser responsiva e funcionar bem em dispositivos móveis, tablets e desktops. |  BAIXA |
|RNF-006| Interface intuitiva: A interface do usuário deve ser intuitiva e fácil de usar, mesmo para novos usuários. | BAIXA |
|RNF-007| Backup e Recuperação: Deve haver um sistema de backup regular para garantir que os dados dos eventos e dos usuários sejam protegidos contra perda.  | BAIXA | 
 
## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

Na linguagem de modelagem unificada (UML), o objetivo do diagrama de caso de uso é demonstrar as diferentes maneiras que o usuário pode interagir com um sistema. O caso de uso abaixo apresenta as possibilidades de interação do usuário com o aplicativo CADÊ MEU TIME?

![CASOSDEUSO drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-pmv-ads-2023-2-e4-g4-t5/assets/103156976/a37f21d4-3288-4e5e-93cd-2e4e58f5674e)


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
