import type { NextPage } from "next";
import { Header } from "../components/Header";

import { PagamentoComponent } from "../components/Pagamento/index";

const Pagamento: NextPage = () =>{

    return (
        <>
          <Header />
          <PagamentoComponent />
        </>
    );
}


export default Pagamento