document.getElementById("info_background").style.display = "none"
var last_size = 0
var info_state = false
var stop_animate = 1 // 0 = stop animate  -- 1 == stop animate complated -- 2 == ready_work
let infoTypeTable = {
    "info": {
            "icon": `<svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#ffffff" d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"></path></svg>`, 								

            "color": "linear-gradient(45deg, #347FC455, #458Fd555)"
        },

    "warning": {
              "icon": `<svg width="24px" height="24px" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fxemoji" preserveAspectRatio="xMidYMid meet"><path fill="#FFB636" d="M12.51 470.379L234.371 16.008c6.439-13.187 25.17-13.363 31.855-.299l232.51 454.371c6.064 11.849-2.542 25.92-15.853 25.92H28.512c-13.164 0-21.778-13.791-16.002-25.621z"></path><path fill="#2B3B47" d="M284.332 173L272.15 336.498c-.911 12.233-11.567 21.411-23.8 20.499c-11.116-.828-19.706-9.707-20.499-20.499L215.668 173c-1.413-18.961 12.813-35.478 31.774-36.89s35.478 12.813 36.89 31.774c.124 1.662.109 3.5 0 5.116zM250 391.873c-17.432 0-31.564 14.131-31.564 31.564C218.436 440.869 232.568 455 250 455s31.564-14.131 31.564-31.564c0-17.432-14.132-31.563-31.564-31.563z"></path></svg>`,

              "color":"linear-gradient(45deg, #eed20266, #ffe31366)"
          },

    "success": {
            "icon": `<svg id="Layer_1 " width="18px" height="18px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                        <defs>
                          <style>
                            .cls-1 {
                              fill: #41af60;
                              stroke-width: 0px;
                            }
                          </style>
                        </defs>
                        <path class="cls-1" d="M755.34,215.89l-318.38,381.45c-16.13,19.33-39.8,31.07-64.97,32.2-1.37.05-2.71.09-4.03.09-24.02,0-46.58-9.35-63.57-26.34l-136.58-136.58c-16.97-16.97-26.34-39.55-26.32-63.57,0-24,9.35-46.58,26.32-63.55,16.97-16.97,39.55-26.32,63.57-26.32s46.58,9.35,63.55,26.32l67.04,67.04L636.71,77.47C568.5,27.16,486.33,0,400,0,293.16,0,192.7,41.6,117.16,117.16,41.6,192.7,0,293.16,0,400s41.6,207.3,117.16,282.84c75.54,75.56,176,117.16,282.84,117.16s207.3-41.6,282.84-117.16c75.56-75.54,117.16-176,117.16-282.84,0-65.15-15.46-127.93-44.66-184.11Z"/>
                        <path class="cls-1" d="M367.96,575.69c-9.51,0-18.66-3.77-25.42-10.53l-136.58-136.58c-14.04-14.04-14.04-36.81,0-50.85,14.04-14.04,36.8-14.04,50.85,0l108.76,108.76L704.96,79.88c12.73-15.24,35.4-17.29,50.64-4.56,15.24,12.72,17.29,35.4,4.56,50.64l-364.6,436.81c-6.47,7.75-15.9,12.43-25.99,12.88-.54.02-1.08.04-1.62.04Z"/>
                      </svg>`,

            "color":"linear-gradient(45deg, #52b96366, #63ca7466)"
          },

          
    "error": {
      "icon": `<svg height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 612 612" xml:space="preserve">
                <path style="fill:#FF3F62;" d="M437.02,74.98C388.668,26.629,324.38,0,256,0S123.333,26.629,74.981,74.98
                  c-99.814,99.814-99.815,262.223-0.002,362.038C123.331,485.371,187.62,512,256,512s132.668-26.629,181.02-74.982
                  C536.833,337.203,536.833,174.794,437.02,74.98z"/>
                <path id="SVGCleanerId_0" style="fill:#830018;" d="M371.193,338.28L288.912,256l82.28-82.281c9.089-9.087,9.089-23.824,0-32.912
                  c-9.087-9.089-23.824-9.087-32.912,0L256,223.088l-82.282-82.282c-9.087-9.089-23.824-9.089-32.912,0
                  c-9.089,9.087-9.089,23.824,0,32.912L223.087,256l-82.282,82.282c-9.089,9.087-9.089,23.824,0,32.912
                  c4.544,4.546,10.501,6.817,16.455,6.817c5.955,0,11.913-2.273,16.455-6.817L256,288.912l82.281,82.28
                  c4.544,4.544,10.501,6.817,16.455,6.817s11.913-2.273,16.455-6.817C380.282,362.105,380.282,347.369,371.193,338.28z"/>
                <path style="fill:#FF3F62;" d="M256,0v223.088l82.28-82.282c9.087-9.087,23.824-9.089,32.912,0c9.089,9.087,9.089,23.824,0,32.912
                  L288.912,256l82.281,82.28c9.089,9.087,9.089,23.824,0,32.912c-4.544,4.544-10.501,6.817-16.457,6.817
                  c-5.956,0-11.913-2.273-16.455-6.817L256,288.912V512c68.38,0,132.668-26.629,181.02-74.982c99.814-99.815,99.814-262.225,0-362.038
                  C388.668,26.629,324.38,0,256,0z"/>
                <path id="SVGCleanerId_1" style="fill:#FF0C38;" d="M173.718,371.194c-4.544,4.544-10.501,6.817-16.455,6.817
                  c-5.956,0-11.913-2.271-16.457-6.817c-9.089-9.087-9.089-23.824,0-32.912L223.087,256l-82.282-82.281
                  c-9.089-9.087-9.089-23.824,0-32.912c9.087-9.089,23.825-9.089,32.912,0L256,223.088V0C187.62,0,123.333,26.629,74.981,74.98
                  c-99.814,99.814-99.815,262.223-0.002,362.038C123.331,485.371,187.62,512,256,512V288.912L173.718,371.194z"/>
                <g>
                  <path id="SVGCleanerId_0_1_" style="fill:#830018;" d="M371.193,338.28L288.912,256l82.28-82.281
                    c9.089-9.087,9.089-23.824,0-32.912c-9.087-9.089-23.824-9.087-32.912,0L256,223.088l-82.282-82.282
                    c-9.087-9.089-23.824-9.089-32.912,0c-9.089,9.087-9.089,23.824,0,32.912L223.087,256l-82.282,82.282
                    c-9.089,9.087-9.089,23.824,0,32.912c4.544,4.546,10.501,6.817,16.455,6.817c5.955,0,11.913-2.273,16.455-6.817L256,288.912
                    l82.281,82.28c4.544,4.544,10.501,6.817,16.455,6.817s11.913-2.273,16.455-6.817C380.282,362.105,380.282,347.369,371.193,338.28z"
                    />
                </g>
                <g>
                  <path id="SVGCleanerId_1_1_" style="fill:#FF0C38;" d="M173.718,371.194c-4.544,4.544-10.501,6.817-16.455,6.817
                    c-5.956,0-11.913-2.271-16.457-6.817c-9.089-9.087-9.089-23.824,0-32.912L223.087,256l-82.282-82.281
                    c-9.089-9.087-9.089-23.824,0-32.912c9.087-9.089,23.825-9.089,32.912,0L256,223.088V0C187.62,0,123.333,26.629,74.981,74.98
                    c-99.814,99.814-99.815,262.223-0.002,362.038C123.331,485.371,187.62,512,256,512V288.912L173.718,371.194z"/>
                </g>
              </svg>`,

      "color":"#ef5350"
    },

    "no-permission": {
      "icon": `<svg height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 512.001 512.001" xml:space="preserve">
                  <path style="fill:#B3404A;" d="M427.826,365.485c-7.149-2.276-14.8,1.68-17.075,8.836
                    c-21.012,66.089-81.768,110.492-151.182,110.492c-87.457,0-158.609-71.151-158.609-158.61c0-87.457,71.151-158.609,158.609-158.609
                    c69.655,0,132.173,46.572,152.035,113.255c2.144,7.195,9.717,11.292,16.908,9.147c7.195-2.144,11.291-9.714,9.147-16.908
                    c-9.929-33.337-29.539-63.678-55.779-86.705v-60.502C381.88,56.47,325.41,0,256,0c-15.482,0-30.605,2.781-44.951,8.268
                    c-7.013,2.681-10.523,10.539-7.844,17.552c2.682,7.012,10.539,10.526,17.552,7.842c11.234-4.296,23.092-6.475,35.242-6.475
                    c54.419,0,98.694,44.274,98.694,98.694v40.708c-28.664-17.166-61.165-26.183-95.124-26.183c-37.757,0-72.912,11.332-102.265,30.757
                    v-45.281c0-19.692,5.779-38.7,16.711-54.969c4.188-6.231,2.53-14.677-3.7-18.864c-6.231-4.188-14.679-2.533-18.865,3.7
                    c-13.957,20.767-21.333,45.02-21.333,70.133v67.189c-34.729,33.778-56.344,80.974-56.344,133.132
                    c0,102.448,83.346,185.798,185.796,185.798c40.231,0,78.516-12.649,110.717-36.578c31.565-23.455,54.517-55.567,66.374-92.863
                    C438.936,375.403,434.98,367.759,427.826,365.485z"/>
                  <circle style="fill:#F4B2B0;" cx="256" cy="326.197" r="109.009"/>
                  <g>
                    <path style="fill:#B3404A;" d="M256,448.809c-67.605,0-122.607-55.001-122.607-122.607S188.395,203.596,256,203.596
                      s122.607,55.001,122.607,122.607S323.605,448.809,256,448.809z M256,230.783c-52.615,0-95.419,42.806-95.419,95.419
                      s42.804,95.419,95.419,95.419s95.419-42.806,95.419-95.419S308.615,230.783,256,230.783z"/>
                    <path style="fill:#B3404A;" d="M275.224,322.838l24.511-24.511c5.308-5.308,5.308-13.916,0-19.224
                      c-5.307-5.308-13.912-5.308-19.226,0l-24.511,24.511l-24.511-24.511c-5.31-5.308-13.915-5.308-19.226,0
                      c-5.308,5.308-5.308,13.916,0,19.224l24.511,24.511l-24.511,24.511c-5.308,5.308-5.308,13.916,0,19.224
                      c2.655,2.655,6.134,3.982,9.612,3.982s6.957-1.328,9.612-3.982l24.511-24.511l24.511,24.511c2.655,2.655,6.134,3.982,9.612,3.982
                      c3.479,0,6.957-1.328,9.612-3.982c5.308-5.308,5.308-13.916,0-19.224L275.224,322.838z"/>
                  </g>
                </svg>`,

      "color":"linear-gradient(45deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))"//AA4A44
    },



};

