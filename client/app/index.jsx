import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../styles.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerName: '',
      images: [],
      sellerImage: '',
      fourImages: [],
      prodId: 0,
      shopId: 0
    }
    // this.getImages();
    this.getSellerInfo = this.getSellerInfo.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  getShopId(id) {
    $.ajax({
      method: 'GET',
      url: `/v1/products/${id}`,
      // contentType: 'application/json',
      success: (data) => {
        if (data) {
          console.log(data);
          this.setState({
            shopId: data.results
          });
          this.getSellerInfo(data.results);
          this.getImages(data.results);
        }
      } 
    })
  }

  getSellerInfo(id) {
    $.ajax({
      method: 'GET',
      url: `/v1/shops/${id}`,
      // contentType: 'application/json',
      success: (data) => {
        if (data) {
          this.setState({
            sellerImage: data.results[0],
            sellerName: data.results[1].slice(0,10)
          });
        }
      } 
    })
  }

  getImages(id) {
    $.ajax({
      method: 'GET',
      url: `/v1/shops/${id}/products`,
      // contentType: 'application/json',
      success: (data) => {
        let fourImages = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].id !== this.state.prodId && fourImages.length < 4) fourImages.push(data[i]);
        }
        if (data) {
          this.setState({
            images: data,
            fourImages: fourImages
          });
        }
      } 
    })
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(400));
  }

  componentWillMount() {
    // this.getShopId(40);
    let productId = this.getRandomInt();
    this.getShopId(productId);
    // this.getSellerInfo(16);
    this.setState({
      prodId: productId,
      images: [{imageURL: 'https://i.imgur.com/0fEC6Mg.jpg', imageTitle: 'Cute Puppies Playing Friendship'}, {imageURL: 'https://i.imgur.com/xlqmjKX.jpg', imageTitle: 'Kayda-pants'}]
    })
  }

  render(props) {

    return (
      <div id="seller-wrapper">
        <div id="seller-section">
          <img id="seller-image" src={this.state.sellerImage} style={{'width':'75px', 'height':'75px'}}></img>
          <div>
          <div id="seller-name">{this.state.sellerName}</div>
          <button><div id="fave"><span id="heart">♡ </span><span id="faves">Favorite shop</span></div></button>
          </div>
        </div>
        <ul class="thumbnail-links">
          <li>
              <div class="thumbnail-outer count-number">
                <div class="thumbnail-inner">
                <div class="moreitems"><div class="count-text">{this.state.images.length}</div>items</div>
                </div></div>
              </li>
          {this.state.fourImages.map((image) => {
            return (
              <li>
                <div class="thumbnail-outer">
                <div class="thumbnail-inner">
                <img src={image.imageUrl} style={{'width':'69px', 'height':'69px'}}></img>
                </div></div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ReactDOM.render(<App />, document.getElementById('app'));