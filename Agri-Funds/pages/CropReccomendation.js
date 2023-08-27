// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";
// import RNFS from "react-native-fs";

// const CropRecommendationScreen = () => {
//   const [cropRecommendations, setCropRecommendations] = useState([]);

//   useEffect(() => {
//     loadCropRecommendations();
//   }, []);

//   const loadCropRecommendations = async () => {
//     try {
//       const filePath =
//         RNFS.DocumentDirectoryPath + "/crop_recommendation.pickle";
//       const fileContent = await RNFS.readFile(filePath, "utf8");

//       const data = JSON.parse(fileContent);

//       setCropRecommendations(data);
//     } catch (error) {
//       console.error("Error loading crop recommendations:", error);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text style={styles.cropName}>{item.crop_name}</Text>
//       <Text>Recommendation: {item.recommendation}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Crop Recommendations</Text>
//       <FlatList
//         data={cropRecommendations}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   item: {
//     backgroundColor: "#f9f9f9",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   cropName: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default CropRecommendationScreen;
