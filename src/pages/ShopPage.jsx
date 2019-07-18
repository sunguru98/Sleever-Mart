import React, { Component } from 'react'
import { shopData } from '../shopData.js'
import PreviewCollectionList from '../components/PreviewCollectionList'

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: shopData }
  }
  render() { 
    return (
      <div className='ShopPage'>
        <h1 className='ShopPage__title'>Collections</h1>
        <PreviewCollectionList collections={this.state.collections} />
      </div>
    );
  }
}
 
export default ShopPage;