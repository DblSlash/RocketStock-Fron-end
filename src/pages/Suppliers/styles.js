import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    
  }
`;


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 22px;


  > nav {
    display: flex;
    gap: 16px;

    > button {
      width: 150px;
    }
  }
`;