import { ec } from "starknet"

const starkKeyPair = ec.genKeyPair();
const starkKeyPub = ec.getStarkKey(starkKeyPair);

console.log(starkKeyPair)
console.log("-----------")
console.log(starkKeyPub)
