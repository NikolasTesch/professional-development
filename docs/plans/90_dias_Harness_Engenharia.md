Plano de Estudos Harness Engineering – Ciclo 01
Duração: 90 dias (13 semanas) | Estrutura flexível, sem horários obrigatórios

Objetivo do ciclo
Aprender a projetar um ambiente de desenvolvimento no qual agentes de IA recebam contexto adequado, executem tarefas bem delimitadas, usem ferramentas com segurança e produzam software verificável. Ao final, você terá um Development Harness v1 aplicado a um projeto real de portfólio.

Orientação de uso
Use um único projeto pequeno como laboratório durante todo o ciclo. Registre entradas, saídas, decisões e falhas de cada experimento. Não considere um fluxo confiável apenas porque funcionou uma vez: teste casos normais, incompletos e ambíguos. Comece simples e só adicione agentes ou automações quando houver um problema concreto que justifique a complexidade.

Semana 1 — Fundamentos de agentes e Harness Engineering
Objetivo da semana
Entender por que um coding agent precisa de um ambiente estruturado e mapear como você trabalha atualmente com IA.

Conteúdos detalhados
• Diferença entre modelo de linguagem, assistente, agente, coding agent, ferramenta, skill e orquestrador.
• Agent loop: receber objetivo, observar contexto, planejar, agir com ferramentas, avaliar resultado e repetir.
• Autonomia versus controle humano e os riscos de ampliar autonomia sem validação.
• Harness como conjunto de contexto, instruções, ferramentas, memória, validações e limites.
• Falhas comuns: contexto insuficiente, tarefa vaga, ferramenta errada, conclusão prematura e alteração fora do escopo.
• Human-in-the-loop: pontos em que o agente deve pedir decisão ou autorização.

Prática guiada

1. Escolha uma feature pequena que você já tenha desenvolvido com auxílio de IA.
2. Reconstrua o processo real desde o pedido inicial até a entrega, incluindo perguntas, comandos e correções.
3. Classifique cada etapa como contexto, planejamento, execução, ferramenta, validação ou decisão humana.
4. Marque onde houve retrabalho, suposição, perda de contexto ou falsa conclusão.
5. Desenhe um fluxo atual e liste três problemas que um harness deveria reduzir.

Entregável da semana
Mapa do processo atual de desenvolvimento com IA, acompanhado de diagnóstico das três fragilidades prioritárias.

Critérios de domínio
• Explica a diferença entre agente, ferramenta, skill e harness.
• Identifica etapas de controle humano sem tratar autonomia como objetivo absoluto.
• Relaciona cada fragilidade observada a um componente possível do harness.

Exercício complementar opcional
Executar uma tarefa simples sem harness e registrar exatamente onde foi necessário intervir.

Semana 2 — Context Engineering
Objetivo da semana
Aprender a selecionar, organizar e fornecer apenas o contexto necessário para uma tarefa.

Conteúdos detalhados
• Context window e diferença entre contexto disponível, contexto relevante e contexto utilizado.
• Instruções persistentes, contexto específico da tarefa e dados produzidos durante a execução.
• Context rot, contradições, excesso de arquivos e informações desatualizadas.
• Progressive disclosure: apresentar visão geral primeiro e detalhes sob demanda.
• Recuperação de contexto por arquivos, busca, documentação, histórico e ferramentas.
• Critérios para excluir dados sensíveis, redundantes ou sem relação com a tarefa.

Prática guiada

1. Escolha uma mesma tarefa curta para dois experimentos.
2. Na primeira execução, forneça apenas um pedido genérico e registre resultado, dúvidas e erros.
3. Na segunda, prepare objetivo, arquivos relevantes, restrições, convenções e critérios de aceite.
4. Compare tempo, quantidade de correções, alterações indevidas e aderência ao objetivo.
5. Crie um checklist de contexto mínimo que poderá ser reutilizado nas próximas semanas.

Entregável da semana
Relatório comparativo das duas execuções e checklist de contexto mínimo.

