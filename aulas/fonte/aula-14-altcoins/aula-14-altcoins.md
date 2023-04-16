---
title: "Aula 014 - Altcoins"
subtitle: "Alternative Coins"
date: 
abstract: "Nesta aula apresentamos uma Visão Geral sobre as _Alternative coins (altcoins)_. São apresentados alguns detalhes sobre as _altcoins_, algumas limitações do _Bitcoin_ que levaram ao desenvolvimento das _altcoins_."
nocite: |
   [@178948620180101]
---

# Introdução às Altcoins

## Objetivos

* Apresentação de uma Visão Geral sobre rede __Bitcoin__ e pagamentos.

## Altcoins {.allowframebrakes}

* ‘Altcoins’ is a term used to describe coins other than the original electronic cash bitcoin.

![Bitcoin and some other top currencies by market cap. Figures based on mid-2020 statistics](figuras/mercado.pdf)

## Bitcoin power consumption

[columns]

[column=0.5]

Bitcoin’s Proof of Work (PoW) consensus mechanism has several drawbacks, particularly extremely high energy requirements.
This is the main reason why alternatives PoW to were proposed, such as Proof of Stake (PoS).

[column=0.5]

![Energy consumption by country – Bitcoin at No. 46.](figuras/bitcoin-energy-consumption.pdf)

[/columns]


* [Revisiting Bitcoin’s carbon footprint](https://www.researchgate.net/publication/358861058_Revisiting_Bitcoin's_carbon_footprint), (February 2022); how Bitcoin got dirtier after the Chinese mining crackdown in 2021.

* [Bitcoin Energy Consumption Index](https://digiconomist.net/bitcoin-energy-consumption), the Bitcoin Energy Consumption Index provides the latest estimate of the total energy consumption of the Bitcoin network. 






# Theoretical foundations
# Difficulty adjustment and retargeting algorithms

## Difficulty adjustment and retargeting algorithms

PoW algorithms use difficulty adjustment and retargeting algorithms, which are simple arithmetic formulas that help adjust the difficulty of solving the PoW problem:

* `Bitcoin`
  * $T = Time previous * time actual / 2016 * 10 min$

* `Kimoto Gravity Well`
  * $KGW = 1 + (0.7084 * pow((double(PastBlocksMass)/double(144)), -1.228))$

* `Dark Gravity Wave`
  * $2222222/(((Difficulty+2600)/9)^2)$

* `DigiShield`
  * $New difficulty = (previous difficulty) x SQRT [ (150 seconds) / (last solve time) ]$

* `MIDAS`
  * A more complex algorithm for difficulty adjustment.


# Bitcoin limitations

## Limitações do Bitcoin {.allowframebreaks}

* Privacy and anonymity
* To address such issues, various proposals have been made:
  * Mixing protocol
  * Inherent anonymity
  * CoinSwap
  * TumbleBit
  * Dandelion

# Extended protocols on top of Bitcoin eevelopment of altcoins

## Extended protocols on top of Bitcoin {.allowframebreaks}

* __Colored coins:__ developed to represent digital assets on the Bitcoin blockchain. Coloring a bitcoin refers to updating it with some metadata representing a digital asset
* __Counterparty:__ another service that can be used to create custom tokens that act as a cryptocurrency and can be used for various purposes, such as issuing digital assets on top of the Bitcoin blockchain

# Development of altcoins

## Development of altcoins

The following are some required parameters, or parameters to be tweaked, if forking from another code base:
Consensus algorithms
Difficulty adjustment algorithms
Inter-block time
Block rewards
Reward halving rate
Block size and transaction size
Interest rate
Coinage
Total supply of coins




## Bloco Genesis {.allowframebreaks .fragile}

[alertblock]{Bloco Genesis}

O Bloco Genesis ou bloco $\#0$ foi _hardcoded_ (codificado) por suas características especiais: ele é o único que não aponta para nenhum bloco anterior. No seu _hash_ foi encriptado o bloco junto com a mensagem _"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"_, manchete do jornal naquele dia. Além de servir como prova datada, a manchete escolhida representa justamente uma crítica ao sistema bancário.

[/alertblock]


## Atividade

* Consider what parameters were changed in order to create the Litecoin blockchain from Bitcoin.

## _Word Cloud_ 

![](figuras/aula-012-bitcoin-pagamentos.md.wordcloud.png){width=100%}

## Leitura Recomendada
\normalsize

[alertblock]{Leitura Recomendada}

__Capítulo 8: Alternative Coins__

**Livro**: [IMRAN BASHIR. Mastering Blockchain : Distributed Ledger Technology, Decentralization, and Smart Contracts Explained, 2nd Edition.](https://search.ebscohost.com/login.aspx?direct=true&db=e000xww&AN=1789486&lang=pt-br&site=eds-live&scope=site&ebv=EB&ppid=pp_213)

[/alertblock]

# Próximas Aulas

## Próximas Aulas

* Pagamentos com _Bitcoin_.

# Referências

## Referências{.fragile .allowframebreaks}
\normalsize
