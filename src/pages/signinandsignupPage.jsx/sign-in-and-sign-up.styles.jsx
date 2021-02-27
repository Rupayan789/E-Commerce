import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width:800px){
    width:300px;
    padding:20px 10px 80px 10px;
    display:grid;
    grid-template-columns:1fr;
    margin:0;
  }
`;