var infoTable = []


function showInfo(msg_type,msg,repeat_count) {
  
  var infoType = infoTypeTable[msg_type]

  document.getElementById('info_title').innerHTML = ""
  var infoBackground = document.getElementById("info_background")

  infoBackground.style.display = "flex"

  infoBackground.classList.remove("moveBigAnim")


  setTimeout(function() {
      
    var infoType = infoTypeTable[msg_type]
    infoBackground.style.background = infoType["color"]
   
    var keyframes = `

      @keyframes moveBig {
        0% {
        
          min-width: ${last_size}px;
        }
  
        100% {
        
          min-width: ${msg.length*10}px;
        }
      }
    `;   
    last_size = msg.length*10
  
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = keyframes;
  
    document.getElementsByTagName('head')[0].appendChild(style);

    infoBackground.classList.add("moveBigAnim");
    setTimeout(function(){
      if (repeat_count > 0) {
        document.getElementById("info-circle").style.display = "block";
        document.getElementById("info-circle").innerHTML = repeat_count
      }
      else {
        document.getElementById("info-circle").style.display = "none";
        document.getElementById("info-circle").innerHTML = ""
      }
      document.getElementById("info_title").innerHTML = msg
    },1900)
   
  
  
    var infoType = infoTypeTable[msg_type]
    // set background color
  
  
    document.getElementById("info_icon").innerHTML = infoType["icon"]
  },1)


  
    
}

