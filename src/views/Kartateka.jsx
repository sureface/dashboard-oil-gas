import React, { useState, useEffect, useRef } from "react";
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import RouteParameters from "@arcgis/core/rest/support/RouteParameters";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import * as route from "@arcgis/core/rest/route";
import Layout from "../layout/Layout";
import BasemapToggle from "@arcgis/core/widgets/BasemapGallery";
import axios from "axios";
import { useSelector } from "react-redux";

import clearSky from "../assets/weather/clear-sky.png";
import cloudsSky from "../assets/weather/clouds.png";
import ashesSky from "../assets/weather/ashes.png";
import drizzleSky from "../assets/weather/drizzle.png";
import dustSky from "../assets/weather/dust.png";
import fogSky from "../assets/weather/fog.png";
import hazeSky from "../assets/weather/haze.png";
import mistSky from "../assets/weather/mist.png";
import rainSky from "../assets/weather/rain.png";
import sandSky from "../assets/weather/sand.png";
import smokeSky from "../assets/weather/smoke.png";
import snowSky from "../assets/weather/snow.png";
import squallSky from "../assets/weather/squall.png";
import thunderstormSky from "../assets/weather/thunderstorm.png";
import tornadoSky from "../assets/weather/tornado.png";

import symbol_oli from "../assets/symbols/36.png";
import symbol_gas from "../assets/symbols/36f.png";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let leng = 0;

