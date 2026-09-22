Plano de Estudos Engenharia de Software – Ciclo 01
Duração: 90 dias (13 semanas) | Estrutura flexível, sem horários obrigatórios

Objetivo do ciclo
Construir capacidade real de projetar, desenvolver, testar e entregar software. O ciclo parte da sua base em JavaScript e TypeScript, evolui para backend, banco de dados, design e arquitetura e termina em uma aplicação Full Stack apresentável no portfólio.

Orientação de uso
Use um único projeto contínuo sempre que possível, para que cada semana melhore uma aplicação real em vez de gerar exercícios desconectados. Antes de consultar uma solução, tente implementar uma versão própria. Registre erros, decisões e justificativas. Avance pela evidência de domínio: se uma base ainda estiver fraca, use a revisão semanal para reforçá-la antes de acumular novos conceitos.

Semana 1 — JavaScript na prática
Objetivo da semana
Sair do entendimento passivo e escrever funções e pequenos programas sem copiar uma solução completa.

Conteúdos detalhados
• Declaração de variáveis com const e let, tipos primitivos, coerção e comparação estrita.
• Condicionais, operadores lógicos, truthy/falsy e estratégias para reduzir aninhamento.
• Laços for, for...of, while e métodos de array como map, filter, find e reduce.
• Funções, parâmetros, retorno, escopo, closures em nível introdutório e funções puras.
• Objetos, arrays, destructuring, spread/rest e acesso seguro a propriedades.
• Módulos ES, importação, exportação e separação de responsabilidades.

Prática guiada

1. Resolva de oito a dez problemas pequenos envolvendo transformação, busca e validação de dados.
2. Implemente primeiro com estruturas básicas e depois refatore dois problemas usando métodos de array.
3. Crie um módulo de regras, por exemplo cálculo de orçamento, pedidos ou metas de estudo.
4. Separe entrada, processamento e saída em funções distintas.
5. Escreva exemplos manuais que demonstrem casos normais, vazios e inválidos.

Entregável da semana
Repositório com exercícios autorais e um pequeno módulo organizado, acompanhado de README com decisões e dificuldades.

Critérios de domínio
• Implementa funções simples sem depender de copiar o esqueleto.
• Explica entrada, saída, estado e efeitos colaterais do próprio código.
• Escolhe entre laço e método de array com justificativa básica.

Exercício complementar opcional
Refazer dois problemas no dia seguinte sem consultar a solução anterior.

Semana 2 — JavaScript assíncrono e consumo de APIs
Objetivo da semana
Compreender o fluxo assíncrono e tratar corretamente sucesso, espera e falha.

Conteúdos detalhados
• Modelo de execução do JavaScript, call stack, Web/Node APIs, filas e event loop.
• Callbacks e o problema de encadeamento excessivo.
• Promises, estados pending/fulfilled/rejected e encadeamento com then/catch/finally.
• async/await, try/catch e propagação de erros.
• Fetch, JSON, status HTTP, timeout, cancelamento e validação básica da resposta.
• Execução sequencial versus paralela com Promise.all e seus riscos.

Prática guiada

1. Escolha uma API pública simples e leia sua documentação.
2. Crie uma função responsável apenas pela requisição e outra pelo tratamento dos dados.
3. Implemente estados de carregamento, sucesso, resposta vazia e erro.
4. Compare duas requisições sequenciais com uma execução paralela quando forem independentes.
5. Simule URL inválida, status de erro e formato inesperado e observe o comportamento.

Entregável da semana
Aplicação pequena que consome uma API, transforma resultados e trata diferentes estados de execução.

Critérios de domínio
• Explica por que o código não bloqueia enquanto aguarda a resposta.
• Não trata qualquer resposta HTTP como sucesso automaticamente.
• Erros são capturados no nível adequado e apresentados de forma compreensível.

Exercício complementar opcional
Implementar retry limitado para erro transitório e explicar quando ele não deve ser usado.

Semana 3 — TypeScript aplicado
Objetivo da semana
Usar o sistema de tipos para tornar contratos explícitos e reduzir erros antes da execução.

Conteúdos detalhados
• Inferência, anotações, tipos primitivos, arrays, tuples e objetos.
• Interfaces, type aliases, composição, extensão e escolha entre eles.
• Union, intersection, literal types, optional e readonly.
• Narrowing com typeof, in, instanceof e type guards.
• Generics e utility types como Partial, Pick, Omit e Record.
• unknown versus any, configuração básica do tsconfig e strict mode.

Prática guiada

1. Converta a aplicação assíncrona da semana anterior para TypeScript.
2. Modele os dados externos com tipos e valide em runtime os limites de confiança.
3. Substitua usos de any por tipos específicos ou unknown com narrowing.
4. Crie uma função genérica pequena para resultado, paginação ou coleção.
5. Execute typecheck e documente três erros que o compilador ajudou a evitar.

Entregável da semana
Aplicação convertida para TypeScript em modo estrito, com modelos, validação de entrada e build funcionando.

Critérios de domínio
• Consegue modelar um objeto sem transformar todos os campos em opcionais.
• Diferencia segurança de compile time de validação em runtime.
• Usa generics para preservar relação entre tipos, não apenas por formalidade.

Exercício complementar opcional
Criar exemplos intencionalmente inválidos e verificar quais erros o TypeScript detecta ou não.

Semana 4 — Web, HTTP e APIs REST
Objetivo da semana
Entender a comunicação entre cliente e servidor e projetar contratos HTTP coerentes.

Conteúdos detalhados
• Modelo cliente-servidor, DNS, conexão e ciclo request/response em nível prático.
• URL, path, query string, headers, body, cookies e JSON.
• Métodos GET, POST, PUT, PATCH e DELETE e suas intenções.
• Status codes por categoria e escolha de respostas consistentes.
• Princípios REST, recursos, identificação, idempotência e statelessness.
• CORS, content type, autenticação versus autorização e versionamento introdutório.

Prática guiada

1. Use as ferramentas do navegador, curl ou Postman para inspecionar requisições reais.
2. Desenhe o contrato de uma API para um domínio pequeno: recursos, rotas, corpos e respostas.
3. Defina casos de sucesso, validação, não encontrado, conflito e erro interno.
4. Implemente um servidor mínimo com duas rotas e dados em memória.
5. Teste cada contrato manualmente e compare resposta real com a documentação.

Entregável da semana
Contrato HTTP documentado e servidor mínimo com coleção de requisições de teste.

Critérios de domínio
• Escolhe método e status com base no comportamento, não por hábito.
• Diferencia path parameter, query e body.
• Consegue narrar o caminho completo de uma requisição.

Exercício complementar opcional
Analisar uma API conhecida e apontar três decisões de contrato.

Semana 5 — Node.js, Express e organização da API
Objetivo da semana
Construir uma API backend pequena, porém organizada e preparada para crescer.

Conteúdos detalhados
• Runtime Node.js, npm, package.json, scripts e variáveis de ambiente.
• Express, ciclo de middleware, rotas e composição da aplicação.
• Separação entre route, controller, service e acesso a dados.
• Validação de entrada e transformação de parâmetros.
• Tratamento centralizado de erros e formato consistente de resposta.
• Configuração, logging inicial, CORS e headers de segurança básicos.

Prática guiada

1. Escolha um domínio simples e defina os casos de uso principais.
2. Crie estrutura com routes, controllers, services e middleware de erro.
3. Implemente CRUD mínimo com dados em memória e IDs estáveis.
4. Adicione validações para parâmetros, corpo e regras básicas.
5. Teste sucesso e falhas e revise se controllers permanecem finos.

Entregável da semana
API Node.js/Express em TypeScript com CRUD, validação, erros consistentes e documentação de execução.

