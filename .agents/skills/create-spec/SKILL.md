---
name: create-spec
description: >-
  Orienta e executa a criação de especificações técnicas (specs) em docs/specs/,
  garantindo conformidade com o template templates/spec-template.md, o fluxo Specification-Driven Development (SDD) e Engineering Design Document (EDD).
  Use esta skill sempre que o usuário quiser especificar uma nova funcionalidade, arquitetura, prática complexa ou refatoração antes da implementação.
---

# Skill: Criar Especificação Técnica (Spec)

Esta skill define o procedimento padronizado para transformar requisitos e decisões de produto/domínio em **especificações técnicas verificáveis** (Specification-Driven Development).

---

## 1. Regras e Restrições de Segurança

> [!CAUTION]
> **Privacidade e Segurança em Primeiro Lugar**
> NUNCA inclua em especificações: credenciais, dados de produção, regras internas confidenciais ou dados reais de Cartório. Utilize modelos e entidades genéricos.

---

## 2. Padrão de Nomenclatura e Localização

- **Diretório alvo**: `docs/specs/`
- **Nome do arquivo**: `<slug-da-spec>-spec.md` ou `<slug-da-spec>.md` (exemplo: `study-tutor-spec.md`)

---

## 3. Estrutura da Especificação (`spec-template.md`)

Toda spec deve seguir a estrutura base de [spec-template.md](file:///templates/spec-template.md):

```markdown
# Especificação: [Nome da funcionalidade/prática]

## Problema
[Descrição detalhada da necessidade, contexto do produto/domínio e por que essa spec é necessária]

## Resultado esperado
[Comportamento final almejado e valor entregue pela solução]

## Restrições
[Limitações técnicas, arquiteturais, de segurança, de desempenho ou escopo]

## Abordagem
[Arquitetura proposta, componentes afetados, modelo de dados, fluxos de execução e principais trade-offs]

## Critérios de aceitação
- [ ] [Critério verificável 1]
- [ ] [Critério verificável 2]
- [ ] [Tratamento de casos de erro ou borda]

## Plano de validação
[Como a implementação será testada e validada — testes unitários, testes de integração, comandos de execução, etc.]
```

---

## 4. Passo a Passo de Execução

### Passo 1: Descobrir e Alinhar Requisitos (DISCOVER)
Alinhe com o usuário ou consulte a documentação do repositório:
1. **Problema e Objetivo**.
2. **Entidades e Linguagem Ubíqua do Domínio**.
3. **Restrições técnicas e arquiteturais**.
4. **Abordagem proposta e trade-offs**.

### Passo 2: Formatar e Gravar a Spec
Crie o arquivo em `docs/specs/<nome-da-spec>.md` preenchendo detalhadamente todas as seções.

### Passo 3: Revisar a Spec (PLAN)
1. Confirme se os critérios de aceitação contêm checklists acionáveis e verificáveis (`- [ ]`).
2. Garanta que o plano de validação descreva exatamente como comprovar o funcionamento.

### Passo 4: Conectar ao Workflow
Após criar a spec:
1. Exiba o link da spec gerada.
2. Sugira a criação da issue correspondente (usando a skill `create-issue`) ou a implementação incremental.
