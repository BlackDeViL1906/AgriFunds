import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Drawer, Title, Subheading } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const DrawerContent = (props) => {
    return (
      <View style={styles.drawerContainer}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerHeader}>
            <Avatar.Image source={require("../assets/avatar.png")} size={80} />
            <View style={styles.headerTextContainer}>
              <Title style={styles.drawerHeaderText}>Agricultural App</Title>
              <Subheading style={styles.drawerSubheaderText}>
                Farm Smarter !
              </Subheading>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              onPress={() => navigation.navigate("Home")}
            />
            <DrawerItem
              label="Profile"
              onPress={() => navigation.navigate("Profile")}
            />
          </Drawer.Section>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.drawerBottomSection}>
          <DrawerItem
            label="Settings"
            onPress={() => navigation.navigate("Settings")}
          />
          <DrawerItem label="Logout" onPress={() => handleLogout()} />
        </Drawer.Section>
      </View>
    );
  };

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleSidebarToggle}>
          <Text style={styles.menuIcon}>
            {isSidebarOpen ? "Close" : "Menu"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Agricultural App</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Weather")}
        >
          <Text style={styles.cardText}>Weather Analysis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Function4")}
        >
          <Text style={styles.cardText}>Crop Recomendation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Function3")}
        >
          <Text style={styles.cardText}>Offline Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Market")}
        >
          <Text style={styles.cardText}>Market Linkage</Text>
        </TouchableOpacity>
      </View>
      {isSidebarOpen && <DrawerContent />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuIcon: {
    color: "white",
    fontSize: 16,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#f6f6f6",
    width: "60%",
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  drawerContainer: {
    flex: 1,
  },
  drawerHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerTextContainer: {
    marginLeft: 15,
  },
  drawerHeaderText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  drawerSubheaderText: {
    color: "#888",
    marginTop: 5,
  },
  drawerSection: {
    marginTop: 20,
  },
  drawerBottomSection: {
    marginTop: "auto",
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    paddingTop: 15,
  },
});

export default HomeScreen;