function  closeAnimation() {


  document.getElementById('info_title').innerHTML = ""
  var infoBackground = document.getElementById("info_background")

  infoBackground.classList.remove("moveBigAnim")
  infoBackground.classList.remove("pulsating")

  setTimeout(function(){
    var keyframes = `
    @keyframes moveBig {
      0% {
      
        min-width: ${last_size}px;
      }

      100% {
      
        min-width: ${40}px;
      }
    }
  `;   
  last_size = 46

  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = keyframes;

  document.getElementsByTagName('head')[0].appendChild(style);

  infoBackground.classList.add("pulsating");
  infoBackground.classList.add("moveBigAnim");
  setTimeout(function() {
    infoBackground.style.display = "none"
    document.getElementById("info_icon").innerHTML = ''
    stop_animate = 1
  },800)
 
  },1)


}

function infoLoop() {
  // Promise oluştur
  return new Promise((resolve, reject) => {
      var now = Date.now();

        console.log(stop_animate)
        if (infoTable.length > 0) {

          infoTable.forEach(function(data, index) {
            if ((now - data.stamp) > data.showtime && data.showState) {
              infoTable.splice(index,1)
              info_state = false
            
              if (infoTable.length == 0 ) {
                stop_animate = 2
              }
            }
            else if (!data.showState && !info_state ){
              infoTable[index].showState = true
              infoTable[index].stamp = Date.now()
              info_state = true;
              showInfo(data.msg_type,data.msg,data.repeat_count)
              if (data.repeat_count == 0) {
                document.getElementById("info-circle").style.display = "none"
                document.getElementById("info-circle").innerHTML = ""
              }
              stop_animate = 1
            }
          });
        }
        else if (stop_animate == 2){
          stop_animate = 0
          closeAnimation()

        }


     
    requestAnimationFrame(resolve);
  });
}

