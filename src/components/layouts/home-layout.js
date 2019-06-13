import React, {Component} from 'react';
import Header from '../partials/header'
import Footer from '../partials/footer'

class HomeLayout extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='container maincontainer'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}

export default HomeLayout;