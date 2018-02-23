var rp = require('request-promise');
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);

let writeImagesToFile = (obj) => {
	let i = 0;
  obj.data.forEach((pic) => {
    if (!pic.link.includes('.jpg')) {
      console.log(`${pic.link} doesn't include jpg, skipping`)
    } else {

      var picture = {
        name: pic.title,
        imageUrl: pic.link,
        shopId: Math.floor((Math.random() * 60) + 1)
      }
      fs.appendFileAsync('dataPuppies.json', JSON.stringify(picture, null, 2) +',' + '\n')
        .then((data) => {
          console.log(`File saved: ${picture.name}`);
        })
        .catch((err) => {
          console.log(`error saving file: ${err}`);
        })
      }
    })
}

let options = (page) => {
  return {
    url: `https://api.imgur.com/3/gallery/search/top/{{window}}/${page}/`,
    qs: { q_type: 'jpg', q: 'cute puppies' },

    headers: {
      Authorization: `Client-ID ce6360e2634f0e7`
    }

  };
};

let paginatePuppies = (pageCount) => {
  let page = 1;
  while (page < pageCount) {
    rp(options(page))
      .then((val) => {
      	console.log(val);
        val = JSON.parse(val)
        writeImagesToFile(val);
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      })
      page++
  }
}

paginatePuppies(10);