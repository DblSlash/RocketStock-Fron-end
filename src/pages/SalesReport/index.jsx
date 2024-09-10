import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Item } from "../Product/styles";
import { Feature } from "../../components/Feature";
import { FiFileText } from "react-icons/fi";


export function SalesReport() {
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get('/sales', { withCredentials: true })
      .then((response) => console.log(response.data));
  }, []);

  return (
    
    <Container>
       
      <nav>
      <Button title="Voltar" onClick={() => navigate('/')} />
      </nav>

      <br></br>
    
      <h1>Relatório de Vendas</h1>

      <br></br>

      <Feature title={"Relatório de 25/09/2011"} icon={FiFileText} to='/reprts' />
      <Feature title={"Relatório de 01/10/2018"} icon={FiFileText} to="/reprts" /> 
      <Feature title={"Relatório de 25/07/2021"} icon={FiFileText} to="/reprts" /> 
      <Feature title={"Relatório de 02/09/2015"} icon={FiFileText} to="/reprts" /> 
      <Feature title={"Relatório de 19/02/2024"} icon={FiFileText} to="/reprts" />  
      
    </Container>

  )
}