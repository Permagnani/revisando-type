import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { Header } from "./components/header";


function App () {
  return(
    <>
    <Header />


    <main>
      <Content title="Aula de revisao" content="Moleza"/>
      <Content title="Aula de react" content="de boa"/>




    </main>

    <Footer />
    
    
    </>
  );
}

export default App;