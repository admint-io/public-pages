//import "https://cdn.ethers.io/scripts/ethers-v3.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js";
import * as config from "./config.js";
import "./imports/jquery-min.js";
import "./imports/modal.js";
import "./imports/metamask-adapter.js";
import "./imports/wallet-connect-v1-adapter.js";
import "./imports/torus-evm-adapter.js";
import "./imports/torus-wallet-connector-plugin.js";
import "./imports/web3-min.js";
import { rpc } from "./ethersRPC.js";
import "https://www.googletagmanager.com/gtag/js?id=G-TQW7C70YGW%22%3E";

console.log("entering index page");

export var campaignId = "undefined";
export var inviteCode = "undefined";

function convertToColorBlocks(text) {
  const lines = text.trim().split("\n");
  const colorBlocks = [];

  let currentBlock = [];

  for (const line of lines) {
    if (line.trim().startsWith("-- ftd.color")) {
      if (currentBlock.length === 3) {
        colorBlocks.push(currentBlock.join("\n"));
      }
      currentBlock = [line.trim()];
    } else if (currentBlock.length > 0 && currentBlock.length < 3) {
      currentBlock.push(line.trim());
    }
  }

  if (currentBlock.length === 3) {
    colorBlocks.push(currentBlock.join("\n"));
  }

  return colorBlocks.join("\n\n");
}

