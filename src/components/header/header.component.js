import React from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component'
import Cartdropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser}  from '../../redux/user/user.selector'
import './header.styles.scss'

import {HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink} from './header.styles'
// import { ReactComponent as Logo } from "../../assets/crown.svg";
//import {ReactComponent as Logo} from './gg.svg'

const Header = ({currentUser,hidden}) => (
  <HeaderContainer>
      <Link className="logo-container" to="/">
       </Link>

    <OptionsContainer>
      <OptionLink  to="/shop">
        SHOP 
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (<OptionLink> <span className="">Welcome {currentUser.displayName}</span></OptionLink>):"" }
      {currentUser ? 
        (<OptionLink  onClick={()=>auth.signOut()}>  SIGN OUT </OptionLink>):
      (<OptionLink  to='/Login'>
        SIGN IN
        </OptionLink> )
                }
        <OptionLink  to='#' >
        <CartIcon/>
      </OptionLink>
     
    </OptionsContainer>
  
   {hidden ? null : <Cartdropdown/>}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);