import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../Shared/campsites";
import { PROMOTIONS } from "../Shared/promotions";
import { PARTNERS } from "../Shared/partners";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact",
  };
  render() {
    return (
      <ScrollView>
        <Card title></Card>
      </ScrollView>
    );
  }
}
export default Contact;