window.color_scheme_to_ftd = async function color_scheme_to_ftd(
  colorSchemeData
) {
  return new Promise(async (resolve, reject) => {
    try {
      const filteredText = convertToColorBlocks(colorSchemeData);
      const blocks = filteredText.split("-- ftd.color");
      const trimmedBlocks = blocks.map((block) => block.trim());
      const nonEmptyBlocks = trimmedBlocks.filter((block) => block.length > 0);
      const result = nonEmptyBlocks.map((block) => {
        const lines = block.split("\n");
        const obj = { colors: lines[0].trim().replace(/:/g, "") };
        lines.slice(1).forEach((line) => {
          const [key, value] = line.split(":");
          obj[key.trim()] = value.trim();
        });
        return obj;
      });
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

window.onload = async function () {
  // readUrlParams()
  //   .then((response) => {
  //     console.log("readUrlParams() promise resolved");
  //     window.ftd.set_value(
  //       `public-pages/distribution/templates/holy-angel/#loadedState`,
  //       "loaded"
  //     );
  //   })
  //   .catch((error) => {
  //     console.log("readUrlParams() promise rejected");
  //     console.error("Promise rejected : readUrlParams(), Reason : ", error);
  //     window.ftd.set_value(
  //       `public-pages/distribution/templates/holy-angel/#loadedState`,
  //       "loaded"
  //     );
  //   });

       window.ftd.set_value(
        `public-pages/distribution/templates/holy-angel/#loadedState`,
        "loaded"
      );
};

function getUrlParameters() {
  // Get the current URL from the browser
  const url = window.location.href;

  // Split the URL into base URL and fragment identifier
  const [baseUrl, fragment] = url.split('#');

  // Check if there is a fragment identifier present
  if (fragment) {
    // Split the fragment into fragment part and query string
    const [fragmentPart, queryString] = fragment.split('?');
    const fragmentParams = new URLSearchParams(queryString);

    // Create an object to store the decoded fragment parameters
    const decodedParams = {};

    // Loop through the fragment parameters and decode the values
    for (const [key, value] of fragmentParams.entries()) {
      decodedParams[key] = decodeURIComponent(value);
    }

    // Return the fragment parameters along with the base URL
    return {
      baseUrl: baseUrl,
      fragmentParams: decodedParams
    };
  }

  // Return only the base URL if there is no fragment identifier
  return {
    baseUrl: baseUrl
  };
}

window.readUrlParams = async function readUrlParams() {
  return new Promise(function (resolve, reject) {

    var inviteId;
    var domainName;
    var nftType;
    var creativeId;

    const url = window.location.href;
    const [baseUrl, fragment] = url.split('#');

  if (fragment) {
    console.log("fragment detecddted");
    const [fragmentPart, queryString] = fragment.split('?');
    const fragmentParams = new URLSearchParams(queryString);
    const decodedParams = {};
    for (const [key, value] of fragmentParams.entries()) {
      decodedParams[key] = decodeURIComponent(value);
    }
    console.log("decoded params is ",decodedParams);
    inviteId = decodedParams.invite_id;
    domainName = decodedParams.cname;
    nftType = decodedParams.type;
    creativeId = decodedParams.cd;
  
  }
  else{
    console.log("no fragment detected");
    var urlParams = new URLSearchParams(window.location.search);
    inviteId = urlParams.get("invite_id");
    domainName = urlParams.get("cname");
    nftType = urlParams.get("type");
    creativeId = urlParams.get("cd");

    console.log("invite id is ", inviteId);
    console.log("cname is ", domainName);
    console.log("nft type is ", nftType);
    console.log("creative id is ", creativeId);
  }
    
    

    //domainName = cName;
    inviteCode = inviteId;
    

    window.ftd.set_value(
      `public-pages/distribution/templates/holy-angel/texts#nft-type`,
      nftType
    );

    fetchUiComponents(domainName,creativeId)
      .then((result) => {
        console.log("fetchUiComponents() promise resolved");
        if ("colorSchemeUrl" in result.values[0]) {
          fetchColorScheme(result.values[0].colorSchemeUrl)
            .then((colorSchemeData) => {
              console.log("fetchColorScheme() promise resolved");
              color_scheme_to_ftd(colorSchemeData)
                .then((resultColorsObj) => {
                  resultColorsObj.forEach((obj) => {
                    try {
                      var colors = obj.colors;
                      if ("colors" in obj) {
                        delete obj["colors"];
                      }
                      if (obj.light != undefined && obj.light != "undefined") {
                        window.ftd.set_value(
                          `public-pages/distribution/templates/holy-angel/colors#${colors}.light`,
                          obj.light
                        );
                      }
                      if (obj.dark != undefined && obj.dark != "undefined") {
                        window.ftd.set_value(
                          `public-pages/distribution/templates/holy-angel/colors#${colors}.dark`,
                          obj.dark
                        );
                      }
                    } catch (e) {
                      console.error(e);
                    }
                  });
                  console.log("ftd colors updated");
                })
                .catch((error) => {
                  console.error(
                    "Promise rejected : color_scheme_to_ftd(), Reason : ",
                    error
                  );
                });
            })
            .catch((error) => {
              console.error(
                "Promise rejected : fetchColorScheme(), Reason : ",
                error
              );
            });
        } else {
          reject("color scheme url key not included");
        }
        resolve(result);
      })
      .catch((error) => {
        console.error(
          "Promise rejected : fetchUiComponents(), Reason : ",
          error
        );
        reject(error);
      });
  });
};

window.fetchUiComponents = async function fetchUiComponents(domainName,creativeId) {
  return new Promise(function (resolve, reject) {
    if (domainName != undefined) {
      const url = `${config.DISTRIBUTION_BASE_BACKEND_URL}/sitedata/${domainName}`;
      const apiConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .get(url, apiConfig)
        .then((response) => {
          const respData = response.data;
          if ("values" in respData) {
            if (respData.values.length > 0) {
              if ("campaignId" in respData.values[0]) {
                campaignId = respData.values[0].campaignId;
              }
              if ("bannerImageUrl" in respData.values[0]) {
                checkImageURL(respData.values[0].bannerImageUrl)
                  .then((validImageUrl) => {
                    console.log("this is a valid image url", validImageUrl);
                    window.ftd.set_value(
                      "public-pages/distribution/templates/holy-angel/images#hero-image-url",
                      validImageUrl
                    );
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }
              if ("creativeDatas" in respData.values[0]) {
                updateCreativeDataUi(respData.values[0].creativeDatas,creativeId).then(
                  (result) => {
                    console.log("creative data updated");
                    window.ftd.set_value(
                      `public-pages/distribution/templates/holy-angel/#loadedState`,
                      "loaded"
                    );
                  }
                ).catch((error) => {
                  console.error(error);
                });
              }
              resolve(respData);
            } else {
              reject("values is an empty array");
            }
          } else {
            reject("values key not included in response from server");
          }
        })
        .catch((error) => {
          console.error(error);
          //showFailurePopup(error);
          reject(error);
        });
    } else {
      reject("domain name is undefined");
    }
  });
};

window.fetchColorScheme = async function fetchColorScheme(colorSchemeUrl) {
  return new Promise(async (resolve, reject) => {
    const url = `${config.COLOR_SCHEME_BASE_URL}/${colorSchemeUrl}`;
    const apiConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get(url, apiConfig)
      .then((response) => {
        const respData = response.data;
        //console.log("color scheme from github is ",respData);
        resolve(respData);
        // if (isValidJSON(respData)) {
        //     const respDataString=JSON.stringify(respData);
        //     resolve(respDataString);
        //   } else {
        //     reject("invalid JSON");
        //   }
      })
      .catch((error) => {
        console.error(error);
        //showFailurePopup(error);
        reject(error);
      });
  });
};

window.updateCreativeDataUi = async function updateCreativeDataUi(
  creativeDatasArray,creativeId
) {
  return new Promise(async (resolve, reject) => {
    console.log(
      "creative datas array is ",
      creativeDatasArray,
      "creative id is ",
      creativeId
    );
    creativeDatasArray.forEach((obj) => {
      if (obj.creativeId == creativeId) {
        console.log("creatives match found ");
        if ("imageUrl" in obj) {
          window.ftd.set_value(
            "public-pages/distribution/templates/holy-angel/images#nft-image-url",
            obj.imageUrl
          );       
        }
      }
    });
    resolve("nft image updation success");
  });
};

window.isValidJSON = async function isValidJSON(response) {
  try {
    JSON.parse(response);
    return true;
  } catch (error) {
    return false;
  }
};

window.showSuccessPopup = async function showSuccessPopup(inputData) {
  console.log("input data is ", inputData);

  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/texts#popup-title",
    "Success"
  );
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/texts#popup-body",
    inputData
  );
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/images#popup-image",
    "images/success.png"
  );
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/lib#pop-up-status",
    true
  );

  //   const overlay = document.createElement('div');
  //   const popup = document.createElement('div');
  //   const popupStyle = document.createElement("style");
  //   const submitButtonContainer=document.createElement("div");
  //   const submitButton = document.createElement('button');
  //   const imageContainer = document.createElement('div');
  //   const statusImage = new Image();
  //   const titleContainer = document.createElement('div');
  //   const tileText = document.createElement("h2");
  //   const messageContainer = document.createElement('div');
  //   const messageText = document.createElement("h4");

  //   submitButton.textContent = 'Close';

  //   popupStyle.textContent = `
  //   .overlay {
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     background-color: rgba(0, 0, 0, 0.5);
  //     z-index: 9998;
  //     opacity: 0;
  //     transition: opacity 0.5s;
  //   }
  //   .popup {
  //     position: fixed;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     background-color: #fff;
  //     padding: 20px;
  //     z-index: 9999;
  //     opacity: 0;
  //     transition: opacity 0.5s;
  //     border-radius: 20px;
  //     width: 470px;
  //     height: 350px;
  //     flex-direction: row;
  //     align-items: flex-end;
  //   }
  //   .submitButtonContainer {
  //     width: 224px;
  //     height: 46px;
  //     position: fixed;
  //     bottom: 0;
  //     margin-left: 120px;
  //     background: #3FB488;
  //     border: 0.891775px solid #FFFFFF;
  //     border-radius: 8.91775px;
  //     margin-bottom: 15px;
  //   }
  //   .submitButton {
  //     width: 224px;
  //     height: 46px;
  //     background: #3FB488;
  //     border: 0.891775px solid #FFFFFF;
  //     border-radius: 8.91775px;
  //     font-family: 'Lato', sans-serif;
  //     font-style: normal;
  //     font-weight: 600;
  //     font-size: 14.2684px;
  //     line-height: 17px;
  //     color: #FFFFFF;
  //     cursor: pointer;
  //   }
  //   .imageContainer {

  //   }
  //   .statusImage {

  //   }
  //   .titleContainer {
  //       margin-top:20px;
  //   }
  //   .tileText {
  //       font-family: 'Lato', sans-serif;
  //       font-style: normal;
  //       font-weight: 600;
  //       font-size: 25px;
  //       line-height: 17px;
  //   }
  //   .messageContainer {

  //   }
  //   .messageText {
  //       font-family: 'Lato', sans-serif;
  //       font-style: normal;
  //       font-weight: 500;
  //       font-size: 15.2684px;
  //       line-height: 17px;
  //   }
  //   `;

  //   overlay.id="overlay";
  //   popup.id="popup";
  //   submitButtonContainer.id="submitButtonContainer";
  //   submitButton.id="submitButton";
  //   imageContainer.id="imageContainer";
  //   statusImage.id="statusImage";
  //   titleContainer.id="titleContainer";
  //   tileText.id="tileText";
  //   messageContainer.id="messageContainer";
  //   messageText.id="messageText";

  //   overlay.classList.add("overlay");
  //   popup.classList.add("popup");
  //   submitButtonContainer.classList.add("submitButtonContainer");
  //   submitButton.classList.add("submitButton");
  //   imageContainer.classList.add("imageContainer");
  //   statusImage.classList.add("statusImage");
  //   titleContainer.classList.add("titleContainer");
  //   tileText.classList.add("tileText");
  //   messageContainer.classList.add("messageContainer");
  //   messageText.classList.add("messageText");

  //  // statusImage.src="https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-green-check-mark-png-image_6525691.png";
  //   statusImage.src="./images/liveTick.gif";
  //   statusImage.style.width="200px";
  //   statusImage.style.height="150px";

  //   imageContainer.style.alignItems="center";
  // //  imageContainer.style.backgroundColor="yellow";
  //   imageContainer.style.alignContent="center";
  //   imageContainer.style.textAlign="center";

  //   titleContainer.style.textAlign="center";
  //  // titleContainer.style.backgroundColor="orange";

  //   tileText.innerText="Success";
  //   tileText.style.color="#339e5f";

  // //  messageContainer.style.backgroundColor="blue";
  //   messageContainer.style.textAlign="center";

  //   messageText.innerText="You have claimed your NFT. Now sit back and relax, while we do our part !";
  //   messageText.style.marginTop="30px";

  //   imageContainer.appendChild(statusImage);
  //   titleContainer.appendChild(tileText);
  //   messageContainer.appendChild(messageText);
  //   popup.appendChild(imageContainer);
  //   popup.appendChild(titleContainer);
  //   popup.appendChild(messageContainer);

  //   submitButton.addEventListener("click", () => {
  //       overlay.style.opacity = '0';
  //       popup.style.opacity = '0';

  //       setTimeout(() => {
  //         document.body.removeChild(overlay);
  //         document.body.removeChild(popup);
  //       }, 500);
  //    });

  //   submitButtonContainer.appendChild(submitButton);
  //   popup.appendChild(submitButtonContainer);
  //   popup.appendChild(popupStyle);
  //   document.body.appendChild(overlay);
  //   document.body.appendChild(popup);

  //   setTimeout(() => {
  //     overlay.style.opacity = '1';
  //     popup.style.opacity = '1';
  //   }, 50);
};

window.showFailurePopup = async function showFailurePopup(inputData) {
  console.log("input data is ", inputData);

  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/texts#popup-title",
    "Claim Request Error !"
  );
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/texts#popup-body",
    inputData
  );
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/images#popup-image",
    "images/error.svg"
  );
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/lib#pop-up-status",
    true
  );

  //   const overlay = document.createElement('div');
  //   const popup = document.createElement('div');
  //   const popupStyle = document.createElement("style");
  //   const submitButtonContainer=document.createElement("div");
  //   const submitButton = document.createElement('button');
  //   const imageContainer = document.createElement('div');
  //   const statusImage = new Image();
  //   const titleContainer = document.createElement('div');
  //   const tileText = document.createElement("h2");
  //   const messageContainer = document.createElement('div');
  //   const messageText = document.createElement("h4");

  //   submitButton.textContent = 'Close';

  //   popupStyle.textContent = `
  //   .overlay {
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     background-color: rgba(0, 0, 0, 0.5);
  //     z-index: 9998;
  //     opacity: 0;
  //     transition: opacity 0.5s;
  //   }
  //   .popup {
  //     position: fixed;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     background-color: #fff;
  //     padding: 20px;
  //     z-index: 9999;
  //     opacity: 0;
  //     transition: opacity 0.5s;
  //     border-radius: 20px;
  //     width: 470px;
  //     height: 350px;
  //     flex-direction: row;
  //     align-items: flex-end;
  //   }
  //   .submitButtonContainer {
  //     width: 224px;
  //     height: 46px;
  //     position: fixed;
  //     bottom: 0;
  //     margin-left: 120px;
  //     background: #3FB488;
  //     border: 0.891775px solid #FFFFFF;
  //     border-radius: 8.91775px;
  //     margin-bottom: 15px;
  //   }
  //   .submitButton {
  //     width: 224px;
  //     height: 46px;
  //     background: #d13b4e;
  //     border: 0.891775px solid #FFFFFF;
  //     border-radius: 8.91775px;
  //     font-family: 'Lato', sans-serif;
  //     font-style: normal;
  //     font-weight: 600;
  //     font-size: 14.2684px;
  //     line-height: 17px;
  //     color: #FFFFFF;
  //     cursor: pointer;
  //   }
  //   .imageContainer {

  //   }
  //   .statusImage {

  //   }
  //   .titleContainer {
  //       margin-top:20px;
  //   }
  //   .tileText {
  //       font-family: 'Lato', sans-serif;
  //       font-style: normal;
  //       font-weight: 600;
  //       font-size: 25px;
  //       line-height: 17px;
  //   }
  //   .messageContainer {

  //   }
  //   .messageText {
  //       font-family: 'Lato', sans-serif;
  //       font-style: normal;
  //       font-weight: 500;
  //       font-size: 15.2684px;
  //       line-height: 17px;
  //   }
  //   `;

  //   overlay.id="overlay";
  //   popup.id="popup";
  //   submitButtonContainer.id="submitButtonContainer";
  //   submitButton.id="submitButton";
  //   imageContainer.id="imageContainer";
  //   statusImage.id="statusImage";
  //   titleContainer.id="titleContainer";
  //   tileText.id="tileText";
  //   messageContainer.id="messageContainer";
  //   messageText.id="messageText";

  //   overlay.classList.add("overlay");
  //   popup.classList.add("popup");
  //   submitButtonContainer.classList.add("submitButtonContainer");
  //   submitButton.classList.add("submitButton");
  //   imageContainer.classList.add("imageContainer");
  //   statusImage.classList.add("statusImage");
  //   titleContainer.classList.add("titleContainer");
  //   tileText.classList.add("tileText");
  //   messageContainer.classList.add("messageContainer");
  //   messageText.classList.add("messageText");

  //  // statusImage.src="https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-green-check-mark-png-image_6525691.png";
  //   //statusImage.src="./images/liveTick.gif";
  //   statusImage.src="https://media4.giphy.com/media/G9FMEr3PGv2pfc1Z5F/giphy.gif?cid=6c09b952vwbjlggnoa5dxsf6ze7916nuncnes8vp1j6tnhkd&ep=v1_stickers_related&rid=giphy.gif&ct=s";
  //   statusImage.style.width="200px";
  //   statusImage.style.height="170px";

  //   imageContainer.style.alignItems="center";
  // //  imageContainer.style.backgroundColor="yellow";
  //   imageContainer.style.alignContent="center";
  //   imageContainer.style.textAlign="center";

  //   titleContainer.style.textAlign="center";
  //  // titleContainer.style.backgroundColor="orange";

  //   tileText.innerText="Message";
  //   tileText.style.color="#fa1e3b";

  // //  messageContainer.style.backgroundColor="blue";
  //   messageContainer.style.textAlign="center";

  //   if(1){
  //       messageText.innerText=inputData;
  //   }

  //   messageText.style.marginTop="30px";

  //   imageContainer.appendChild(statusImage);
  //   titleContainer.appendChild(tileText);
  //   messageContainer.appendChild(messageText);
  //   popup.appendChild(imageContainer);
  //   popup.appendChild(titleContainer);
  //   popup.appendChild(messageContainer);

  //   submitButton.addEventListener("click", () => {
  //       overlay.style.opacity = '0';
  //       popup.style.opacity = '0';

  //       setTimeout(() => {
  //         document.body.removeChild(overlay);
  //         document.body.removeChild(popup);
  //       }, 500);
  //    });

  //   submitButtonContainer.appendChild(submitButton);
  //   popup.appendChild(submitButtonContainer);
  //   popup.appendChild(popupStyle);
  //   document.body.appendChild(overlay);
  //   document.body.appendChild(popup);

  //   setTimeout(() => {
  //     overlay.style.opacity = '1';
  //     popup.style.opacity = '1';
  //   }, 50);
};