Critérios de domínio
• Consegue justificar por que cada informação foi incluída ou excluída.
• Detecta informação conflitante ou desatualizada antes da execução.
• Melhora o resultado sem despejar o repositório inteiro no contexto.

Exercício complementar opcional
Reduzir o pacote de contexto mantendo a qualidade e registrar qual foi o menor conjunto suficiente.

Semana 3 — Instruções do repositório
Objetivo da semana
Criar instruções persistentes que permitam ao agente compreender o projeto e trabalhar dentro de seus limites.

Conteúdos detalhados
• Finalidade e escopo de arquivos como AGENTS.md e instruções por diretório.
• Visão do projeto, arquitetura, estrutura de pastas e responsabilidades.
• Comandos de instalação, desenvolvimento, testes, lint, typecheck e build.
• Convenções de código, nomenclatura, tratamento de erros e padrões de commit.
• Restrições, arquivos que não devem ser alterados e ações que exigem aprovação.
• Definition of Done e critérios para o agente declarar conclusão.

Prática guiada

1. Audite um projeto real e reúna os comandos que de fato funcionam.
2. Escreva uma primeira versão curta do AGENTS.md com visão geral, estrutura, comandos e regras.
3. Adicione limites claros, incluindo ações destrutivas e áreas fora do escopo.
4. Peça a um agente para localizar uma feature, executar validações e explicar a arquitetura usando apenas o repositório.
5. Corrija instruções ambíguas, ausentes ou redundantes observadas no teste.

Entregável da semana
AGENTS.md testado, com comandos verificáveis, convenções, limites e Definition of Done.

Critérios de domínio
• Um agente novo consegue iniciar o projeto sem adivinhar comandos.
• As instruções distinguem regra global de orientação específica.
• Definition of Done inclui evidência verificável e não apenas frases subjetivas.

Exercício complementar opcional
Criar uma instrução localizada para uma pasta que possua regras diferentes do restante do projeto.

Semana 4 — Skills reutilizáveis
Objetivo da semana
Transformar procedimentos recorrentes em skills pequenas, claras e testáveis.

Conteúdos detalhados
• Quando usar instrução, skill, script, ferramenta ou documentação comum.
• Contrato de uma skill: gatilho, objetivo, entradas, etapas, ferramentas, saídas e erros.
• Escopo estreito e separação de responsabilidades.
• Progressive disclosure em arquivos principais e referências auxiliares.
• Idempotência, efeitos colaterais e limites de autorização.
• Critérios de sucesso e exemplos positivos e negativos.

Prática guiada

1. Liste tarefas recorrentes do seu fluxo e escolha duas ou três com começo e fim claros.
2. Defina o contrato de cada skill antes de escrever as instruções.
3. Implemente a menor versão capaz de produzir uma saída verificável.
4. Teste cada skill com entrada normal, incompleta e inadequada.
5. Revise gatilhos, mensagens de erro e limites a partir dos resultados.

Entregável da semana
Duas ou três skills documentadas, com contratos, exemplos e resultados de teste.

Critérios de domínio
• Cada skill resolve um problema único e não duplica uma ferramenta existente.
• Entradas inválidas produzem comportamento previsível.
• Outro agente consegue saber quando usar e quando não usar a skill.

Exercício complementar opcional
Comparar uma tarefa executada manualmente e pela skill, medindo consistência e retrabalho.

Semana 5 — Spec Driven Development
Objetivo da semana
Transformar uma ideia vaga em especificação clara o suficiente para orientar implementação e validação.

Conteúdos detalhados
• Problema, contexto, objetivo e resultado esperado.
• Requisitos funcionais e não funcionais.
• Restrições técnicas, regras do domínio e dependências.
• Critérios de aceitação observáveis e testáveis.
• Casos de borda, erros esperados, fora de escopo e perguntas abertas.
• Rastreabilidade entre requisito, tarefa, código e teste.

Prática guiada

