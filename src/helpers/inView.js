import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';

const InViewPort = class extends Component {
  constructor(props) {
    super(props);
    this.state = {rectTop: 0, rectBottom: 0};
    this.measureLayout = this.measureLayout.bind(this);
  }

  componentDidMount() {
    if (!this.props.disabled) {
      this.startWatching();
    }
  }

  componentWillUnmount() {
    this.stopWatching();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.disabled) {
      this.stopWatching();
    } else {
      this.lastValue = null;
      this.startWatching();
    }
  }

  startWatching() {
    if (this.interval) {
      return;
    }
    this.interval = setInterval(() => {
      if (!this.myview) {
        return;
      }
      this.myview.measure(this.measureLayout);
      this.isInViewPort();
    }, this.props.delay || 100);
  }
  measureLayout(ox, oy, width, height, px, py) {
    this.setState({
      rectTop: px,
      rectBottom: py + height,
      rectWidth: px + width,
    });
  }
  stopWatching() {
    this.interval = clearInterval(this.interval);
  }

  isInViewPort() {
    const window = Dimensions.get('window');
    const isVisible =
      this.state.rectBottom !== 0 &&
      this.state.rectTop >= 0 &&
      this.state.rectBottom <= window.height &&
      this.state.rectWidth > 0 &&
      this.state.rectWidth <= window.width;
    if (this.lastValue !== isVisible) {
      this.lastValue = isVisible;
      this.props.onChange(isVisible);
    }
  }

  render() {
    return (
      <View
        ref={component => {
          this.myview = component;
        }}
        onLayout={this.measureLayout}
        {...this.props}>
        {this.props.children}
      </View>
    );
  }
};

export default InViewPort;
