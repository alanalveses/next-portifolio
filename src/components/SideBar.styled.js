import styled from 'styled-components';

const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: black;

  .bg {
    position: fixed;
    top: 0;
    left: 0;
    botom: 0;
    width: 400px;
    background: #fff;

    .links {
      position: absolute;
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      a {
        font-size: 40px;
      }
    }
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    top: 25px;
    left: 25px;
    background-color: transparent;
    border: none;
  }
`;

export default SideBarStyled;