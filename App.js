import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import AppButton from "./src/components/AppButton";
import Card from "./src/components/Card";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import Screen from "./src/components/Screen";
import Icon from "./src/components/Icon";
import ListItem from "./src/components/ListItem";
import AccountScreen from "./src/screens/AccountScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import AppTextInput from "./src/components/AppTextInput";
import AppPicker from "./src/components/AppPicker";

const App = () => {
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
       <AppTextInput placeholder="email" icon="email" />
    </Screen>
  );
};

export default App;
