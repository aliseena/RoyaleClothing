import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
const OptionContainerStyles = css`
  color: rgb(53, 53, 53);
  font-size: 1.1rem;
  padding: 10px 15px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    font-size: 1rem;
    padding: 10px 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    padding: 10px;
  }
`;
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;
export const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  @media screen and (max-width: 800px) {
    height: 60px;
    margin: 0;
  }
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(NavLink)`
  ${OptionContainerStyles}
`;
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
