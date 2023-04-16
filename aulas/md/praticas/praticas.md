---
title: "Minicurso Introdução às Tecnologias Blockchain"
subtitle: "Práticas"
date: 
abstract: "Blockchain é uma tecnologia nova e considerada revolucionária e disruptiva, sendo até mesmo comparada, quanto ao impacto, ao surgimento da Internet. Neste minicurso serão apresentados conceitos e alguns fundamentos básicos relacionadas à Tecnologia Blockchain. Neste material complementar são apresentadas a práticas relacionadas ao desenvolvimento com _Ethereum_."
nocite: |
  [@178948620180101]
---

\newpage
<!-- Prática 1 -->

# Prática: Instalando o Cliente _Ethereum_: `Geth`

A proposta desta prática é termos uma visão geral sobre a rede __Ethereum__ e dos componentes do Ecossistema _Ethereum_. A ideia é instalarmos o _software_ cliente da rede _Ethereum_, o `Geth` transformando a máquina em um nó da rede.

## Instalando o `Geth`
   
O cliente padrão `Geth` pode ser instalado em sistemas derivados do `Debian` e `Ubuntu` com o pacote `ethereum`:

```bash
$ sudo apt-get install -y software-properties-common
$ sudo add-apt-repository -y ppa:ethereum/ethereum
$ sudo apt-get update
$ sudo apt-get install -y ethereum
```

Em outros Sistemas como o `Manjaro`:

```bash
[rag@nitro-ryzen ~]$ sudo pacaur -Ss ethereum
community/go-ethereum 1.10.25-1 [instalado]
    Official Go implementation of the Ethereum protocol
[rag@nitro-ryzen ~]$ sudo pacaur -S go-ethereum
[rag@nitro-ryzen ~]$ pacaur -S go-ethereum
resolvendo dependencias...
procurando pacotes conflitantes...

Pacotes (1) go-ethereum-1.10.25-1

Tamanho total instalado:  197,38 MiB
Alteração no tamanho:       0,00 MiB

:: Continuar a instalação? [S/n]
```

Instruções para outros Sistemas Operacionais podem ser encontradas no site oficial da documentação do `Ethereum` <https://geth.ethereum.org/docs/install-and-build/installing-geth>.


## Executando o `Geth`

Executando o `Geth` diretamente ele irá sincronizar com a rede principal do `Ethereum`, a `mainnet`.

