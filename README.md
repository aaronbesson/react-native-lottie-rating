# react-native-lottie-rating
<img src="https://raw.githubusercontent.com/sonaye/react-native-lottie-rating/master/demo.gif" width="400">

The animation is also available [here](http://www.lottiefiles.com/138-star).

# Installation
`yarn add react-native-lottie-rating`

# Usage
```javascript
<Rating
  disabled={false}                  // default = false
  max={5}                           // default = 5
  onRate={rating => null}
  size={36}                         // default = 36
  src={require('./animation.json')} // default = require('./animation.json')
  value={0}                         // default = 0
/>
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
