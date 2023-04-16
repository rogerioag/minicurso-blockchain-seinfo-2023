---
title: "Aula 20 - Ethereum"
subtitle: "Ambiente de Desenvolvimento"
date: 
abstract: "Nesta aula é apresentado o Ambiente de Desenvolvimento para _Ethereum_."
nocite: |
   [@178948620180101]
---

# Introdução

## Objetivos

* Apresentação do Ambiente de Desenvolvimento para _Ethereum_.

## Ethereum – Redes de Teste {.allowframebreaks}

| Parâmetro   | Descrição |
| :--        |    :------  |
| `--testnet` | O livro indica que para as redes de teste deve ser usado o parâmetro `--testnet` para acessar a rede `ropsten` por padrão ou fornecer o nome da rede, como `--testnet rinkeby`. Na versão atual os parâmetros são os seguintes.
| `--ropsten`   | Ropsten network: pre-configured Proof of Work test network  |
| `--rinkeby`   | Rinkeby network: pre-configured Proof of Authority test network |
| `--goerli`    | Görli network: pre-configured Proof of Authority test network |
| `--kiln`      | Kiln network: pre-configured proof-of-work to proof-of-stake test network |
| `--sepolia`   | Sepolia network: pre-configured proof-of-work test network  |



* Testando a execução:

\scriptsize

```bash
rag@blocker$ geth --ropsten --syncmode snap --http --http.addr 127.0.0.1 --http.port 8559 --http.api "eth,net,web3,personal" --keystore ~/.ethereum/keystore
INFO [10-25|16:24:31.929] Starting Geth on Ropsten testnet... 
```

\normalsize


* Estava dando o seguinte _Warning_:

```bash
WARN [10-25|17:23:25.126] Post-merge network, but no beacon client seen. Please launch one to follow the chain!
```

Pesquisando na Internet: __Post-merge network, but no beacon client seen. Please launch one to follow the chain!__

* Encontrei essa solução na internet:

[https://github.com/ethereum/go-ethereum/issues/25791](https://github.com/ethereum/go-ethereum/issues/25791#issuecomment-1249553882)

* Indicando a documentação do _Ethereum_ sobre [_Consensus Clients_](https://geth.ethereum.org/docs/interface/consensus-clients)

* Mostra como `geth` deve ser iniciado, com conexão `RPC` autenticada usando um arquivo `jwtsecret`.
* Por padrão esse arquivo está em `~/.ethereum/geth/jwtsecret`.

```bash
geth --ropsten --syncmode snap --http --http.addr 127.0.0.1 --http.port 8559 --http.api "eth,net,web3,personal" --keystore ~/.ethereum/keystore --authrpc.addr localhost --authrpc.port 8551 --authrpc.vhosts localhost --authrpc.jwtsecret ~/.ethereum/geth/jwtsecret 
INFO [10-25|16:24:31.929] Starting Geth on Ropsten testnet... 

```

* Note que estou executando na rede de testes `Ropsten`, opção na minha versão do `geth` é diferente do livro. No livro ele diz para usar o parâmetro `--testnet` que por padrão usa a rede de testes `Ropsten`, na minha instalação tem o parâmetro `--ropsten`, como tem o `--mainnet` e outras redes de testes.

## Clientes de Consenso

Existem atualmente cinco clientes de consenso que podem ser executado em conjunto com o `Geth`: 

[Lighthouse](https://lighthouse-book.sigmaprime.io/): escrito em `Rust`

[Nimbus](https://nimbus.team/): escrito em `Nim`

[Prysm](https://docs.prylabs.network/docs/install/install-with-script): escrito em `Go`

[Teku](https://pegasys.tech/teku): escrito em `Java`

[Lodestar](https://github.com/ChainSafe/lodestar): escrito em `Typescript`


* Testei o `Prysm` por ser escrito em `Go`, assim como o `Geth`.
* `Prysm` é uma implementação da especificação do consenso `proof-of-stake` do `Ethereum`.
* Este link apresenta como configurar o `Prism`: <https://docs.prylabs.network/docs/install/install-with-script>
* O material ensina a usar o `Prysm` para executar um nó _Ethereum_, portanto resolver o problema apresentado após a atualização do `Merge` e opcionalmente como um validador _(validator)_.

## Step 2: Instalando o Prysm[#](https://docs.prylabs.network/docs/install/install-with-script#step-2-install-prysm)

* Crie no diretório `~/.ethereum`, duas subpastas: `consensus` e `execution`:

* Acesse o diretório `consensus` e execute o comando para baixar o cliente `Prysm` e transformá-lo em executável:

```bash
$ mkdir prysm && cd prysm
$ curl https://raw.githubusercontent.com/prysmaticlabs/prysm/master/prysm.sh --output prysm.sh && chmod +x prysm.sh
```

## Gerando um arquivo _JWT Secret_

* A conexão HTTP entre seu nó beacon e seu nó de execução precisa ser autenticada usando um _token_ `JWT`. Existem diversas formas de gerar este _token_:

  * Usando um gerado _on line_ como [este](https://seanwasere.com/generate-random-hex/). Copie e cole o valor gerado dentro do arquivo `jwt.hex`.
  * Usando `OpenSSL` para criar o _token_ via comando: `openssl rand -hex 32 | tr -d "\n" > "jwt.hex"`.
  * Usar o que foi gerado pelo cliente de execução `geth`: `~/.ethereum/geth/jwtsecret`.
  * Usar o próprio `Prysm` para gerar o `jwt.hex`:

```bash
## Optional. This command is necessary only if you've previously configured USE_PRYSM_VERSIONUSE_PRYSM_VERSION=v3.1.1

## Required
../prysm.sh beacon-chain generate-auth-secret
```

* Neste caso o `Prysm` irá mostrar o caminho onde o arquivo `jwt.hex` foi gerado.

## Step 3: Executando um Cliente de Execução[#](https://docs.prylabs.network/docs/install/install-with-script#step-3-run-an-execution-client)

* Nesta etapa, você instalará um cliente de camada de execução (geth), se ainda não instalou, ao qual o nó beacon do `Prysm` se conectará.

* Baixe e execute o a última versão `64-bit` estável do **Geth installer** para seu Sistema Operacional do site [Geth downloads page](https://geth.ethereum.org/downloads/).

* Note que `Geth 1.10.22` contém uma regressão. Atualize para [v1.10.23+](https://github.com/ethereum/go-ethereum/releases) se você já não tiver uma mais nova.

* Tenho instalado a versão `1.10.25-stable`:

```bash
$ geth version
Geth
Version: 1.10.25-stable
Git Commit: 69568c554880b3567bace64f8848ff1be27d084d
Git Commit Date: 20220915
Architecture: amd64
Go Version: go1.19.1
Operating System: linux
GOPATH=
GOROOT=
$ 
```

* Navegue até o diretório `execution` e execute o comando para inicial o nó de execução.

* Comando padrão da documentação:

```bash
$ geth --http --http.api "eth,net,engine,admin" --authrpc.jwtsecret /path/to/jwt.hex 
```

* Comando que estou utilizando neste exemplo:

```bash
$ geth --ropsten --syncmode=snap --http --http.addr 127.0.0.1 --http.port 8559 --http.api "eth,net,web3,personal,engine,admin" --keystore ~/.ethereum/keystore --authrpc.addr localhost --authrpc.port 8551 --authrpc.vhosts localhost --authrpc.jwtsecret ~/.ethereum/geth/jwtsecret
```

* Veja as [Opções de linha de comando do Geth](https://geth.ethereum.org/docs/interface/command-line-options) para a definição de parâmetros.

* Dependendo das opções a Sincronização pode levar um longo tempo, de horas até dias.

* Enquanto sincroniza, pode ir fazendo o próximo passo.

[alertblock]{Congratulations}

Você está agora executando um **nó de execução** na camada de execução da _Ethereum_.

[/alertblock]

## Step 4: Executando um nó beacon usando Prysm[#](https://docs.prylabs.network/docs/install/install-with-script#step-4-run-a-beacon-node-using-prysm)

* Use o comando para iniciar um nó beacon que conecta no seu nó de execução local:

```bash
./prysm.sh beacon-chain --execution-endpoint=http://localhost:8551 --jwt-secret=path/to/jwt.hex --suggested-fee-recipient=0x01234567722E6b0000012BFEBf6177F1D2e9758D9
```

* Alterei o comando padrão para o conter o _hash_ de uma das minhas contas:

```bash
./prysm.sh beacon-chain --execution-endpoint=http://localhost:8551 --jwt-secret=~/.ethereum/geth/jwtsecret --suggested-fee-recipient=<hash da minha conta>
```

* As contas podem ser listadas com o comando:

```bash
$ geth account list
```

* If you're running a validator, specifying a `suggested-fee-recipient` wallet address will allow you to earn what were previously miner transaction fee tips. See [How to configure Fee Recipient](https://docs.prylabs.network/docs/execution-node/fee-recipient) for more information about this feature.

* Your beacon node will now begin syncing. This usually takes a couple days,  but it can take longer depending on your network and hardware specs.

* Congratulations - you’re now running a **full, Merge-ready Ethereum node**. To check the status of your node, visit [Check node and validator status](https://docs.prylabs.network/docs/monitoring/checking-status).

## Step 5: Executando um validator usando Prysm[#](https://docs.prylabs.network/docs/install/install-with-script#step-5-run-a-validator-using-prysm)

* Next, we'll create your validator keys with the [Ethereum Staking Deposit CLI](https://github.com/ethereum/staking-deposit-cli).

* Download the latest stable version of the deposit CLI from the [Staking Deposit CLI Releases page](https://github.com/ethereum/staking-deposit-cli/releases).

* Run the following command to create your mnemonic phrase and keys:

```bash
./deposit new-mnemonic --num_validators=1 --mnemonic_language=english
```

* Follow the CLI prompts to generate your keys. This will give you the following artifacts:

1. A **new mnemonic seed phrase**. This is **highly sensitive** and should never be exposed to other people or networked hardware.

2. A 

   ```
   validator_keys
   ```

  folder. This folder will contain two files:

   1. `deposit_data-*.json` - contains deposit data that you’ll later upload to the Ethereum launchpad.
   2. `keystore-m_*.json` - contains your public key and encrypted private key.

Copy the `validator_keys` folder to your primary machine's `consensus` folder. Run the following command to import your keystores, replacing `<YOUR_FOLDER_PATH>` with the full path to your `consensus/validator_keys` folder:


```bash
./prysm.sh validator accounts import --keys-dir=<YOUR_FOLDER_PATH>
```

* You’ll be prompted to specify a wallet directory twice. Provide the path to your `consensus` folder for both prompts. You should see `Successfully imported 1 accounts, view all of them by running accounts list` when your account has been successfully imported into Prysm.

* Next, go to the [Mainnet Launchpad’s deposit data upload page](https://launchpad.ethereum.org/en/upload-deposit-data) and upload your `deposit_data-*.json` file. You’ll be prompted to connect your wallet.

* You can then deposit 32 ETH into the Mainnet deposit contract via the Launchpad page. Exercise extreme caution throughout 

## Congratulations! 

* You’re now running a **full Ethereum node** and a **validator**.

* It can a long time (from days to months) for your validator to become  fully activated. To learn more about the validator activation process,  see [Deposit Process](https://kb.beaconcha.in/ethereum-2.0-depositing). See [Check node and validator status](https://docs.prylabs.network/docs/monitoring/checking-status) for detailed status monitoring guidance.

* You can leave your **execution client**, **beacon node**, and **validator client** terminal windows open and running. Once your validator is activated, it will automatically begin proposing and validating blocks.

## Atividade

* Leitura do Capítulo 13.

## _Word Cloud_ 

![](figuras/aula-020-ethereum-ambiente-de-desenvolvimento.md.wordcloud.png){width=100%}

## Leitura Recomendada
\normalsize

[alertblock]{Leitura Recomendada}

__Capítulo 11: Ethereum 101__

**Livro**: [IMRAN BASHIR. Mastering Blockchain : Distributed Ledger Technology, Decentralization, and Smart Contracts Explained, 2nd Edition.](https://search.ebscohost.com/login.aspx?direct=true&db=e000xww&AN=1789486&authtype=shib&lang=pt-br&site=eds-live&scope=site&ebv=EB&ppid=pp_276)

__Capítulo 12: Futher Ethereum__

**Livro**: [IMRAN BASHIR. Mastering Blockchain : Distributed Ledger Technology, Decentralization, and Smart Contracts Explained, 2nd Edition.](https://search.ebscohost.com/login.aspx?direct=true&db=e000xww&AN=1789486&authtype=shib&lang=pt-br&site=eds-live&scope=site&ebv=EB&ppid=pp_310)

[/alertblock]

# Próximas Aulas

## Próximas Aulas

* Ambientes de Desenvolvimento e Ferramentas.

# Referências

## Referências{.fragile .allowframebreaks}
\normalsize