```bash
[rag@nitro-ryzen ~]$ geth
INFO [10-20|21:07:12.911] Starting Geth on Ethereum mainnet... 
INFO [10-20|21:07:12.912] Bumping default cache on mainnet         provided=1024 updated=4096
INFO [10-20|21:07:12.914] Maximum peer count                       ETH=50 LES=0 total=50
INFO [10-20|21:07:12.915] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
INFO [10-20|21:07:12.920] Set global gas cap                       cap=50,000,000
INFO [10-20|21:07:12.922] Allocated trie memory caches             clean=614.00MiB dirty=1024.00MiB
INFO [10-20|21:07:12.923] Allocated cache and file handles         database=/home/rag/.ethereum/geth/chaindata cache=2.00GiB handles=262,144
INFO [10-20|21:07:12.946] Opened ancient database                  database=/home/rag/.ethereum/geth/chaindata/ancient/chain readonly=false
INFO [10-20|21:07:12.950]  
INFO [10-20|21:07:12.950] -----------------------------------------------------------------------------------
INFO [10-20|21:07:12.950] Chain ID:  1 (mainnet) 
INFO [10-20|21:07:12.950] Consensus: Beacon (proof-of-stake), merged from Ethash (proof-of-work) 
INFO [10-20|21:07:12.950]  
INFO [10-20|21:07:12.950] Pre-Merge hard forks: 
INFO [10-20|21:07:12.950]  - Homestead:                   1150000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/homestead.md) 
INFO [10-20|21:07:12.950]  - DAO Fork:                    1920000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/dao-fork.md) 
INFO [10-20|21:07:12.950]  - Tangerine Whistle (EIP 150): 2463000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/tangerine-whistle.md) 
INFO [10-20|21:07:12.950]  - Spurious Dragon/1 (EIP 155): 2675000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/spurious-dragon.md) 
INFO [10-20|21:07:12.950]  - Spurious Dragon/2 (EIP 158): 2675000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/spurious-dragon.md) 
INFO [10-20|21:07:12.950]  - Byzantium:                   4370000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/byzantium.md) 
INFO [10-20|21:07:12.950]  - Constantinople:              7280000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/constantinople.md) 
INFO [10-20|21:07:12.950]  - Petersburg:                  7280000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/petersburg.md) 
INFO [10-20|21:07:12.950]  - Istanbul:                    9069000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/istanbul.md) 
INFO [10-20|21:07:12.950]  - Muir Glacier:                9200000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/muir-glacier.md) 
INFO [10-20|21:07:12.950]  - Berlin:                      12244000 (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/berlin.md) 
INFO [10-20|21:07:12.950]  - London:                      12965000 (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/london.md) 
INFO [10-20|21:07:12.950]  - Arrow Glacier:               13773000 (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md) 
INFO [10-20|21:07:12.950]  - Gray Glacier:                15050000 (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md) 
INFO [10-20|21:07:12.950]  
INFO [10-20|21:07:12.950] Merge configured: 
INFO [10-20|21:07:12.950]  - Hard-fork specification:    https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/paris.md 
INFO [10-20|21:07:12.950]  - Network known to be merged: true 
INFO [10-20|21:07:12.950]  - Total terminal difficulty:  58750000000000000000000 
INFO [10-20|21:07:12.950]  - Merge netsplit block:       <nil> 
INFO [10-20|21:07:12.950] --------------------------------------------------------------------------------------
INFO [10-20|21:07:12.950]  
INFO [10-20|21:07:12.952] Disk storage enabled for ethash caches   dir=/home/rag/.ethereum/geth/ethash count=3
INFO [10-20|21:07:12.952] Disk storage enabled for ethash DAGs     dir=/home/rag/.ethash               count=2
INFO [10-20|21:07:12.952] Initialising Ethereum protocol           network=1 dbversion=8
INFO [10-20|21:07:12.963] Loaded most recent local header          number=0 hash=d4e567..cb8fa3 td=17,179,869,184 age=53y6mo3w
INFO [10-20|21:07:12.963] Loaded most recent local full block      number=0 hash=d4e567..cb8fa3 td=17,179,869,184 age=53y6mo3w
INFO [10-20|21:07:12.963] Loaded most recent local fast block      number=0 hash=d4e567..cb8fa3 td=17,179,869,184 age=53y6mo3w
INFO [10-20|21:07:12.964] Loaded local transaction journal         transactions=0 dropped=0
INFO [10-20|21:07:12.964] Regenerated local transaction journal    transactions=0 accounts=0
INFO [10-20|21:07:12.965] Chain post-merge, sync via beacon client 
INFO [10-20|21:07:12.965] Gasprice oracle is ignoring threshold set threshold=2
WARN [10-20|21:07:12.965] Engine API enabled                       protocol=eth
INFO [10-20|21:07:12.966] Starting peer-to-peer node               instance=Geth/v1.10.25-stable-69568c55/linux-amd64/go1.19.1
INFO [10-20|21:07:12.991] New local node record                    seq=1,665,519,113,919 id=da440578e33a2ce7 ip=127.0.0.1 udp=30303 tcp=30303
INFO [10-20|21:07:12.992] Started P2P networking                   self=enode://9ae8fcdad4a7243d1bd2308a159c5800ec170e588862be110152627c9ed3fa67376ef8c7526d7a56e9bb72da729cf792c7bef86c095471995cc352f9e353acfc@127.0.0.1:30303
INFO [10-20|21:07:12.993] IPC endpoint opened                      url=/home/rag/.ethereum/geth.ipc
INFO [10-20|21:07:12.993] Loaded JWT secret file                   path=/home/rag/.ethereum/geth/jwtsecret crc32=0xdeccafe4
INFO [10-20|21:07:12.994] WebSocket enabled                        url=ws://127.0.0.1:8551
INFO [10-20|21:07:12.994] HTTP server started                      endpoint=127.0.0.1:8551 auth=true prefix= cors=localhost vhosts=localhost
INFO [10-20|21:07:16.251] New local node record                    seq=1,665,519,113,920 id=da440578e33a2ce7 ip=187.95.110.26 udp=2770  tcp=30303
INFO [10-20|21:07:22.992] Looking for peers                        peercount=0 tried=2 static=0
INFO [10-20|21:07:32.994] Looking for peers                        peercount=0 tried=3 static=0
INFO [10-20|21:07:43.205] Looking for peers                        peercount=0 tried=9 static=0
WARN [10-20|21:07:47.967] Post-merge network, but no beacon client seen. Please launch one to follow the chain! 
INFO [10-20|21:07:53.281] Looking for peers                        peercount=0 tried=13 static=0
INFO [10-20|21:08:03.346] Looking for peers                        peercount=0 tried=9  static=0
```

## Criando Contas na Rede

O comando `geth account new` cria uma nova conta.

<!--
```bash
[rag@nitro-ryzen ~]$ geth account new
INFO [10-20|21:13:44.948] Maximum peer count                       ETH=50 LES=0 total=50
INFO [10-20|21:13:44.949] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
Your new account is locked with a password. Please give a password. Do not forget this password.
Password: 
Repeat password: 

Your new key was generated

Public address of the key:   0x668a07cAf4f4b2A5939051d25DA2334a4c425599
Path of the secret key file: /home/rag/.ethereum/keystore/UTC--2022-10-21T00-14-13.552574058Z--668a07caf4f4b2a5939051d25da2334a4c425599

- You can share your public address with anyone. Others need it to interact with you.
- You must NEVER share the secret key with anyone! The key controls access to your funds!
- You must BACKUP your key file! Without the key, it's impossible to access account funds!
- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!

[rag@nitro-ryzen ~]$ 

```
-->

