import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";

const contractAddress = "0x4B21A49a40BEf71477B7B89eDaFe8049016B2E65";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: contractABI,
});