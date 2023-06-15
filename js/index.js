import "https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js";
import * as config from "./config.js";
import "https://www.googletagmanager.com/gtag/js?id=G-NDZYGEPEV9%22%3E";    // Admint prod
//import "https://www.googletagmanager.com/gtag/js?id=G-GB9WDK9NC7%22%3E"; // Test
import "https://cdn.jsdelivr.net/npm/@toruslabs/torus-embed@1.41.3/dist/torus.umd.min.js";
import "https://cdn.jsdelivr.net/npm/web3@1.7.3/dist/web3.min.js";
import { WalletPopup } from "./walletPopup.js";

const torus = new Torus();

console.log("entering index page");

export var campaignId = "undefined";
export var inviteCode = "undefined";
var connectedWalletAddress = "undefined";
var walletConnectionStatus = false;
var userNftContractAddress="undefined";
var userNftTokenId="undefined";

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
    init();   
};

function getUrlParameters() {
  const url = window.location.href;
  const [baseUrl, fragment] = url.split("#");
  if (fragment) {
    const [fragmentPart, queryString] = fragment.split("?");
    const fragmentParams = new URLSearchParams(queryString);
    const decodedParams = {};
    for (const [key, value] of fragmentParams.entries()) {
      decodedParams[key] = decodeURIComponent(value);
    }

    return {
      baseUrl: baseUrl,
      fragmentParams: decodedParams,
    };
  }

  return {
    baseUrl: baseUrl,
  };
}

