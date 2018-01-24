import React, { Component } from 'react';
import { LayoutAnimation, TouchableOpacity, View } from 'react-native';

import Lottie from 'lottie-react-native';

class Rating extends Component {
  state = { rating: this.props.value || 0 };

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  onRate(rating) {
    this.setState({ rating });
    if (this.props.onRate) this.props.onRate(rating);
  }

  render() {
    const icons = [];
    const max = this.props.max || 5;

    for (let i = 1; i <= max; i += 1) {
      icons.push(
        <TouchableOpacity
          disabled={this.props.disabled || i === this.props.value}
          key={`stars-${new Date().getTime()}-${i}`}
          onPress={() => this.onRate(i)}>
          <Star
            play={this.state.rating >= i}
            size={this.props.size || 36}
            src={this.props.src || require('./animation.json')}
          />
        </TouchableOpacity>
      );
    }

    return <View style={{ flexDirection: 'row' }}>{icons}</View>;
  }
}

class Star extends Component {
  componentDidMount() {
    if (this.props.play) this.animation.play();
    else this.animation.reset();
  }

  render() {
    return (
      <View style={{ height: this.props.size, width: this.props.size }}>
        <Lottie
          loop={false}
          ref={ref => (this.animation = ref)}
          source={this.props.src}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

export default Rating;