window.showWarningPopup = async function showWarningPopup(inputData) {
  console.log("input data is ", inputData);
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/texts#popup-title",
    "Claim Request Error !"
  );
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/texts#popup-body",
    inputData
  );
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/images#popup-image",
    "images/error.svg"
  );
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/lib#pop-up-status",
    true
  );

  //   const overlay = document.createElement('div');
  //   const popup = document.createElement('div');
  //   const popupStyle = document.createElement("style");
  //   const submitButtonContainer=document.createElement("div");
  //   const submitButton = document.createElement('button');
  //   const imageContainer = document.createElement('div');
  //   const statusImage = new Image();
  //   const titleContainer = document.createElement('div');
  //   const tileText = document.createElement("h2");
  //   const messageContainer = document.createElement('div');
  //   const messageText = document.createElement("h4");

  //   submitButton.textContent = 'Close';

  //   popupStyle.textContent = `
  //   .overlay {
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     background-color: rgba(0, 0, 0, 0.5);
  //     z-index: 9998;
  //     opacity: 0;
  //     transition: opacity 0.5s;
  //   }
  //   .popup {
  //     position: fixed;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     background-color: #fff;
  //     padding: 20px;
  //     z-index: 9999;
  //     opacity: 0;
  //     transition: opacity 0.5s;
  //     border-radius: 20px;
  //     width: 470px;
  //     height: 350px;
  //     flex-direction: row;
  //     align-items: flex-end;
  //   }
  //   .submitButtonContainer {
  //     width: 224px;
  //     height: 46px;
  //     position: fixed;
  //     bottom: 0;
  //     margin-left: 120px;
  //     background: #3FB488;
  //     border: 0.891775px solid #FFFFFF;
  //     border-radius: 8.91775px;
  //     margin-bottom: 15px;
  //   }
  //   .submitButton {
  //     width: 224px;
  //     height: 46px;
  //     background: #f29f11;
  //     border: 0.891775px solid #FFFFFF;
  //     border-radius: 8.91775px;
  //     font-family: 'Lato', sans-serif;
  //     font-style: normal;
  //     font-weight: 600;
  //     font-size: 14.2684px;
  //     line-height: 17px;
  //     color: #FFFFFF;
  //     cursor: pointer;
  //   }
  //   .imageContainer {

  //   }
  //   .statusImage {

  //   }
  //   .titleContainer {
  //       margin-top:20px;
  //   }
  //   .tileText {
  //       font-family: 'Lato', sans-serif;
  //       font-style: normal;
  //       font-weight: 600;
  //       font-size: 25px;
  //       line-height: 17px;
  //   }
  //   .messageContainer {
  //       margin-top: 60px;
  //   }
  //   .messageText {
  //       font-family: 'Lato', sans-serif;
  //       font-style: normal;
  //       font-weight: 500;
  //       font-size: 15.2684px;
  //       line-height: 17px;
  //   }
  //   `;

  //   overlay.id="overlay";
  //   popup.id="popup";
  //   submitButtonContainer.id="submitButtonContainer";
  //   submitButton.id="submitButton";
  //   imageContainer.id="imageContainer";
  //   statusImage.id="statusImage";
  //   titleContainer.id="titleContainer";
  //   tileText.id="tileText";
  //   messageContainer.id="messageContainer";
  //   messageText.id="messageText";

  //   overlay.classList.add("overlay");
  //   popup.classList.add("popup");
  //   submitButtonContainer.classList.add("submitButtonContainer");
  //   submitButton.classList.add("submitButton");
  //   imageContainer.classList.add("imageContainer");
  //   statusImage.classList.add("statusImage");
  //   titleContainer.classList.add("titleContainer");
  //   tileText.classList.add("tileText");
  //   messageContainer.classList.add("messageContainer");
  //   messageText.classList.add("messageText");

  //  // statusImage.src="https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-green-check-mark-png-image_6525691.png";
  //   statusImage.src="data:image/png;base64,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";
  //   statusImage.style.width="120px";
  //   statusImage.style.height="120px";

  //   imageContainer.style.alignItems="center";
  // //  imageContainer.style.backgroundColor="yellow";
  //   imageContainer.style.alignContent="center";
  //   imageContainer.style.textAlign="center";

  //   titleContainer.style.textAlign="center";
  //  // titleContainer.style.backgroundColor="orange";

  //   tileText.innerText="Warning";
  //   tileText.style.color="#ffa203";

  // //  messageContainer.style.backgroundColor="blue";
  //   messageContainer.style.textAlign="center";

  //   messageText.innerText=inputData;
  //   messageText.style.marginTop="30px";

  //   imageContainer.appendChild(statusImage);
  //   titleContainer.appendChild(tileText);
  //   messageContainer.appendChild(messageText);
  //   popup.appendChild(imageContainer);
  //   popup.appendChild(titleContainer);
  //   popup.appendChild(messageContainer);

  //   submitButton.addEventListener("click", () => {
  //       overlay.style.opacity = '0';
  //       popup.style.opacity = '0';

  //       setTimeout(() => {
  //         document.body.removeChild(overlay);
  //         document.body.removeChild(popup);
  //       }, 500);
  //    });

  //   submitButtonContainer.appendChild(submitButton);
  //   popup.appendChild(submitButtonContainer);
  //   popup.appendChild(popupStyle);
  //   document.body.appendChild(overlay);
  //   document.body.appendChild(popup);

  //   setTimeout(() => {
  //     overlay.style.opacity = '1';
  //     popup.style.opacity = '1';
  //   }, 50);
};

window.checkImageURL = async function checkImageURL(url) {
  console.log("input url is ",url);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => reject(new Error("Invalid image URL"));
    img.src = url;
  });
};




///////////////// Code for web3Auth ///////////////////////////////////////////////////


let web3auth = null;
let provider = null;

const clientId =config.WEB3AUTH_CLIENT_ID;

window.web3AuthInit = async function web3AuthInit() {
  web3auth = new window.Modal.Web3Auth({
    clientId,
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x13881",
      rpcTarget: "https://rpc-mumbai.maticvigil.com", // This is the public RPC we have added, please pass on your own endpoint while creating an app
    },
    web3AuthNetwork: "testnet",
  });

    // Add Torus Wallet Connector Plugin
    const torusPlugin =
    new window.TorusWalletConnectorPlugin.TorusWalletConnectorPlugin({
      torusWalletOpts: {},
      walletInitOptions: {
        whiteLabel: {
          theme: { isDark: true, colors: { primary: "#00a8ff" } },
          logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
          logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
        },
        useWalletConnect: true,
        enableLogging: true,
      },
    });
  await web3auth.addPlugin(torusPlugin);

  const walletConnectAdapter =
    new window.WalletConnectV1Adapter.WalletConnectV1Adapter({
      adapterSettings: {
        bridge: "https://bridge.walletconnect.org",
      },
      clientId,
    });
  web3auth.configureAdapter(walletConnectAdapter);

  const metamaskAdapter = new window.MetamaskAdapter.MetamaskAdapter({
    clientId,
    sessionTime: 3600, // 1 hour in seconds
    web3AuthNetwork: "testnet",
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x13881",
      rpcTarget: "https://rpc-mumbai.maticvigil.com", // This is the public RPC we have added, please pass on your own endpoint while creating an app
    },
  });
  web3auth.configureAdapter(metamaskAdapter);

  const torusAdapter = new window.TorusEvmAdapter.TorusWalletAdapter({
    clientId,
  });
  web3auth.configureAdapter(torusAdapter);
  await web3auth.initModal();
  if(web3auth.status=="connected"){
    window.ftd.set_value(
      "public-pages/distribution/templates/holy-angel/texts#wallet-state",
      "connected"
    );
  }
}

