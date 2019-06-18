const ethers = require('ethers');
const aa=require('../build/contracts/Bank.json')
require('dotenv').config();
const pk=process.env.privateKey
let provider = ethers.getDefaultProvider("rinkeby");
let wallet = new ethers.Wallet(pk,provider)
let bytecode=aa.code
let abi=aa.abiDefinition

let factory = new ethers.ContractFactory(abi, bytecode, wallet);
async function deploythecontract()
{
    let contract = await factory.deploy()
    await contract.deployed()
    console.log(contract)
}

deploythecontract()

