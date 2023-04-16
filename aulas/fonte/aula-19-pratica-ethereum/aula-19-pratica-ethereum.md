---
title: "Aula 019 - Prática sobre _Ethereum_"
subtitle: "_Visão Geral_"
date: 
abstract: "A proposta desta aula é termos uma Visão Geral sobre rede __Ethereum__, componentes do Ecossistema _Ethereum_. Instalando _Wallets_ e _softwares_ clientes, com a execução de ferramentas e `APIs`."
nocite: |
  [@178948620180101]
---

# Leitura do Capítulo 12: _Futher Ethereum_

1. Faça a leitura do [Capítulo 12: _Futher Ethereum_](https://search.ebscohost.com/login.aspx?direct=true&db=e000xww&AN=1789486&authtype=shib&lang=pt-br&site=eds-live&scope=site&ebv=EB&ppid=pp_310)
   
2. Instalar as ferramentas e testar os comandos apresentados no capítulo.
   
O cliente padrão `Geth` pode ser instalado em sistema derivados do Ubuntu:

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

Criando uma nova conta:

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
As contas existentes ou que foram criadas podem ser listadas com o comando:

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

Executando o console JavaScript:

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

O comando verifica se a rede está funcionando:

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

### Listar as Contas

A lista de contas (_personal_listAccounts: eturns all the Ethereum account addresses of all keys in the key store_), pode ser obtida através dos comandos no console `personal.listAccounts`e por `RPC` `{"method": "personal_listAccounts", "params": []}`.

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

O comando para listar as contas em `RPC`:

```bash
[rag@nitro-ryzen ~]$ curl -X POST --insecure -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[], "id":64}' http://localhost:8559
{"jsonrpc":"2.0","id":64,"result":["0x668a07caf4f4b2a5939051d25da2334a4c425599"]}
```

Outros comandos podem ser executados da mesma maneira via console ou invocação `RPC`.



\normalsize

## Referências {.fragile .allowframebreaks}