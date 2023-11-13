

// // Observer callback function
// function handleMutation(mutationsList, observer) {
//     for (const mutation of mutationsList) {
//       if (mutation.type === "attributes" && mutation.attributeName === "class") {
//         const targetElement = mutation.target;
  
//         // Check if the "appear" class is added
//         if (targetElement.classList.contains("appear")) {
//           // Trigger the scrambler function
//           scrambler(targetElement);
          
//           // Disconnect the observer if needed
//           observer.disconnect();
//         }
//       }
//     }
//   }
  
//   // Target element to observe
//   const targetElement = document.querySelector(".scramble");
  
//   // Create a MutationObserver instance
//   const observer = new MutationObserver(handleMutation);
  
//   // Configure the observer to watch for changes to the 'class' attribute
//   const observerConfig = { attributes: true };
  
//   // Start observing the target element
//   observer.observe(targetElement, observerConfig);