window.readUrlParams = async function readUrlParams() {
  return new Promise(function (resolve, reject) {
    var inviteId;
    var domainName;
    var nftType;

    const url = window.location.href;
    console.log("url from broswer is ",url);
    const [baseUrl, fragment] = url.split("#");

    if (fragment) {
      console.log("fragment detecddted");
      const [fragmentPart, queryString] = fragment.split("?");
      const fragmentParams = new URLSearchParams(queryString);
      const decodedParams = {};
      for (const [key, value] of fragmentParams.entries()) {
        decodedParams[key] = decodeURIComponent(value);
      }
      console.log("decoded params is ", decodedParams);
      inviteId = decodedParams.invite_id;
      domainName = decodedParams.cname;
      nftType = decodedParams.type;
    } else {
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

    fetchUiComponents(domainName, nftType)
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

window.fetchUiComponents = async function fetchUiComponents(
  domainName,
  nftType
) {
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
                updateCreativeDataUi(respData.values[0].creativeDatas, nftType)
                  .then((result) => {
                    console.log("creative data updated");
                    window.ftd.set_value(
                      `public-pages/distribution/templates/holy-angel/#loadedState`,
                      "loaded"
                    );
                  })
                  .catch((error) => {
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
  creativeDatasArray,
  nftType
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
        if("creativeContractAddress" in obj){
          userNftContractAddress=obj.creativeContractAddress;
        }        
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

window.showSuccessPopup = async function showSuccessPopup(inputData,title) {
  console.log("input data is ", inputData);

  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/texts#popup-title",
    title
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

window.showFailurePopup = async function showFailurePopup(inputData,title) {
  console.log("input data is ", inputData);

  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/texts#popup-title",
    title
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

window.showWarningPopup = async function showWarningPopup(inputData,title) {
  console.log("input data is ", inputData);
  window.ftd.set_value(
    "public-pages/distribution/templates/holy-angel/texts#popup-title",
    title
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
  console.log("input url is ", url);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => reject(new Error("Invalid image URL"));
    img.src = url;
  });
};

window.connectWallet = async function connectWallet() {
  console.log("entering connect wallet function");
  if(!walletConnectionStatus){
    connectWalletClickEvent();
    const walletPopup = new WalletPopup();
    document.body.appendChild(walletPopup);
  }
  else{
    console.log("wallet already connected");
  }   
};

window.connectWalletProvider = async function connectWalletProvider(
  selectedProvider
) {  
  console.log("entering connectWalletProvider function", selectedProvider);
  if (selectedProvider == "metamask") {
    onConnect(); 
    metamaskConnectionTriggerEvent();
  }
  else if(selectedProvider=="torus (sign in with google)"){
    torusConnectionTriggerEvent();
    document.body.style.cursor = 'wait';
    torusInit().then(async ()=>{  
    document.body.style.cursor = 'default';    
    await torus.login();
    const provider = torus.provider;
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    connectedWalletAddress=accounts[0];
    console.log("Connected with address:", connectedWalletAddress);
    walletConnectionStatus=true;
    torusConnectionSuccessEvent();
    const buttonDisplayStringStart=`${connectedWalletAddress[0]}${connectedWalletAddress[1]}${connectedWalletAddress[2]}${connectedWalletAddress[3]}${connectedWalletAddress[4]}${connectedWalletAddress[5]}`
    const buttonDisplayStringEnd=`${connectedWalletAddress[connectedWalletAddress.length-4]}${connectedWalletAddress[connectedWalletAddress.length-3]}${connectedWalletAddress[connectedWalletAddress.length-2]}${connectedWalletAddress[connectedWalletAddress.length-1]}`;
    window.ftd.set_value(
      "public-pages/distribution/templates/holy-angel/texts#wallet-state",
      `Connected  (${buttonDisplayStringStart}...${buttonDisplayStringEnd})`
    );
        if(torus.isLoggedIn){
          torus.torusWidgetVisibility=true;
        }  
        checkForNftOwnership();      
    }).catch((error) => {
      console.error("Failed to open torus:", error);
      document.body.style.cursor = 'default';      
    });    
  }
};

window.torusInit = async function torusInit() {
  return new Promise(async (resolve, reject) => {
    console.log("Initialising torus");
    try{
      if(!torus.isInitialized){
        await torus.init({
          network: {
            host: "matic",
          },
        });
       // torus.torusWidgetVisibility=false;
      }      
      console.log("torus is ",torus);
      resolve("done");
    }catch(e){
      reject(e);
    }      
  });
};

window.sendWallet = async function sendWallet() {
  claimEvent();
  if (walletConnectionStatus) {
    try {
      console.log("account to send is ", connectedWalletAddress);
      if (campaignId != "undefined" && inviteCode != "undefined") {
        fetch(`${config.DISTRIBUTION_BASE_BACKEND_URL}/open/dropWallet`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            walletAddress: `${connectedWalletAddress}`,
            campaignId: `${campaignId}`,
            inviteCode: `${inviteCode}`,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if ("success" in data && "message" in data) {
              if (data.success) {
                showSuccessPopup(data.message,"Claim successful.");
                claimSuccessEvent();
              } else {
                showFailurePopup(data.message,"Claim unsuccessful.");
                if(data.message=="Not a valid ethereum wallet address."){
                  addWalletFailEvent();
                }
                if(data.message=="This token has already been claimed."){
                  alreadyClaimedEvent();
                }
              }
            }
          })
          .catch((error) => console.error(error));
      } else {
        invalidLinkEvent();
        showWarningPopup("You are using an incorrect invite URL.","Claim unsuccessful.");
      }
    } catch (error) {
      console.error(error.message);
    }
  } else {
    showWarningPopup("If you don't have an existing wallet, use Torus to sign up","Connect wallet to claim");
  }
};

window.dataLayer = window.dataLayer || [];

window.gtag = function gtag() {
  dataLayer.push(arguments);
};
gtag("js", new Date());
gtag("config", config.G_TAG_ID);

window.claimEvent = async function claimEvent() {             // Claim button click
  gtag("event", "click", {
    event_category: "Button Click",
    event_label: "Claim Button",
    campaign_id: `${campaignId}`,
  });
};

window.connectWalletClickEvent = async function connectWalletClickEvent() {       // Connect wallet click
  gtag("event", "click", {
    event_category: "Button Click",
    event_label: "Connect Wallet Button",
    campaign_id: `${campaignId}`,
  });
};

window.invalidLinkEvent = async function invalidLinkEvent() {                   // Invalid link event
  gtag("event", "click", {
    event_category: "popup",
    event_label: "Invalid Link",
    campaign_id: `${campaignId}`,
  });
};


window.connectWalletSkipEvent = async function connectWalletSkipEvent() {           // Connect wallet skip event
  gtag("event", "click", {
    event_category: "skip",
    event_label: "Skip Wallet Connect",
    campaign_id: `${campaignId}`,
  });
};

window.addWalletFailEvent = async function addWalletFailEvent() {               // Not a valid address event
  gtag("event", "response", {
    event_category: "api response",
    event_label: "Address Add Failed",
    campaign_id: `${campaignId}`,
  });
};

window.claimSuccessEvent = async function claimSuccessEvent() {       // Claim successful event
  gtag("event", "response", {
    event_category: "api response",
    event_label: "Address Add Succesful",
    campaign_id: `${campaignId}`,
  });
};

window.alreadyClaimedEvent = async function alreadyClaimedEvent() {       // Already claimed event
  gtag("event", "response", {
    event_category: "api response",
    event_label: "Address Already Added",
    campaign_id: `${campaignId}`,
  });
};

window.walletDisconnectEvent = async function walletDisconnectEvent() {             // Wallet disconnect from metamask event
  gtag("event", "process", {
    event_category: "process result",
    event_label: "Wallet Disconnected",
    campaign_id: `${campaignId}`,
  });
};

window.metamaskConnectionTriggerEvent = async function metamaskConnectionTriggerEvent() {     // Metamask triggered event
  gtag("event", "click", {
    event_category: "button click",
    event_label: "Metamask Option Selected",
    campaign_id: `${campaignId}`,
  });
};

window.metamaskConnectionSuccessEvent = async function metamaskConnectionSuccessEvent() {     // Metamask connection success event
  gtag("event", "process", {
    event_category: "success",
    event_label: "Metamask Connection Successful",
    campaign_id: `${campaignId}`,
  });
};

window.torusConnectionTriggerEvent = async function torusConnectionTriggerEvent() {   // Torus triggered event
  gtag("event", "click", {
    event_category: "button click",
    event_label: "Torus Option Selected",
    campaign_id: `${campaignId}`,
  });
};

window.torusConnectionSuccessEvent = async function torusConnectionSuccessEvent() {   // Torus connection success event
  gtag("event", "process", {
    event_category: "success",
    event_label: "Torus Connection Successful",
    campaign_id: `${campaignId}`,
  });
};

window.viewInOpenseaEvent = async function viewInOpenseaEvent() {   // View in opensea event
  gtag("event", "click", {
    event_category: "button click",
    event_label: "View NFT Button",
    campaign_id: `${campaignId}`,
  });
};



window.navigateToComponent = async function navigateToComponent(elementId) {
  console.log("entering navigateToComponent function with id ",elementId);
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};


window.checkForNftOwnership = async function checkForNftOwnership() {
  console.log("entering checkForNftOwnership function with wallet id ",connectedWalletAddress);
  console.log("nft contract address to verify is : ",userNftContractAddress);
  const url=`${config.DISTRIBUTION_BASE_BACKEND_URL}/open/nft`;
  try {
    const params = {
      wallet_address: `${connectedWalletAddress}`,
      campaign_id: `${campaignId}`
    };
    const apiConfig = {
      headers: {
        "Content-Type": "application/json",
      }
    };
    await axios
    .get(url, {params,apiConfig})
    .then((response) => {
      const respData = response.data; 
      if(respData.success){
        if(respData.hasOwnProperty("values")){
          if(respData.values.length!=0){
            window.ftd.set_value(
              `public-pages/distribution/templates/holy-angel/lib#viewNftButtonStatus`,
              true
            );
            userNftContractAddress=respData.values[0].tokenAddress;
            userNftTokenId=respData.values[0].tokenId;           
          }
          else{
            window.ftd.set_value(
              `public-pages/distribution/templates/holy-angel/lib#viewNftButtonStatus`,
              false
            );
          }
        }
        
      }      
    })
    .catch((error) => {
      console.error(error);
    });
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

window.viewNftInOpensea = async function viewNftInOpensea() {
  console.log("entering viewNftInOpensea function ");  
  if(userNftContractAddress!="undefined" && userNftTokenId!="undefined"){    
    const openseaUrl=`${config.OPENSEA_VIEW_NFT_BASE_URL}/${userNftContractAddress}/${userNftTokenId}`;
    const newTab = window.open(openseaUrl, '_blank');
    newTab.focus();      
  }
  else{
    window.ftd.set_value(
      `public-pages/distribution/templates/holy-angel/lib#viewNftButtonStatus`,
      false
    );
  }  
  viewInOpenseaEvent();
}





//////////////////////// Wallet connect code below ////////////////////////////////////////////////////////

 const Web3Modal = window.Web3Modal.default;
 const WalletConnectProvider = window.WalletConnectProvider.default;
 const Fortmatic = window.Fortmatic;
 const evmChains = window.evmChains; 
 let web3Modal 
 let provider; 
 
 async function init() { 
   console.log("Initializing example");
   console.log("WalletConnectProvider is", WalletConnectProvider);
   console.log("Fortmatic is", Fortmatic);
   console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

   const deviceType=await window.ftd.get_value(
    "main",
    "ftd#device"
  );
  console.log("device type from ftd is ",deviceType);

 let providerOptions;
 if(deviceType=="desktop"){
  console.log("wallet connect is in desktop"); 
  providerOptions = {
  };
 }
 else{
  console.log("wallet connect is not in desktop");
  providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
        qrcode: true,
        qrcodeModalOptions: {
          desktopLinks: [
          ],
          mobileLinks: [
            "metamask"
          ],
        },        
      }
    }
  };
 }

 console.log("selected provider option is : ",providerOptions)   
 
   web3Modal = new Web3Modal({
     cacheProvider: false, // optional
     providerOptions, // required
     disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
   }); 
   console.log("Web3Modal instance is", web3Modal);
 }
 
 async function fetchAccountData() { 
   const web3 = new Web3(provider); 
   console.log("Web3 instance is", web3);
   const chainId = await web3.eth.getChainId();
   const accounts = await web3.eth.getAccounts();

   if(accounts.length!=0){
    console.log("Got accounts", accounts);
    connectedWalletAddress=accounts[0];
    console.log("selected wall accnt is ",connectedWalletAddress);
    walletConnectionStatus=true;
    const buttonDisplayStringStart=`${connectedWalletAddress[0]}${connectedWalletAddress[1]}${connectedWalletAddress[2]}${connectedWalletAddress[3]}${connectedWalletAddress[4]}${connectedWalletAddress[5]}`
    const buttonDisplayStringEnd=`${connectedWalletAddress[connectedWalletAddress.length-4]}${connectedWalletAddress[connectedWalletAddress.length-3]}${connectedWalletAddress[connectedWalletAddress.length-2]}${connectedWalletAddress[connectedWalletAddress.length-1]}`;
    window.ftd.set_value(
      "public-pages/distribution/templates/holy-angel/texts#wallet-state",
      `Connected  (${buttonDisplayStringStart}...${buttonDisplayStringEnd})`
    );
    metamaskConnectionSuccessEvent();  
    checkForNftOwnership(); 
   }
   else{
    window.ftd.set_value(
      "public-pages/distribution/templates/holy-angel/texts#wallet-state",
      `Connect Wallet`
    );  
    window.ftd.set_value(
      `public-pages/distribution/templates/holy-angel/lib#viewNftButtonStatus`,
      false
    );
    walletDisconnectEvent();
    walletConnectionStatus=false;
   }           
 }  
 
 async function refreshAccountData() { 
      await fetchAccountData(provider);
 }  
  window.onConnect = async function onConnect() {   
   console.log("Entering onConnect function");
   const deviceType=await window.ftd.get_value(
    "main",
    "ftd#device"
  );
  console.log("device type from ftd is ",deviceType);
  console.log("window etheruem is  ",window.ethereum);
   if(deviceType=="desktop" && window.ethereum == undefined){
    showFailurePopup("Metamask is not installed in the browser","Connect wallet unsuccessful.");
    return;
  }
   try {
     provider = await web3Modal.connect();
   } catch(e) {
     console.log("Could not get a wallet connection", e);
     return;
   }
   console.log("connection to metamask complete")

   provider.on("accountsChanged", (accounts) => {
     console.log("account change detected",accounts);
     fetchAccountData();
   });
 
   provider.on("chainChanged", (chainId) => {
     console.log("account change detected",chainId);
     fetchAccountData();
   });
 
   provider.on("networkChanged", (networkId) => {
    console.log("network change detected",networkId);
     fetchAccountData();
   });
 
   await refreshAccountData();
 }
 
 async function onDisconnect() {
 
   console.log("Killing the wallet connection", provider); 
   if(provider.close) {
     await provider.close();
     await web3Modal.clearCachedProvider();
     provider = null;
   } 
   selectedAccount = null;
 } 
 