1. Escolha uma feature pequena do projeto-laboratório.
2. Converse com a IA apenas para esclarecer problema, usuário, limites e resultado.
3. Escreva uma spec usando um template fixo.
4. Revise cada requisito perguntando como ele será demonstrado ou testado.
5. Entregue a spec a um agente sem explicações adicionais e registre as dúvidas que ainda surgirem.

Entregável da semana
Spec completa de uma feature, incluindo requisitos, critérios de aceitação, fora de escopo e questões resolvidas.

Critérios de domínio
• Dois implementadores tenderiam a produzir o mesmo comportamento essencial.
• Cada requisito possui ao menos uma forma de verificação.
• O documento não mistura desejo futuro com escopo aprovado.

Exercício complementar opcional
Trocar a spec com outra pessoa ou outra sessão de agente e coletar interpretações divergentes.

Semana 6 — Planejamento e decomposição
Objetivo da semana
Converter uma spec aprovada em tarefas pequenas, ordenadas e verificáveis antes de alterar código.

Conteúdos detalhados
• Separação entre papel de planner e implementer.
• Leitura do repositório antes de propor mudanças.
• Decomposição vertical e horizontal e seus trade-offs.
• Dependências, riscos, ordem de execução e pontos de integração.
• Tarefas atômicas com arquivos prováveis, ação, verificação e Definition of Done.
• Revisão do plano contra a spec e o estado real do projeto.

Prática guiada

1. Peça ao planner para inspecionar o projeto e resumir o fluxo afetado.
2. Gere um plano com tarefas pequenas, dependências e comandos de verificação.
3. Marque quais tarefas podem ser paralelas e quais exigem sequência.
4. Revise se cada critério de aceite aparece em alguma tarefa ou teste.
5. Faça uma revisão crítica do plano antes de permitir qualquer escrita.

Entregável da semana
Plano de implementação rastreado à spec, com dependências, riscos e verificações por tarefa.

Critérios de domínio
• Uma tarefa não depende de contexto escondido em outra.
• A ordem proposta evita integrar componentes inexistentes.
• O plano aponta arquivos com base na inspeção, não em suposição.

Exercício complementar opcional
Pedir a um segundo agente para criticar o plano e classificar achados por severidade.

Semana 7 — Execução controlada e checkpoints
Objetivo da semana
Executar o plano em incrementos pequenos, preservando estado e facilitando recuperação de falhas.

Conteúdos detalhados
• Fluxo Spec → Plano → Tarefa → Código → Verificação.
• Contexto específico por tarefa e prevenção de mudanças fora do escopo.
• Checkpoints por commit, teste ou estado funcional.
• Registro de decisões, desvios do plano e novos riscos.
• Recuperação após erro e critérios para parar em vez de insistir.
• Atualização do estado sem reescrever histórico.

Prática guiada

1. Selecione uma tarefa pequena do plano e prepare apenas o contexto necessário.
2. Peça implementação acompanhada de teste ou verificação local.
3. Revise diff, arquivos tocados e explicação antes de avançar.
4. Crie um checkpoint funcional e registre decisões ou desvios.
5. Repita até concluir a feature, interrompendo quando surgir decisão não prevista na spec.

Entregável da semana
Feature implementada por etapas, com checkpoints, registro de decisões e diff coerente com o plano.

Critérios de domínio
• Cada checkpoint representa um estado compreensível e recuperável.
• Alterações fora do escopo são detectadas antes de se acumularem.
• O agente diferencia erro corrigível de decisão que deve voltar ao usuário.

Exercício complementar opcional
Simular uma interrupção no meio da tarefa e retomar apenas pelos artefatos produzidos.

Semana 8 — Quality gates e validação automática
Objetivo da semana
Fazer com que conclusão dependa de evidência automática e dos critérios da spec.

Conteúdos detalhados
• Lint, formatação, typecheck, testes unitários, testes de integração e build.
• Ordem rápida para lenta de validações e feedback eficiente.
• Quality gate obrigatório versus verificação informativa.
• Critérios de aceitação que não cabem apenas em testes automatizados.
• Loop falha → diagnóstico → correção → nova execução.
• Prevenção de falsos positivos, testes frágeis e cobertura sem significado.

