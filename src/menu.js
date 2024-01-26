const content = document.getElementById("content");

export function displayMenuSection() {
  content.innerHTML = `<div class="content-section">
  <div>
    <img
      class="svg"
      src="../src/images/question.svg"
      alt="question image"
    />
  </div>
  <div>
    <h2>How the system works:</h2>
    <p>
      The customers can either bring the ingredients themselves, or they
      can instruct the staff with a list of all their needs and we'll be
      able to procure all that is necessary in a short amount of time and
      for a small additional fee added to the price to procure them from
      our pre-arranged supplier.<br />
      After everything is ready the customers will be escorted to the
      kitchen and given basic instructions regarding the kitchen
      appliances.<br />
      <span class="buzzword">That's when the magic happens.</span>
    </p>
  </div>
</div>
<div class="content-section">
  <div>
    <h2>Prices:</h2>
    <p class="big">
      We serve non-alcoholic beverages
      <span class="buzzword">for free</span> for all paying customers
    </p>
    <p class="small">
      The cost is based on the time spent inside the kitchen $300 per
      hour.<br />
      Any and all damages done to the equipment will be added to the total
      cost.<br />
      Customers need to clean the equipment they use, else penalties will
      be added to the final price at the manager discretion.
    </p>
  </div>
  <div>
    <img
      class="svg"
      src="../src/images/dollar.svg"
      alt="question image"
    />
  </div>
</div>`;
}
