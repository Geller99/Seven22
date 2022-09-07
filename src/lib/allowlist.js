

const allowList = [
    { "account": "0xBFcDaD988d3c804cE4497571916c5dc20d09A6C9", "alloc": 1 },
    { "account": "0x26Acf54595A3f438BAE962d471fe84ce6167ed89", "alloc": 1 },
    { "account": "0x684D5D53Ab4A73950d45B58175F242B77b81366E", "alloc": 1 },
    { "account": "0xA4DEDa1Ca25a088777e22fEFb4F55d976FC620f1", "alloc": 1 },
    { "account": "0xF0128F6c493F869F1ad347Ba351D782dD7dFeC68", "alloc": 1},
    { "account": "0xf7577e9bAf9a62C9380608ba7C864494e33c4F35", "alloc": 1},
    { "account": "0xC03B0fEDEA814E0D32738D21Cc2349FAE1affb4c", "alloc": 2},
    { "account": "0x2F302a579eEBd49d813f2F199846F793Bbd537B3", "alloc": 1},
    { "account": "0x894F45197d02f6a0a0FEb43664c3dc5e58979a31", "alloc": 1},
    { "account": "0xD7C590fF97A7dFE709229C98bBA5ccad63dFCfD7", "alloc": 2},
    { "account": "0x997156178b911DE1570FE44dA0B3239d877E793e", "alloc": 2},
    { "account": "0x8275e2e937c6af9da3bb417d0e4fe89400bcd767", "alloc": 3},
    { "account": "0x5DcC11ED6C8F030344891ED1388eF4687649De62", "alloc": 1},
    { "account": "0x879c8450A97dd309eD2967f6b0d0d1B1341f56f7", "alloc": 3},
    { "account": "0xBcCF1763974A8aE51fdD25ebD7c6481e0f81E8f2", "alloc": 5},
    { "account": "0x4ebF7b526f5c076f46130A22Bb00b3670B66C8Ea", "alloc": 1},
    { "account": "0x6Ef400d7edb8242be8B3cb9e03eEC51469840C6A", "alloc": 55},
    { "account": "0x069c2039f2aef978592A367a8F70F07A2Bb8eEC7", "alloc": 2},
    { "account": "0x853b9230d2a96661f0269aF4996B047c3b7F0b51", "alloc": 1},
    { "account": "0x84D00a1F358776Da0D36e93E99a16E37415E00dB", "alloc": 1},
    { "account": "0xB731288df2c0e57FF7517063837d2Cbd3bA6881A", "alloc": 1},
    { "account": "0xABBfC6686CdcDaf9a84c7F9396bD776Aa8591b7F", "alloc": 1},
    { "account": "0x3191B713076F9F438Da310899209Ca89e63f9151", "alloc": 2},
    { "account": "0x8DE1462e9d62363e19303F3bB2AbA506E34cA879", "alloc": 1},
    { "account": "0xB7A763542Ac325B7cFFa70529f3EbeA37036a2C7", "alloc": 1},
    { "account": "0x1aFe605d43C14D19B03b0739fbb88183A6A7b721", "alloc": 1},
    { "account": "0x1B2b43C9CB3581329c7A1CDdAC938920034BaC0C", "alloc": 1},
    { "account": "0x60215C5a77c61ddaa646b65A6b5623A3D129cb6F", "alloc": 2},
    { "account": "0x11e0B87Ab0418926D99F11f433602DE4041CE9c2", "alloc": 1},
    { "account": "0xd0d1BBefA38252cd452EEDE65eaE3762386a5942", "alloc": 2},
    { "account": "0xD660DaB9FFEA88cDc70d976126102e56C7519c2c", "alloc": 5},
    { "account": "0x578630cde9366D21Ed9cFfBF9E5155Ce5C463e50", "alloc": 3},
    { "account": "0x1906578e7A3cB87d8ea96fcf36a17cD83775aF89", "alloc": 1},
    { "account": "0x66bDe825160eB8188FeC9Ae83423A38b9197abe4", "alloc": 1},
    { "account": "0xC4FA24aa8D66C6bac7798344d5Ce0EA19dC16173", "alloc": 1},
    { "account": "0x23DFf4A8C90fDDFcb9A2256Bcb73B5080D60a8aB", "alloc": 1},
    { "account": "0x50857637a24Cf3D9E4D27037551eB7623cF486e0", "alloc": 1},
    { "account": "0x376b40690bA3305A8Cd28EA5692E693E00D9B608", "alloc": 2},
    { "account": "0xCBa4FBFaD809b94184bFff39c1A33501b2bf99D1", "alloc": 1},
    { "account": "0x593183700c4A68cBA7136DaEc6FcC19FEB3d970f", "alloc": 1},
    { "account": "0xcD2ad0a3e32852feaAA96a6ca660B8D1C0a647Da", "alloc": 50},
    { "account": "0xbA3432D3986Cf56e1b6D66D7Fa6cfB7b9769Af21", "alloc": 50},
    { "account": "0xBE2B9a1868c26fB6e1bEb1f236056a26c61b128E", "alloc": 50},
    { "account": "0xa33a70FABFeb361Fe891C208B1c27ec0b64baBEB", "alloc": 5},
  ];

  
  module.exports = allowList;

  // 0xb5e5c70C3521d25F9c8B0CcAcd5A3DE4B32Ec429,10
  // 0xcD2ad0a3e32852feaAA96a6ca660B8D1C0a647Da,5
  // 0xbA3432D3986Cf56e1b6D66D7Fa6cfB7b9769Af21,15
  // 0x90d492c2EE2c76dFCf24Dd97Ca8B61F4659762b6,3
  // 0xa33a70FABFeb361Fe891C208B1c27ec0b64baBEB,4


  // const allowList = [
  //   { "account": "0xb5e5c70C3521d25F9c8B0CcAcd5A3DE4B32Ec429", "alloc": 10 },
  //   { "account": "0xcD2ad0a3e32852feaAA96a6ca660B8D1C0a647Da", "alloc": 5 },
  //   { "account": "0xbA3432D3986Cf56e1b6D66D7Fa6cfB7b9769Af21", "alloc": 15 },
  //   { "account": "0x90d492c2EE2c76dFCf24Dd97Ca8B61F4659762b6", "alloc": 3 },
  //   { "account": "0xa33a70FABFeb361Fe891C208B1c27ec0b64baBEB", "alloc": 4}
  // ];