import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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
      url: `http://localhost:3001/v1/products/${id}`,
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
      url: `http://localhost:3001/v1/shops/${id}`,
      // contentType: 'application/json',
      success: (data) => {
        if (data) {
          this.setState({
            sellerImage: data.results[0],
            sellerName: data.results[1]
          });
        }
      } 
    })
  }

  getImages(id) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/v1/shops/${id}/products`,
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
      <div id="seller-wrapper" class="content-wrap-inner-blank col12 ui-toolkit">
        <div class="col-group col-flush">
          <div class="col-md-5">
            <div class="flag">
              <div class="flag-img">
                <img id="seller-image" src={this.state.sellerImage} style={{'width':'75', 'height':'75'}}></img>
              </div>
              <div class="flag-body">
                <div itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" class="text-headline-smaller b mb-xs-1">
                  <span itemprop="title">{this.state.sellerName}</span>
                </div>
              </div>
            </div>
          </div>
          <div id="shop-listings" class="col-md-7">
            <ul class="thumbnail-links">
          {this.state.fourImages.map((image) => {
            return (
              <li>
                <div class="thumbnail-outer">
                  <div class="thumbnail-inner">
                    <img src={image.imageUrl} style={{'width':'69', 'height':'69'}}></img>
                  </div>
                </div>
              </li>
            );
          })}
              <li>
                <div class="thumbnail-outer count-box bg-white" style={{'padding': '3px'}}>
                  <div class="thumbnail-inner">
                    <span class="count-number">{this.state.images.length - this.state.fourImages.length}</span>items
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));