```bash
[rogerio@ryzen-nitro execution]$ geth account new
INFO [04-15|18:16:38.829] Maximum peer count                       ETH=50 LES=0 total=50
INFO [04-15|18:16:38.829] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
Your new account is locked with a password. Please give a password. Do not forget this password.
Password: 
Repeat password: 

Your new key was generated

Public address of the key:   0x43B5b06925E7803F6666f4fd1D2EAb6ab6A7dCd5
Path of the secret key file: /home/rogerio/.ethereum/keystore/UTC--2023-04-15T21-16-57.557568906Z--43b5b06925e7803f6666f4fd1d2eab6ab6a7dcd5

- You can share your public address with anyone. Others need it to interact with you.
- You must NEVER share the secret key with anyone! The key controls access to your funds!
- You must BACKUP your key file! Without the key, it's impossible to access account funds!
- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!

```


## Listando as Contas

As contas existentes ou que foram criadas podem ser listadas com o comando `geth account list`.

```bash
[rag@nitro-ryzen ~]$ geth account list
INFO [10-20|21:15:41.981] Maximum peer count                       ETH=50 LES=0 total=50
INFO [10-20|21:15:41.982] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
INFO [10-20|21:15:41.982] Set global gas cap                       cap=50,000,000
Account #0: {668a07caf4f4b2a5939051d25da2334a4c425599} keystore:///home/rag/.ethereum/keystore/UTC--2022-10-21T00-14-13.552574058Z--668a07caf4f4b2a5939051d25da2334a4c425599
[rag@nitro-ryzen ~]$
```

A documentação, bem como comandos e parâmetros podem ser acessados em <https://geth.ethereum.org/docs>

Executando com opção de responder a comandos via `RPC`. A documentação desta parte está disponível em <https://geth.ethereum.org/docs/rpc/server>.

geth --goerli --syncmode snap --http --http.addr 127.0.0.1 --http.port 8559 --http.api "eth,net,web3,personal,engine,admin,debug" --authrpc.addr localhost --authrpc.port 8551 --authrpc.vhosts localhost --nodiscover --maxpeers 15

geth --http --http.api eth,net,web3



