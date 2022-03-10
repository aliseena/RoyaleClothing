import styled, { css } from 'styled-components';

const googleButtonStyles = css`
  background-color: #1089ff;
`;
const signInAndSingUpButtonStyles = css`
  background-color: #f58840;
`;

const boxShadowStyles = css`
  box-shadow: 0px 9px 14px -5px #b5b5b5;
`;
const InvertedButtonStyles = css`
  background-color: white;
  position: absolute;
  bottom: 50px;
  color: black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getBoxShadow = props => {
  if (props.boxshadow) return boxShadowStyles;
};
const getinverted = props => {
  if (props.inverted) return InvertedButtonStyles;
};

const getButtonStyles = props => {
  if (props.isgooglesignin) return googleButtonStyles;
  if (props.signInAndSignUp) return signInAndSingUpButtonStyles;
  if (props.inverted) return InvertedButtonStyles;
};
export const CustomButtonContainer = styled.button`
  width: auto;
  height: 50px;
  position: relative;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 1rem;
  color: white;
  border: none;
  font-weight: 200;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;

  &:hover {
    animation-direction: alternate;
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  ${getButtonStyles}
  ${getBoxShadow}
`;
