import React, { useState, useEffect, useRef } from "react";
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import RouteParameters from "@arcgis/core/rest/support/RouteParameters";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import * as route from "@arcgis/core/rest/route";
import Layout from "../layout/Layout";
import axios from "axios";

let leng = 0;

const Kartateka = () => {
  const map = useRef(null);
  const [cordinate, setCordinate] = useState({
    lat: 0,
    lon: 0,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setCordinate({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });

          // you can use pos to get location
        },
        function () {
          // handle errors here if any
        }
      );
    } else {
      console.log("Not Available");
    }
  }, []);
  const sym = {
    type: "simple-marker", // autocasts as new PictureMarkerSymbol()
    color: "red",
    size: 14,
  };
  const sym1 = {
    type: "simple-marker", // autocasts as new PictureMarkerSymbol()
    color: "red",
    size: 14,
  };

  const routeUrl =
    "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";

  // The stops and route result will be stored in this layer
  const routeLayer = new GraphicsLayer();

  const map1 = new Map({
    basemap: "hybrid",
    ground: "world-elevation",
    layers: [routeLayer], // Add the route layer to the map
  });

  const view = new SceneView({
    container: map.current,
    map: map1,
    center: [65.08086, 41.86843],
    zoom: 6,
  });

  // the symbol used to mark stops on the route
  const markerSymbol = {
    type: "point-3d",
    // autocasts as new PointSymbol3D()
    symbolLayers: [
      {
        type: "object", // autocasts as new ObjectSymbol3DLayer()
        size: 3,
        resource: {
          primitive: "sphere",
        },
        material: {
          color: [0, 255, 0],
        },
      },
    ],
  };
  const simpleLineSymbol = {
    type: "simple-line",
    color: [0, 0, 0], // Orange
    width: 2,
  };

  // the symbol used to mark the paths between stops
  const pathSymbol = {
    type: "line-3d", // autocasts as new LineSymbol3D()
    symbolLayers: [
      {
        type: "line", // autocasts as new PathSymbol3DLayer()
        size: 3, // If only the width is given, the height is set to the same value.
        material: {
          color: [0, 128, 255],
        },
      },
    ],
  };

  // Adds a graphic when the user clicks the map. If 2 or more points exist, route is solved.

  function addStop(lat, lon, gaz) {
    async function weather() {
      const apiKey = "8a42611b629581ce0d32f401df3cef90";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=ru`;

      try {
        const res = await axios.get(url);
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    weather().then((weatherData) => {
      const currentDate = new Date();
      const dayNamesUzbek = [
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba",
        "Yakshanba",
      ];
      const monthNamesUzbek = [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentabr",
        "Oktabr",
        "Noyabr",
        "Dekabr",
      ];
      const dayIndex = currentDate.getDay();
      const monthIndex = currentDate.getMonth();
      const formattedDate = `${
        dayNamesUzbek[dayIndex - 1]
      }, ${currentDate.getDate()} ${
        monthNamesUzbek[monthIndex]
      } ${currentDate.getFullYear()}`;

      let translatedWeatherStatus;

      switch (weatherData.weather[0].main) {
        case "Clear":
          translatedWeatherStatus = "Quyoshli";
          break;
        case "Clouds":
          translatedWeatherStatus = "Bulutli";
          break;
        case "Rain":
          translatedWeatherStatus = "Yomg'irli";
          break;
        case "Drizzle":
          translatedWeatherStatus = "Jala Quyvoti";
          break;
        case "Thunderstorm":
          translatedWeatherStatus = "Momaqaldiroq";
          break;
        case "Snow":
          translatedWeatherStatus = "Qorli";
          break;
        case "Mist":
          translatedWeatherStatus = "Yngil Tuman";
          break;
        case "Fog":
          translatedWeatherStatus = "O'rtacha Tuman";
          break;
        case "Haze":
          translatedWeatherStatus = "Ko'zga Ko'rinmas Tuman";
          break;
        case "Smoke":
          translatedWeatherStatus = "Tutunli";
          break;
        case "Dust":
          translatedWeatherStatus = "Changli";
          break;
        case "Sand":
          translatedWeatherStatus = "Qumli";
          break;
        case "Ash":
          translatedWeatherStatus = "Ash";
          break;
        case "Squall":
          translatedWeatherStatus = "Shkval";
          break;
        case "Tornado":
          translatedWeatherStatus = "Tornado";
          break;
        default:
          translatedWeatherStatus = weatherData.weather[0].main;
          break;
      }

      const routeParams = new RouteParameters({
        // An authorization string used to access the routing service
        apiKey:
          "AAPK5c2ff4e92c7e432aaab41b6403c8d32e2QaT4PuRnyaxnyiZ0aTU10fG7TMaU4VDpCXcD1GtryHEZMIVhhkNdyE2KKz-O0uC",
        stops: new FeatureSet(),
        outSpatialReference: {
          // autocasts as new SpatialReference()
          wkid: 3857,
        },
      });

      const stop = new Graphic({
        geometry: {
          type: "point",
          latitude: cordinate.lat, //[65.80549,38.45954]
          longitude: cordinate.lon,
        },
        symbol: markerSymbol,
      });

      const stop1 = new Graphic({
        geometry: {
          type: "point",
          latitude: lat,
          longitude: lon, //[65.268902,39.170431]
        },
        symbol: gaz ? sym : sym1,
        popupTemplate: {
          title: weatherData?.name,
          content: [
            {
              type: "text",
              text: formattedDate,
            },
            {
              type: "media",
              mediaInfos: [
                {
                  title:
                    Math.round((weatherData?.main.temp - 273.15).toFixed(2)) +
                    " &#176;C",
                  type: "image",
                  caption:
                    Math.round(
                      (weatherData?.main.temp_min - 273.15).toFixed(2)
                    ) +
                    " &#176;C" +
                    " / " +
                    Math.round(
                      (weatherData?.main.temp_max - 273.15).toFixed(2)
                    ) +
                    " &#176;C" +
                    ` ${translatedWeatherStatus}`,
                  value: {
                    sourceURL: `http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`,
                  },
                },
              ],
            },
          ],
        },
      });
      routeLayer.removeAll();
      routeLayer.add(stop);
      routeLayer.add(stop1);
      // Update the route and execute it if 2 or more stops are input

      routeParams.stops.features.push(stop);
      routeParams.stops.features.push(stop1);
      if (routeParams.stops.features.length >= 2) {
        route
          .solve(routeUrl, routeParams)
          .then(onRouteUpdated)
          .catch((error) => {
            // if it fails, print the error to the console and remove the recently added point
            routeLayer.remove(stop);
            routeParams.stops.features.pop();
            console.error(error);
          });
      }
    });
  }

  function onRouteUpdated(data) {
    const route = data.routeResults[0].route;
    const geometry = route.geometry;

    // do the actual elevation query
    const elevationPromise = map1.ground.queryElevation(geometry);

    elevationPromise.then(
      (result) => {
        // compute the total ascent and descent
        let ascent = 0;
        let descent = 0;
        for (let j = 0; j < result.geometry.paths.length; j++) {
          const path = result.geometry.paths[j];
          for (let i = 0; i < path.length - 1; i++) {
            const d = path[i + 1][2] - path[i][2];
            if (d > 0) {
              ascent += d;
            } else {
              descent -= d;
            }
          }
        }

        document.getElementById("distanceDiv").innerHTML =
          "Masofa: " +
          Math.round(route.attributes.Total_Kilometers * 1000) / 1000 +
          " km";

        // add a path symbol following the calculated route to the scene
        routeLayer.add(
          new Graphic({
            geometry: result.geometry,
            symbol: pathSymbol,
          })
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }

  return (
    <Layout className="kartateka">
      <div id="mapView" ref={map}></div>

      <div className="map-controllers">
        <h3 id="distanceDiv" className="text-white text-capitalize">
          oraliq masofa: {leng} km
        </h3>
        <div style={{ marginTop: "60px" }}>
          <button
            style={{ width: "100%", marginTop: "10px" }}
            className="map-btns"
            onClick={() => addStop(39.170431, 65.268902, true)}
          >
            Muborak gaz
          </button>
          <button
            style={{ width: "100%", marginTop: "10px" }}
            className="map-btns"
            onClick={() => addStop(39.2767, 65.8097, false)}
          >
            Muborak neft
          </button>
          <button
            style={{ width: "100%", marginTop: "10px" }}
            className="map-btns"
            onClick={() => addStop(43.271111, 58.28617, true)}
          >
            Ustyurt gaz
          </button>
          <button
            style={{ width: "100%", marginTop: "10px" }}
            className="map-btns"
            onClick={() => addStop(43.017959, 58.19976, false)}
          >
            Ustyurt neft
          </button>
          <button
            style={{ width: "100%", marginTop: "10px" }}
            className="map-btns"
            onClick={() => addStop(38.45954, 65.80549, true)}
          >
            Sho'rtan gaz
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Kartateka;