web3AuthInit();

// $("#login").click(async function (event) {
//   try {
//     const provider = await web3auth.connect();
//     $(".btn-logged-out").hide();
//     $(".btn-logged-in").show();
//     uiConsole("Logged in Successfully!");
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// $("#get-user-info").click(async function (event) {
//   try {
//     const user = await web3auth.getUserInfo();
//     uiConsole(user);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// $("#get-id-token").click(async function (event) {
//   try {
//     const id_token = await web3auth.authenticateUser();
//     uiConsole(id_token);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// $("#get-chain-id").click(async function (event) {
//   try {
//     const chainId = await rpc.getChainId(web3auth.provider);
//     uiConsole(chainId);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// $("#get-accounts").click(async function (event) {
//   try {
//     const accounts = await rpc.getAccounts(web3auth.provider);
//     uiConsole(accounts);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// $("#get-balance").click(async function (event) {
//   try {
//     const balance = await rpc.getBalance(web3auth.provider);
//     uiConsole(balance);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// $("#send-transaction").click(async function (event) {
//   try {
//     const receipt = await rpc.sendTransaction(web3auth.provider);
//     uiConsole(receipt);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// $("#sign-message").click(async function (event) {
//   try {
//     const signedMsg = await rpc.signMessage(web3auth.provider);
//     uiConsole(signedMsg);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// $("#get-private-key").click(async function (event) {
//   try {
//     const privateKey = await rpc.getPrivateKey(web3auth.provider);
//     uiConsole(privateKey);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// $("#logout").click(async function (event) {
//   try {
//     await web3auth.logout();
//     $(".btn-logged-in").hide();
//     $(".btn-logged-out").show();
//   } catch (error) {
//     console.error(error.message);
//   }
// });

