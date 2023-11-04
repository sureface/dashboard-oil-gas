import React, { useEffect, useRef } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { loadModules } from "esri-loader";

import symbol_oli from "../assets/symbols/36.png";
import symbol_gas from "../assets/symbols/36f.png";

const DefaultMap = () => {
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
      "esri/widgets/BasemapToggle",
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
          BasemapToggle,
        ]) => {
          esriConfig.apiKey =
            "AAPK6c828a943be04f099788653fe34e553cmg3-f8tJr_TYm-UdRrf70zrhLRZOZ9JOaR0UVeG7cGRabHlkOQ2-_JasvGvWk--7";
          esriConfig = {
            locale: "ru",
          };

          const locations = [
            {
              name: "Ustyurt gaz koni",
              longitude: 58.28617,
              latitude: 43.271111,
              text: "<b>Nomi:</b><ul><li>Ustyurt</li></ul><b>Joylashuv</b>:<ul> <li><i>43.21043</i></li><li><i>56.96536</i></li></ul><b>Ma'lumot:</b><ul><li> Ustyurt (qozoqcha: Үстірт, qoraqalpoqcha: Ústirt) — Oʻzbekistonning shimoli-gʻarbi (Qoraqalpogʻiston) va Qozogʻiston hududlaridagi plato. Sharqda Orol dengizi va Amudaryo deltasi, gʻarbda Mangʻishloq yarim orol va Qoraboʻgʻozgoʻl qoʻltigʻi, shimolida Kaspiyboʻyi pasttekisligi oraligʻida joylashgan. Maydoni 200 ming km². Oʻrtacha balandligi 150–250 m, eng baland joyi (370 m) janubi-gʻarbida. Ustyurtning atrofi 60–150 m li tik jarlik (chink)lardan iborat. Chinklar har xil chuqurlikdagi jar va soylar bilan kesilgan. Ustyurtning shimoliy chinklari shimoliy gʻarbda Oʻlikqoʻltiq shoʻrligidan boshlanib, shimolida Katta Boʻrsiq qumligiga borib taqaladi. Platoning baland sharqiy chegarasi Orol dengizining avvalgi qirgʻogʻi va Amudaryo deltasidan, janubiy chinklari Qoraqum choʻli va Oʻzboy oʻzani, gʻarbiy chinklari esa Koraboʻgʻozgoʻl qoʻltigʻining gʻarbiy sohili, Qorniyoriq botigʻi, Qaydak shoʻrligi orqali oʻtadi.</li></ul><b>",
              title: "<b>Ustyurt gaz koni</b>",
              sourceURL:
                "https://www.gazeta.uz/media/img/2022/05/Bh3XwK16526799246699_b.jpg",
              detect: false,
            },
            {
              name: "Ustyurt neft",
              longitude: 58.19976,
              latitude: 43.017959,
              text: "<b>Nomi:</b><ul><li>Ustyurt</li></ul><b>Joylashuv</b>:<ul> <li><i>43.21043</i></li><li><i>56.96536</i></li></ul><b>Ma'lumot:</b><ul><li> Ustyurt (qozoqcha: Үстірт, qoraqalpoqcha: Ústirt) — Oʻzbekistonning shimoli-gʻarbi (Qoraqalpogʻiston) va Qozogʻiston hududlaridagi plato. Sharqda Orol dengizi va Amudaryo deltasi, gʻarbda Mangʻishloq yarim orol va Qoraboʻgʻozgoʻl qoʻltigʻi, shimolida Kaspiyboʻyi pasttekisligi oraligʻida joylashgan. Maydoni 200 ming km². Oʻrtacha balandligi 150–250 m, eng baland joyi (370 m) janubi-gʻarbida. Ustyurtning atrofi 60–150 m li tik jarlik (chink)lardan iborat. Chinklar har xil chuqurlikdagi jar va soylar bilan kesilgan. Ustyurtning shimoliy chinklari shimoliy gʻarbda Oʻlikqoʻltiq shoʻrligidan boshlanib, shimolida Katta Boʻrsiq qumligiga borib taqaladi. Platoning baland sharqiy chegarasi Orol dengizining avvalgi qirgʻogʻi va Amudaryo deltasidan, janubiy chinklari Qoraqum choʻli va Oʻzboy oʻzani, gʻarbiy chinklari esa Koraboʻgʻozgoʻl qoʻltigʻining gʻarbiy sohili, Qorniyoriq botigʻi, Qaydak shoʻrligi orqali oʻtadi.</li></ul><b>",

              title: "<b>Ustyurt neft</b>",
              sourceURL:
                "https://www.gazeta.uz/media/img/2022/05/Bh3XwK16526799246699_b.jpg",
              detect: true,
            },
            {
              name: "Muborak gaz koni",
              longitude: 65.268902,
              latitude: 39.170431,
              text: "<b>Nomi:</b><ul><li>Muborak</li></ul><b>Joylashuv</b>:<ul> <li><i>39.170431</i></li><li><i>65.268902</i></li></ul><b>Ma'lumot:</b><ul><li> Muborak shahri yaqinidagi Janubiy va Shimoliy Muborak konlari. Janubiy Muborak gaz-kondensat koni Muborak shahridan 15–20 km jan.-sharkda joylashgan. Kon strukturasi 1955-yilda L. G. Cherkashina va N. I. Kamoliddinovlarning seysmik tadqiqotlari natijasida aniqlangan. Konning gazliligi kuyi boʻrga mansub 12- va 13-gorizontlar bilan bogʻliq. 12mahsuldor gorizont 1160–1470 m chuqurlikda joylashgan va qumtosh va alevrolitlardan tashkil topgan. Umumiy qalinligi 62–67 m, samarali qalinligi 16–27 m, ochiq gʻovakliligi 18—22%, samarali gʻovakliligi 12—18%, oʻtkazuvchanligi 125— 578 millidarsini tashkil etadi. Uyumning uz. 12,6 km, eni 4,3 km va qalinligi 130 m. Gaz zichligi 0,640 (xavoga nisbatan), tarkibidagi metan 85— 93%, SO2 gazi 0,1 — 1,5%, azot va nodirgazlar 1,8—5%. Kondensatning zichligi 0,74; qovushokligi 1,03 santipuz, tarkibidagi oltingugurt 0,03%. Gaz tarkibida erigan kondensat miqdori 95 sm³/m3. 13-gorizont 1230–1450 m chuqurlikda joylashgan boʻlib, asosan, qumtosh, gravelit, gil va qisman mergeldan tuzilgan. Umumiy kalinligi 80 m gacha, samarali qalinligi 30 m, ochiq gʻovakliligi 16—24%, samarali gʻovakliligi 12—18%, oʻtkazuvchanligi 298 millidarsi. Uyumning uz. 10 km, eni 3,75 km, qalinligi 82 m. Boshlangʻich qatlam bosimi 133 atm, temperaturasi 65°. Gazning zichligi 0,63 (havoga nisbatan) va tarkibidagi metan 84,8—92,7%, ogʻir uglevodorodlar 7—8%, azot va nodir gazlar 2—5,8%, kondensat miqdori 80,6 sm³/m3. 12—13-gorizontlardagi kondensat fizikkimyoviy xossalari boʻyicha bir xil.</li></ul><b>",
              title: "<b>Muborak gaz</b>",
              sourceURL:
                "https://static.zarnews.uz/crop/3/c/720__80_3c2cd2e139519c9e69c3ed8ed902566b.jpg?img=self&v=1588986023",
              detect: false,
            },
            {
              name: "Muborak Neft",
              longitude: 65.8097,
              latitude: 39.2767,
              text: "<b>Nomi:</b><ul><li>Muborak</li></ul><b>Joylashuv</b>:<ul> <li><i>43.21043</i></li><li><i>56.96536</i></li></ul><b>Ma'lumot:</b><ul><li> Ustyurt (qozoqcha: Үстірт, qoraqalpoqcha: Ústirt) — Oʻzbekistonning shimoli-gʻarbi (Qoraqalpogʻiston) va Qozogʻiston hududlaridagi plato. Sharqda Orol dengizi va Amudaryo deltasi, gʻarbda Mangʻishloq yarim orol va Qoraboʻgʻozgoʻl qoʻltigʻi, shimolida Kaspiyboʻyi pasttekisligi oraligʻida joylashgan. Maydoni 200 ming km². Oʻrtacha balandligi 150–250 m, eng baland joyi (370 m) janubi-gʻarbida. Ustyurtning atrofi 60–150 m li tik jarlik (chink)lardan iborat. Chinklar har xil chuqurlikdagi jar va soylar bilan kesilgan. Ustyurtning shimoliy chinklari shimoliy gʻarbda Oʻlikqoʻltiq shoʻrligidan boshlanib, shimolida Katta Boʻrsiq qumligiga borib taqaladi. Platoning baland sharqiy chegarasi Orol dengizining avvalgi qirgʻogʻi va Amudaryo deltasidan, janubiy chinklari Qoraqum choʻli va Oʻzboy oʻzani, gʻarbiy chinklari esa Koraboʻgʻozgoʻl qoʻltigʻining gʻarbiy sohili, Qorniyoriq botigʻi, Qaydak shoʻrligi orqali oʻtadi.</li></ul><b>",
              title: "<b>Muborak neft</b>",
              sourceURL:
                "https://www.gazeta.uz/media/img/2022/05/Bh3XwK16526799246699_b.jpg",
              detect: true,
            },
            {
              name: "Sho'rtan gaz koni",
              longitude: 65.80549,
              latitude: 38.45954,
              text: "<b>Nomi:</b><ul><li>Sho'rtan</li></ul><b>Joylashuv</b>:<ul> <li><i>38.45954</i></li><li><i>65.80549</i></li></ul><b>Ma'lumot:</b><ul><li>Qashqadaryo viloyatidagi kon. Qarshi shahridan 40 km jan.sharqda. 1974-yilda ochilgan. Chorjoʻy tektonik pogʻonasiga tegishli Beshkent egilmasida braxiantiklinal koʻrinishidagi Shoʻrtan strukturasida joylashgan. Yuqori yura davrining kelloveyoksford yotqiziqlari mahsuldor hisoblanadi. Gazkondensat 15NR, 15R va 15PR gorizontlarida ochilgan. Gorizontlar kulrang ohaktoshlardan hamda zichlashgan, darzli, dolomitlashgan ohaktoshlardan iborat, qalinligi 316–542 m. Gazli qismining foydali qalinligi 118 m. Gaz uyumidan yuqorida joylashgan qalinligi 341–546 m boʻlgan kimerijtiton tuz jinslari regional qopqoq vazifasini oʻtaydi. Mahsuldor qatlam 2735–3170 m chuqurlikda yotadi. Suv tarkibi xlorkaltsiyli, minerallashganligi 122,1 — 129,0 g/l. 1999-yilgacha olingan tabiiy gaz miqdori 245,2 mlrd. m³, gaz kondensati 12,4 mln. t. Kondagi gazda etan miqdori yuqori, gazni qayta ishlab, bu qimmatbaho elementni ajratib olish maqsadga muvofiq. Etan polimer, kauchuk, boʻyoq va doridarmonlar olishda asosiy xom ashyo hisoblanadi. Shoʻrtan gazidan ajratib olingan etanni qayta ishlab, polietilen olish maqsadida Shoʻrtan gazkimyo majmuasi bunyod etildi</li></ul><b>",
              title: "<b>Sho'rtan gaz</b>",
              sourceURL:
                "https://storage.kun.uz/source/8/rZqfu16DvcBvzXXL48Y2zzJR5C0MCV6e.jpeg",
              detect: false,
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

            const basemapToggle = new BasemapToggle({
              view: view,
              nextBasemap: "osm",
            });

            view.ui.add(basemapToggle, "bottom-right");

            view.ui.add(searchWidget, {
              position: "top-right",
            });

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

            const neft = {
              type: "picture-marker",
              url: symbol_oli,
              width: 26,
              height: 26,
            };
            const gaz = {
              type: "picture-marker",
              url: symbol_gas,
              width: 26,
              height: 26,
            };

            locations.forEach((location) => {
              const point = new Point({
                longitude: location.longitude,
                latitude: location.latitude,
              });

              const marker = new Graphic({
                geometry: point,
                symbol: location.detect ? neft : gaz,
                attributes: location,
                popupTemplate: {
                  title: location?.name,
                  content: [
                    {
                      type: "text",
                      text: location?.text,
                    },
                    {
                      type: "media",
                      mediaInfos: [
                        {
                          title: location?.title,
                          type: "image",
                          caption: "tree species",
                          value: {
                            sourceURL: location?.sourceURL,
                          },
                        },
                      ],
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
    <DefaultLayout>
      <div id="mapView" ref={mapRef}></div>
    </DefaultLayout>
  );
};

export default DefaultMap;
