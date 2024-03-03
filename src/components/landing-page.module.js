import header from "./header";
import content from "./content";

export default function landing() {
  const headerElement = header();
  const contentElement = content();

  const landingPage = `
    <div class="landing_bg">
        ${headerElement.outerHTML}
        ${contentElement.outerHTML}
        <h1>LA LUNE FRENCH BISTRO</h1>
        <p>A TASTE OF PARIS</p>
        <button class="dine-btn">Dine with Us</button>
    </div>
  `;

  document.body.innerHTML = landingPage;
}
