// Array of tarot cards with names and descriptions
const tarotCards = [
    //Major Arcana
    { name: "The Fool", description: "New beginnings, innocence, adventure, and spontaneity." , image:"fool.jpg", category: "Major Arcana"},
    { name: "The Magician", description: "Skill, confidence, action, and resourcefulness.", image: "magician.jpg", category: "Major Arcana"},
    { name: "The High Priestess", description: "Intuition, mystery, and the subconscious mind.", image: "HighPriestess.jpg", category: "Major Arcana" },
    { name: "The Empress", description: "Abundance, nurturing, fertility, and creativity.", image: "Empress.jpg", category: "Major Arcana" },
    { name: "The Emperor", description: "Authority, structure, control, and fatherhood.", image: "Emperor.jpg", category: "Major Arcana" },
    { name: "The Hierophant", description: "Principles, tradition, expectation, and Learning.", image: "heirophant.png", category: "Major Arcana" },
    { name: "The Lovers", description: "Decision, values, potential , and partnerships.", image: "lovers.png", category: "Major Arcana" },
    { name: "The Chariot", description: "Momentum, motivation, advancement, and direction.", image: "chariot.png", category: "Major Arcana" },
    { name: "Stength", description: "Willpower, mastery, discipline, and compassion.", image: "strength.png", category: "Major Arcana" },
    { name: "The Hermit", description: "Introspection, self-discovery, solitude, and inner guidance.", image: "hermit.png", category: "Major Arcana" },
    { name: "The Wheel of Fortune", description: "Fate, cycles, full circle, and change.", image: "wheel.png", category: "Major Arcana" },
    { name: "Justice", description: "Balance, Fairness, karma, and clarity.", image: "justice.png", category: "Major Arcana" },
    { name: "Hanged Man", description: "Stagnation, sacrifice, self-pity, and release.", image: "hang.png", category: "Major Arcana" },
    { name: "Death", description: "Ending, loss, new beginnings, and metamorphosis.", image: "death.png", category: "Major Arcana" },
    { name: "Temperance", description: "Self control, detachment, moderation, and patience.", image: "temperance.png", category: "Major Arcana" },
    { name: "The Devil", description: "The shadow shelf, indulgence, lust, and materialism.", image: "devil.png", category: "Major Arcana" },
    { name: "The Tower", description: "Destruction, confrontation, drama, and broken pride.", image: "tower.png", category: "Major Arcana" },
    { name: "The Star", description: "Hope, blessings, imagination, and rejuvenation.", image: "star.png", category: "Major Arcana" },
    { name: "The Moon", description: "Uncertainity, intuition, mystery, and illusions.", image: "moon.png", category: "Major Arcana" },
    { name: "The Sun", description: "Joy, appreciation, success, and celebration.", image: "sun.png", category: "Major Arcana" },
    { name: "Judgement", description: "Conviction, Absolute, Resolution, and Reflection.", image: "judgement.png", category: "Major Arcana" },
    { name: "The World", description: "The big picture, major change, wholeness, and fulfilment.", image: "world.png", category: "Major Arcana" },
    
    
    //suit of wands
    { name: "Ace of Wands", description: "Inspiration, potential, new opportunities, and growth.", image: "wandsAce.png", category: "Suit of Wands" },
    { name: "Two of Wands", description: "Planning, decisions, discovery, and progress.", image: "wands2.png", category: "Suit of Wands" },
    { name: "Three of Wands", description: "Expansion, foresight, leadership, and preparation.", image: "wands3.png", category: "Suit of Wands" },
    { name: "Four of Wands", description: "Celebration, harmony, homecoming, and community.", image: "wands4.png", category: "Suit of Wands" },
    { name: "Five of Wands", description: "Conflict, competition, disagreement, and tension.", image: "wands5.png", category: "Suit of Wands" },
    { name: "Six of Wands", description: "Victory, success, recognition, and self-confidence.", image: "wands6.png", category: "Suit of Wands" },
    { name: "Seven of Wands", description: "Challenge, competition, perseverance, and defense.", image: "wands7.png", category: "Suit of Wands" },
    { name: "Eight of Wands", description: "Speed, progress, rapid action, and movement.", image: "wands8.png", category: "Suit of Wands" },
    { name: "Nine of Wands", description: "Resilience, persistence, testing faith, and boundaries.", image: "wands9.png" , category: "Suit of Wands"},
    { name: "Ten of Wands", description: "Burden, responsibility, hard work, and stress.", image: "wands10.png" , category: "Suit of Wands"},
    { name: "Page of Wands", description: "Exploration, excitement, freedom, and discovery.", image: "wandsPage.png" , category: "Suit of Wands"},
    { name: "Knight of Wands", description: "Action, adventure, fearlessness, and passion.", image: "wandsKnight.png" , category: "Suit of Wands"},
    { name: "Queen of Wands", description: "Courage, confidence, independence, and determination.", image: "wandsQueen.png" , category: "Suit of Wands"},
    { name: "King of Wands", description: "Leadership, vision, charisma, and decisiveness.", image: "wandsKing.png", category: "Suit of Wands" },

    //suit of swords
    { name: "Ace of Swords", description: "Clarity, breakthroughs, new ideas, and mental focus.", image: "swordsAce.png" , category: "Suit of Swords"},
    { name: "Two of Swords", description: "Indecision, stalemate, difficult choices, and impasse.", image: "swords2.png", category: "Suit of Swords" },
    { name: "Three of Swords", description: "Heartbreak, sorrow, betrayal, and grief.", image: "swords3.png", category: "Suit of Swords" },
    { name: "Four of Swords", description: "Rest, recovery, contemplation, and relaxation.", image: "swords4.png", category: "Suit of Swords" },
    { name: "Five of Swords", description: "Conflict, tension, defeat, and betrayal.", image: "swords5.png" , category: "Suit of Swords"},
    { name: "Six of Swords", description: "Transition, recovery, moving on, and change.", image: "swords6.png", category: "Suit of Swords" },
    { name: "Seven of Swords", description: "Deception, strategy, cunning, and theft.", image: "swords7.png", category: "Suit of Swords" },
    { name: "Eight of Swords", description: "Restriction, isolation, fear, and imprisonment.", image: "swords8.png", category: "Suit of Swords" },
    { name: "Nine of Swords", description: "Anxiety, despair, nightmares, and mental anguish.", image: "swords9.png", category: "Suit of Swords" },
    { name: "Ten of Swords", description: "Defeat, crisis, betrayal, and endings.", image: "swords10.png", category: "Suit of Swords" },
    { name: "Page of Swords", description: "Curiosity, mental agility, vigilance, and communication.", image: "swordsPage.png", category: "Suit of Swords" },
    { name: "Knight of Swords", description: "Action, speed, ambition, and tenacity.", image: "swordsKnight.png", category: "Suit of Swords" },
    { name: "Queen of Swords", description: "Perception, independence, complexity, and clear-mindedness.", image: "swordsQueen.png", category: "Suit of Swords" },
    { name: "King of Swords", description: "Authority, intellect, analytical thinking, and truth.", image: "swordsKing.png", category: "Suit of Swords" },
    

    //suit of pentacles
    { name: "Ace of Pentacles", description: "Opportunity, prosperity, new ventures, and abundance.", image: "pentaclesAce.png", category: "Suit of Pentacles" },
    { name: "Two of Pentacles", description: "Balance, adaptability, time management, and prioritization.", image: "pentacles2.png", category: "Suit of Pentacles" },
    { name: "Three of Pentacles", description: "Collaboration, skill, teamwork, and craftsmanship.", image: "pentacles3.png", category: "Suit of Pentacles" },
    { name: "Four of Pentacles", description: "Control, stability, security, and conservatism.", image: "pentacles4.png", category: "Suit of Pentacles"  },
    { name: "Five of Pentacles", description: "Hardship, loss, isolation, and insecurity.", image: "pentacles5.png", category: "Suit of Pentacles"  },
    { name: "Six of Pentacles", description: "Generosity, charity, sharing, and balance.", image: "pentacles6.png" , category: "Suit of Pentacles" },
    { name: "Seven of Pentacles", description: "Patience, investment, evaluation, and growth.", image: "pentacles7.png" , category: "Suit of Pentacles" },
    { name: "Eight of Pentacles", description: "Diligence, passion, skill development, and apprenticeship.", image: "pentacles8.png" , category: "Suit of Pentacles" },
    { name: "Nine of Pentacles", description: "Luxury, self-sufficiency, financial independence, and refinement.", image: "pentacles9.png" , category: "Suit of Pentacles" },
    { name: "Ten of Pentacles", description: "Wealth, family, legacy, and long-term success.", image: "pentacles10.png" , category: "Suit of Pentacles" },
    { name: "Page of Pentacles", description: "Ambition, desire, diligence, and opportunity.", image: "pentaclesPage.png" , category: "Suit of Pentacles" },
    { name: "Knight of Pentacles", description: "Efficiency, routine, conservatism, and responsibility.", image: "pentaclesKnight.png" , category: "Suit of Pentacles" },
    { name: "Queen of Pentacles", description: "Nurturing, practicality, resourcefulness, and security.", image: "pentaclesQueen.png" , category: "Suit of Pentacles" },
    { name: "King of Pentacles", description: "Wealth, business acumen, discipline, and leadership.", image: "pentaclesKing.png" , category: "Suit of Pentacles" },

    //suit of cups
    { name: "Ace of Cups", description: "Love, new relationships, compassion, and creativity.", image: "cupsAce.png", category: "Suit of Cups"  },
    { name: "Two of Cups", description: "Partnership, unity, love, and mutual attraction.", image: "cups2.png", category: "Suit of Cups" },
    { name: "Three of Cups", description: "Celebration, friendship, community, and happiness.", image: "cups3.png", category: "Suit of Cups" },
    { name: "Four of Cups", description: "Contemplation, apathy, reevaluation, and introspection.", image: "cups4.png", category: "Suit of Cups" },
    { name: "Five of Cups", description: "Loss, regret, disappointment, and mourning.", image: "cups5.png", category: "Suit of Cups" },
    { name: "Six of Cups", description: "Nostalgia, memories, childhood, and innocence.", image: "cups6.png", category: "Suit of Cups" },
    { name: "Seven of Cups", description: "Choices, fantasy, illusion, and imagination.", image: "cups7.png", category: "Suit of Cups" },
    { name: "Eight of Cups", description: "Disappointment, abandonment, withdrawal, and moving on.", image: "cups8.png", category: "Suit of Cups" },
    { name: "Nine of Cups", description: "Contentment, satisfaction, emotional stability, and luxury.", image: "cups9.png", category: "Suit of Cups" },
    { name: "Ten of Cups", description: "Harmony, fulfillment, happiness, and emotional security.", image: "cups10.png", category: "Suit of Cups" },
    { name: "Page of Cups", description: "Creativity, curiosity, intuition, and beginnings.", image: "cupsPage.png", category: "Suit of Cups" },
    { name: "Knight of Cups", description: "Romance, charm, imagination, and idealism.", image: "cupsKnight.png", category: "Suit of Cups" },
    { name: "Queen of Cups", description: "Compassion, calm, comfort, and emotional stability.", image: "cupsQueen.png", category: "Suit of Cups" },
    { name: "King of Cups", description: "Emotionally balanced, compassionate, diplomatic, and wise.", image: "cupsKing.png", category: "Suit of Cups" }
];

