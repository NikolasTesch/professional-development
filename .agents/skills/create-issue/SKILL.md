---
name: create-issue
description: >-
  Orienta e executa a criação de novas issues de prática de estudo no repositório,
  garantindo conformidade com o fluxo padronizado (issue -> branch -> prática -> evidência -> auto-revisão -> fechamento),
  o template .github/ISSUE_TEMPLATE/practice.md e as restrições de privacidade.
  Use esta skill sempre que o usuário pedir para criar, estruturar ou abrir uma nova issue de prática/estudo.
---

# Skill: Criar Issue de Prática de Estudo

Esta skill define o procedimento padronizado para transformar tópicos do plano de desenvolvimento em **issues de prática verificáveis** no GitHub.

---

## 1. Regras e Restrições de Segurança

> [!CAUTION]
> **Privacidade e Segurança em Primeiro Lugar**
> NUNCA inclua nas issues: credenciais, dados pessoais, documentos internos, casos reais de Cartório ou qualquer dado proprietário/sensível. Tudo deve ser tratado com dados fictícios ou genéricos.

---

## 2. Estrutura da Issue (`practice.md`)

Toda issue de prática deve seguir a estrutura base do template [practice.md](file:///.github/ISSUE_TEMPLATE/practice.md):

* **Título**: Deve iniciar obrigatoriamente com o prefixo `practice: <descrição curta do objetivo>`
* **Label**: `practice`
* **Seções OBRIGATÓRIAS**:
  * **Objetivo**: O que a prática visa alcançar ou demonstrar.
  * **Contexto**: Qual tópico do plano de estudo/semana originou a prática.
  * **Escopo**: O que será desenvolvido e alterado.
  * **Critérios de aceitação**: Checklist de entregas verificáveis (`- [ ]`).
  * **Evidência esperada**: O que comprovará a conclusão (logs de teste, projeto funcional em `projects/`, etc.).
  * **Fora de escopo**: O que NÃO será abordado nesta issue.
  * **Checklist de validação**:
    * `- [ ] Validação executada`
    * `- [ ] Evidência registrada`
    * `- [ ] Bloqueios documentados, se existirem`

---

## 3. Passo a Passo de Execução

### Passo 1: Coletar Requisitos da Prática
Alinhe com o usuário (ou extraia da solicitação):
1. **Tema/Tópico da Semana** (ex: Harness Engineering, Async JS, DDD, etc.).
2. **Entrega Concreta** (ex: criar um repositório mock, script de teste, spec).
3. **Plano de Validação** (como comprovar que funciona).

### Passo 2: Formatar o Corpo da Issue
Monte o corpo em Markdown conforme o exemplo abaixo:

```markdown
## Objetivo
[Descreva o objetivo claro e acionável]

## Contexto
[Tópico do plano de 90 dias / objetivo da semana]

## Escopo
- [ ] Item de escopo 1
- [ ] Item de escopo 2

## Critérios de aceitação
- [ ] [Critério verificável 1]
- [ ] [Critério verificável 2]

## Evidência esperada
[Ex: Testes executados com sucesso em `projects/nome-projeto` e registrado em `docs/learning-log/`]

## Fora de escopo
- [O que não será feito]

## Checklist

- [ ] Validação executada
- [ ] Evidência registrada
- [ ] Bloqueios documentados, se existirem
```

### Passo 3: Criar a Issue no GitHub
Com o utilitário `gh CLI`, execute o comando de criação:

```powershell
gh issue create --title "practice: <titulo-da-pratica>" --label "practice" --body "<corpo-em-markdown>"
```

*(Caso não seja possível executar a CLI por algum motivo, forneça a instrução e o texto formatado para criação manual no GitHub).*

### Passo 4: Próximos Passos no Fluxo
Após a criação da issue:
1. Anote o número da issue gerada (ex: `#12`).
2. Sugira a criação da branch de trabalho vinculada: `git checkout -b feature/issue-12-<nome-curto>`.
3. Lembre o fluxo semanal: `issue → branch → prática → evidência → auto-revisão → fechamento`.
