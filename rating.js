// @flow

import React, { Component } from 'react';
import { LayoutAnimation, TouchableOpacity, View } from 'react-native';

import Lottie from 'lottie-react-native';

class Rating extends Component {
  state = { rating: this.props.rating || 0 };

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  onRate(rating: number) {
    this.setState({ rating });
    if (this.props.onRate) this.props.onRate(rating);
  }

  render() {
    const icons = [];
    const max = this.props.max || 5;

    for (let i = 1; i <= max; i += 1) {
      icons.push(
        <TouchableOpacity
          disabled={this.props.disabled || i === this.props.rating}
          key={`stars-${new Date().getTime()}-${i}`}
          onPress={() => this.onRate(i)}>
          <Star
            size={this.props.size || 36}
            state={this.state.rating >= i ? 1 : 0}
            src={this.props.src || require('./animation.json')}
          />
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.row}>
        {icons}
      </View>
    );
  }
}

// eslint-disable-next-line
class Star extends Component {
  componentDidMount() {
    if (this.props.state === 1) this.animation.play();
    if (this.props.state === 0) this.animation.reset();
  }

  animation: any;

  render() {
    return (
      <View style={{ height: this.props.size, width: this.props.size }}>
        <Lottie
          ref={ref => {
            this.animation = ref;
          }}
          source={this.props.src}
          style={styles.full}
        />
      </View>
    );
  }
}

const styles = {
  full: { flex: 1 },
  row: { flexDirection: 'row' }
};

export default Rating;
