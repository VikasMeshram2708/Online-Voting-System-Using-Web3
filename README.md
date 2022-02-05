# Online-Voting-System-Using-Web3

# To run this project

1. Open Google Chroem Browser
2. Open Ganache - Local BlockChain Simulator.
3. Open remic IDE in Chrome Broswer ( https://remix.ethereum.org/ )
4. Make a file and name it elections.sol
5. Inside that election.sol file paste the code.

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


6. Inside Remix Choose Web3 Provider for deployment
7. Open Ganache and copy the url link present at the top of it.
8. Paste the url link to isnide Web3 Provider in Remix IDE.
9. Compile and Deploy the Smart Contract(election.sol)
10. open index.html inside a code editor and change ABI code , ehter account no, and deployed contract address.
(ABI code will be present in remix IDE and ether account no will be present in Ganache and Deployed Contract Address will be present in Remix IDE )
11 . Go to SignUp page and Signup with valid credentials
12. Then Login  and the vote buttons will be popped up for voting once any one of them will be clicked your page refreshes and Vote Will be Regestierd.
13. If you will try to login using invalid credentials you will get an error.
14. Also You Will Need the MONGODB COMPASS for storing the User.
