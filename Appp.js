import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          title: "Item 1"
        },
        {
          title: "Item 2 "
        },
        {
          title: "Item 3"
        },
      ]
    }
  }

  _renderItem({item,index}) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./Images/React_Native_Logo.png')} />
        <Text style={{color: '#fff'}}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableHighlight
          onPress={
            () => this.carousel._snapToItem(this.state.activeIndex - 1)}>
          <Image source={require('./Images/leftarrow.jpg')} />
        </TouchableHighlight>

        <View>
        <Carousel
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={250}
          itemWidth={250}
          renderItem={this._renderItem}
          onSnapToItem = {
            index => this.setState({activeIndex:index})
          }
        />
        </View>

        <TouchableHighlight
          onPress={() => this.carousel._snapToItem(this.state.activeIndex + 1)}>
          <Image source={require('./Images/rightarrow.jpg')} />
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#131420',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
