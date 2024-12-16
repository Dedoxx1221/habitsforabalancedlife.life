
    function atomiApplyParams({inputUrl}) {
      try {
        console.log(inputUrl)
        const inputUrlObj = new URL(inputUrl, window.location.origin);
        const currentPageParams = new URLSearchParams(window.location.search);
        const inputUrlParams = new URLSearchParams(inputUrlObj.search);
      
        // Iterate over all parameters in the current page's URL
        for (const [key, value] of currentPageParams) {
          // If the input URL does not already contain the parameter, add it
          if (!inputUrlParams.has(key)) {
            inputUrlParams.append(key, value);
          }
        }
      
        // Construct the final URL
        const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
        console.log(finalUrl)
        return finalUrl;
      } catch (error) {
        console.log(error);
      }
    }

    function atomiFormatDate(options = { slated: false, addDate: 0 }) {
      try {
        const defaultOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const today = new Date();

        if (options.slated) {
          const slatedDate = new Date(today);
          slatedDate.setDate(slatedDate.getDate() + (options.addDate || 0));

          const day = slatedDate.getDate().toString().padStart(2, "0");
          const month = (slatedDate.getMonth() + 1).toString().padStart(2, "0");
          const year = slatedDate.getFullYear();
          return `${day}/${month}/${year}`;
        }

        if(options.addDate){
          today.setDate(today.getDate()+options.addDate)
        }
        const formattedDate = today.toLocaleDateString(undefined, defaultOptions);

        return formattedDate;
      } catch (error) {
        console.log(error);
      }
    };

    function atomiFormatTime() {
      try {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      } catch (error) {
        console.log(error);
      }
    };
    function runDelayedFunctions(data) {
      try {
        document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
        if(data?.setDisplayed){
          localStorage.setItem(data?.setDisplayed, true);
        }
        
    var scrollElement = document.getElementById("VSLTOP");
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
      } catch (error) {
        console.log(error);
      }
    }
  
      (function() {
        function atomiRdn(e, t) {
          try {
            return Math.floor(Math.random() * (t - e + 1) + e)
          } catch (error) {
            console.log(error);
          }
        }

        try {
          let initial = atomiRdn(400,700);
          setInterval(() => {
            document.querySelectorAll('.atomicat-random').forEach(el => {
              el.innerText = initial.toString();
            });
            initial += atomiRdn(-1, 2);
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      })();
    
    (function() {
      try {
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    
      function atomiGetCookie(name) {
        try {
          let cookie = {};
          document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
          })
          return cookie[name];
        } catch (error) {
          console.log(error);
        }
      }
    
    (function() {
      try {
        
    function atomicatEvent(data) {
      try {
        data.fbp = atomiGetCookie('_fbp');
        data.fbc = atomiGetCookie('_fbc');
        data.pid = document.body.getAttribute('data-page')?.replace("_", "");
        data.uid = document.body.getAttribute('id')?.replace("_", "");
        data.event_id = getAtomiFbEventId();
        const url = 'https://apidopro.atomicat-api.com/track/fb/conversion'
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.log(error);
      }
    }
  
        
          atomicatEvent({trigger: "load", pixel: "456493496893022"})
        fbq('trackSingle', '456493496893022', 'PageView', {}, { eventID: getAtomiFbEventId() } )
        
          try {
            document.querySelector(".atomicat-component-container-9cf6b48 .atomicat-element-container a").addEventListener("click", () => {
              console.log("clicked button for event...");
              fbq('trackSingle', '456493496893022', 'ViewContent', {}, { eventID: getAtomiFbEventId() } )
          
              atomicatEvent({trigger: "click", triggerId: "9cf6b48", pixel: "456493496893022"})
            })
          } catch (error) {
            console.log(error)
          }
        
          atomicatEvent({trigger: "load", pixel: "950670986611354"})
        fbq('trackSingle', '950670986611354', 'PageView', {}, { eventID: getAtomiFbEventId() } )
        
          try {
            document.querySelector(".atomicat-component-container-9cf6b48 .atomicat-element-container a").addEventListener("click", () => {
              console.log("clicked button for event...");
              fbq('trackSingle', '950670986611354', 'ViewContent', {}, { eventID: getAtomiFbEventId() } )
          
              atomicatEvent({trigger: "click", triggerId: "9cf6b48", pixel: "950670986611354"})
            })
          } catch (error) {
            console.log(error)
          }
        
      } catch (error) {
        console.log(error)
      }
    })();
      (function() {
        try {
          var vidalyticsvideoId = "vidalytics_embed_58ybgu1hqHqOmqek";
          var SECONDS_TO_DISPLAY = 1560;
          let isTimeTrapTriggered = false;
          var alreadyDisplayedKey = 'vidalyticsElsDisplayed1560';
          var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);
          if (alreadyElsDisplayed) {
            runDelayedFunctions();
            return;
          }

          getVidalyticsPlayer(vidalyticsvideoId).then(player => {
            if (!player) return;

            player.on('timeupdate', () => {
              const currentTime = Math.floor(player.currentTime());
              if (isTimeTrapTriggered || alreadyElsDisplayed) return;
              if (currentTime >= SECONDS_TO_DISPLAY) {
                showVidalyticsElements();
              }
            });
          });

          var showVidalyticsElements = function () {
            isTimeTrapTriggered = true;
            runDelayedFunctions({setDisplayed: alreadyDisplayedKey});
            localStorage.setItem(alreadyDisplayedKey, true);
          };
        } catch (error) {
          console.log(error);
        }
      })();
    