Critérios de domínio
• Cada camada possui responsabilidade compreensível.
• Erro de entrada não vira erro interno genérico.
• Novo caso de uso pode ser adicionado sem concentrar tudo em um arquivo.

Exercício complementar opcional
Implementar busca, paginação simples ou filtro sem duplicar lógica.

Semana 6 — SQL e PostgreSQL
Objetivo da semana
Substituir armazenamento em memória por persistência relacional confiável.

Conteúdos detalhados
• Banco relacional, tabela, coluna, linha, esquema e tipos.
• Chaves primárias, estrangeiras, constraints e integridade referencial.
• SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY e LIMIT.
• JOIN, agregação, GROUP BY e HAVING em problemas simples.
• Transações e propriedades ACID em nível prático.
• Índices, planos de consulta introdutórios e custo de indexar.

Prática guiada

1. Instale ou use uma instância segura de PostgreSQL para desenvolvimento.
2. Modele as tabelas iniciais do projeto com chaves e constraints.
3. Crie o esquema por migrations ou scripts versionados.
4. Implemente consultas CRUD e pelo menos uma consulta com JOIN.
5. Integre a API e teste persistência, reinicialização e violação de integridade.

Entregável da semana
Banco PostgreSQL integrado à API, com esquema versionado, consultas e exemplos de dados fictícios.

Critérios de domínio
• Explica por que cada chave e constraint existe.
• Usa parâmetros nas consultas e não concatena entrada do usuário.
• Consegue identificar quando uma transação é necessária.

Exercício complementar opcional
Comparar o plano de uma consulta antes e depois de um índice justificável.

Semana 7 — Modelagem de dados e migrations
Objetivo da semana
Traduzir regras do domínio em um modelo consistente antes de ampliar a aplicação.

Conteúdos detalhados
• Entidades, atributos, identidade e relacionamentos.
• Cardinalidade um-para-um, um-para-muitos e muitos-para-muitos.
• Normalização até formas úteis e trade-offs de desnormalização.
• Nulos, defaults, unicidade, restrições e estados válidos.
• Migrations incrementais, rollback e evolução sem perda de dados.
• ORM/query builder: benefícios, limites e risco de esconder SQL.

Prática guiada

1. Escreva as regras do domínio que afetam os dados.
2. Crie um diagrama entidade-relacionamento e justifique cardinalidades.
3. Revise dependências e remova duplicidades problemáticas.
4. Crie migrations incrementais em vez de editar apenas o estado final.
5. Implemente uma alteração de esquema com preservação de dados fictícios.

Entregável da semana
Modelo relacional revisado, diagrama, migrations e documento curto de decisões.

Critérios de domínio
• O modelo impede estados claramente inválidos quando possível.
• Relacionamentos refletem regras reais e não apenas conveniência de tela.
• Consegue evoluir o esquema de forma reproduzível.

Exercício complementar opcional
Modelar uma alternativa e comparar seus trade-offs de consulta e manutenção.

Semana 8 — Testes automatizados
Objetivo da semana
Construir uma suíte que proteja comportamentos importantes e permita refatorar com confiança.

Conteúdos detalhados
• Teste unitário, integração, end-to-end e pirâmide de testes.
• Arrange, Act, Assert e nomes que descrevem comportamento.
• Test doubles: stub, fake, spy e mock e quando cada um ajuda.
• Determinismo, isolamento, fixtures e banco de teste.
• Testes de rotas, services, validações e erros.
• Coverage como indicador, não objetivo isolado.

Prática guiada

1. Liste os comportamentos críticos e casos de borda da API.
2. Escreva testes unitários para regras puras e services.
3. Adicione testes de integração para rotas e banco em ambiente isolado.
4. Introduza uma regressão controlada para confirmar que a suíte falha.
5. Revise testes frágeis, duplicados ou acoplados à implementação.

Entregável da semana
Suíte automatizada executável por comando único, cobrindo fluxos principais e erros relevantes.

