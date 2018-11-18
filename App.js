import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Gallery from 'react-native-image-gallery';


export default class App extends Component {




  constructor (props) {
    super(props);
    this.state = {
      index: 0,
      images: [
      {
        caption: 'You are about to watch the ugliest creatures on earth presented by GTINC',
        source: require('./src/static/images/code.jpg'),
        dimensions: { width: 1080, height: 2160 }
      },
      {
        caption: 'The creature of dumbell, known as big president',
        source: require('./src/static/images/alin.jpg'),
        dimensions: { width: 1080, height: 2160 }
      },
      {
        caption: 'Gayish makeuper or ma gyi san',
        source: require('./src/static/images/asan.jpg'),
        dimensions: { width: 720, height: 1080 }
      },
      { caption: '24/7 sleepable creature known as awin', 
        source: require('./src/static/images/awin.jpg'),
        dimensions: { width: 1080, height: 2160 } 
      },
       {
        caption: 'This is me the handsome one 😜 ',
        source: require('./src/static/images/me.jpg'),
        dimensions: { width: 720, height: 1080 }
      },
      {
        caption: 'The big big nose creature or nosy ',
        source: require('./src/static/images/ngamyat.jpg'),
        dimensions: { width: 1080, height: 2160 }
      },
      {
        caption: 'Bua ba ba  bababa, ba ba ba ba falo or bufallo',
        source: require('./src/static/images/winthan.jpg'),
        dimensions: { width: 1080, height: 2160 }
      },
      { caption: 'The human minion or Kelvin ', 
        source: require('./src/static/images/yamin.jpg'),
        dimensions: { width: 720, height: 1080 } 
      },
       {
        caption: 'The idiots movie! 2018 version ',
        source: require('./src/static/images/us.jpg'),
        dimensions: { width: 1080, height: 2160 }
      },
      {
        caption: 'The TWO funny!',
        source: require('./src/static/images/us1.jpg'),
        dimensions: { width: 1080, height: 2160 }
      },
      { caption: 'The art of post modern or ma gyi san ', 
        source: require('./src/static/images/sanwin.jpg'),
        dimensions: { width: 720, height: 1080 } 
      },
      {
        caption: 'The catty toad or Kyawnphar or shawnyhawr',
        source: require('./src/static/images/yimon.jpg'),
        dimensions: { width: 720, height: 1080 }
      }
      ]
    };
    this.onChangeImage = this.onChangeImage.bind(this);

        // this.addImages();
        // this.removeImages();
        // this.removeImage(2, 3000);
      }

      addImages () {
        // Debugging helper : keep adding images at the end of the gallery.
        setInterval(() => {
          const newArray = [...this.state.images, { source: { uri: 'http://i.imgur.com/DYjAHAf.jpg' } }];
          this.setState({ images: newArray });
        }, 5000);
      }

      removeImage (slideIndex, delay) {
        // Debugging helper : remove a given image after some delay.
        // Ensure the gallery doesn't crash and the scroll is updated accordingly.
        setTimeout(() => {
          const newArray = this.state.images.filter((element, index) => index !== slideIndex);
          this.setState({ images: newArray });
        }, delay);
      }

      removeImages () {
        // Debugging helper : keep removing the last slide of the gallery.
        setInterval(() => {
          const { images } = this.state;
          console.log(images.length);
          if (images.length <= 1) {
            return;
          }
          const newArray = this.state.images.filter((element, index) => index !== this.state.images.length - 1);
          this.setState({ images: newArray });
        }, 2000);
      }

      onChangeImage (index) {
        this.setState({ index });
      }

      renderError () {
        return (
          <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>This image cannot be displayed...</Text>
          <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>... but this is fine :)</Text>
          </View>
          );
        }

        get caption () {
          const { images, index } = this.state;
          return (
          <View style={{ bottom: 0, height: 65, backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontStyle: 'italic' }}>{ (images[index] && images[index].caption) || '' } </Text>
          </View>
          );
        }

        get galleryCount () {
          const { index, images } = this.state;
          return (
          <View style={{ top: 0, height: 65, backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'right', color: 'white', fontSize: 15, fontStyle: 'italic', paddingRight: '10%' }}>{ index + 1 } / { images.length }</Text>
          </View>
          );
        }








        render() {
          return (
          <View style={{ flex: 1 }} >
          <Gallery
          style={{flex: 1, backgroundColor: '#696969'}}
          images={this.state.images}
          errorComponent={this.renderError}
          onPageSelected={this.onChangeImage}
          initialPage={0}
          />
          { this.galleryCount }
          { this.caption }
          </View>
          );
        }
      }