```bash
[rag@nitro-ryzen ~]$ geth --mainnet --syncmode snap --http --http.addr 127.0.0.1 --http.port 8559 --http.api "eth,net,web3,personal"
INFO [10-20|21:57:05.774] Starting Geth on Ethereum mainnet... 
INFO [10-20|21:57:05.775] Bumping default cache on mainnet         provided=1024 updated=4096
INFO [10-20|21:57:05.777] Maximum peer count                       ETH=50 LES=0 total=50
INFO [10-20|21:57:05.779] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
INFO [10-20|21:57:05.784] Set global gas cap                       cap=50,000,000
INFO [10-20|21:57:05.815] Allocated trie memory caches             clean=614.00MiB dirty=1024.00MiB
INFO [10-20|21:57:05.815] Allocated cache and file handles         database=/home/rag/.ethereum/geth/chaindata cache=2.00GiB handles=262,144
INFO [10-20|21:57:05.840] Opened ancient database                  database=/home/rag/.ethereum/geth/chaindata/ancient/chain readonly=false
INFO [10-20|21:57:06.054]  
INFO [10-20|21:57:06.055] --------------------------------------------------------------------------------------
INFO [10-20|21:57:06.055] Chain ID:  1 (mainnet) 
INFO [10-20|21:57:06.055] Consensus: Beacon (proof-of-stake), merged from Ethash (proof-of-work) 
INFO [10-20|21:57:06.055]  
INFO [10-20|21:57:06.055] Pre-Merge hard forks: 
INFO [10-20|21:57:06.055]  - Homestead:                   1150000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/homestead.md) 
INFO [10-20|21:57:06.055]  - DAO Fork:                    1920000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/dao-fork.md) 
INFO [10-20|21:57:06.055]  - Tangerine Whistle (EIP 150): 2463000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/tangerine-whistle.md) 
INFO [10-20|21:57:06.055]  - Spurious Dragon/1 (EIP 155): 2675000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/spurious-dragon.md) 
INFO [10-20|21:57:06.055]  - Spurious Dragon/2 (EIP 158): 2675000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/spurious-dragon.md) 
INFO [10-20|21:57:06.055]  - Byzantium:                   4370000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/byzantium.md) 
INFO [10-20|21:57:06.055]  - Constantinople:              7280000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/constantinople.md) 
INFO [10-20|21:57:06.055]  - Petersburg:                  7280000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/petersburg.md) 
INFO [10-20|21:57:06.055]  - Istanbul:                    9069000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/istanbul.md) 
INFO [10-20|21:57:06.055]  - Muir Glacier:                9200000  (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/muir-glacier.md) 
INFO [10-20|21:57:06.055]  - Berlin:                      12244000 (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/berlin.md) 
INFO [10-20|21:57:06.055]  - London:                      12965000 (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/london.md) 
INFO [10-20|21:57:06.055]  - Arrow Glacier:               13773000 (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md) 
INFO [10-20|21:57:06.055]  - Gray Glacier:                15050000 (https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md) 
INFO [10-20|21:57:06.055]  
INFO [10-20|21:57:06.055] Merge configured: 
INFO [10-20|21:57:06.055]  - Hard-fork specification:    https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/paris.md 
INFO [10-20|21:57:06.055]  - Network known to be merged: true 
INFO [10-20|21:57:06.055]  - Total terminal difficulty:  58750000000000000000000 
INFO [10-20|21:57:06.055]  - Merge netsplit block:       <nil> 
INFO [10-20|21:57:06.055] --------------------------------------------------------------------------------------
INFO [10-20|21:57:06.055]  
INFO [10-20|21:57:06.055] Disk storage enabled for ethash caches   dir=/home/rag/.ethereum/geth/ethash count=3
INFO [10-20|21:57:06.055] Disk storage enabled for ethash DAGs     dir=/home/rag/.ethash               count=2
INFO [10-20|21:57:06.056] Initialising Ethereum protocol           network=1 dbversion=8
INFO [10-20|21:57:06.068] Loaded most recent local header          number=0 hash=d4e567..cb8fa3 td=17,179,869,184 age=53y6mo3w
INFO [10-20|21:57:06.068] Loaded most recent local full block      number=0 hash=d4e567..cb8fa3 td=17,179,869,184 age=53y6mo3w
INFO [10-20|21:57:06.068] Loaded most recent local fast block      number=0 hash=d4e567..cb8fa3 td=17,179,869,184 age=53y6mo3w
INFO [10-20|21:57:06.069] Loaded local transaction journal         transactions=0 dropped=0
INFO [10-20|21:57:06.069] Regenerated local transaction journal    transactions=0 accounts=0
INFO [10-20|21:57:06.069] Chain post-merge, sync via beacon client 
INFO [10-20|21:57:06.069] Gasprice oracle is ignoring threshold set threshold=2
WARN [10-20|21:57:06.070] Engine API enabled                       protocol=eth
INFO [10-20|21:57:06.073] Starting peer-to-peer node               instance=Geth/v1.10.25-stable-69568c55/linux-amd64/go1.19.1
INFO [10-20|21:57:06.095] New local node record                    seq=1,665,519,113,934 id=da440578e33a2ce7 ip=127.0.0.1 udp=30303 tcp=30303
INFO [10-20|21:57:06.096] Started P2P networking                   self=enode://9ae8fcdad4a7243d1bd2308a159c5800ec170e588862be110152627c9ed3fa67376ef8c7526d7a56e9bb72da729cf792c7bef86c095471995cc352f9e353acfc@127.0.0.1:30303
INFO [10-20|21:57:06.097] IPC endpoint opened                      url=/home/rag/.ethereum/geth.ipc
INFO [10-20|21:57:06.098] Loaded JWT secret file                   path=/home/rag/.ethereum/geth/jwtsecret crc32=0xdeccafe4
INFO [10-20|21:57:06.098] HTTP server started                      endpoint=127.0.0.1:8559 auth=false prefix= cors= vhosts=localhost
INFO [10-20|21:57:06.099] WebSocket enabled                        url=ws://127.0.0.1:8551
INFO [10-20|21:57:06.099] HTTP server started                      endpoint=127.0.0.1:8551 auth=true  prefix= cors=localhost vhosts=localhost
INFO [10-20|21:57:15.361] New local node record                    seq=1,665,519,113,935 id=da440578e33a2ce7 ip=187.95.110.26 udp=32871 tcp=30303
INFO [10-20|21:57:16.097] Looking for peers                        peercount=0 tried=2 static=0
INFO [10-20|21:57:26.262] Looking for peers                        peercount=0 tried=9 static=0
INFO [10-20|21:57:36.278] Looking for peers                        peercount=1 tried=6 static=0
WARN [10-20|21:57:41.071] Post-merge network, but no beacon client seen. Please launch one to follow the chain! 
INFO [10-20|21:57:46.410] Looking for peers                        peercount=1 tried=13 static=0
INFO [10-20|21:57:56.453] Looking for peers                        peercount=1 tried=11 static=0
WARN [10-20|21:57:57.257] Snapshot extension registration failed   peer=88f932f1 err="peer connected on snap without compatible eth support"
INFO [10-20|21:58:06.562] Looking for peers                        peercount=1 tried=12 static=0
INFO [10-20|21:58:16.663] Looking for peers                        peercount=1 tried=18 static=0
INFO [10-20|21:58:26.782] Looking for peers                        peercount=1 tried=13 static=0
INFO [10-20|21:58:36.839] Looking for peers                        peercount=1 tried=8  static=0
INFO [10-20|21:58:46.845] Looking for peers                        peercount=1 tried=7  static=0
INFO [10-20|21:58:56.920] Looking for peers                        peercount=1 tried=17 static=0
INFO [10-20|21:59:06.974] Looking for peers                        peercount=1 tried=9  static=0
INFO [10-20|21:59:16.997] Looking for peers                        peercount=1 tried=8  static=0
INFO [10-20|21:59:27.042] Looking for peers                        peercount=1 tried=11 static=0
INFO [10-20|21:59:37.100] Looking for peers                        peercount=1 tried=10 static=0
INFO [10-20|21:59:47.102] Looking for peers                        peercount=1 tried=4  static=0
INFO [10-20|21:59:57.232] Looking for peers                        peercount=1 tried=15 static=0
INFO [10-20|22:00:07.251] Looking for peers                        peercount=1 tried=5  static=0
INFO [10-20|22:00:17.284] Looking for peers                        peercount=1 tried=8  static=0
INFO [10-20|22:00:27.336] Looking for peers                        peercount=1 tried=11 static=0
```