Critérios de domínio
• Testes falham pelo motivo correto quando o comportamento muda.
• Mocks não substituem integração que precisa ser verificada.
• Consegue refatorar uma parte coberta e confiar no resultado.

Exercício complementar opcional
Criar uma pequena matriz requisito → teste e identificar lacunas.

Semana 9 — Design de software e SOLID
Objetivo da semana
Reduzir acoplamento e melhorar a capacidade de mudança usando princípios, não receitas.

Conteúdos detalhados
• Coesão, acoplamento, encapsulamento e dependências.
• Responsabilidade única e identificação de motivos diferentes para mudança.
• Open/Closed e uso responsável de extensões.
• Substituição, segregação de interfaces e inversão de dependência.
• Dependency Injection e composição explícita.
• Patterns úteis no contexto: Repository, Service e Factory, além do risco de abstração prematura.

Prática guiada

1. Escolha uma parte da API difícil de testar ou modificar.
2. Liste responsabilidades e dependências escondidas.
3. Crie um teste que preserve o comportamento antes da refatoração.
4. Separe regras de negócio de detalhes externos e injete dependências necessárias.
5. Compare antes e depois em legibilidade, número de razões para mudar e testabilidade.

Entregável da semana
Refatoração documentada com testes, diagrama simples de dependências e justificativa das abstrações.

Critérios de domínio
• Consegue explicar o problema concreto resolvido por cada mudança.
• Não cria interface ou pattern sem necessidade observável.
• Dependências apontam para contratos estáveis nas partes relevantes.

Exercício complementar opcional
Revisar uma abstração criada e tentar removê-la; mantê-la apenas se o custo de mudança aumentar sem ela.

Semana 10 — Arquitetura em camadas, Clean e Hexagonal
Objetivo da semana
Compreender limites arquiteturais e escolher uma estrutura proporcional ao projeto.

Conteúdos detalhados
• Arquitetura em camadas e fluxo de dependências.
• Casos de uso, domínio e infraestrutura.
• Clean Architecture e regra de dependência.
• Hexagonal Architecture, ports e adapters.
• Controllers, repositories e gateways como adaptadores.
• Trade-offs: simplicidade, testabilidade, acoplamento e custo cognitivo.

Prática guiada

1. Desenhe a arquitetura atual e indique onde regras dependem de Express ou banco.
2. Defina um limite de aplicação e um ou dois ports realmente necessários.
3. Mova um caso de uso para fora do framework.
4. Crie adapters para HTTP e persistência sem reescrever todo o projeto.
5. Execute testes e documente ganhos e complexidades adicionadas.

Entregável da semana
Aplicação parcialmente reorganizada, diagrama arquitetural e registro da decisão adotada.

Critérios de domínio
• Regra central pode ser testada sem iniciar servidor ou banco real.
• Direção das dependências está clara.
• A arquitetura permanece compreensível para o tamanho do projeto.

Exercício complementar opcional
Implementar um adapter alternativo simples, como repositório em memória para testes.

Semana 11 — Domain-Driven Design introdutório
Objetivo da semana
Modelar regras e linguagem do domínio sem transformar DDD em excesso de camadas.

Conteúdos detalhados
• Domínio, subdomínio e contexto delimitado.
• Linguagem ubíqua e alinhamento entre termos, código e documentação.
• Entity, Value Object e identidade.
• Aggregate, invariantes e limite transacional.
• Repository e Domain Service quando uma regra não pertence naturalmente a uma entidade.
• Eventos de domínio em nível introdutório e distinção entre modelo rico e CRUD.

Prática guiada

1. Converse sobre o domínio usando exemplos fictícios e produza um glossário.
2. Identifique regras invariantes e estados inválidos.
3. Modele uma Entity e um Value Object com validações próprias.
4. Defina um aggregate pequeno e quais mudanças devem ocorrer juntas.
5. Implemente um caso de uso e confira se nomes do código coincidem com a linguagem.

