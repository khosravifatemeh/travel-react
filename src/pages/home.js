import React from 'react';
import Colors from '../colors'
import IntroducePic from '../assets/image/man-pic.png'
import '../assets/css/home.css'


const Home = () => {
  return (
    <div>
      <main className='content'>
        <article className='content-introduce content--paddtop'>
          <div className='row nopadding'>
            <div className='col-md-8 content-introduce__text'>
              <h1 className='content-heading'>Hi Behnam,</h1>
              <p>Thank you purchasing travel insurance of IranRoute CO.</p>
              <p>Please find the details below for your Order:</p>
            </div>
            <p className='col-md-4 text-left content-introduce__btn-section'>
              <button className='btn btn-default content-introduce__btn' style={{ backgroundColor: Colors.iranRouteBlueColor1 }}>Order Tracking</button>
            </p>
          </div>
          <div className='content-inner'>
            <div className='travel-insurance row'>
              <div className='col-lg-7 nopadding'><img className='travel-insurance__image keep-scale__child' src={IntroducePic} /></div>
              <div className='col-xs-12 col-lg-5 travel-insurance__detail'>
                <p className='paddbottom-10'><strong>Iran Travel Insurance</strong></p>
                <p><strong>Service Code</strong>: IRTD62</p>
                <p><strong>Insurance No</strong>: 12134354</p>
                <p className='paddbottom-11 paddtop-11'><strong>Status: Issued</strong></p>
                <p><strong>Issue Date</strong>: 10 Jun 2019</p>
                <p><strong>Duration of Stay</strong>: 10 days</p>
                <p><strong>Estimated Arrival Date</strong>: 3 Jun 2019</p>
              </div>
            </div>
          </div>

        </article>
        <article className='content--paddtop'>
          <h1 className='content-heading'>Booking Info:</h1>
          <div className='content-inner'>
            <div className='row'>
              <h2 className='content-heading2'>Personal Info:</h2>
            </div>

            <div className='row'>

              <div className='col-md-6 nopadding'>
                <p>First Name:</p>
                <p>Mobile:</p>
                <p>Country:</p>
                <p>Passport No:</p>

              </div>
              <div className='col-md-6 nopadding'>
                <p>Last Name:</p>
                <p>Email:</p>
                <p>City/Town/Suburb</p>
                <p>Address</p>

              </div>
            </div>
            <div className='row paddtop-30'>
              <h2 className='content-heading2'>Billing Info:</h2>
            </div>
            <div className='row billing-info'>
              <div className='col-6 nopadding'>
                <p><strong>Adult(s) No:</strong></p>
                <p><strong>Price/adult</strong></p>
                <p><strong>Sale Price</strong></p>

                <p><strong>Tax</strong></p>
                <p><strong className='paddtop-11'>Total Price</strong></p>
              </div>
              <div className='col-6 nopadding'>
                <p>1 pers</p>
                <p>10</p>
                <p>20</p>
                <p>5%</p>
                <p className='paddtop-11'>21</p>

              </div>
            </div>
            <div className='row payment margin-bottom7rem' style={{ backgroundColor: Colors.iranRouteBlueColor2 }}>
              <div className='col-6 text-right'>
                <p className='nomargin'><strong>Payment Status</strong></p>
                <p className='nomargin'><strong style={{ color: Colors.redColor }}>Pay Amount</strong></p>
              </div>
              <div className='col-6'>
                <p className='nomargin'><strong>Paid</strong></p>
                <p className='nomargin'><strong style={{ color: Colors.redColor }}>21</strong></p>
              </div>
            </div>
          </div>
        </article>
        <article className='content--paddtop margin-bottom7rem'>
          <h1 className='content-heading'>Purchase Condition:</h1>
          <div className='content-inner '>
            <div className='purchase-box'></div>
          </div>
        </article>

      </main>
      <div className='content-bottom'>
        <ul className='content-bottom__menu' style={{ backgroundColor: Colors.iranRouteBlueColor3 }}>
          <li>Iran Routes</li>
          <li>Iran Sights</li>
          <li>Iran Things to Do</li>
          <li>Iran Travel Tips & Guides</li>
        </ul>
      </div>
    </div>

  )
}

export default Home;