import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { BuyMeCoffee } from "../../components/BuyMeCoffee";

export default function Home() {
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100vh',
      marginTop: '2rem',
    }}>
      <h1 style={{ marginBottom: "1rem"}}>Leave an $ATL Tip</h1>
      <ConnectEmbed 
        client={client}
        chain={chain}
        theme={"light"}
       />
      <BuyMeCoffee />
    </div>
  );
}