Entregável da semana
Modelo de domínio pequeno com glossário, invariantes, Entity, Value Object e testes.

Critérios de domínio
• Escolhe Entity ou Value Object com base em identidade e significado.
• Invariantes ficam próximas do modelo que protegem.
• Bounded Context não é usado apenas como sinônimo de pasta.

Exercício complementar opcional
Comparar o modelo de domínio com o modelo de banco e explicar por que não precisam ser idênticos.

Semana 12 — Produção, segurança e observabilidade
Objetivo da semana
Preparar a aplicação para execução reproduzível e operação básica em ambiente real.

Conteúdos detalhados
• Dockerfile, imagem, container, volumes, rede e compose.
• Variáveis de ambiente, configuração por ambiente e gerenciamento de segredos.
• Pipeline CI com instalação, lint, typecheck, testes e build.
• Logs estruturados, níveis, correlação e informações que não devem ser registradas.
• Health checks, métricas e rastreamento introdutório.
• Segurança básica: validação, autenticação, autorização, headers, rate limit e dependências.
• Deploy, rollback, backup e diferença entre disponibilidade e correção.

Prática guiada

1. Containerize API e banco para ambiente de desenvolvimento reproduzível.
2. Remova segredos do código e documente variáveis necessárias.
3. Crie pipeline CI que bloqueie integração quando um gate falhar.
4. Adicione logs úteis e endpoints de saúde sem expor dados sensíveis.
5. Faça deploy, execute smoke tests e documente processo de rollback.

Entregável da semana
Aplicação implantada com container, CI, configuração segura, logs e checklist de operação.

Critérios de domínio
• Outra pessoa consegue executar o sistema seguindo a documentação.
• Pipeline detecta falha antes do deploy.
• Logs permitem investigar problemas sem revelar credenciais ou dados sensíveis.

Exercício complementar opcional
Simular indisponibilidade do banco e observar resposta, logs e recuperação.

Semana 13 — Projeto Full Stack de portfólio
Objetivo da semana
Consolidar o ciclo em uma aplicação demonstrável e explicar suas decisões de engenharia.

Conteúdos detalhados
• Integração entre frontend, API, autenticação e banco.
• Fluxos principais do usuário, validação e tratamento de estados.
• Arquitetura, testes, segurança e operação do projeto.
• Git, commits, issues ou tarefas e histórico de evolução.
• README orientado a recrutadores e desenvolvedores.
• Demonstração, limitações, próximos passos e decisões que você mudaria.

Prática guiada

1. Defina o escopo final e corte funcionalidades que não fortalecem o objetivo do projeto.
2. Conclua de dois a quatro fluxos principais de ponta a ponta.
3. Revise arquitetura, qualidade, testes, acessibilidade e segurança básica.
4. Prepare ambiente de demonstração com dados fictícios e roteiro curto.
5. Escreva README com problema, solução, tecnologias, arquitetura, instalação, testes e decisões.
6. Faça uma retrospectiva comparando o estado inicial e final do seu desenvolvimento.

Entregável da semana
Aplicação Full Stack publicada, repositório organizado, documentação técnica e roteiro de demonstração.

Critérios de domínio
• Fluxos principais funcionam em ambiente publicado e possuem tratamento de erro.
• Testes e documentação permitem compreender e manter o projeto.
• Você consegue explicar decisões, trade-offs e limitações sem depender de respostas decoradas.

Exercício complementar opcional
Gravar uma apresentação técnica curta e pedir feedback sobre clareza e profundidade.

Critério de conclusão do ciclo
O ciclo está concluído quando a aplicação demonstra domínio prático de TypeScript, HTTP, API, banco de dados, testes, design, arquitetura e entrega. O README e a apresentação devem explicar não apenas o que funciona, mas também como você tomou decisões, quais trade-offs aceitou e o que ainda evoluiria.
