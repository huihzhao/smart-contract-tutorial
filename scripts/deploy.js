// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const Vault = await ethers.getContractFactory('Vault');
    console.log('Deploying Vault...');
    const vault = await Vault.deploy();
    await vault.deployed();
    console.log('Vault deployed to:', vault.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });