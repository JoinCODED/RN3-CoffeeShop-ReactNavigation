import React, { Component } from "react";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";

const Login = () => {
  return (
    <Content>
      <Header transparent />
      <List>
        <ListItem style={{ borderBottomWidth: 0 }}>
          <Body>
            <Form>
              <Body>
                <Label style={{ color: "white" }}>Username</Label>
              </Body>
              <Item
                rounded
                style={{
                  backgroundColor: "white",
                  marginTop: 10,
                  marginBottom: 10
                }}
              >
                <Input autoCorrect={false} autoCapitalize="none" />
              </Item>
              <Body>
                <Label style={{ color: "white" }}>Password</Label>
              </Body>
              <Item rounded style={{ backgroundColor: "white", marginTop: 10 }}>
                <Input
                  autoCorrect={false}
                  secureTextEntry
                  autoCapitalize="none"
                />
              </Item>
            </Form>
          </Body>
        </ListItem>
        <Button full success>
          <Text>Login</Text>
        </Button>
        <Button full warning>
          <Text>Register</Text>
        </Button>
      </List>
      <Body>
        <Label style={{ color: "red", opacity: 0.6 }} />
      </Body>
    </Content>
  );
};

export default Login;
