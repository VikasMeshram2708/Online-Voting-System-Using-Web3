// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract election
{
    // political parties having initial votes 0;
    uint public shivSena; // party 1
    uint public bjp; // party 2
    uint public bsp; // party 3
    uint public congress; // party 4
    uint public aap; // party 5

    // vote setter functions
    // vote setter funciton for shiv shivSena
    function voteSetterForShivSena()public
    {
        shivSena+=1;
    }

    // vote setter function for bjp
    function voteSetterForBjp() public
    {
        bjp+=1;
    }

    // vote setter function for bsp
    function voteSetterForBsp() public
    {
        bsp+=1;
    }

    // vote setter function for congress
    function voteSetterForCongress() public
    {
        congress+=1;
    }

    // vote setter function for aam aadmi party
    function voteSetterForAap() public
    {
        aap+=1;
    }

}
