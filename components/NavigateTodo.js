import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
// import { createBottomTabNavigator } from 'react-navigation';

export default class NavigateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'active',
    }
  }

  navigateCallback = (value) => {
    this.setState({ activeButton: value });
    this.props.callbackNavigation(value);
  }

  render() {
    return (
      <Footer>
        <FooterTab>

          <Button
            active={this.state.activeButton === 'active'}
            onPress={() => (this.navigateCallback('active'))}
          >
            <Text>To Do</Text>
          </Button>
        </FooterTab>

        <FooterTab>
          <Button
            active={this.state.activeButton === 'all'}
            onPress={() => (this.navigateCallback('all'))}>
            <Text>Done</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}