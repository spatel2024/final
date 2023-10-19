import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  return (
    <View className="App">
      <Card>
      <Heading level={4}>Sonia Spirit Week!</Heading>
        <h3>{user.username}</h3>
        <Image src={logo} width={230} className="App-logo" alt="logo" /><br/>
        <Image src="http://nr1a.com/gifs/__DOG2.gif"/>
        <img src= "https://static0.topspeedimages.com/wordpress/wp-content/uploads/crop/201503/2016-porsche-911-gt3-rs-11_180x130w.jpg"/>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);