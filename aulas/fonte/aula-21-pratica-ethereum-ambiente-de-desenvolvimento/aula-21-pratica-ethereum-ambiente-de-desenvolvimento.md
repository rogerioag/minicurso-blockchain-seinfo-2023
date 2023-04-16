---
title: "Aula 021 - Prática sobre _Ethereum_"
subtitle: "_Ambiente de Desenvolvimento_"
date: 
abstract: "A proposta desta aula é termos uma Visão Geral sobre rede __Ethereum__, componentes do Ecossistema _Ethereum_. Instalando _Wallets_ e _softwares_ clientes, com a execução de ferramentas e `APIs`."
nocite: |
  [@178948620180101]
---

# Leitura do Capítulo 12: _Futher Ethereum_

1. Faça a leitura do [Capítulo 12: _Futher Ethereum_](https://search.ebscohost.com/login.aspx?direct=true&db=e000xww&AN=1789486&authtype=shib&lang=pt-br&site=eds-live&scope=site&ebv=EB&ppid=pp_310)
   
2. Criar a rede privada local:
   1. Criar um diretório `mkdir ~/.etherprivate`
   2. Criar um arquivo `privategenesis.json` em `~/.etherprivate` com o conteúdo:

```json
{
"nonce": "0x0000000000000042",
"timestamp": "0x00",
"parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
"extraData": "0x00",
"gasLimit": "0x8000000",
"difficulty": "0x0400",
"mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
"coinbase": "0x3333333333333333333333333333333333333333",
"alloc": {
},
"config": {
"chainId": 786,
"homesteadBlock": 0,
"eip150Block": 0,
"eip155Block": 0,
"eip158Block": 0
}
}

```
   3. Execute o `geth` indicando o diretório de dados e o _genesis_ file:

```bash
[rag@nitro-ryzen ~]$  geth --datadir ~/.etherprivate init ~/.etherprivate/privategenesis.json
INFO [10-27|19:59:19.049] Maximum peer count                       ETH=50 LES=0 total=50
INFO [10-27|19:59:19.051] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
INFO [10-27|19:59:19.053] Set global gas cap                       cap=50,000,000
INFO [10-27|19:59:19.054] Allocated cache and file handles         database=/home/rag/.etherprivate/geth/chaindata cache=16.00MiB handles=16
INFO [10-27|19:59:19.068] Opened ancient database                  database=/home/rag/.etherprivate/geth/chaindata/ancient/chain readonly=false
INFO [10-27|19:59:19.068] Writing custom genesis block 
INFO [10-27|19:59:19.068] Persisted trie from memory database      nodes=0 size=0.00B time="8.101us" gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [10-27|19:59:19.069] Successfully wrote genesis state         database=chaindata                              hash=6650a0..b5c158
INFO [10-27|19:59:19.069] Allocated cache and file handles         database=/home/rag/.etherprivate/geth/lightchaindata cache=16.00MiB handles=16
INFO [10-27|19:59:19.080] Opened ancient database                  database=/home/rag/.etherprivate/geth/lightchaindata/ancient/chain readonly=false
INFO [10-27|19:59:19.081] Writing custom genesis block 
INFO [10-27|19:59:19.081] Persisted trie from memory database      nodes=0 size=0.00B time="7.613us" gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [10-27|19:59:19.082] Successfully wrote genesis state         database=lightchaindata                         hash=6650a0..b5c158
[rag@nitro-ryzen ~]$ 

```

   4. Inicie a execução:

```bash
$ geth --datadir ~/.etherprivate/ --allow-insecure-unlock --networkid 786 --http --http.addr 127.0.0.1 --http.port 8559 --http.api "eth,net,web3,personal,engine,admin,debug" --keystore ~/.etherprivate/keystore --authrpc.addr localhost --authrpc.port 8551 --authrpc.vhosts localhost --authrpc.jwtsecret ~/.etherprivate/geth/jwtsecret --nodiscover --maxpeers 15

```

* Iniciar um console para a interação com a execução:

```bash
$ geth attach ~/.etherprivate/geth.ipc
```

* Criar duas contas, caso não tenha:

```bash
> personal.newAccount("admin1234")
"0xedbc36d74d5a1cd64db36e53798bd1781f0c4955"

> eth.accounts
["0xedbc36d74d5a1cd64db36e53798bd1781f0c4955"]

>  personal.newAccount("admin1234")

"0x1478d95f8754b3ba7127100dd0bb46578fe7d22a"

> eth.accounts
["0xedbc36d74d5a1cd64db36e53798bd1781f0c4955", "0x1478d95f8754b3ba7127100dd0bb46578fe7d22a"]

```

* Desbloquear as contas:

```bash
> eth.accounts
["0xedbc36d74d5a1cd64db36e53798bd1781f0c4955", "0x1478d95f8754b3ba7127100dd0bb46578fe7d22a"]
> personal.unlockAccount("0xedbc36d74d5a1cd64db36e53798bd1781f0c4955")
Unlock account 0xedbc36d74d5a1cd64db36e53798bd1781f0c4955
Passphrase: 
true
> personal.unlockAccount("0x1478d95f8754b3ba7127100dd0bb46578fe7d22a")
Unlock account 0x1478d95f8754b3ba7127100dd0bb46578fe7d22a
Passphrase: 
true
```

* Verificação dos valores em cada carteira:

```bash
> web3.fromWei(eth.getBalance("0xedbc36d74d5a1cd64db36e53798bd1781f0c4955"), "ether")
320
> web3.fromWei(eth.getBalance("0x1478d95f8754b3ba7127100dd0bb46578fe7d22a"), "ether")
0
> web3.fromWei(eth.getBalance(eth.coinbase), "ether")
320
```

* Enviar 100 ethers da primeira para a segunda carteira:

```bash
> eth.sendTransaction({from: "0xedbc36d74d5a1cd64db36e53798bd1781f0c4955", to: "0x1478d95f8754b3ba7127100dd0bb46578fe7d22a", value: 100})

> eth.sendTransaction({from: "0xedbc36d74d5a1cd64db36e53798bd1781f0c4955", to: "0x1478d95f8754b3ba7127100dd0bb46578fe7d22a", value:web3.toWei(100, "ether") })

SyntaxError: SyntaxError: (anonymous): Line 1:73 Unexpected identifier (and 6 more errors)
```

* Estava ocorrendo esse erro: `SyntaxError: SyntaxError: (anonymous): Line 1:73 Unexpected identifier (and 6 more errors)` quando tentava enviar uma transação.


```bash
> personal.unlockAccount(personal.listAccounts[0])
Unlock account 0xedbc36d74d5a1cd64db36e53798bd1781f0c4955
Passphrase: 
true
> personal.unlockAccount(personal.listAccounts[1])
Unlock account 0x1478d95f8754b3ba7127100dd0bb46578fe7d22a
Passphrase: 
true
> eth.sendTransaction({from: personal.listAccounts[0], to: personal.listAccounts[1], value: 100})
"0x797c2a303974e365bf48ac1620da9d3a1e8ad0d53138c3ba06a4cddbe19e67b2"
> eth.sendTransaction({from: "0xedbc36d74d5a1cd64db36e53798bd1781f0c4955", to: "0x1478d95f8754b3ba7127100dd0bb46578fe7d22a", value:100})
SyntaxError: SyntaxError: (anonymous): Line 1:73 Unexpected identifier (and 6 more errors)

> personal.unlockAccount(personal.listAccounts[0])

Unlock account 0xedbc36d74d5a1cd64db36e53798bd1781f0c4955
Passphrase: 
true
> eth.sendTransaction({from: "0xedbc36d74d5a1cd64db36e53798bd1781f0c4955" to: "0x1478d95f8754b3ba7127100dd0bb46578fe7d22a", value:100})
SyntaxError: SyntaxError: (anonymous): Line 1:73 Unexpected identifier (and 6 more errors)

> personal.unlockAccount(personal.listAccounts[1])
Unlock account 0x1478d95f8754b3ba7127100dd0bb46578fe7d22a
Passphrase: 
true
> eth.sendTransaction({from: "0xedbc36d74d5a1cd64db36e53798bd1781f0c4955" to: "0x1478d95f8754b3ba7127100dd0bb46578fe7d22a", value:100})
SyntaxError: SyntaxError: (anonymous): Line 1:73 Unexpected identifier (and 6 more errors)

> eth.sendTransaction({from: personal.listAccounts[0], to: personal.listAccounts[1], value: 100})
"0x5c599cc300072c38544fa2a8869cf9928b17345b2d75ab43e6a3f23d4b6c0458"
> 
```

* Usando `personal.unlockAccount(personal.listAccounts[1])` para desbloquear funcionou o envio de transações.

* Verificando os valores nas carteiras:

```bash
> web3.fromWei(eth.getBalance("0xedbc36d74d5a1cd64db36e53798bd1781f0c4955"), "ether")
9709.9999999999999998
> web3.fromWei(eth.getBalance("0x1478d95f8754b3ba7127100dd0bb46578fe7d22a"), "ether")
2e-16
```

* Recuperar o recibo da transação: 

```bash
eth.getTransactionReceipt("0x797c2a303974e365bf48ac1620da9d3a1e8ad0d53138c3ba06a4cddbe19e67b2")
{
  blockHash: "0x91b7b138aa7ef8aa992e306925e2184cc463fcba65fa92c6fd0cbaa2664f4c53",
  blockNumber: 1834,
  contractAddress: null,
  cumulativeGasUsed: 21000,
  effectiveGasPrice: 1000000000,
  from: "0xedbc36d74d5a1cd64db36e53798bd1781f0c4955",
  gasUsed: 21000,
  logs: [],
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  root: "0x88f4bb6124fcad882474efa2a914483871fb900ba52b1147ff284da424bb4630",
  to: "0x1478d95f8754b3ba7127100dd0bb46578fe7d22a",
  transactionHash: "0x797c2a303974e365bf48ac1620da9d3a1e8ad0d53138c3ba06a4cddbe19e67b2",
  transactionIndex: 0,
  type: "0x0"
}
```

\normalsize

## Referências {.fragile .allowframebreaks}

