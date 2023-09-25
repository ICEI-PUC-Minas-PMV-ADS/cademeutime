
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 

| Ambiente | Plataforma | 
--------- | ---------- |  
| Repositório de código fonte|[GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime)|  
| Ferramenta para controle de versão| [Git](https://git-scm.com/) |  
| Documentos do projeto | [GitHub-DOCS](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/tree/main/docs) |
| Gerenciamento de Projeto | [Github-Projects](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/459) |
| Projeto de interface e wireframes | [Figma](https://www.figma.com/) |
| Editor de código | [Visual Studio Code](https://portal.azure.com/?Microsoft_Azure_Education_correlationId=482c7b3fd428421ebc975fb5a28dcb48#view/Microsoft_Azure_Education/EducationMenuBlade/~/software) |
| Banco de Dados | [MongoDB](https://www.mongodb.com/pt-br) - BancoNoSQL |
| Ferramenta para simulação mobile | A definir|

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

Essa escolha foi feita devido à arquitetura descentralizada do Git, que oferece um excelente controle de versão, registrando as mudanças no código-fonte do projeto. Isso permite que várias pessoas modifiquem os arquivos simultaneamente, sem o risco de sobrescreverem uns aos outros.

Graças a essa funcionalidade, se ocorrer algum problema com uma alteração no código-fonte, é fácil e rápido restaurar a versão anterior. Em cada repositório, incluindo o da máquina de cada colaborador, existe uma cópia completa e funcional, o que permite que as operações sejam realizadas mesmo offline.

Para controlar o versionamento do código-fonte, estabelecemos o seguinte fluxo:

![1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-grupo4-cademeutime/assets/103156976/012747bc-47d9-40a1-8e5d-f3e6b18e3c63)

- `Clone do projeto`: Cada membro da equipe criou uma cópia do projeto em sua própria máquina.

- `Criação de uma Branch`: Isso cria uma ramificação independente que permite a modificação de arquivos sem afetar a versão original.

- `Commits`: Cada alteração é acompanhada de uma descrição objetiva, explicando a funcionalidade implementada.

- `Pull`: Usado para buscar e trazer as mudanças do repositório remoto para o repositório local, combinando o conteúdo dos arquivos alterados. Em alguns casos, pode ser necessária intervenção manual para realizar essa operação.

- `Push`: Após a conclusão da funcionalidade, enviamos nossa ramificação com as alterações para o repositório remoto, permitindo que outros membros da equipe visualizem e, se necessário, façam alterações.

- `Merge`: Consiste na mesclagem das modificações das ramificações com os arquivos originais do projeto na Branch principal, tornando as alterações disponíveis para os demais colaboradores

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

## Gerenciamento de Projeto

### Divisão de Papéis

A equipe fará uso da metodologia ágil Scrum como base para definição de todo o processo de desenvolvimento. 

Portanto, a equipe está organizada da seguinte maneira: 
- `Scrum Master:` Paola Marsura Verreschi De Oliveira
- `Product Owner:` Fernanda Araujo Macieira
- `Equipe de Desenvolvimento:`Katryn Ribeiro de Jesus Oliveira,  Gabriela França Alves Miranda e Ríder Rocha Cantuária
- `Equipe de Design:` Ayrles Alves de Lima Sales

### Processo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando a equipe utiliza o recurso gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução, como pode ser observado pelo link [Github-Projects](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/459).

Já na concepção do projeto fora definido a seguinte estrutura de reuniões conforme a metodologia Scrum: A cada etapa (sprint) será realizada uma reunião de planejamento (Planning meeting), na sequência serão realizadas 3 dailys semanais (Segunda, quarta e sexta-feira no período noturno) ao final de cada sprint irá ocorrer uma reunião geral entre as equipes e o professor orientador para apresentação do andamento do projeto (quinta-feira seguinte a data de entrega da sprint), após este momento a equipe irá realizar um reunião retro, neste momento sem a presença do orientador, onde serão alinhados os pontos positivos e negativos da sprint antes de seguir para a nova sprint e recomeçar o ciclo.

- `Backlog:` esta lista contém as tarefas de todas as etapas do nosso projeto que ainda não estão em andamento. Em cada uma das tarefas é possível colocar anexos, anotações, nível de prioridade, data de início e fim, entre outras ferramentas disponibilizadas;

- `Backlog:` esta lista contém as tarefas pendentes da sprint atual.

- `Doing:` esta lista contém as tarefas que devem ser concluídas no momento atual. Utilizamos dos cards para fazer a divisão entre o grupo, atribuindo cada tarefa a um membro. No card colocamos os detalhes das tarefas, prazo final e etiquetamos de acordo com a etapa (1, 2, 3, 4 ou 5); 

- `Done:` Conclusão: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontas para serem entregues ao usuário. Não há mais edições ou revisões necessárias, elas estão agendadas e prontas para a ação. 

 
### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código: Visual Studio Code 

- Ferramentas de comunicação: WhatsApp e Teams. 

- Ferramentas de desenho de tela: [Figma](https://www.figma.com/).
  
- Ferramenta de diagramação: [Draw.io](https://app.diagrams.net/#G1qxauHFqWFjbDM2czuIulcRwPj9xm1us7).
 
