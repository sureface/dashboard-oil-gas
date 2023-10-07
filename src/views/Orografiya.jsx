import React, { useEffect, useRef } from "react";
import Layout from "../layout/Layout";
import { loadModules } from "esri-loader";
import ground2 from "../assets/img/ground2.jpg";
import ground3 from "../assets/img/ground3.jpg";
import ground5 from "../assets/img/ground5.jpg";
import layer1 from "../assets/img/layer1.webp";
import layer2 from "../assets/img/layer2.webp";
import layer3 from "../assets/img/layer3.webp";
import layergif from "../assets/img/layergif.gif";
import layergif1 from "../assets/img/layergift1.png";

const Orografiya = () => {
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
              name: "Ustyurt gaz koni",
              longitude: 58.28617,
              latitude: 43.271111,
              text: "<b>Ma'lumot:</b><ul><li> Ustyurt (qozoqcha: Үстірт, qoraqalpoqcha: Ústirt) — Oʻzbekistonning shimoli-gʻarbi (Qoraqalpogʻiston) va Qozogʻiston hududlaridagi plato. Sharqda Orol dengizi va Amudaryo deltasi, gʻarbda Mangʻishloq yarim orol va Qoraboʻgʻozgoʻl qoʻltigʻi, shimolida Kaspiyboʻyi pasttekisligi oraligʻida joylashgan. Maydoni 200 ming km². Oʻrtacha balandligi 150–250 m, eng baland joyi (370 m) janubi-gʻarbida. Ustyurtning atrofi 60–150 m li tik jarlik (chink)lardan iborat. Chinklar har xil chuqurlikdagi jar va soylar bilan kesilgan. Ustyurtning shimoliy chinklari shimoliy gʻarbda Oʻlikqoʻltiq shoʻrligidan boshlanib, shimolida Katta Boʻrsiq qumligiga borib taqaladi. Platoning baland sharqiy chegarasi Orol dengizining avvalgi qirgʻogʻi va Amudaryo deltasidan, janubiy chinklari Qoraqum choʻli va Oʻzboy oʻzani, gʻarbiy chinklari esa Koraboʻgʻozgoʻl qoʻltigʻining gʻarbiy sohili, Qorniyoriq botigʻi, Qaydak shoʻrligi orqali oʻtadi.</li></ul><b>",
              sourceURL: { layer1, layer2, layer3 },
            },
            {
              name: "Ustyurt neft",
              longitude: 58.19976,
              latitude: 43.017959,
              text: "<b>Ma'lumot:</b><ul><li> Ustyurt (qozoqcha: Үстірт, qoraqalpoqcha: Ústirt) — Oʻzbekistonning shimoli-gʻarbi (Qoraqalpogʻiston) va Qozogʻiston hududlaridagi plato. Sharqda Orol dengizi va Amudaryo deltasi, gʻarbda Mangʻishloq yarim orol va Qoraboʻgʻozgoʻl qoʻltigʻi, shimolida Kaspiyboʻyi pasttekisligi oraligʻida joylashgan. Maydoni 200 ming km². Oʻrtacha balandligi 150–250 m, eng baland joyi (370 m) janubi-gʻarbida. Ustyurtning atrofi 60–150 m li tik jarlik (chink)lardan iborat. Chinklar har xil chuqurlikdagi jar va soylar bilan kesilgan. Ustyurtning shimoliy chinklari shimoliy gʻarbda Oʻlikqoʻltiq shoʻrligidan boshlanib, shimolida Katta Boʻrsiq qumligiga borib taqaladi. Platoning baland sharqiy chegarasi Orol dengizining avvalgi qirgʻogʻi va Amudaryo deltasidan, janubiy chinklari Qoraqum choʻli va Oʻzboy oʻzani, gʻarbiy chinklari esa Koraboʻgʻozgoʻl qoʻltigʻining gʻarbiy sohili, Qorniyoriq botigʻi, Qaydak shoʻrligi orqali oʻtadi.</li></ul><b>",
              sourceURL: { ground2 },
            },
            {
              name: "Muborak gaz koni",
              longitude: 65.268902,
              latitude: 39.170431,
              text: "<b>Ma'lumot:</b><ul><li> Muborak shahri yaqinidagi Janubiy va Shimoliy Muborak konlari. Janubiy Muborak gaz-kondensat koni Muborak shahridan 15–20 km jan.-sharkda joylashgan. Kon strukturasi 1955-yilda L. G. Cherkashina va N. I. Kamoliddinovlarning seysmik tadqiqotlari natijasida aniqlangan. Konning gazliligi kuyi boʻrga mansub 12- va 13-gorizontlar bilan bogʻliq. 12mahsuldor gorizont 1160–1470 m chuqurlikda joylashgan va qumtosh va alevrolitlardan tashkil topgan. Umumiy qalinligi 62–67 m, samarali qalinligi 16–27 m, ochiq gʻovakliligi 18—22%, samarali gʻovakliligi 12—18%, oʻtkazuvchanligi 125— 578 millidarsini tashkil etadi. Uyumning uz. 12,6 km, eni 4,3 km va qalinligi 130 m. Gaz zichligi 0,640 (xavoga nisbatan), tarkibidagi metan 85— 93%, SO2 gazi 0,1 — 1,5%, azot va nodirgazlar 1,8—5%. Kondensatning zichligi 0,74; qovushokligi 1,03 santipuz, tarkibidagi oltingugurt 0,03%. Gaz tarkibida erigan kondensat miqdori 95 sm³/m3. 13-gorizont 1230–1450 m chuqurlikda joylashgan boʻlib, asosan, qumtosh, gravelit, gil va qisman mergeldan tuzilgan. Umumiy kalinligi 80 m gacha, samarali qalinligi 30 m, ochiq gʻovakliligi 16—24%, samarali gʻovakliligi 12—18%, oʻtkazuvchanligi 298 millidarsi. Uyumning uz. 10 km, eni 3,75 km, qalinligi 82 m. Boshlangʻich qatlam bosimi 133 atm, temperaturasi 65°. Gazning zichligi 0,63 (havoga nisbatan) va tarkibidagi metan 84,8—92,7%, ogʻir uglevodorodlar 7—8%, azot va nodir gazlar 2—5,8%, kondensat miqdori 80,6 sm³/m3. 12—13-gorizontlardagi kondensat fizikkimyoviy xossalari boʻyicha bir xil.</li></ul><b>",
              sourceURL: { ground2 },
            },
            {
              name: "Muborak Neft",
              longitude: 65.8097,
              latitude: 39.2767,
              text: "<b>Ma'lumot:</b><ul><li> Ustyurt (qozoqcha: Үстірт, qoraqalpoqcha: Ústirt) — Oʻzbekistonning shimoli-gʻarbi (Qoraqalpogʻiston) va Qozogʻiston hududlaridagi plato. Sharqda Orol dengizi va Amudaryo deltasi, gʻarbda Mangʻishloq yarim orol va Qoraboʻgʻozgoʻl qoʻltigʻi, shimolida Kaspiyboʻyi pasttekisligi oraligʻida joylashgan. Maydoni 200 ming km². Oʻrtacha balandligi 150–250 m, eng baland joyi (370 m) janubi-gʻarbida. Ustyurtning atrofi 60–150 m li tik jarlik (chink)lardan iborat. Chinklar har xil chuqurlikdagi jar va soylar bilan kesilgan. Ustyurtning shimoliy chinklari shimoliy gʻarbda Oʻlikqoʻltiq shoʻrligidan boshlanib, shimolida Katta Boʻrsiq qumligiga borib taqaladi. Platoning baland sharqiy chegarasi Orol dengizining avvalgi qirgʻogʻi va Amudaryo deltasidan, janubiy chinklari Qoraqum choʻli va Oʻzboy oʻzani, gʻarbiy chinklari esa Koraboʻgʻozgoʻl qoʻltigʻining gʻarbiy sohili, Qorniyoriq botigʻi, Qaydak shoʻrligi orqali oʻtadi.</li></ul><b>",
              sourceURL: { layergif, layergif1 },
            },
            {
              name: "Sho'rtan gaz koni",
              longitude: 65.80549,
              latitude: 38.45954,
              text: "<b>Ma'lumot:</b><ul><li>Qashqadaryo viloyatidagi kon. Qarshi shahridan 40 km jan.sharqda. 1974-yilda ochilgan. Chorjoʻy tektonik pogʻonasiga tegishli Beshkent egilmasida braxiantiklinal koʻrinishidagi Shoʻrtan strukturasida joylashgan. Yuqori yura davrining kelloveyoksford yotqiziqlari mahsuldor hisoblanadi. Gazkondensat 15NR, 15R va 15PR gorizontlarida ochilgan. Gorizontlar kulrang ohaktoshlardan hamda zichlashgan, darzli, dolomitlashgan ohaktoshlardan iborat, qalinligi 316–542 m. Gazli qismining foydali qalinligi 118 m. Gaz uyumidan yuqorida joylashgan qalinligi 341–546 m boʻlgan kimerijtiton tuz jinslari regional qopqoq vazifasini oʻtaydi. Mahsuldor qatlam 2735–3170 m chuqurlikda yotadi. Suv tarkibi xlorkaltsiyli, minerallashganligi 122,1 — 129,0 g/l. 1999-yilgacha olingan tabiiy gaz miqdori 245,2 mlrd. m³, gaz kondensati 12,4 mln. t. Kondagi gazda etan miqdori yuqori, gazni qayta ishlab, bu qimmatbaho elementni ajratib olish maqsadga muvofiq. Etan polimer, kauchuk, boʻyoq va doridarmonlar olishda asosiy xom ashyo hisoblanadi. Shoʻrtan gazidan ajratib olingan etanni qayta ishlab, polietilen olish maqsadida Shoʻrtan gazkimyo majmuasi bunyod etildi</li></ul><b>",
              sourceURL: { ground2 },
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
                            sourceURL: location?.sourceURL.ground2
                              ? location?.sourceURL.ground2
                              : location?.sourceURL.layer1
                              ? location?.sourceURL.layer1
                              : location?.sourceURL.layergif,
                          },
                        },
                        {
                          type: "image",
                          value: {
                            sourceURL: location?.sourceURL.ground2
                              ? location?.sourceURL.ground2
                              : location?.sourceURL.layer2
                              ? location?.sourceURL.layer2
                              : location?.sourceURL.layergif1,
                          },
                        },
                        {
                          type: "image",
                          value: {
                            sourceURL: location?.sourceURL.ground2
                              ? location?.sourceURL.ground2
                              : location?.sourceURL.layer3,
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

export default Orografiya;
