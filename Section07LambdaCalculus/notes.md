# Lambda Calculus

Alguns pontos importantes:

* Equivalente à Máquina de Turing;
* Variáveis são imutáveis (imutabilidade);
* Funções recebem apenas um **único** parâmetro (currying);
* Tudo é função (até mesmo tipo de dados).

## Sintaxe

Abstração Lambda:
```
λa.x
```

Gramática:

```
<exp> ::= <var>
        | <exp> <exp>
        | λ<var>.<exp>
        | (<exp>)
```

### Abstração
| Lambda | JavaScript |
| - | - |
| λa.b | a => b |
| λa.b x | a => b(x) |
| λa.(b x) | a => (b(x)) |
| (λa.b) x | (a => b)(x) |
| λa.λb.a | a => b => a |
| f a | f(a) |
| f a b | f(a)(b) |
| (f a) b | (f(a))(b) |
| f (a b) | f(a(b)) |
| λab.a b | a => b => a(b) |

## β-Reduction
Como executar uma expressão lambda de forma a chegar em sua menor forma possível. A expressão final estará na **β-Normal Form**

### Exemplo
```
((λa.a) λb.λc.b) (x) λe.f -->
(λb.λc.b) (x) λe.f -->
(λc.x) λe.f -->
x
```


