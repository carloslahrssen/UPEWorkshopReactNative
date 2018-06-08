import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import { Footer, FooterTab, Button, Text } from 'native-base';

export default class NavigateTodo extends Component{
   constructor(props){
      super(props);
      this.state={
         activeButton: 'active',
      }
   }

   navigateCallback = (value) => {
      this.setState({activeButton:value});
      this.props.callbackNavigation(value);
   }

   render(){
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