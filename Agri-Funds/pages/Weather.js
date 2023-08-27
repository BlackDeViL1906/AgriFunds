import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherAnalysis = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = "1ee338651ef6264cb24c24819e50fda7";
    const city = "Coimbatore";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const { coord } = data;
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}&units=metric`;

        fetch(weatherUrl)
          .then((response) => response.json())
          .then((weather) => {
            setWeatherData(weather);
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {weatherData ? (
        <View>
          <Text style={styles.location}>{weatherData.name}</Text>
          <Text style={styles.temperature}>{weatherData.main.temp} °C</Text>
          <Text style={styles.description}>
            {weatherData.weather[0].description}
          </Text>
        </View>
      ) : (
        <Text>Loading weather data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  temperature: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

export default WeatherAnalysis;