const Kartateka = () => {
  const map = useRef(null);
  const loggedInCompany = useSelector((state) => state.auth.loggedInCompany);
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
    type: "picture-marker",
    url: symbol_oli,
    width: 36,
    height: 36,
  };
  const sym1 = {
    type: "picture-marker",
    url: symbol_gas,
    width: 36,
    height: 36,
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

  const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "osm",
  });

  view.ui.add(basemapToggle, "bottom-left");

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

      let weather_icon;

      switch (weatherData.weather[0].main) {
        case "Clear":
          weather_icon = clearSky;
          break;
        case "Clouds":
          weather_icon = cloudsSky;
          break;
        case "Rain":
          weather_icon = rainSky;
          break;
        case "Drizzle":
          weather_icon = drizzleSky;
          break;
        case "Thunderstorm":
          weather_icon = thunderstormSky;
          break;
        case "Snow":
          weather_icon = snowSky;
          break;
        case "Mist":
          weather_icon = mistSky;
          break;
        case "Fog":
          weather_icon = fogSky;
          break;
        case "Haze":
          weather_icon = hazeSky;
          break;
        case "Smoke":
          weather_icon = smokeSky;
          break;
        case "Dust":
          weather_icon = dustSky;
          break;
        case "Sand":
          weather_icon = sandSky;
          break;
        case "Ash":
          weather_icon = ashesSky;
          break;
        case "Squall":
          weather_icon = squallSky;
          break;
        case "Tornado":
          weather_icon = tornadoSky;
          break;
        default:
          weather_icon = `http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`;
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

      const infotamtions = [
        {
          text: "<b>Nomi:</b><ul><li>Ustyurt</li></ul><b>Joylashuv</b>:<ul> <li><i>43.21043</i></li><li><i>56.96536</i></li></ul><b>Ma'lumot:</b><ul><li> Ustyurt (qozoqcha: Үстірт, qoraqalpoqcha: Ústirt) — Oʻzbekistonning shimoli-gʻarbi (Qoraqalpogʻiston) va Qozogʻiston hududlaridagi plato. Sharqda Orol dengizi va Amudaryo deltasi, gʻarbda Mangʻishloq yarim orol va Qoraboʻgʻozgoʻl qoʻltigʻi, shimolida Kaspiyboʻyi pasttekisligi oraligʻida joylashgan. Maydoni 200 ming km². Oʻrtacha balandligi 150–250 m, eng baland joyi (370 m) janubi-gʻarbida. Ustyurtning atrofi 60–150 m li tik jarlik (chink)lardan iborat. Chinklar har xil chuqurlikdagi jar va soylar bilan kesilgan. Ustyurtning shimoliy chinklari shimoliy gʻarbda Oʻlikqoʻltiq shoʻrligidan boshlanib, shimolida Katta Boʻrsiq qumligiga borib taqaladi. Platoning baland sharqiy chegarasi Orol dengizining avvalgi qirgʻogʻi va Amudaryo deltasidan, janubiy chinklari Qoraqum choʻli va Oʻzboy oʻzani, gʻarbiy chinklari esa Koraboʻgʻozgoʻl qoʻltigʻining gʻarbiy sohili, Qorniyoriq botigʻi, Qaydak shoʻrligi orqali oʻtadi.</li></ul><b>",
        },
        {
          text: "<b>Nomi:</b><ul><li>Ustyurt</li></ul><b>Joylashuv</b>:<ul> <li><i>43.21043</i></li><li><i>56.96536</i></li></ul><b>Ma'lumot:</b><ul><li> Ustyurt (qozoqcha: Үстірт, qoraqalpoqcha: Ústirt) — Oʻzbekistonning shimoli-gʻarbi (Qoraqalpogʻiston) va Qozogʻiston hududlaridagi plato. Sharqda Orol dengizi va Amudaryo deltasi, gʻarbda Mangʻishloq yarim orol va Qoraboʻgʻozgoʻl qoʻltigʻi, shimolida Kaspiyboʻyi pasttekisligi oraligʻida joylashgan. Maydoni 200 ming km². Oʻrtacha balandligi 150–250 m, eng baland joyi (370 m) janubi-gʻarbida. Ustyurtning atrofi 60–150 m li tik jarlik (chink)lardan iborat. Chinklar har xil chuqurlikdagi jar va soylar bilan kesilgan. Ustyurtning shimoliy chinklari shimoliy gʻarbda Oʻlikqoʻltiq shoʻrligidan boshlanib, shimolida Katta Boʻrsiq qumligiga borib taqaladi. Platoning baland sharqiy chegarasi Orol dengizining avvalgi qirgʻogʻi va Amudaryo deltasidan, janubiy chinklari Qoraqum choʻli va Oʻzboy oʻzani, gʻarbiy chinklari esa Koraboʻgʻozgoʻl qoʻltigʻining gʻarbiy sohili, Qorniyoriq botigʻi, Qaydak shoʻrligi orqali oʻtadi.</li></ul><b>",
        },
        {
          text: "<b>Nomi:</b><ul><li>Muborak</li></ul><b>Joylashuv</b>:<ul> <li><i>39.170431</i></li><li><i>65.268902</i></li></ul><b>Ma'lumot:</b><ul><li> Muborak shahri yaqinidagi Janubiy va Shimoliy Muborak konlari. Janubiy Muborak gaz-kondensat koni Muborak shahridan 15–20 km jan.-sharkda joylashgan. Kon strukturasi 1955-yilda L. G. Cherkashina va N. I. Kamoliddinovlarning seysmik tadqiqotlari natijasida aniqlangan. Konning gazliligi kuyi boʻrga mansub 12- va 13-gorizontlar bilan bogʻliq. 12mahsuldor gorizont 1160–1470 m chuqurlikda joylashgan va qumtosh va alevrolitlardan tashkil topgan. Umumiy qalinligi 62–67 m, samarali qalinligi 16–27 m, ochiq gʻovakliligi 18—22%, samarali gʻovakliligi 12—18%, oʻtkazuvchanligi 125— 578 millidarsini tashkil etadi. Uyumning uz. 12,6 km, eni 4,3 km va qalinligi 130 m. Gaz zichligi 0,640 (xavoga nisbatan), tarkibidagi metan 85— 93%, SO2 gazi 0,1 — 1,5%, azot va nodirgazlar 1,8—5%. Kondensatning zichligi 0,74; qovushokligi 1,03 santipuz, tarkibidagi oltingugurt 0,03%. Gaz tarkibida erigan kondensat miqdori 95 sm³/m3. 13-gorizont 1230–1450 m chuqurlikda joylashgan boʻlib, asosan, qumtosh, gravelit, gil va qisman mergeldan tuzilgan. Umumiy kalinligi 80 m gacha, samarali qalinligi 30 m, ochiq gʻovakliligi 16—24%, samarali gʻovakliligi 12—18%, oʻtkazuvchanligi 298 millidarsi. Uyumning uz. 10 km, eni 3,75 km, qalinligi 82 m. Boshlangʻich qatlam bosimi 133 atm, temperaturasi 65°. Gazning zichligi 0,63 (havoga nisbatan) va tarkibidagi metan 84,8—92,7%, ogʻir uglevodorodlar 7—8%, azot va nodir gazlar 2—5,8%, kondensat miqdori 80,6 sm³/m3. 12—13-gorizontlardagi kondensat fizikkimyoviy xossalari boʻyicha bir xil.</li></ul><b>",
        },
        {
          text: "<b>Nomi:</b><ul><li>Muborak</li></ul><b>Joylashuv</b>:<ul> <li><i>43.21043</i></li><li><i>56.96536</i></li></ul><b>Ma'lumot:</b><ul><li> Ustyurt (qozoqcha: Үстірт, qoraqalpoqcha: Ústirt) — Oʻzbekistonning shimoli-gʻarbi (Qoraqalpogʻiston) va Qozogʻiston hududlaridagi plato. Sharqda Orol dengizi va Amudaryo deltasi, gʻarbda Mangʻishloq yarim orol va Qoraboʻgʻozgoʻl qoʻltigʻi, shimolida Kaspiyboʻyi pasttekisligi oraligʻida joylashgan. Maydoni 200 ming km². Oʻrtacha balandligi 150–250 m, eng baland joyi (370 m) janubi-gʻarbida. Ustyurtning atrofi 60–150 m li tik jarlik (chink)lardan iborat. Chinklar har xil chuqurlikdagi jar va soylar bilan kesilgan. Ustyurtning shimoliy chinklari shimoliy gʻarbda Oʻlikqoʻltiq shoʻrligidan boshlanib, shimolida Katta Boʻrsiq qumligiga borib taqaladi. Platoning baland sharqiy chegarasi Orol dengizining avvalgi qirgʻogʻi va Amudaryo deltasidan, janubiy chinklari Qoraqum choʻli va Oʻzboy oʻzani, gʻarbiy chinklari esa Koraboʻgʻozgoʻl qoʻltigʻining gʻarbiy sohili, Qorniyoriq botigʻi, Qaydak shoʻrligi orqali oʻtadi.</li></ul><b>",
        },
        {
          text: "<b>Nomi:</b><ul><li>Sho'rtan</li></ul><b>Joylashuv</b>:<ul> <li><i>38.45954</i></li><li><i>65.80549</i></li></ul><b>Ma'lumot:</b><ul><li>Qashqadaryo viloyatidagi kon. Qarshi shahridan 40 km jan.sharqda. 1974-yilda ochilgan. Chorjoʻy tektonik pogʻonasiga tegishli Beshkent egilmasida braxiantiklinal koʻrinishidagi Shoʻrtan strukturasida joylashgan. Yuqori yura davrining kelloveyoksford yotqiziqlari mahsuldor hisoblanadi. Gazkondensat 15NR, 15R va 15PR gorizontlarida ochilgan. Gorizontlar kulrang ohaktoshlardan hamda zichlashgan, darzli, dolomitlashgan ohaktoshlardan iborat, qalinligi 316–542 m. Gazli qismining foydali qalinligi 118 m. Gaz uyumidan yuqorida joylashgan qalinligi 341–546 m boʻlgan kimerijtiton tuz jinslari regional qopqoq vazifasini oʻtaydi. Mahsuldor qatlam 2735–3170 m chuqurlikda yotadi. Suv tarkibi xlorkaltsiyli, minerallashganligi 122,1 — 129,0 g/l. 1999-yilgacha olingan tabiiy gaz miqdori 245,2 mlrd. m³, gaz kondensati 12,4 mln. t. Kondagi gazda etan miqdori yuqori, gazni qayta ishlab, bu qimmatbaho elementni ajratib olish maqsadga muvofiq. Etan polimer, kauchuk, boʻyoq va doridarmonlar olishda asosiy xom ashyo hisoblanadi. Shoʻrtan gazidan ajratib olingan etanni qayta ishlab, polietilen olish maqsadida Shoʻrtan gazkimyo majmuasi bunyod etildi</li></ul><b>",
        },
      ];

      infotamtions.forEach((info) => {
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
            longitude: lon,
          },
          symbol: gaz ? sym1 : sym,
          popupTemplate: {
            title: weatherData?.name,
            content: [
              {
                type: "text",
                text: formattedDate + "<br /><br />" + info.text,
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
                      sourceURL: weather_icon,
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
    <Layout>
      <div id="mapView" className="kartateka" ref={map}></div>

      <div
        className="map-controllers"
        style={{
          top: loggedInCompany.login.length > 0 ? 0 : "50%",
          transform:
            loggedInCompany.login.length > 0
              ? "translateY(0)"
              : "translateY(-50%)",
          height: loggedInCompany.login.length > 0 ? "auto" : "80%",
        }}
      >
        <div className="map-controllers_inner">
          <div className="map-controllers_drawer">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <h4
            id="distanceDiv"
            className="text-white text-capitalize text-center"
          >
            oraliq masofa: {leng} km
          </h4>
          <div
            style={{ marginTop: loggedInCompany.login.length > 0 ? 0 : "60px" }}
          >
            <button
              style={{
                width: "100%",
                marginTop: "10px",
                display: loggedInCompany.login.length > 0 ? "none" : "block",
              }}
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
              style={{
                width: "100%",
                marginTop: "10px",
                display: loggedInCompany.login.length > 0 ? "none" : "block",
              }}
              className="map-btns"
              onClick={() => addStop(43.271111, 58.28617, true)}
            >
              Ustyurt gaz
            </button>
            <button
              style={{
                width: "100%",
                marginTop: "10px",
                display: loggedInCompany.login.length > 0 ? "none" : "block",
              }}
              className="map-btns"
              onClick={() => addStop(43.017959, 58.19976, false)}
            >
              Ustyurt neft
            </button>
            <button
              style={{
                width: "100%",
                marginTop: "10px",
                display: loggedInCompany.login.length > 0 ? "none" : "block",
              }}
              className="map-btns"
              onClick={() => addStop(38.45954, 65.80549, true)}
            >
              Sho'rtan gaz
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kartateka;
