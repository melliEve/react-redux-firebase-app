import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  //console.log('AUTH', auth);
  // console.log('props', props);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

  return (
    <nav className="nav-wrapper teal darken-2">
      <div className="container">
        <Link to='/' className="brand-logo left">
          mellisPlans
        </Link>
        {auth.isLoaded && links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log('nav state', state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);