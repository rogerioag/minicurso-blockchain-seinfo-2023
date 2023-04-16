
pragma solidity ^0.8.17;
contract Addition {
    uint8 x;
    function addx(uint8 y, uint8 z ) public {
        x = y + z;
    }
    function retrievex() view public returns (uint8){
    return x;
    }
}
