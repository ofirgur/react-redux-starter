// event propogation

// When you click the button in the following html:
/*
<html>
  <body>
    <div id="buttons">
      <button class="buttonClass">Click me</button>
    </div>
  </body>
</html>
*/

/**
 * On how many elements a click event gets triggered? Without a doubt, 
 * the button itself receives a click event. 
 * But also… all button’s ancestors and even the document and window objects.
 * 
 * A click event propagates in 3 phases:

    1. Capture phase — Starting from window, document and the root element, the event dives down through ancestors of the target element
    2. Target phase — The event gets triggered on the element on which the user made a click
    3. Bubble phase — Finally, the event bubbles up through ancestors of the target element until the root element, document, and window.
 */

 //https://dmitripavlutin.com/javascript-event-delegation/