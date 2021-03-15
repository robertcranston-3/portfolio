// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */

 
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
async function showGreeting(){
    const responseData = await fetch('/hello');
    const responseText = await responseData.json();

    //const value =  responseText[Math.floor(Math.random()*responseText.length)];

    const documentContainer = document.getElementById('hello');
    documentContainer.innerText=responseText[Math.floor(Math.random()*5)];
}

function initMap() {
  let map;
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:33.8550199 , lng:-84.2080488 },
    zoom: 11,
  });

  const ABWString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading"'+">Atlanta's Best Wings</h1>" +
    '<div id="bodyContent">' +
    "<p><b>Atlanta's Best Wings</b>, also referred to as <b>ABW</b>,"+ 
    "has the best wings I have ever had in my entire life.</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: ABWString,
  });
  const ABW = new google.maps.Marker({
    position: {lat:33.8550199 , lng:-84.2080488 },
    map,
    title: "Atlanta's Best Wings",
  });
  ABW.addListener("click", () => {
    infowindow.open(map, ABW);
  });
  const PhoString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">I Love Pho</h1>' +
    '<div id="bodyContent">' +
    "<p><b>I Love Pho</b>"+ 
    "has delicious genuine vietnamese Pho.</p>" +
    "</div>" +
    "</div>";
  const infowindowPho = new google.maps.InfoWindow({
    content: PhoString,
  });
  const Pho = new google.maps.Marker({
    position: {lat:33.9416915 , lng:-84.159816},
    map,
    title: "I love Pho",
  });
  Pho.addListener("click", () => {
    infowindowPho.open(map, Pho);
  });
  
}