## Executando o Console JavaScript

O console `Javascript` pode também ser conectado ao nó `Geth` usando `IPC`. Quando o `Geth` é iniciado, um arquivo `geth.ipc` é criado automaticamente e salvo no diretório de dados. Este arquivo ou um caminho customizado para um arquivo IPC pode ser passado para o `Geth` usando o parâmetro `attach`:

```bash
[rag@nitro-ryzen ~]$ geth attach /home/rag/.ethereum/geth.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.10.25-stable-69568c55/linux-amd64/go1.19.1
coinbase: 0x668a07caf4f4b2a5939051d25da2334a4c425599
at block: 0 (Wed Dec 31 1969 21:00:00 GMT-0300 (-03))
 datadir: /home/rag/.ethereum
 modules: admin:1.0 debug:1.0 engine:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

To exit, press ctrl-d or type exit
>
```

## Verificação do Funcionamento da Rede

Para verificar o funcionamento da rede, utilize o comando `net.listing`:

```bash
[rag@nitro-ryzen ~]$ geth attach /home/rag/.ethereum/geth.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.10.25-stable-69568c55/linux-amd64/go1.19.1
coinbase: 0x668a07caf4f4b2a5939051d25da2334a4c425599
at block: 0 (Wed Dec 31 1969 21:00:00 GMT-0300 (-03))
 datadir: /home/rag/.ethereum
 modules: admin:1.0 debug:1.0 engine:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

To exit, press ctrl-d or type exit
> net.listening
true

```

A mesma verificação pode ser feita via `RPC` `JSON`:

```bash
[rag@nitro-ryzen ~]$ curl -X POST --insecure -H "Content-Type: application/json" --data '{"jsonrpc":"2.0", "method":"net_listening","params":[], "id":64}' http://localhost:8559
{"jsonrpc":"2.0","id":64,"result":true}

```


curl -X POST --location 'http://localhost:8559' --data '{"jsonrpc":"2.0","method":"net_listening","params":[],"id":67}'

{
  "id":67,
  "jsonrpc":"2.0",
  "result":true
}


# CORRIGIR: https://stackoverflow.com/questions/75681463/the-error-personal-is-not-defined-occurs-when-running-geth
personal foi depreciado.


Para criar usuários: clef newaccount --keystore goerli/keystore/

#############

## Listando as Contas pelo Console

A lista de contas pode ser recuperada através dos comandos no console `personal.listAccounts` e por `RPC` `{"method": "personal_listAccounts", "params": []}`.

```bash
[rag@nitro-ryzen ~]$ geth attach /home/rag/.ethereum/geth.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.10.25-stable-69568c55/linux-amd64/go1.19.1
coinbase: 0x668a07caf4f4b2a5939051d25da2334a4c425599
at block: 0 (Wed Dec 31 1969 21:00:00 GMT-0300 (-03))
 datadir: /home/rag/.ethereum
 modules: admin:1.0 debug:1.0 engine:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

To exit, press ctrl-d or type exit
> personal.listAccounts
["0x668a07caf4f4b2a5939051d25da2334a4c425599"]
> 
```

Via comando `curl` no terminal para listar as contas usando `RPC`:

```bash
[rag@nitro-ryzen ~]$ curl -X POST --insecure -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[], "id":64}' http://localhost:8559
{"jsonrpc":"2.0","id":64,"result":["0x668a07caf4f4b2a5939051d25da2334a4c425599"]}
```

Outros comandos podem ser executados da mesma maneira via console ou invocação `RPC`.

## Solicitando valores para Faucets

> eth.accounts
["0xc4d51e4424c6d1e67f61742c63f0f42c1c3b1fb3", "0xbe6e6f1a8273286242efad565f63c2fb2ad08308"]

![](figuras/request-goerli-faucet-00.png)


![](figuras/request-goerli-faucet-01.png)


![](figuras/request-goerli-faucet-02.png)


![](figuras/request-goerli-faucet-03.png)

Verificar a transação: <https://testnet.starkscan.co/tx/0x7533e77fdf62e0f9b444d6df646e566242baacb5ff501df9846da531a0bd151>


```javascript
> eth.getBalance("0xc4d51e4424c6d1e67f61742c63f0f42c1c3b1fb3")

0
> 

```

Fazer a transferência de uma conta para outra e verificar se a transação aparece na rede de teste.

* Verificação dos valores em cada carteira:

```bash
> web3.fromWei(eth.getBalance("0xc4d51e4424c6d1e67f61742c63f0f42c1c3b1fb3"), "ether")
320
> web3.fromWei(eth.getBalance("0xbe6e6f1a8273286242efad565f63c2fb2ad08308"), "ether")
0
> web3.fromWei(eth.getBalance(eth.coinbase), "ether")
320
```

