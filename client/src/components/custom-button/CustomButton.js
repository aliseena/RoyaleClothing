// import './CustomButton.scss';
import { CustomButtonContainer } from './Custom-botton-styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer className={`custom-button`} {...props}>
    {children}
  </CustomButtonContainer>
);
export default CustomButton;
