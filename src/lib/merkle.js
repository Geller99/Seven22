const { ethers } = require( 'ethers' );
const { MerkleTree } = require( 'merkletreejs' );
const keccak256 = require( 'keccak256' );
const allowList = require('./allowlist');

class Merkle{
  accounts = {};
  tree = null;
  session = null;

  getAccount( account ){
    return this.accounts[ account.toLowerCase() ];
  }

  load(){
      const abiCoder = new ethers.utils.AbiCoder();

      const leaves = allowList.map( item => {
      const account = Merkle.normalize( item.account );
      const allowance = abiCoder.encode(
        [ "tuple( address account, uint256 alloc )" ],
        [ { account: account, alloc: item.alloc } ]
      );

      const leaf = keccak256( allowance );
      this.accounts[ account.toLowerCase() ] = {
        address: account,
        leaf:       leaf,
        alloc: item.alloc
      }

      return leaf;
    });
    
    this.tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  }

  static normalize( account ){
    try{
      return ethers.utils.getAddress( account );
    }
    catch( err ){
      return account;
    }
  }
}

export default Merkle;