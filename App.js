import React, {useReducer} from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {AnimatePresence, MotiView} from 'moti';

const Shape = ({color}) => (
  <MotiView
    from={{
      opacity: 0,
      scale: 0.9,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    exit={{
      opacity: 0,
      scale: 0.9,
    }}
    style={[styles.shape, {backgroundColor: color}]}
  />
);

export default function Presence() {
  const [visible, toggle] = useReducer(s => !s, true);

  return (
    <Pressable onPress={toggle} style={styles.container}>
      <AnimatePresence exitBeforeEnter initial={false}>
        {!visible && <Shape key="black" color="black" />}
        {visible && <Shape key="white" color="white" />}
      </AnimatePresence>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
});
