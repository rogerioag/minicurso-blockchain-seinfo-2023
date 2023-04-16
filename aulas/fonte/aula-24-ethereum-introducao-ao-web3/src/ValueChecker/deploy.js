var valuecheckerContract = web3.eth.contract([{ "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "returnValue", "type": "bool" }], "name": "valueEvent", "type": "event" }, { "inputs": [{ "internalType": "uint8", "name": "x", "type": "uint8" }], "name": "Matcher", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }]);
var valuechecker = valuecheckerContract.new({
    from: web3.eth.accounts[0],
    data: '0x6080604052600a60005534801561001557600080fd5b5061010d806100256000396000f300608060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063f9d55e21146044575b600080fd5b348015604f57600080fd5b50606f600480360381019080803560ff1690602001909291905050506089565b604051808215151515815260200191505060405180910390f35b600080548260ff1610151560db577f3eb1a229ff7995457774a4bd31ef7b13b6f4491ad1ebb8961af120b8b4b6239c6001604051808215151515815260200191505060405180910390a16001905060dc565b5b9190505600a165627a7a723058209ff756514f1ef46f5650d800506c4eb6be2d8d71c0e2c8b0ca50660fde82c7680029', gas: '4700000'
},
    function (e, contract) {
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + 'transactionHash: ' + contract.transactionHash);
        }
    })