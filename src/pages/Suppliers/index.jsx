
import { useNavigate } from "react-router-dom";
import { Header, Item } from "../Product/styles";
import { Container } from "./styles";
import { Button } from '../../components/Button';

export function Suppliers() {
  const navigate = useNavigate();
  return (

    

    <Container>

    <Header>
      <nav>
      <Button title="Voltar" onClick={() => navigate('/')} />
      </nav>
    </Header>

    <br></br>

      <h1>Fornecedores</h1>
      
    <br></br>


      <Item>Magnum Serviços LTDA.</Item>

      <Item>NutriBite Alimentos</Item>

      <Item>Masteria Produtos LTDA.</Item>
      
    </Container>

  )
}