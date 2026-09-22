---
name: create-project-readme
description: >-
  Orienta e executa a criação ou estruturação do README.md para projetos e práticas dentro de projects/,
  garantindo conformidade com o template templates/project-readme-template.md e as convenções do repositório.
  Use esta skill sempre que o usuário iniciar uma nova prática em projects/, criar um novo subprojeto ou atualizar a documentação de um projeto.
---

# Skill: Criar README de Projeto Prático

Esta skill define o procedimento padronizado para documentar subprojetos e práticas executáveis localizadas dentro do diretório `projects/`.

---

## 1. Regras e Restrições de Segurança

> [!CAUTION]
> **Privacidade e Segurança em Primeiro Lugar**
> NUNCA inclua em projetos ou READMEs: credenciais, tokens, dados de produção, informações pessoais ou dados reais de Cartório. Utilize dados fictícios ou mocks.

---

## 2. Padrão de Nomenclatura e Localização

- **Diretório do projeto**: `projects/<nome-do-projeto>/`
- **Nome do arquivo**: `projects/<nome-do-projeto>/README.md`

---

## 3. Estrutura do README (`project-readme-template.md`)

Todo `README.md` de projeto deve seguir a estrutura base de [project-readme-template.md](file:///templates/project-readme-template.md):

```markdown
# [Nome do Projeto]

## Problema
[Descrição clara do problema técnico ou necessidade de domínio que o projeto aborda]

## Escopo
[O que está incluído no projeto e o que foi desenvolvido]

## Como executar
[Instruções passo a passo e comandos exatos para rodar o projeto localmente]

## Como validar
[Comandos de teste, lint, typecheck ou scripts de validação que comprovam o funcionamento]

## Decisões
[Principais decisões técnicas, arquiteturais ou de design adotadas no projeto]

## Limitações
[Simplificações intencionais, pontos não cobertos ou trade-offs do MVP/prática]

## Evidência
[Logs de execução, resultados de testes, capturas de terminal ou links para specs e issues relacionadas]
```

---

## 4. Passo a Passo de Execução

### Passo 1: Alinhar Estrutura do Projeto
Alinhe com o usuário ou examine o projeto em `projects/<nome-do-projeto>/`:
1. **Nome e objetivo do projeto**.
2. **Dependências e comandos de execução** (`npm run dev`, `python main.py`, etc.).
3. **Plano de validação e testes**.
4. **Decisões técnicas e limitações**.

### Passo 2: Gerar o README.md
Crie ou atualize o arquivo em `projects/<nome-do-projeto>/README.md` preenchendo detalhadamente cada uma das 7 seções.

### Passo 3: Validar a Documentação
1. Verifique se os comandos listados em **Como executar** e **Como validar** realmente funcionam no ambiente.
2. Forneça o link para o `README.md` criado e informe os próximos passos da prática.
