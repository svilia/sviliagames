// Svilia Games - Dynamic Game Database
const gamesData = [
    { title: "Shadow Quest", desc: "A dark pixelated rogue-like adventure through endless dungeons.", thumb: "🎮" },
    { title: "Neon Racer 2026", desc: "A high-speed, futuristic cyberpunk racing experience.", thumb: "🏎️" },
    { title: "Stellar Horizon", desc: "Deep space colonization and real-time strategy game.", thumb: "🚀" },
    { title: "Cyber Fighter", desc: "Non-stop beat 'em up action under flashing neon lights.", thumb: "🥋" }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Game Filtering Logic
    const gamesGrid = document.getElementById("gamesGrid");
    const searchInput = document.getElementById("gameSearch");

    if (gamesGrid) {
        const displayGames = (filteredGames) => {
            gamesGrid.innerHTML = "";
            if(filteredGames.length === 0) {
                gamesGrid.innerHTML = "<p style='color:#a0a5c1;'>No games found matching your search.</p>";
                return;
            }
            filteredGames.forEach(game => {
                const card = document.createElement("div");
                card.className = "game-card";
                card.innerHTML = `
                    <div class="game-thumb" style="font-size: 4rem;">${game.thumb}</div>
                    <div class="game-info">
                        <h3 class="game-title">${game.title}</h3>
                        <p class="game-desc">${game.desc}</p>
                        <a href="#" class="play-btn">Play Now</a>
                    </div>
                `;
                gamesGrid.appendChild(card);
            });
        };

        // Initial render
        displayGames(gamesData);

        // Search event listener
        searchInput.addEventListener("input", (e) => {
            const keyword = e.target.value.toLowerCase();
            const filtered = gamesData.filter(game => 
                game.title.toLowerCase().includes(keyword) || 
                game.desc.toLowerCase().includes(keyword)
            );
            displayGames(filtered);
        });
    }

    // 2. Contact Form Submission Logic
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            
            formStatus.style.color = "#2ed573";
            formStatus.textContent = `Thank you, ${name}! Your message has been successfully sent to our team.`;
            
            contactForm.reset();
        });
    }
});