Prática guiada

1. Liste as verificações disponíveis no projeto e corrija comandos quebrados.
2. Associe cada critério de aceite à validação automática ou manual apropriada.
3. Crie um comando ou pipeline local que execute os gates na ordem definida.
4. Introduza deliberadamente uma falha simples e confirme que o fluxo bloqueia conclusão.
5. Registre a correção e faça uma execução limpa do início ao fim.

Entregável da semana
Pipeline local de quality gates e matriz Critério de aceite → evidência.

Critérios de domínio
• O agente não declara conclusão quando um gate obrigatório falha.
• Cada falha apresenta informação suficiente para diagnóstico.
• Testes verificam comportamento relevante, não apenas aumentam cobertura.

Exercício complementar opcional
Medir o tempo dos gates e separar validação rápida de validação completa.

Semana 9 — Code review assistido por agentes
Objetivo da semana
Separar implementação de revisão e produzir achados específicos, priorizados e verificáveis.

Conteúdos detalhados
• Responsabilidades diferentes de implementer e reviewer.
• Revisão contra spec, plano, arquitetura e diff.
• Categorias: correção, segurança, testes, manutenção, desempenho e documentação.
• Severidade, evidência, localização e impacto de um achado.
• Falsos positivos e necessidade de verificar sugestões antes de aplicar.
• Ciclo review → correção → nova verificação.

Prática guiada

1. Crie um prompt ou skill de review que exija leitura da spec e do diff.
2. Peça ao reviewer para listar apenas achados acionáveis com evidência.
3. Classifique os achados por severidade e confirme cada um no código.
4. Devolva ao implementer somente os achados válidos.
5. Execute novamente testes e review focado nas correções.

Entregável da semana
Relatório de code review com achados verificados, correções e resultado final dos gates.

Critérios de domínio
• Reviewer identifica violação concreta em vez de oferecer opinião genérica.
• Sugestões incorretas são rejeitadas com justificativa.
• Correções não introduzem regressões e permanecem alinhadas à spec.

Exercício complementar opcional
Comparar revisão sem contexto com revisão baseada em spec e registrar a diferença.

Semana 10 — Git, branches e worktrees
Objetivo da semana
Isolar tarefas para permitir experimentos e trabalho paralelo sem contaminar a base principal.

Conteúdos detalhados
• Branch, commit, merge, rebase e pull request no fluxo do harness.
• Worktree como diretório de trabalho ligado a uma branch separada.
• Escolha entre sequência, paralelismo e dependência.
• Commits pequenos, mensagens claras e relação com tarefas.
• Conflitos, integração e responsabilidade do orquestrador.
• Limites para não executar operações destrutivas automaticamente.

Prática guiada

1. Crie duas tarefas independentes a partir de uma mesma base estável.
2. Abra branches ou worktrees separados e associe um contexto específico a cada um.
3. Implemente e valide cada tarefa sem acessar alterações da outra.
4. Compare os diffs e integre uma tarefa por vez.
5. Registre conflitos, decisões de integração e estado final.

Entregável da semana
Duas tarefas isoladas, com histórico Git compreensível e integração validada.

Critérios de domínio
• Nenhuma tarefa altera arquivos da outra sem justificativa.
• Commits permitem entender e reverter cada unidade de trabalho.
• O fluxo sabe quando parar e pedir decisão diante de conflito.

Exercício complementar opcional
Documentar um procedimento seguro de criação, validação e encerramento de worktrees.

Semana 11 — Orquestração multiagente
Objetivo da semana
Experimentar múltiplos papéis somente onde a separação melhora foco, contexto ou verificação.

Conteúdos detalhados
• Papel do orquestrador e contratos de delegação.
• Planner, implementer, tester e reviewer como responsabilidades, não personagens.
• Contexto compartilhado versus contexto isolado.
• Dependências e sincronização entre tarefas.
• Limites de concorrência e custo de coordenação.
• Consolidação de resultados, conflitos e responsabilidade final.

Prática guiada

