---
title: "Aula 22 - Ethereum"
subtitle: "Ferramentas de Desenvolvimento e Frameworks"
date: 
abstract: "Nesta aula são apresentadas algumas ferramentas de Desenvolvimento e Frameworks para o desenvolvimento e implantação de Contratos Inteligentes."
nocite: |
   [@178948620180101]
---

# Introdução

## Objetivos

* Apresentação de Ferramentas de Desenvolvimento e _Frameworks_.
* Linguagens, Compiladores, Ferramentas e Bibliotecas, _Frameworks_, Desenvolvimento e implantação de contratos e Linguagem Solidity.

## Taxonomia do Ecossistema de Componentes de Desenvolvimento Ethereum {.allowframebreaks}

![](figuras/taxonomia-componentes-de-desenvolvimento.pdf)

## Linguagens {.allowframebreaks}

* __Solidity:__ Tem se tornado a linguagem padrão para escrever contratos para _Ethereum_. O código precisa ser compilado e transformado em _bytecode_, é necessário utilizar o compilador `solc`.
* __Vyper:__ Essa linguagem é uma linguagem experimental semelhante ao Python que está sendo desenvolvida para trazer segurança, simplicidade e auditabilidade ao desenvolvimento de contratos inteligentes.
* __Yul:__ Esta é uma linguagem intermediária que tem a capacidade de compilar para diferentes back-ends, como EVM e eWasm. Os objetivos de projeto do Yul incluem principalmente legibilidade, fluxo de controle fácil, otimização, verificação formal e simplicidade.
* __Mutan:__ Esta é uma linguagem de estilo Go, que foi descontinuada no início de 2015 e não é mais usada.
* __LLL:__ Linguagem semelhante ao _Low-Level Lisp-Like_, daí o nome `LLL`, também não é mais usada.
* __Serpent:__ Esta é uma linguagem simples e limpa parecida com Python. Ela não é mais usado para desenvolvimento de contratos e não é suportado pela comunidade.
* Leia mais sobre Solidity e Recursos de Desenvolvimento de `DApps` em [DAPP DEVELOPMENT FRAMEWORKS[^1]](http://ethdocs.org/en/latest/contracts-and-transactions/developer-tools.html#developer-tools)

[^1]:<http://ethdocs.org/en/latest/contracts-and-transactions/developer-tools.html#developer-tools>

## Compiladores {.allowframebreaks}

* O compilador `Solidity` (solc)
* Compilador usado para compilar código de contratos inteligentes e converter eles para _bytecode_.

## Ferramentas e Bibliotecas {.allowframebreaks}

* `Ganache`
  * Simula um Blockchain Ethereum pessoal com uma interface com usuário (UI), comumente usada no desenvolvimento e testes.
* `Ganache-cli`
  * Versão linha de comando do `Ganache` tem como pre-requisito `NodeJS`.

![](figuras/ganache-interface.pdf)


## Frameworks {.allowframebreaks}

* __Truffle__
  * Framework de desenvolvimento para _Ethereum_ com recursos para implantação, teste e depuração.

![](figuras/truffle-interface.pdf)

* __Drizzle__
  * Um conjunto de bibliotecas de _frontend_ para o desenvolvimento de interfaces _web_.
  * Torna o desenvolvimento _frontend_ para `DApps` fácil.
  * Tem o NodeJS como pré-requisito.
  * Baseado no _Redux store_.
  * Mantém uma biblioteca de componentes `React`.

## Outras Ferramentas {.allowframebreaks}

* __Embark:__ powerful developer platform for building and deploying DApps
* __Brownie:__ framework for Ethereum smart contract development and testing
* __Waffle:__ another framework for smart contract development and testing 
* __Etherlime:__ framework that allows DApp development, debugging, testing, and testing in Solidity and Vyper
* __OpenZeppelin:__ a toolkit for smart contract development 

## Desenvolvimeto e Implantação {.allowframebreaks}

* A escrita de contratos inteligentes é basicamente a escrita de código fonte do contrato em `Solidity` em um editor de texto.
* Existem vários _plugins_ e extensões disponíveis para os editores mais comuns, tais como Vim, Atom, VSCode, que fornecem _syntax highlighting_ e formatadores para código fonte `Solidity`.

![](figuras/vscode-interface.pdf)

## The layout of a Solidity source code file {.allowframebreaks}

![](figuras/solidity-example.pdf)

## Linguagem Solidity {.allowframebreaks}

* Uma Linguagem de Domínio Especiífico (DSL)
* _Contract-oriented language_
* JavaScript / C-like
* Amplamente utilizada
* Estaticamente Tipada

## Linguagem Solidity {.allowframebreaks}

## Leitura Recomendada
\normalsize

[alertblock]{Leitura Recomendada}

__Capítulo 14: Development Tools and Frameworks__

**Livro**: [IMRAN BASHIR. Mastering Blockchain : Distributed Ledger Technology, Decentralization, and Smart Contracts Explained, 2nd Edition.](https://search.ebscohost.com/login.aspx?direct=true&db=e000xww&AN=1789486&authtype=shib&lang=pt-br&site=eds-live&scope=site&ebv=EB&ppid=pp_431)

[/alertblock]

# Próximas Aulas

## Próximas Aulas

* Ambientes de Desenvolvimento e Ferramentas.

# Referências

## Referências{.fragile .allowframebreaks}
\normalsize
