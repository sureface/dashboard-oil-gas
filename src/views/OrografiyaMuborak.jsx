import React, { useEffect, useRef } from "react";
import Layout from "../layout/Layout";
import { loadModules } from "esri-loader";
import ground1 from "../assets/img/ground1.jpg";

const OrografiyaMuborak = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    loadModules([
      "esri/config",
      "esri/Map",
      "esri/views/SceneView",
      "esri/Graphic",
      "esri/geometry/Point",
      "esri/widgets/Search",
      "esri/widgets/Home",
      "esri/widgets/Locate",
    ])
      .then(
        ([
          esriConfig,
          Map,
          SceneView,
          Graphic,
          Point,
          Search,
          Home,
          Locate,
        ]) => {
          esriConfig.apiKey =
            "AAPK6c828a943be04f099788653fe34e553cmg3-f8tJr_TYm-UdRrf70zrhLRZOZ9JOaR0UVeG7cGRabHlkOQ2-_JasvGvWk--7";

          const locations = [
            {
              name: "Muborak Neft",
              longitude: 65.8097,
              latitude: 39.2767,
              text: "<b>Nomi:</b><ul><li>Muborak</li></ul><b>Joylashuv</b>:<ul> <li><i>43.21043</i></li><li><i>56.96536</i></li></ul><b>Ma'lumot:</b><ul><li> Ustyurt (qozoqcha: Үстірт, qoraqalpoqcha: Ústirt) — Oʻzbekistonning shimoli-gʻarbi (Qoraqalpogʻiston) va Qozogʻiston hududlaridagi plato. Sharqda Orol dengizi va Amudaryo deltasi, gʻarbda Mangʻishloq yarim orol va Qoraboʻgʻozgoʻl qoʻltigʻi, shimolida Kaspiyboʻyi pasttekisligi oraligʻida joylashgan. Maydoni 200 ming km². Oʻrtacha balandligi 150–250 m, eng baland joyi (370 m) janubi-gʻarbida. Ustyurtning atrofi 60–150 m li tik jarlik (chink)lardan iborat. Chinklar har xil chuqurlikdagi jar va soylar bilan kesilgan. Ustyurtning shimoliy chinklari shimoliy gʻarbda Oʻlikqoʻltiq shoʻrligidan boshlanib, shimolida Katta Boʻrsiq qumligiga borib taqaladi. Platoning baland sharqiy chegarasi Orol dengizining avvalgi qirgʻogʻi va Amudaryo deltasidan, janubiy chinklari Qoraqum choʻli va Oʻzboy oʻzani, gʻarbiy chinklari esa Koraboʻgʻozgoʻl qoʻltigʻining gʻarbiy sohili, Qorniyoriq botigʻi, Qaydak shoʻrligi orqali oʻtadi.</li></ul><b>",
              title: "<b>Muborak neft</b>",
              sourceURL: ground1,
            },
          ];

          const map = new Map({
            basemap: "hybrid",
            ground: "world-elevation",
          });

          const view = new SceneView({
            container: mapRef.current,
            map: map,
          }).when((view) => {
            view.goTo({
              center: [65.08086, 41.86843],
              zoom: 6,
            });

            const searchWidget = new Search({
              view: view,
            });

            const homeWidget = new Home({
              view: view,
            });

            const locateWidget = new Locate({
              view: view,
            });

            view.ui.add(searchWidget, {
              position: "top-right",
            });

            // Move the search widget 20 pixels to the left
            const searchWidgetContainer = view.ui.find(searchWidget);
            if (searchWidgetContainer) {
              searchWidgetContainer.container.style.right = "calc(100% + 20px)";
            }

            view.ui.add(homeWidget, {
              position: "top-left",
            });

            view.ui.add(locateWidget, {
              position: "top-left",
            });

            locations.forEach((location) => {
              const point = new Point({
                longitude: location.longitude,
                latitude: location.latitude,
              });

              const marker = new Graphic({
                geometry: point,
                symbol: {
                  type: "simple-marker",
                  color: "blue",
                  size: "10px",
                },
                attributes: location,
                popupTemplate: {
                  title: location?.name,
                  content: [
                    {
                      type: "media",
                      mediaInfos: [
                        {
                          type: "image",
                          value: {
                            sourceURL: location?.sourceURL,
                          },
                        },
                      ],
                    },
                    {
                      type: "text",
                      text: location?.text,
                    },
                  ],
                },
              });

              view.graphics.add(marker);
            });
          });

          return () => {
            // Clean up and destroy the map and view when the component unmounts
            if (view) {
              view.container = null;
            }
          };
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div id="mapView" className="orografiya" ref={mapRef}></div>
    </Layout>
  );
};

export default OrografiyaMuborak;

// orografiyaMuborak