1. Escolha uma feature que possa ser dividida em duas tarefas independentes e uma etapa de integração.
2. Defina para cada agente objetivo, entradas, saídas, ferramentas e critérios de conclusão.
3. Faça o planner gerar o plano e o orquestrador delegar tarefas.
4. Valide cada resultado isoladamente antes de integrar.
5. Peça ao reviewer final para verificar a feature completa contra a spec.

Entregável da semana
Execução multiagente documentada, com contratos, artefatos por papel, integração e revisão final.

Critérios de domínio
• A separação reduz contexto ou melhora controle; não existe apenas para aumentar o número de agentes.
• O orquestrador reconhece dependências e não paraleliza tarefas acopladas.
• Saídas possuem formato suficiente para serem consumidas pelo próximo papel.

Exercício complementar opcional
Executar a mesma feature com um único agente e comparar qualidade, tempo e custo de coordenação.

Semana 12 — Observabilidade, memória e decisões
Objetivo da semana
Tornar a execução investigável e preservar conhecimento útil sem acumular histórico irrelevante.

Conteúdos detalhados
• Logs de ações, ferramentas, resultados, falhas e duração.
• Estado da tarefa, checkpoints e decisões humanas.
• ADRs para decisões arquiteturais relevantes.
• Memória de projeto versus memória de execução.
• Resumo, compactação e descarte de contexto obsoleto.
• Privacidade, segredos e informações que não devem ser persistidas.

Prática guiada

1. Defina quais eventos precisam ser registrados no seu harness.
2. Crie um formato de log legível com tarefa, ação, resultado e próxima decisão.
3. Registre ao menos uma ADR surgida no projeto.
4. Simule uma falha e tente diagnosticá-la apenas pelos artefatos.
5. Revise o que vale ser mantido e elimine informação redundante ou sensível.

Entregável da semana
Trilha de execução, formato de log, ADR e relatório de diagnóstico de uma falha simulada.

Critérios de domínio
• Outra pessoa consegue explicar por que uma decisão foi tomada.
• Logs ajudam a diagnosticar sem expor segredo ou dado sensível.
• Memória persistente contém decisões úteis, não transcrição completa de toda interação.

Exercício complementar opcional
Criar um resumo de retomada capaz de iniciar uma nova sessão sem perda crítica de contexto.

Semana 13 — Development Harness v1
Objetivo da semana
Integrar os componentes estudados em um fluxo completo, simples e demonstrável.

Conteúdos detalhados
• Entrada por Feature Request e esclarecimento inicial.
• Spec, aprovação e planejamento antes da implementação.
• Delegação opcional, contexto por tarefa e isolamento Git.
• Implementação incremental e quality gates.
• Code review independente e correção de achados.
• Documentação, ADRs, README e preparação de pull request.
• Métricas básicas: retrabalho, intervenções, falhas capturadas e tempo de validação.

Prática guiada

1. Escolha uma feature real e pequena do seu projeto de portfólio.
2. Execute o fluxo completo sem pular etapas, registrando cada artefato.
3. Compare resultado e processo com o mapa produzido na Semana 1.
4. Remova componentes que não trouxeram valor e simplifique os contratos.
5. Documente instalação, uso, limitações e próximos experimentos do harness.

Entregável da semana
Development Harness v1 aplicado a uma feature real, com spec, plano, código, testes, review, documentação e retrospectiva.

Critérios de domínio
• O fluxo produz software verificável e artefatos suficientes para retomada.
• Falhas dos gates impedem conclusão e decisões críticas retornam ao usuário.
• Você consegue explicar quais componentes resolveu manter e por quê.

Exercício complementar opcional
Gravar uma demonstração curta ou preparar um estudo de caso para o portfólio.

Critério de conclusão do ciclo
O ciclo está concluído quando o Development Harness v1 conduz uma feature do pedido ao pull request com contexto rastreável, implementação incremental, validações obrigatórias e revisão independente. O sucesso não é ter muitos agentes, mas reduzir ambiguidade, retrabalho e conclusões sem evidência.