function uiConsole(...args) {
  const el = document.querySelector("#console>p");
  if (el) {
    el.innerHTML = JSON.stringify(args || {}, null, 2);
  }
}



 



window.connectWallet = async function connectWallet() {
  connectWalletEvent();
  try {
    await web3auth.connect();
    if(web3auth.status=="connected"){
      window.ftd.set_value(
        "public-pages/distribution/templates/holy-angel/texts#wallet-state",
        "connected"
      );
    }      
    console.log("Logged in Successfully!");
  } catch (error) {
    console.error(error.message);
  }
  try{
    const accounts = await rpc.getAccounts(web3auth.provider);
    console.log("connected account is",accounts);
  }catch(e){
    console.error(e);
  }
}


window.sendWallet = async function sendWallet() {   
  claimEvent(); 
  if(web3auth.status=="connected"){
    try {
      const accounts = await rpc.getAccounts(web3auth.provider);
      console.log(accounts);
      if(campaignId != "undefined" && inviteCode != "undefined"){
        fetch(`${config.DISTRIBUTION_BASE_BACKEND_URL}/open/dropWallet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "walletAddress": `${accounts}`,
                "campaignId": `${campaignId}`,
                "inviteCode": `${inviteCode}`
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if("success" in data && "message" in data){
                    if(data.success){
                        showSuccessPopup(data.message);
                    }
                    else{
                        showFailurePopup(data.message);
                    }
                    
                }
            })
            .catch(error => console.error(error))  
    }
    else{
        showWarningPopup("Invalid Link");
    }
    } catch (error) {
      console.error(error.message);
    }            
  }
  else{
      showWarningPopup("Connect your wallet to claim NFT")
  }    
}

window.dataLayer = window.dataLayer || [];

window.gtag=function gtag() {dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', config.G_TAG_ID);

window.claimEvent=async function claimEvent() {
  gtag('event', 'click', {
      'event_category': 'Button Click',
      'event_label': 'Claim Button',
      'campaign_id': `${campaignId}`
    });
}

window.connectWalletEvent=async function connectWalletEvent() {
  gtag('event', 'click', {
      'event_category': 'Button Click',
      'event_label': 'Connect Wallet Button',
      'campaign_id': `${campaignId}`
    });
}

