const facts = [
    "Crocodiles are reptiles that belong to the Crocodilian order.",
    "They are found in tropical regions of Africa, Asia, Australia, and the Americas.",
    "Crocodiles are excellent swimmers and can hold their breath for extended periods.",
    "They are carnivores and primarily eat fish, amphibians, birds, and mammals.",
    "Crocodiles have powerful jaws and sharp teeth, enabling them to crush and tear their prey.",
    "They have a unique four-chambered heart, which is more advanced than most reptiles.",
    "Crocodiles are ambush predators, often lying in wait for prey to come close.",
    "They have a tough, scaly hide that protects them from injury and the sun.",
    "Crocodiles are known to be very territorial and can be aggressive when threatened.",
    "Some crocodile species can grow up to 20 feet long and weigh over 2,000 pounds."
];

const factDisplay = document.getElementById('factDisplay');
const factButton = document.getElementById('factButton');

factButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
});
