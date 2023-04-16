// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
contract valueChecker {
    uint price=10;
    event valueEvent(bool returnValue);
    function Matcher (uint8 x) public returns (bool) {
        if (x>=price) {
            emit valueEvent(true);
            return true;
        }
    }
}
