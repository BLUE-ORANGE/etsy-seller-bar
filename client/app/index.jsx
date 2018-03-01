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
  }

  getShopId(id) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/v1/product/${id}`,
      // contentType: 'application/json',
      success: (data) => {
        if (data) {
          console.log(data);
          this.setState({
            shopId: data.results
          });
        }
      } 
    })
  }

  componentWillMount() {
    // this.getShopId(40);
    this.setState({
      sellerName: 'clay9s',
      sellerImage: 'https://img1.etsystatic.com/103/0/11970090/isla_75x75.17058725_qr59xcjn.jpg',
      images: [{imageURL: 'https://i.imgur.com/0fEC6Mg.jpg', imageTitle: 'Cute Puppies Playing Friendship'}, {imageURL: 'https://i.imgur.com/xlqmjKX.jpg', imageTitle: 'Kayda-pants'}]
    })
  }

  // getImages() {
  //   console.log('in method');
  //   $.ajax({
  //     method: 'GET',
  //     url: '/image',
  //     contentType: 'application/json',
  //     success: (data) => {
  //       if (data) {
  //         this.setState({
  //           images: data
  //         });
  //       }
  //     },
     
      
  //   })
    
  // }

  render(props) {

    return (
      <div>
        <h1>{this.state.sellerName}</h1>
        <img src={this.state.sellerImage} style={{'width':'75', 'height':'75'}}></img>
          <ul>
          {this.state.images.map((image) => {
            return (
              <li>
                {console.log(image.imageURL)}
                {/* <img src='https://i.imgur.com/0fEC6Mg.jpg'></img> */}
              <img src={image.imageURL} style={{'width':'75', 'height':'75'}}></img>
              {/* <footer>{image.imageTitle}</footer> */}
              </li>
            );
          })}
          </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));