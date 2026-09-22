---
name: create-study-proposal
description: >-
  Analisa materiais e objetivos semanais de estudo (ex: planos em docs/plans/) e gera uma proposta de estudo estruturada,
  incluindo questões reflexivas, leituras/artigos, vídeos/cursos recomendados, propostas de projetos práticos e roteiro de estudo.
  Use esta skill sempre que o usuário fornecer um material/semana de estudo e pedir ajuda para estruturar o plano, selecionar referências ou criar exercícios.
---

# Skill: Proposta de Estudo Semanal (`create-study-proposal`)

Esta skill orienta a transformação de materiais e objetivos de estudo de uma determinada semana (ex: semanas de um plano de 90 dias em `docs/plans/`) em uma **proposta completa de estudo prático e teórico**.

---

## 1. Regras e Restrições de Segurança

> [!CAUTION]
> **Privacidade e Segurança em Primeiro Lugar**
> NUNCA inclua em exemplos, questões ou materiais: dados sensíveis, credenciais, informações internas de Cartório ou documentos restritos. Mantenha todas as abordagens técnicas com exemplos fictícios e genéricos.

---

## 2. Estrutura da Proposta de Estudo

Ao receber o material ou indicação da semana (ex: *"Semana 1 de docs/plans/90_dias_Engenharia_de_software.md"*), analise o conteúdo e gere uma proposta organizada nas seguintes seções:

```markdown
# Proposta de Estudo — [Nome da Semana / Tópico Principal]

> **Origem:** [Link/Caminho para o material, ex: docs/plans/90_dias_Engenharia_de_software.md#semana-1]

## 1. Objetivos & Conceitos-Chave
- [ ] **[Conceito 1]**: Breve explicação da importância do conceito.
- [ ] **[Conceito 2]**: O que precisa ser dominado até o final da semana.

## 2. Questões de Estudo & Reflexão (Active Recall)
### Diagnóstico e Propósito (Nível 1)
1. *Qual dor ou problema fundamental o [Conceito X] resolve em sistemas reais?*
2. *Como o ecossistema funcionava antes dessa abordagem existir?*

### Mecanismos e Funcionamento (Nível 2)
1. *Qual é a sequência de passos / fluxo lógico quando [Ação Y] acontece?*
2. *Quais componentes interagem nessa arquitetura e quais suas responsabilidades?*

### Trade-offs e Edge Cases (Nível 3)
1. *Quais as desvantagens, custos ou limitações ao adotar essa técnica?*
2. *Em qual cenário essa abordagem seria uma má escolha (overengineering)?*

## 3. Materiais de Apoio & Leituras Recomendadas
- 📚 **Documentação Oficial:** [Nome do recurso - Link / Descrição do que ler]
- 📰 **Artigos & Deep-Dives:** [Nome do artigo / autor - Foco do texto]
- 📖 **Capítulos de Livros / Referências:** [Livro / Capítulo relevante]

## 4. Vídeos & Cursos Sugeridos
- 🎥 **Palestras / Tech Talks:** [Título do vídeo / Tema abordado - Onde encontrar]
- 🎬 **Tutoriais Práticos / Live Coding:** [Foco do vídeo hands-on]

## 5. Propostas de Prática Hands-On (`projects/`)
Para consolidar o aprendizado, escolha 1 ou 2 das práticas abaixo para implementar:

### Opção A: [Nome da Prática 1 - Ex: Protótipo / Proof of Concept]
- **Objetivo:** Criar um projeto simples em `projects/[nome-projeto]` aplicando [Tecnologia/Padrão].
- **Entregável:** Código funcional com testes unitários e README.
- **Comando para issue:** Sugerir a abertura de issue com `create-issue` (ex: `practice: implementar [recurso]`).

### Opção B: [Nome da Prática 2 - Ex: Refatoração ou Spec Técnico]
- **Objetivo:** Escrever uma especificação em `docs/specs/` ou refatoração guiada por testes.
- **Entregável:** Documento de arquitetura ou suíte de validação.

## 6. Roteiro Semanal Sugerido
- **Dia 1-2 (Absorção e Teoria):** Leitura de documentações, vídeos e resposta às Questões Nível 1 e 2.
- **Dia 3-4 (Prática & Código):** Abertura de issue via `create-issue`, criação do projeto em `projects/` e testes.
- **Dia 5 (Revisão & Registro):** Sessão socrática com `study-tutor` e publicação do log em `docs/learning-log/` via `create-learning-log`.
```

---

## 3. Passo a Passo de Execução

### Passo 1: Análise do Material de Entrada
- Leia o material indicado pelo usuário (ex: arquivo em `docs/plans/` ou texto colado).
- Identifique o objetivo central da semana, pré-requisitos técnicos e resultados esperados.

### Passo 2: Curadoria e Geração dos Conteúdos
- Elabore de 4 a 6 **questões investigativas** divididas entre Propósito, Mecanismos e Trade-offs.
- Mapeie ou sugira **links/fontes de referência de alta qualidade** (documentação oficial, artigos clássicos, palestras no YouTube/Vimeo/Platzi/Coursera/etc.).
- Desenhe 1 ou 2 **projetos práticos incrementais** compatíveis com a estrutura do repositório (`projects/`).

### Passo 3: Apresentação e Integração
- Apresente a proposta formatada em Markdown ao usuário.
- Convide o usuário a selecionar a opção prática desejada.
- Sugira o encadeamento das ferramentas do repositório:
  - Usar a skill `create-issue` para abrir a issue de prática no GitHub.
  - Usar a skill `study-tutor` para discutir e tirar dúvidas socráticas sobre as questões formuladas.
  - Usar a skill `create-learning-log` ao final da semana para consolidar o aprendizado.
