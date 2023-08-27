import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const MarketLinkageScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newProductName, setNewProductName] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  const products = [
    { id: 1, name: "Apples", category: "Fruits", price: "₹120.00" },
    { id: 2, name: "Tomatoes", category: "Vegetables", price: "₹100.00" },
    // Add more products
  ];

  const addProduct = () => {
    if (newProductName && newProductCategory && newProductPrice) {
      const newProduct = {
        id: products.length + 1,
        name: newProductName,
        category: newProductCategory,
        price: newProductPrice,
      };
      products.push(newProduct);
      setModalVisible(false);
    }
  };

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AntDesign name="pluscircle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts.length > 0 ? filteredProducts : products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productCategory}>{item.category}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            value={newProductName}
            onChangeText={setNewProductName}
          />
          <TextInput
            style={styles.input}
            placeholder="Product Category"
            value={newProductCategory}
            onChangeText={setNewProductCategory}
          />
          <TextInput
            style={styles.input}
            placeholder="Product Price"
            value={newProductPrice}
            onChangeText={setNewProductPrice}
          />
          <View style={styles.button}>
            <Button title="Add Product" onPress={addProduct} />
          </View>
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 45,
  },
  productItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productCategory: {
    color: "#888",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: "#007bff",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  button: {
    marginBottom: 10,
  },
});

export default MarketLinkageScreen;