async function startLoop() {
  while (true) {

      await infoLoop();
  }
}

// İlk çağrıyı yap
startLoop();


function createInfo(msg_type,msg) {//(msg.length/2)*1000
  var state = true
  var find_index = 0
  var showState = false
  for (var i = 0; i < infoTable.length; i++) {
    
    console.log(infoTable[i].msg+"-"+ msg)
    if (infoTable[i].msg == msg ) {
      state = false
      find_index = i
      showState = infoTable[i].showState
    }

  }
  if (state) {
    infoTable.push({msg_type : msg_type , msg : msg,stamp:0,showtime : 5000,showState :false,repeat_count:0})
  }
  else {
    infoTable[find_index].repeat_count += 1 
    if (showState) {
      document.getElementById("info-circle").style.display = "block";
      document.getElementById("info-circle").innerHTML = infoTable[find_index].repeat_count
      infoTable[find_index].stamp = Date.now()
    }

   
  }
 
  
  
 
}

createInfo("info","Bu bir test mesajıdır")
createInfo("warning","Bu bir test mesajıdır 2")
createInfo("success","Bu bir test mesajıdır 3")
createInfo("success","Bu bir test mesajıdır 3")
createInfo("no-permission","Bu bir test mesajıdır 4")
createInfo("no-permission","Bu bir test mesajıdır 4")
createInfo("no-permission","Bu bir test mesajıdır 4")
createInfo("error","Bu bir test mesajıdır 5")