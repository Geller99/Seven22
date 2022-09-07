const { MerkleTree } = require( 'merkletreejs' );
const keccak256 = require( 'keccak256' );
const allowList = [];


const leafNodes = allowList.map(address => keccak256(address));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
const rootHash = merkleTree.getRoot();


