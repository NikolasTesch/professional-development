# Anotações - JavaScript Week 01

## Diagnóstico e Propósito (Nível 1)

- Qual dor arquitetural o surgimento dos **ES Modules** (`import`/`export`) resolveu em relação ao ecossistema antigo baseado em scripts globais ou sintaxe CommonJS (`require`)?
- Por que a mutabilidade descontrolada em objetos e arrays é considerada uma fonte primária de bugs em aplicações concorrentes ou complexas?

## Mecanismos e Funcionamento (Nível 2)

- Como o JavaScript lida com escopo de bloco com `let`/`const` versus escopo de função com `var` e como isso se conecta com o mecanismo de Closures?
- Qual é a sequência exata de avaliação em expressões usando operadores lógicos com curto-circuito (`&&`, `||`, `??`) e por que `0 || 'default'` comporta-se diferente de `0 ?? 'default'`?
- Como o acumulador do método `.reduce()` evolui a cada iteração e como construir tanto uma transformação de lista para objeto quanto um agrupamento de dados sem mutar o estado externo?

## Trade-offs e Edge Cases (Nível 3)

- Em quais cenários um laço imperativo tradicional (`for` ou `for...of`) é superior em performance ou legibilidade frente ao encadeamento de `.filter().map()`?
- Quais as limitações do operador spread (`...`) ao copiar objetos aninhados (shallow copy vs deep copy) e quais efeitos colaterais podem ocorrer silenciosamente?
