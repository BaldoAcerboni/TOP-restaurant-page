const content = document.getElementById("content");

export function displayHomeSection() {
  if (!document.getElementById("home-btn").classList.contains("current")) {
    content.innerHTML = `<div class="content-section">
    <div>
      <img
        src="../src/images/kitchen.jpg"
        alt="fancy kitchen image"
        class="section-img"
      />
      <p class="link">
        <a
          href="https://www.freepik.com/free-ai-image/close-up-metallic-kitchen_129854515.htm#query=restaurant%20kitchen&position=28&from_view=search&track=ais_ai_generated&uuid=6b131152-7e58-4df5-8bdd-40c0ceb09235"
          >Image By freepik</a
        >
      </p>
    </div>
    <div>
      <p>
        Are you tired of going to a restaurant and being limited to the
        options that they offer you? If so we have got you covered.<br />
        Come and try the
        <span class="buzzword">incredible innovation</span> our format
        offers!
      </p>
    </div>
  </div>
  <div class="content-section">
    <div>
      <p>
        You just need to bring your best ideas to the table and be limited
        only by your <span class="buzzword">imagination</span>!
      </p>
    </div>
    <div>
      <img
        src="../src/images/imagination.jpg"
        alt="imagination image"
        class="section-img"
      />
      <p class="link">
        <a
          href="https://www.freepik.com/free-ai-image/bright-ideas-illuminated-by-glowing-electric-lamps-generated-by-ai_43131588.htm#query=imagination&position=31&from_view=search&track=ais_ai_generated&uuid=b0009a54-4bb0-491f-b5e9-5956e2c4f7fc"
          >Image By stockgiu</a
        >
      </p>
    </div>
  </div>
  <div class="disclaimer">
    <h2>Disclaimer:</h2>
    <p>
      By utilizing our services the customers admit they understand and
      agree that WAGNC is not liable for personal injury, illness, or any
      other condition or effect (including an injury, illness, condition, or
      effect that is caused by criminal activity) that results directly or
      indirectly from my use of the facility kitchen.
    </p>
  </div>`;
  } else return;
}
