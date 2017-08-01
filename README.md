# react-native-lottie-rating
<img src="https://raw.githubusercontent.com/sonaye/react-native-lottie-rating/master/demo.gif" width="400">

The animation is also available [here](http://www.lottiefiles.com/138-star).

# Installation
`yarn add lottie-react-native react-native-lottie-rating`

`lottie-react-native` may require native linking, see package [repository](https://github.com/airbnb/lottie-react-native) for more details.

# Definition
```javascript
type rating = {
  disabled?: boolean, // default = false
  max?: number,       // default = 5
  onRate: Function,   // default = rating => null
  size?: number,      // default = 36
  src?: any,          // default = require('./animation.json')
  value?: number      // default = 0
};
```

## Example
```javascript
import React from 'react';
import { View } from 'react-native';

import Rating from 'react-native-lottie-rating';

const Example = () => (
  <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
    <Rating onRate={rating => console.log(rating)} />
  </View>
);

export default Example;
```
