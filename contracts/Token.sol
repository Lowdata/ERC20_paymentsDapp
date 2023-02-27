// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// import "erc1.sol";
// import "Token.sol";
// import "/workspace/try1/Project1/contracts/ERC20.sol"

contract  Token{
    string public name  = "Token";
    string public symbol = "T_T";
    uint256 public totalSupply = 100000;
    
    mapping(address => uint256) balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    event Transfer(
        
        address indexed to,
        uint256 _value
    );

    event Approve(
        address indexed owner,
        address indexed spender,
        uint256 _value
    );

    event TransferFrom( address indexed _from,address indexed _to, uint256 _value);
    constructor() {
        balanceOf[msg.sender] = totalSupply;
        
    }

    
    function Balances(address _to) view public returns(uint256){
        return balanceOf[_to];
    }
    function transfer(address _to, uint256 _value) public payable returns(bool success) {

        require(balanceOf[msg.sender] >= _value );

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        emit Transfer( _to, _value);
        return true;
    }

    // //approve

    function approve(address _spender, uint256 _value) public returns(bool success){


        allowance[msg.sender][_spender] = _value;
        emit Approve(msg.sender, _spender, _value);
        return true;
    }
    // function Allowance(address _from, address _to) view public returns (uint256) {
        
        
    //     return allowance[_from][_to];
    // }
    
    
    function transferFrom(address _spender, address _to , uint256 _value) public payable returns(bool success){


        require(balanceOf[_spender] >= _value);

        balanceOf[_spender] -= _value;
        balanceOf[_to] += _value;

        allowance[_spender][msg.sender] -= _value;

        emit TransferFrom(_spender, _to, _value);
        return true;

    }
}