let cardName; 


// Function to pull a random card
function pullCard() {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomIndex];

    // Update card name and description
    cardName = card.name;
    document.getElementById("cardName").innerText = card.name;
    document.getElementById("cardDescription").innerText = card.description;

    // Display the card image
    // Set the base image path based on card category
    let basePath;
        if (card.category === "Major Arcana") {
            basePath = "images/MajorArcana/";
        } else if (card.category === "Suit of Wands") {
            basePath = "images/Wands/";
        } else if (card.category === "Suit of Swords") {
            basePath = "images/swords/";
        } else if (card.category === "Suit of Pentacles") {
            basePath = "images/Pentacles/";
        } else if (card.category === "Suit of Cups") {
            basePath = "images/Cups/";
        }

    // Set the card image source
    if (basePath) {
    document.getElementById("cardImage").src = basePath + card.image;
    document.getElementById("cardImage").removeAttribute("hidden");
    }
    // Display the card details
    document.getElementById("cardDisplay").style.display = 'block';

    fetch('http://localhost:3000/getTarotReading', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cardName })
    })
    .then(response => response.json())
    .then(data => {
        
        document.getElementById('cardDescription').innerText = data.reading;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
// Add event listener to the button
document.getElementById("pullCardButton").addEventListener("click", pullCard);


