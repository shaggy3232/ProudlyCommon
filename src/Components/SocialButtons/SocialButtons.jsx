import React, { Component } from 'react';
import './SocialButtons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SocialButtons extends Component {
  render() {
    return (
      <div className='social-button-group'>
        <a class="glassIco" href="#"><FontAwesomeIcon icon="facebook-f" /></a>
        <a class="glassIco" href="#"><i class="fab fa-instagram"></i></a>
        <a class="glassIco" href="#"><i class="fab fa-linkedin-in"></i></a>
        <a class="glassIco" href="#"><i class="fab fa-whatsapp"></i></a>
      </div>
    );
  }
}

export default SocialButtons;
