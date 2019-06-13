import React from 'react';
 import '../../assets/css/footer.css'
 import Colors from '../../colors'

const Footer = () => {
    return (
      <footer className='text-center'>
      <div className='footer__content'>
      <p>Sent By: IranRoute.Co.</p>
        <p className='text-left'>Please do not reply to this email. This message was sent from a notification-only address that is not mentioned for answering purpose.</p>
        <p className='text-left'>Instead, please use the following link in order to contact IranRoute's customer support:</p>
        <p className='paddtop-11 paddbottom-11' style={{color:Colors.iranRouteBlueColor1}}>Ask us here</p>
        <p className='paddbottom-11' style={{color:Colors.iranRouteBlueColor1}}>Privacy Policy | Terms & Conditions</p>
        <p className='paddbottom-11'>2019 IranRoute Co. All rights reserved.</p>
      </div>

      </footer>
    )
  }
 
export default Footer;