import React, { Component } from "react";

// NativeBase Components
import { Button, Icon, Footer, FooterTab } from "native-base";

class FooterComp extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => this.props.navigation.navigate("Login")}>
            <Icon name="apps" />
          </Button>
          <Button onPress={() => this.props.navigation.navigate("CoffeeCart")}>
            <Icon name="camera" />
          </Button>
          <Button active>
            <Icon active name="navigate" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterComp;
