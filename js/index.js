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
  readUrlParams()
    .then((response) => {
      console.log("readUrlParams() promise resolved");
      window.ftd.set_value(
        `public-pages/distribution/templates/holy-angel/#loadedState`,
        "loaded"
      );
    })
    .catch((error) => {
      console.log("readUrlParams() promise rejected");
      console.error("Promise rejected : readUrlParams(), Reason : ", error);
      window.ftd.set_value(
        `public-pages/distribution/templates/holy-angel/#loadedState`,
        "loaded"
      );
    });
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
  
  }
  else{
    console.log("no fragment detected");
    var urlParams = new URLSearchParams(window.location.search);
    inviteId = urlParams.get("invite_id");
    domainName = urlParams.get("cname");
    nftType = urlParams.get("type");

    console.log("invite id is ", inviteId);
    console.log("cname is ", domainName);
    console.log("nft type is ", nftType);
  }
    
    

    //domainName = cName;
    inviteCode = inviteId;
    

    window.ftd.set_value(
      `public-pages/distribution/templates/holy-angel/texts#nft-type`,
      nftType
    );

    fetchUiComponents(domainName,nftType)
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

window.fetchUiComponents = async function fetchUiComponents(domainName,nftType) {
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
                updateCreativeDataUi(respData.values[0].creativeDatas,nftType).then(
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
  creativeDatasArray,nftType
) {
  return new Promise(async (resolve, reject) => {
    console.log(
      "creative datas array is ",
      creativeDatasArray,
      "type is ",
      nftType
    );
    creativeDatasArray.forEach((obj) => {
      if (obj.rarity == nftType) {
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
      chainNamespace: config.WEB3AUTH_CHAIN_NAMESPACE,
      chainId: config.WEB3AUTH_CHAIN_ID,
      rpcTarget: config.WEB3AUTH_RPC_TARGET, // This is the public RPC we have added, please pass on your own endpoint while creating an app
    },
    web3AuthNetwork: config.WEB3AUTH_NETWORK,
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
    web3AuthNetwork: config.WEB3AUTH_NETWORK,
    chainConfig: {
      chainNamespace: config.WEB3AUTH_CHAIN_NAMESPACE,
      chainId:  config.WEB3AUTH_CHAIN_ID,
      rpcTarget: config.WEB3AUTH_RPC_TARGET, // This is the public RPC we have added, please pass on your own endpoint while creating an app
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

// function uiConsole(...args) {
//   const el = document.querySelector("#console>p");
//   if (el) {
//     el.innerHTML = JSON.stringify(args || {}, null, 2);
//   }
// }



 



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

