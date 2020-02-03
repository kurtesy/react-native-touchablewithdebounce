import React from 'react';
import { TouchableOpacity } from 'react-native';
import _ from 'lodash-es';
import PropTypes from 'prop-types';

/*
@Title: TouchableOpacity Component wrapper
@Purpose: prevent the OnPress function to hit the function only once on multiple Touch/Press
Note: Set Debounce time according to the time taken by your flow to complete
Ex: Edit Image and back to Post Details Page take less tank 1 sec (quick return)
 */

const debounceMillisecond = 1000;
export default function TouchableWithDebounce({ onPress, style, children }) {
  const debouncePress = () => {
    return _.throttle(onPress, debounceMillisecond, {
      leading: true,
      trailing: false
    });
  };

  return (
    <TouchableOpacity onPress={debouncePress()} style={style}>
      {children}
    </TouchableOpacity>
  );
}

TouchableWithDebounce.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.element.isRequired
};

TouchableWithDebounce.defaultProps = {
  style: {}
};
