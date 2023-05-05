# Paradigmas de programação

Um paradigma é um modelo ou padrão a seguir.

JavaScript é uma linguagem de vários paradigmas (multiparadigmas).

Um padrão de projeto deve estar bem conectado ao paradigma de programação utilizado.

## Os mais conhecidos

Funcional: 1957. A adoção foi tardia pelo fato do paradigma exigir maior consumo de memória e processamento.

Procedural: 1968.

Orientado a Objetos: 1980/90.

# Imperativo x Declarativo

| Imperativo | Declarativo |
| ----------- | ----------- |
| Foco no fluxo | Foco na lógica |
| Dados mutáveis | Imutabilidade |
| "Como" | "O quê" | 
| Maior quantidade de código | Menor quantidade de código |
| Baixo nível de escalabilidade | Alto nível de escalabilidade |
| Mais popular | Menos popular |
| Mais explícito | Menos explícito |

Exemplo de código declarativo: SQL, HTML.

# Paradigma Funcional

## First Class Functions

Funções são valores.

### Function expression

```javascript
const dobro = function (x) {
  return 2 * x;
}
```

OU

```javascript
const dobro = x => 2 * x;
```

## Imutabilidade

Não se altera um dado diretamente. Cria-se uma cópia do dado e altera-se a cópia. Isso implica em um maior uso de memória, porém é útil para ambientes de múltiplas *threads*. 

Regra geral: mutabilidade isolada e imutabilidade compartilhada.

Hoje se torna viável utilizar a imutabilidade por termos, no cenário atual, memória abundante e múltiplos processadores.

# Como o JavaScript funciona

O JavaScript é *single thread*, isto é, possui apenas uma pilha de execução e um *heap* de memória.

## Como o JS faz processamento assíncrono?

A pilha de execução do JS possui Web APIs, que reconhecem funções assíncronas e as atribui ao *browser*. Quando essas tarefas são finalizadas, elas são colocadas na pilha de execução como uma *callback*. Esse processo envolve estruturas como a *Event Queue* e é "administrado" pelo *Event Loop*. Um programa só é finalizado quando a pilha de execução e a fila de eventos estiverem vazias.
