import narutoRun from "./images/naruto-run.jpg";
const content = document.getElementById("content");

export function displayContactsSection() {
  if (!document.getElementById("contact-btn").classList.contains("current")) {
    content.innerHTML = `<p class="contact">Email: joemama.sofat@insertjoke.splat</p>
    <p class="contact">Phone: 4206969420</p>
    <p class="contact">Address: Very Real street 321</p>
    <div class="maps">
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Area%2051%20Nevada%20USA+(Area%2051)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ><a href="https://www.maps.ie/population/">Population mapping</a>
      </iframe>
    </div>
    <div class="naruto-run">
      <img src="${narutoRun}" alt="A naruto-running fellow" />
    </div>`;
  } else return;
}
