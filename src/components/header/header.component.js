import React from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component'
import Cartdropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser}  from '../../redux/user/user.selector'

// import { ReactComponent as Logo } from "../../assets/crown.svg";
//import {ReactComponent as Logo} from './gg.svg'
import "./header.styles.scss";
const Header = ({currentUser,hidden}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      {/* <Logo className="logo" /> */}
       </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP 
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (<Link> <span className="name">Welcome {currentUser.displayName}</span></Link>):"" }
      {currentUser ? 
        (<Link className='option' onClick={()=>auth.signOut()}>  SIGN OUT </Link>):
      (<Link className='option' to='/Login'>
        SIGN IN
        </Link> )
                }
        <Link className="option" to='#' >
        <CartIcon/>
      </Link>
     
    </div>
  
   {hidden ? null : <Cartdropdown/>}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);