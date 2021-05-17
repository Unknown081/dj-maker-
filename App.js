import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component {
  displayAlert = function () {
    alert('Play sound!!');
  };
  render() {
    return (
      <Button
        title=" PLay Sound"
        color={this.props.color}
        onPress={this.displayAlert}
      />
    );
    <Button
      title="Play Sound"
      color={this.props.color}
      onPress={this.displayAlert}
    />;
    <Button
      title="Click Me"
      color={this.props.color}
      onPress={this.displayAlert}
    />;
    <Button
      title="Click Me"
      color={this.props.color}
      onPress={this.displayAlert}
    />;

    <Button
      title="Click Me"
      color={this.props.color}
      onPress={this.displayAlert}
    />;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ width: 200, height: 200, marginTop: 80 }}>
        <AnyColorButton color="purple" />

        <AnyColorButton color="pink" />

        <AnyColorButton color="blue" />

        <AnyColorButton color="lightgreen" />

        <AnyColorButton color="coral" />

      </View>
    );
  }
}