* Enviar 100 ethers da primeira para a segunda carteira:

```bash
> eth.sendTransaction({from: "0xc4d51e4424c6d1e67f61742c63f0f42c1c3b1fb3", to: "0xbe6e6f1a8273286242efad565f63c2fb2ad08308", value: 100})

> eth.sendTransaction({from: "0xc4d51e4424c6d1e67f61742c63f0f42c1c3b1fb3", to: "0xbe6e6f1a8273286242efad565f63c2fb2ad08308", value:web3.toWei(100, "ether") })



## Leitura Recomendada
\normalsize

[alertblock]{Leitura Recomendada}

Capítulo 12: _Futher Ethereum_ [@178948620180101]

**Livro**: [IMRAN BASHIR. Mastering Blockchain : Distributed Ledger Technology, Decentralization, and Smart Contracts Explained, 2nd Edition.](https://search.ebscohost.com/login.aspx?direct=true&db=e000xww&AN=1789486&authtype=shib&lang=pt-br&site=eds-live&scope=site&ebv=EB&ppid=pp_310)

[/alertblock]

\newpage

<!-- Prática 2 -->

# Prática: Criando uma Rede Ethereum Privada

O objetivo dessa prática é criarmos uma Rede _Ethereum_ Privada.

## Criando uma Rede Privada Local

Para a criação de uma nova Rede Privada Local é necessário fazermos algumas configuraçãos. Precisamos criar um diretório `mkdir ~/.etherprivate` para ser a base de armazenamento para a nova rede. Temos que fornecer a configurações iniciais para a nova rede, criando um arquivo `privategenesis.json` em `~/.etherprivate`. O conteúdo do arquivo `privategenesis.json` deve ser o listado no Código \ref{cod:privategenesis}.

```{#cod:privategenesis .json caption="Genesis File"}
{
  "nonce": "0x0000000000000042",
  "timestamp": "0x00",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "extraData": "0x00",
  "gasLimit": "0x8000000",
  "difficulty": "0x0400",
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x3333333333333333333333333333333333333333",
  "alloc": {},
  "config": {
    "chainId": 786,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0
  }
}

```

Após a configuração inicial, o `Geth` é utilizado para a criação e inicialização da nova Rede. O `geth` deve ser executado com os parâmetros `--datadir`, indicando o diretório onde os dados da nova rede serão armazenados e com o `init` indicando o caminho para o _genesis file_, conforme Código \ref{cod:init:etherprivate}.

```{#cod:init:etherprivate .bash caption="Inicialização da Rede Privada Local"}
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

## Executando a nova Rede

O mesmo cliente `Geth` pode ser iniciado, executando com base na nova rede criada.

```bash
$ geth --datadir ~/.etherprivate/ --allow-insecure-unlock --networkid 786 --http --http.addr 127.0.0.1 --http.port 8559 --http.api "eth,net,web3,personal,engine,admin,debug" --keystore ~/.etherprivate/keystore --authrpc.addr localhost --authrpc.port 8551 --authrpc.vhosts localhost --authrpc.jwtsecret ~/.etherprivate/geth/jwtsecret --nodiscover --maxpeers 15

```

## Interagindo com a nova Rede

O console pode ser utilizado na interação com a instância da nova rede em execução.

```bash
$ geth attach ~/.etherprivate/geth.ipc
```

## Criando contas na nova Rede

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

* Enviar $100$ _ethers_ da primeira para a segunda carteira:

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

## Leitura Recomendada
\normalsize

[alertblock]{Leitura Recomendada}

Capítulo 12: _Futher Ethereum_ [@178948620180101]

**Livro**: [IMRAN BASHIR. Mastering Blockchain : Distributed Ledger Technology, Decentralization, and Smart Contracts Explained, 2nd Edition.](https://search.ebscohost.com/login.aspx?direct=true&db=e000xww&AN=1789486&authtype=shib&lang=pt-br&site=eds-live&scope=site&ebv=EB&ppid=pp_310)

[/alertblock]


\newpage
<!-- Prática 3 -->


# Prática: Instalando o `Solidity`
   
Para os testes com o desenvolvimento de Contratos Inteligentes iremos utilizar a linguagem `Solidity`. O Compilador para a linguagem `Solidity` é o `solc`. O `solc` converte código de alto nível escrito em `Solidity` para _bytecode_ da _Ethereum Virtual Machine (EVM)_.

O comando para instalação em distribuições `Ubuntu` ou derivados do `Debian`:

```bash
$ sudo apt-get install solc
```

Outras distribuições como o `Manjaro Linux`, o pacote `solidity` deve ser instalado:

```bash
$ pacaur -S solidity
```

Feita a instalação, para verificar a versão instalada execute o comando:

```bash
$ solc --version
solc, the solidity compiler commandline interface
Version: 0.8.19+commit.7dd6d404.Linux.g++
```

## Compilando um Exemplo

Para verificar o funcionamento e algumas funcionalidades vamos criar um contrato simples, com o nome `Addition.sol` e com o seguinte conteúdo:

```solidity
pragma solidity ^0.8.19;

contract Addition {
   uint8 x;

   function addx(uint8 y, uint8 z ) public {
      x = y + z;
   }
   function retrievex() view public returns (uint8) {
      return x;
   }
}
```

Se a versão do `solidity` na sua máquina for diferente, basta ajustar no arquivo fonte colocando a versão correta.

Para a compilação simples execute:

```bash
[rag@ryzen-nitro]$ solc Addition.sol
Compiler run successful. No output generated.
[rag@ryzen-nitro]$
```

## Visualizando o _bytecode_ gerado

O `solc` tem alguns parâmetros interessantes que nos permite verificar o formato binário do contrato, que é a sequência dos _bytecodes_ gerados para a __EVM__:

```bash
$ solc --bin Addition.sol
Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
--> Addition.sol


======= Addition.sol:Addition =======
Binary:
608060405234801561001057600080fd5b506101f6806100206000396000f3fe608060405234801561001057
600080fd5b50600436106100365760003560e01c806336718d801461003b578063ac04e0a014610057575b60
0080fd5b610055600480360381019061005091906100f2565b610075565b005b61005f61009e565b60405161
006c9190610141565b60405180910390f35b8082610081919061018b565b6000806101000a81548160ff0219
16908360ff1602179055505050565b60008060009054906101000a900460ff16905090565b600080fd5b6000
60ff82169050919050565b6100cf816100b9565b81146100da57600080fd5b50565b6000813590506100ec81
6100c6565b92915050565b60008060408385031215610109576101086100b4565b5b60006101178582860161
00dd565b9250506020610128858286016100dd565b9150509250929050565b61013b816100b9565b82525050
565b60006020820190506101566000830184610132565b92915050565b7f4e487b7100000000000000000000
000000000000000000000000000000000000600052601160045260246000fd5b6000610196826100b9565b91
506101a1836100b9565b9250828201905060ff8111156101ba576101b961015c565b5b9291505056fea26469
70667358221220e0ec16eaf684603f4f7c74f327a27e4a1a981dfac0cb258479ffe452abda2e4964736f6c63
430008110033
```

## Estimando a taxa `gas`

Como uma taxa de `gas` é cobrada para cada operação que a __EVM__ executa, é uma boa prática estimar o `gas` antes de implantar um contrato em uma rede ativa. O parâmetro `--gas` pode ser utilizado para fazer essa estimativa.

```bash
$ solc --gas Addition.sol
======= Addition.sol:Addition =======
Gas estimation:
construction:
   147 + 100400 = 100547
external:
   addx(uint8,uint8):   infinite
   retrievex(): 2479
```

## Gerando a ABI

A _Application Binary Interface (ABI)_ é uma forma padrão de interagir com os contratos, sabermos como os métodos estão disponíveis e quais parâmetros utilizam. Para a gerar a `ABI` do contrato utilize o `solc` com o parâmetro `--abi`.

```bash
$ solc --abi Addition.sol
======= Addition.sol:Addition =======
Contract JSON ABI
[{"inputs":[{"internalType":"uint8","name":"y","type":"uint8"},{"internalType":"uint8",
"name":"z","type":"uint8"}],"name":"addx","outputs":[],"stateMutability":"nonpayable",
"type":"function"},{"inputs":[],"name":"retrievex","outputs":[{"internalType":"uint8",
"name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]
```

## Processo de Compilação Completo

O processo de compilação completo do contrato `Addition.sol` pode ser feito com o comando: 

```bash
$ solc --bin --abi -o bin Addition.sol
Compiler run successful. Artifact(s) can be found in directory "bin".
```

Se erros ocorrerem serão mostrados no terminal, caso contrário o compilador irá mostrar uma mensagem de sucesso. Com o parâmetro de diretório de saída `-o bin`, serão gerados os arquivos no diretório `bin`:

* __Addition.abi:__ Contém a `ABI` do contrato no formato `JSON`.
* __Addition.bin:__ Contém a representação binária do código do contrato.

O conteúdo de cada um dos arquivos pode ser visualizado:

```bash
$ cat bin/Addition.bin
608060405234801561001057600080fd5b506101f6806100206000396000f3fe608060405234801561001057
600080fd5b50600436106100365760003560e01c806336718d801461003b578063ac04e0a014610057575b60
0080fd5b610055600480360381019061005091906100f2565b610075565b005b61005f61009e565b60405161
006c9190610141565b60405180910390f35b8082610081919061018b565b6000806101000a81548160ff0219
16908360ff1602179055505050565b60008060009054906101000a900460ff16905090565b600080fd5b6000
60ff82169050919050565b6100cf816100b9565b81146100da57600080fd5b50565b6000813590506100ec81
6100c6565b92915050565b60008060408385031215610109576101086100b4565b5b60006101178582860161
00dd565b9250506020610128858286016100dd565b9150509250929050565b61013b816100b9565b82525050
565b60006020820190506101566000830184610132565b92915050565b7f4e487b7100000000000000000000
000000000000000000000000000000000000600052601160045260246000fd5b6000610196826100b9565b91
506101a1836100b9565b9250828201905060ff8111156101ba576101b961015c565b5b9291505056fea26469
70667358221220e0ec16eaf684603f4f7c74f327a27e4a1a981dfac0cb258479ffe452abda2e4964736f6c63
430008110033

$ cat bin/Addition.abi 
[{"inputs":[{"internalType":"uint8","name":"y","type":"uint8"},{"internalType":"uint8",
"name":"z","type":"uint8"}],"name":"addx","outputs":[],"stateMutability":"nonpayable",
"type":"function"},{"inputs":[],"name":"retrievex","outputs":[{"internalType":"uint8",
"name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]
```

## Visualizando os _Opcodes_

Os _opcodes_ da instruções geradas para a __EVM__ podem ser visualizados compilando-se com o parâmetro `--opcodes`:

```bash
[rag@ryzen-nitro ]$ solc --opcodes Addition.sol 

======= Addition.sol:Addition =======
Opcodes:
PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1F6 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x36718D80 EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xAC04E0A0 EQ PUSH2 0x57 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x55 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x50 SWAP2 SWAP1 PUSH2 0xF2 JUMP JUMPDEST PUSH2 0x75 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x5F PUSH2 0x9E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x6C SWAP2 SWAP1 PUSH2 0x141 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST DUP1 DUP3 PUSH2 0x81 SWAP2 SWAP1 PUSH2 0x18B JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xCF DUP2 PUSH2 0xB9 JUMP JUMPDEST DUP2 EQ PUSH2 0xDA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xEC DUP2 PUSH2 0xC6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x109 JUMPI PUSH2 0x108 PUSH2 0xB4 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x117 DUP6 DUP3 DUP7 ADD PUSH2 0xDD JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x128 DUP6 DUP3 DUP7 ADD PUSH2 0xDD JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH2 0x13B DUP2 PUSH2 0xB9 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x156 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x132 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x196 DUP3 PUSH2 0xB9 JUMP JUMPDEST SWAP2 POP PUSH2 0x1A1 DUP4 PUSH2 0xB9 JUMP JUMPDEST SWAP3 POP DUP3 DUP3 ADD SWAP1 POP PUSH1 0xFF DUP2 GT ISZERO PUSH2 0x1BA JUMPI PUSH2 0x1B9 PUSH2 0x15C JUMP JUMPDEST JUMPDEST SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 GT 0x5E RETURNDATACOPY SLOAD PUSH24 0xA690F575038FE9F1805C21F5FB9C1486E175C2D740F794C0 SDIV DUP5 MSIZE PUSH5 0x736F6C6343 STOP ADDMOD SGT STOP CALLER 
[rag@ryzen-nitro]$

```

Para uma lista completa de parâmetros aceitos pelo `solc` execute no teminal o comando `solc --help`.

## Leitura Recomendada
\normalsize

[alertblock]{Leitura Recomendada}

Capítulo 14: _Development Tools and Frameworks_ [@178948620180101]

**Livro**: [IMRAN BASHIR. Mastering Blockchain : Distributed Ledger Technology, Decentralization, and Smart Contracts Explained, 2nd Edition.](https://search.ebscohost.com/login.aspx?direct=true&db=e000xww&AN=1789486&authtype=shib&lang=pt-br&site=eds-live&scope=site&ebv=EB&ppid=pp_431)

[/alertblock]

\normalsize

\newpage
<!-- Prática 4 -->

# Prática: Introdução ao Web3

A proposta desta prática é explorarmos a biblioteca `Web3` com o cliente `Geth`, e os métodos de desenvolvimento, teste e verificação de contratos inteligentes com `Ganache`, console do cliente `Geth`. Fazer o _deploy_ de contratos inteligentes utilizando o _console_ `Geth` e o `Truffle`. O `Truffle` pode ser usado para testar, migrar contratos inteligentes.

## Instalação das Ferramentas

3. Instale as outras ferramentas: `Node.js`, `Ganache` e `Ganache-CLI`, `Truffle`, `Drizzle`, `Embark` e outras ferramentas indicadas no capítulo. 


1. Instale o `Node.js` e as bibliotecas necessárias.
2. Utilizando o `Truffle` baixar o exemplo de projeto `MetaCoin` e fazer o `deploy` no `Ganache`.

## Leitura Recomendada
\normalsize

[alertblock]{Leitura Recomendada}

__Capítulo 15: Introducing Web3__

**Livro**: [IMRAN BASHIR. Mastering Blockchain : Distributed Ledger Technology, Decentralization, and Smart Contracts Explained, 2nd Edition.](https://search.ebscohost.com/login.aspx?direct=true&db=e000xww&AN=1789486&authtype=shib&lang=pt-br&site=eds-live&scope=site&ebv=EB&ppid=pp_463)

[/alertblock]


\newpage
<!-- Prática 5 -->

# Prática: Desenvolvendo um Token

A proposta desta prática é explorarmos o desenvolvimento de _Tokens_ e o suporte à Tokenização.



## _Word Cloud_

![](figuras/praticas.md.wordcloud.png){ width=100% }


# Referências
