document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  root.innerHTML = `
    <div style="padding:20px;font-family:sans-serif;">
      <h1>Shadowrun 5e Character Sheet</h1>
      <h2>Major Motoko Kusanagi — Level 5 Fighter (Cybernetic Operative)</h2>

      <h3>Abilities</h3>
      <ul>
        <li>STR: 16 (Mod +3)</li>
        <li>DEX: 18 (Mod +4)</li>
        <li>CON: 16 (Mod +3)</li>
        <li>INT: 14 (Mod +2)</li>
        <li>WIS: 13 (Mod +1)</li>
        <li>CHA: 12 (Mod +1)</li>
      </ul>

      <h3>Matrix Stats</h3>
      <p>Attack: +5</p>
      <p>Firewall: 4</p>
      <p>Processing: 4</p>
      <p>Signal: 3</p>

      <h3>Cyberware</h3>
      <ul>
        <li>Full Cyborg Body</li>
        <li>Neural Interface Deck</li>
        <li>Reflex Boosters</li>
      </ul>

      <button onclick="window.print()" 
        style="margin-top:20px;padding:10px;background:#2563eb;color:white;border:none;border-radius:8px;">
        Print / Save as PDF
      </button>
    </div>
  `;
});
