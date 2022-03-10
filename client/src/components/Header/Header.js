import './Header.scss';
import Logo from '../../assets/crown.png';
import { auth } from '../../firebase/Firebase-utilities';
import { signOut } from 'firebase/auth';
import CartDropDown from '../cart-dropdown/Cart-dropdown';
import { selectCurrentUser } from '../../redux/user-reducer/User-selectors';
import { selectCartHidden } from '../../redux/cart-reducer/Cart-selectors';
import CartIcon from '../cart-icon/Cart-icon';
// redux
import { useSelector } from 'react-redux';
// styled components
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from './Header-styles';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={Logo} alt="logo" className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/" isactiveclass="active">
          Home
        </OptionLink>
        <OptionLink to="/shop" isactiveclass="active">
          Shop
        </OptionLink>
        {/* <OptionLink to="/contact" isactiveclass="active">
          Contact
        </OptionLink> */}
        {currentUser ? (
          <OptionDiv onClick={() => signOut(auth)}>Sign Out</OptionDiv>
        ) : (
          <OptionLink to="/signIn" isactiveclass="active">
            Sign In
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

export default Header;
