---
name: create-learning-log
description: >-
  Orienta e executa a criação de registros de aprendizado em docs/learning-log/,
  garantindo conformidade com o template templates/learning-log-template.md e restrições de privacidade.
  Use esta skill sempre que o usuário solicitar registrar um aprendizado, criar um log de estudos ou documentar evidências diárias.
---

# Skill: Criar Registro de Aprendizado (Learning Log)

Esta skill define o procedimento padronizado para documentar aprendizados, experimentos, evidências e progresso técnico no repositório.

---

## 1. Regras e Restrições de Segurança

> [!CAUTION]
> **Privacidade e Segurança em Primeiro Lugar**
> NUNCA inclua nos registros de aprendizado: credenciais, tokens, dados pessoais, documentos internos, casos reais de Cartório ou qualquer informação proprietária. Utilize dados genéricos/fictícios.

---

## 2. Padrão de Nomenclatura e Localização

- **Diretório alvo**: `docs/learning-log/`
- **Nome do arquivo**: `YYYY-MM-DD-<slug-do-topico>.md` (exemplo: `2026-09-22-harness-engineering-basics.md`)

---

## 3. Estrutura do Registro (`learning-log-template.md`)

Todo registro de aprendizado deve seguir a estrutura base de [learning-log-template.md](file:///templates/learning-log-template.md):

```markdown
# Registro de aprendizado — YYYY-MM-DD

- **Área:** [Ex: Harness Engineering, DDD, TypeScript, etc.]
- **Issue, PR, commit ou projeto relacionado:** [Ex: #12 ou projects/meu-projeto]
- **Status:** em andamento | concluído | bloqueado

## O que foi feito
[Descrição sucinta das ações executadas durante a prática ou estudo]

## O que aprendi
[Principais insights, conceitos absorvidos ou cadeias de raciocínio construídas]

## Evidência
[Links para commits, testes executados, outputs de terminal ou artefatos gerados em projects/]

## Bloqueio
[Dificuldades encontradas, dúvidas em aberto ou restrições técnicas (ou "Nenhum")]

## Próximo passo
[Próxima ação concreta para dar continuidade ao estudo]
```

---

## 4. Passo a Passo de Execução

### Passo 1: Coletar Informações do Aprendizado
Alinhe com o usuário ou extraia da sessão:
1. **Data atual** (`YYYY-MM-DD`).
2. **Área/Tópico de Estudo** e **Título do Log**.
3. **Resumo das atividades** ("O que foi feito").
4. **Principais aprendizados/insights** ("O que aprendi").
5. **Evidências técnicas** (logs, testes, links de arquivos/projetos).
6. **Status atual** e **Próximos passos**.

### Passo 2: Gerar o Arquivo
Crie o arquivo no caminho `docs/learning-log/YYYY-MM-DD-<slug-do-topico>.md` preenchendo todos os campos.

### Passo 3: Confirmar e Sugerir Próximos Passos
1. Confirme a criação do arquivo e exiba o link para o usuário.
2. Se houver pendências ou próximos passos, sugira vincular a uma issue de prática ou spec correspondente.
