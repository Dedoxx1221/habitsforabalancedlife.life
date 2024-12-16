
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
        
      } catch (error) {
        console.log(error);
      }
    }
  
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
        
        fbq('trackSingle', '456493496893022', 'PageView', {}, { eventID: getAtomiFbEventId() } )
        
          try {
            document.querySelector(".atomicat-component-container-435e2a8 .atomicat-element-container a").addEventListener("click", () => {
              console.log("clicked button for event...");
              fbq('trackSingle', '456493496893022', 'ViewContent', {}, { eventID: getAtomiFbEventId() } )
          
              
            })
          } catch (error) {
            console.log(error)
          }
        
          try {
            document.querySelector(".atomicat-component-container-b89771d .atomicat-element-container a").addEventListener("click", () => {
              console.log("clicked button for event...");
              fbq('trackSingle', '456493496893022', 'ViewContent', {}, { eventID: getAtomiFbEventId() } )
          
              
            })
          } catch (error) {
            console.log(error)
          }
        
          try {
            document.querySelector(".atomicat-component-container-099c368 .atomicat-element-container a").addEventListener("click", () => {
              console.log("clicked button for event...");
              fbq('trackSingle', '456493496893022', 'ViewContent', {}, { eventID: getAtomiFbEventId() } )
          
              
            })
          } catch (error) {
            console.log(error)
          }
        
          try {
            document.querySelector(".atomicat-component-container-b9ed743 .atomicat-element-container a").addEventListener("click", () => {
              console.log("clicked button for event...");
              fbq('trackSingle', '456493496893022', 'ViewContent', {}, { eventID: getAtomiFbEventId() } )
          
              
            })
          } catch (error) {
            console.log(error)
          }
        fbq('trackSingle', '950670986611354', 'PageView', {}, { eventID: getAtomiFbEventId() } )
        
          try {
            document.querySelector(".atomicat-component-container-435e2a8 .atomicat-element-container a").addEventListener("click", () => {
              console.log("clicked button for event...");
              fbq('trackSingle', '950670986611354', 'ViewContent', {}, { eventID: getAtomiFbEventId() } )
          
              
            })
          } catch (error) {
            console.log(error)
          }
        
          try {
            document.querySelector(".atomicat-component-container-b89771d .atomicat-element-container a").addEventListener("click", () => {
              console.log("clicked button for event...");
              fbq('trackSingle', '950670986611354', 'ViewContent', {}, { eventID: getAtomiFbEventId() } )
          
              
            })
          } catch (error) {
            console.log(error)
          }
        
          try {
            document.querySelector(".atomicat-component-container-099c368 .atomicat-element-container a").addEventListener("click", () => {
              console.log("clicked button for event...");
              fbq('trackSingle', '950670986611354', 'ViewContent', {}, { eventID: getAtomiFbEventId() } )
          
              
            })
          } catch (error) {
            console.log(error)
          }
        
          try {
            document.querySelector(".atomicat-component-container-b9ed743 .atomicat-element-container a").addEventListener("click", () => {
              console.log("clicked button for event...");
              fbq('trackSingle', '950670986611354', 'ViewContent', {}, { eventID: getAtomiFbEventId() } )
          
              
            })
          } catch (error) {
            console.log(error)
          }
        
      } catch (error) {
        console.log(error)
      }
    })();