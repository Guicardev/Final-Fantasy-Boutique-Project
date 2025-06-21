// Animation des badges de soldes avec optimisations
const soldesBadges = document.querySelectorAll(".product-list__item-soldes");

// Animation de pulsation des badges
function animateSalesBadges() {
  soldesBadges.forEach((badge) => {
    badge.style.transform = "scale(1.1)";
    badge.style.transition = "transform 0.3s ease-in-out";

    setTimeout(() => {
      badge.style.transform = "scale(1)";
    }, 300);
  });
}

// Lancer l'animation toutes les 2,5 secondes
// let salesAnimationInterval = setInterval(animateSalesBadges, 2500);
setTimeout(() => {
  salesAnimationInterval = setInterval(animateSalesBadges, 2500);
}, 1000);

// Pause l'animation quand l'utilisateur survole un badge

let isAnimationPaused = false;

soldesBadges.forEach((badge) => {
  badge.addEventListener("mouseenter", () => {
    clearInterval(salesAnimationInterval);
    isAnimationPaused = true;
    badge.style.transform = "scale(1.05)";
  });

  badge.addEventListener("mouseleave", () => {
    badge.style.transform = "scale(1)";
    if (isAnimationPaused) {
      setTimeout(() => {
        salesAnimationInterval = setInterval(animateSalesBadges, 2500);
        isAnimationPaused = false;
      }, 1000);
    }
  });
});

// Animation au survol des produits
const productItems = document.querySelectorAll(".product-list_item");

productItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-5px)";
    item.style.transition = "transform 0.3s ease-in-out";
    item.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0)";
    item.style.boxShadow = "none";
  });
});

// Animation des boutons "Ajouter au panier"
const addToCartButtons = document.querySelectorAll(
  ".product-list__item-add-to-cart"
);

addToCartButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#a00000";
    button.style.transition = "background-color 0.2s ease";
  });

  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "var(--main-bg-color)";
  });

  // Animation au clic
  button.addEventListener("click", (e) => {
    e.preventDefault();

    button.style.transform = "scale(0.95)";
    button.textContent = "Ajouté !";

    setTimeout(() => {
      button.style.transform = "scale(1)";

      const priceSpan = button.querySelector(".product-list__item-price");
      const priceText = priceSpan ? priceSpan.textContent : "";

      // Réinitialise le contenu du bouton de manière sécurisée sans l'utilisation de inner pour éviter les faille
      button.textContent = "Ajouter au panier ";

      const newSpan = document.createElement("span");
      newSpan.className = "product-list__item-price";
      newSpan.textContent = priceText;

      button.appendChild(newSpan);
    }, 500);
  });
});

// Animation d'apparition progressive des produits au chargement
document.addEventListener("DOMContentLoaded", () => {
  productItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";

    if (!item.classList.contains("animated-once")) {
      item.classList.add("animated-once");

      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
        item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      }, index * 100);
    }
  });
});

// Optimisation des performances : pause les animations quand l'onglet n'est pas visible
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(salesAnimationInterval);
  } else {
    salesAnimationInterval = setInterval(animateSalesBadges, 2500);
  }
});

// Animation du bouton "Soldes" fixe
const salesButton = document.querySelector(".sales");
if (salesButton) {
  // Animation de brillance périodique
  setInterval(() => {
    salesButton.style.boxShadow = "0 0 15px rgba(200, 0, 0, 0.8)";
    salesButton.style.transition = "box-shadow 0.5s ease";

    setTimeout(() => {
      salesButton.style.boxShadow = "none";
    }, 500);
  }, 4000);

  // Animation au survol
  salesButton.addEventListener("mouseenter", () => {
    salesButton.style.transform = "translateX(5px)";
    salesButton.style.transition = "transform 0.3s ease";
  });

  salesButton.addEventListener("mouseleave", () => {
    salesButton.style.transform = "translateX(0)";
  });
}
