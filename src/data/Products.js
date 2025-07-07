const products = [
    {
        id: 1,
        name: "Alcapone",
        category: "Donat",
        price: 12000,
        description:
            "Donut dipped in white chocolate and topped with sliced toasted almonds.",
        image: "https://jcodonuts.com/assets/img/menu/alcapone.webp",
    },
    {
        id: 2,
        name: "Avocado",
        category: "Donat",
        price: 13000,
        description:
            "Donut filled with avocado cream, dipped in avocado chocolate, and garnished with dark chocolate flakes.",
        image: "https://jcodonuts.com/assets/img/menu/avocado-dicaprio.webp",
    },
    {
        id: 3,
        name: "Berry Spears",
        category: "Donat",
        price: 13000,
        description:
            "Donut filled with whipped cream cheese, dipped in strawberry jam, and garnished with white chocolate flakes.",
        image:"https://jcodonuts.com/assets/img/menu/berry-spears.webp",
    },
    {
        id: 4,
        name: "Black Jack",
        category: "Donat",
        price: 12000,
        description: "Donut fully encased in dark chocolate.",
        image: "https://jcodonuts.com/assets/img/menu/black-jack.webp",
    },
    {
        id: 5,
        name: "Blue Berrymore",
        category: "Donat",
        price: 13000,
        description:
            "Donut filled with whipped cream cheese, dipped in blueberry jam, and garnished with white chocolate flakes.",
        image: "https://jcodonuts.com/assets/img/menu/blue-berrymore.webp",
    },
    {
        id: 6,
        name: "Caviar Chocolate",
        category: "Donat",
        price: 13000,
        description:
            "Donut dipped in hazelnut chocolate and sprinkled with dark chocolate coated crisps.",
        image: "https://jcodonuts.com/assets/img/menu/caviar-chocolate.webp",
    },
    {
        id: 7,
        name: "Caviar Strawberry",
        category: "Donat",
        price: 13000,
        description:
            "Donut dipped in strawberry milk chocolate and sprinkled with dark chocolate coated crisps.",
        image: "https://jcodonuts.com/assets/img/menu/caviar-strawberry.webp",
    },
    {
        id: 8,
        name: "Cheese Cakelicious",
        category: "Donat",
        price: 14000,
        description:
            "Donut filled with whipped cream cheese, dipped in white chocolate, topped with cookie crumbs, and garnished with white chocolate.",
        image: "https://jcodonuts.com/assets/img/menu/cheese-cakelicious.webp",
    },
    {
        id: 9,
        name: "Chocolate Rainbow",
        category: "Donat",
        price: 12000,
        description:
            "Donut dipped in white chocolate, sprinkled with crushed toasted almonds, and garnished with strawberry jam.",
        image: "https://jcodonuts.com/assets/img/menu/chocolate-rainbow.webp",
    },
    {
        id: 10,
        name: "CocoLoco",
        category: "Donat",
        price: 13000,
        description:
            "Donut filled with dark chocolate ganache and dipped in dark chocolate.",
        image: "https://jcodonuts.com/assets/img/menu/coco-loco.webp",
    },
    {
        id: 11,
        name: "Copa Banana",
        category: "Donat",
        price: 13000,
        description:
            "Donut filled with banana custard cream, dipped in dark chocolate, and garnished with a dollop of banana custard cream.",
        image: "https://jcodonuts.com/assets/img/menu/copa-banana.webp",
    },
    {
        id: 12,
        name: "Crunchy Crunchy",
        category: "Donat",
        price: 12000,
        description:
            "Donut dipped in milk chocolate and topped with chocolate cornflakes.",
        image: "https://jcodonuts.com/assets/img/menu/crunchy-crunchy.webp",
    },
    {
        id: 13,
        name: "Don Mochino",
        category: "Donat",
        price: 13000,
        description:
            "Donut filled with mocha cream, dipped in dark chocolate, and garnished with white chocolate.",
        image: "https://jcodonuts.com/assets/img/menu/don-mochino.webp",
    },
    {
        id: 14,
        name: "Forest Glam",
        category: "Donat",
        price: 14000,
        description:
            "Donut dipped in black forest chocolate, topped with dark chocolate flakes, sugar icing powder, and garnished with sweet cherries.",
        image: "https://jcodonuts.com/assets/img/menu/forest-glam.webp",
    },
    {
        id: 15,
        name: "Glazzy",
        category: "Donat",
        price: 10000,
        description: "Donut dipped in light honey glaze.",
        image: "https://jcodonuts.com/assets/img/menu/glazzy.webp",
    },
    {
        id: 16,
        name: "Heaven Berry",
        category: "Donat",
        price: 13000,
        description:
            "Donut filled with strawberry cream filling, dipped in strawberry milk chocolate, and garnished with white chocolate.",
        image: "https://jcodonuts.com/assets/img/menu/heaven-berry.webp",
    },
    {
        id: 17,
        name: "Meisisipi",
        category: "Donat",
        price: 12000,
        description:
            "Donut dipped in dark chocolate ganache and topped with chocolate sprinkles.",
        image: "https://jcodonuts.com/assets/img/menu/meisissippi.webp",
    },
    {
        id: 18,
        name: "Mr Green Tea",
        category: "Donat",
        price: 13000,
        description:
            "Donut dipped in green tea chocolate and topped with crushed toasted almonds.",
        image: "https://jcodonuts.com/assets/img/menu/mr-green-tea.webp",
    },
    {
        id: 19,
        name: "Mr Mokacha",
        category: "Donat",
        price: 13000,
        description:
            "Donut filled with cappuccino cream, dipped in cappuccino chocolate, and garnished with crushed toasted almonds.",
        image: "https://jcodonuts.com/assets/img/menu/mr-mokacha.webp",
    },
    {
        id: 20,
        name: "Oreology",
        category: "Donat",
        price: 13000,
        description:
            "Donut dipped in white chocolate, topped with cookie crumbs, and drizzled with white chocolate.",
        image: "https://jcodonuts.com/assets/img/menu/oreology.webp",
    },
    {
        id: 21,
        name: "Snow White",
        category: "Donat",
        price: 12000,
        description:
            "Donut filled with vanilla whipped cream and topped with sugar icing powder.",
        image: "https://jcodonuts.com/assets/img/menu/snow-white.webp",
    },
    {
        id: 22,
        name: "Sugar Ice",
        category: "Donat",
        price: 10000,
        description: "Donut generously sprinkled with sugar icing powder.",
        image: "https://jcodonuts.com/assets/img/menu/sugar-ice.webp",
    },
    {
        id: 23,
        name: "Tiramisu",
        category: "Donat",
        price: 14000,
        description:
            "Donut filled with tiramisu cream, dipped in tiramisu chocolate, and sprinkled with chocolate powder.",
        image: "https://jcodonuts.com/assets/img/menu/tira-miss-u.webp",
    },
    {
        id: 24,
        name: "Why Nut",
        category: "Donat",
        price: 13000,
        description:
            "Donut filled with peanut butter cream, dipped in white chocolate, and garnished with dark chocolate.",
        image: "https://jcodonuts.com/assets/img/menu/why-nut.webp",
    },

    
    {
        id: 25,
        name: "Cheezy Rich",
        category: "J.Club",
        price: 24000,
        description:
            "Sweet donut sandwich with whipped cream cheese and sliced cheese, topped with whipped cream and shredded cheese.",
        image: "https://jcodonuts.com/assets/img/menu/cheezy-rich.webp",
    },
    {
        id: 26,
        name: "Chicken Salami",
        category: "J.Club",
        price: 25000,
        description:
            "Savory donut sandwich with smoked chicken salami, tomato sauce, lettuce, cheese, and zucchinis.",
        image: "https://jcodonuts.com/assets/img/menu/chicken-salami.webp",
    },
    {
        id: 27,
        name: "Katsu",
        category: "J.Club",
        price: 26000,
        description:
            "Savory donut sandwich with fried chicken katsu, lettuce, tomatoes, and barbecue sauce.",
        image: "https://jcodonuts.com/assets/img/menu/katsu.webp",
    },
    {
        id: 28,
        name: "Red Velvet",
        category: "J.Club",
        price: 25000,
        description:
            "Sweet donut sandwich with whipped cream cheese, red velvet crumbs, and candied peanut crumble.",
        image: "https://jcodonuts.com/assets/img/menu/red-velvet.webp",
    },
    {
        id: 29,
        name: "Sausage",
        category: "J.Club",
        price: 26000,
        description:
            "Savory donut sandwich with beef sausages, ketchup, zucchinis, and lettuce.",
        image: "https://jcodonuts.com/assets/img/menu/sausage.webp",
    },
    {
        id: 30,
        name: "Tuna Mayonnaise",
        category: "J.Club",
        price: 25000,
        description:
            "Savory donut sandwich with tuna, mayonnaise, lettuce, and cheese.",
        image: "https://jcodonuts.com/assets/img/menu/tuna-mayonnaise.webp",
    },

    // --- J.Cool ---
    {
        id: 31,
        name: "Single",
        category: "J.Cool",
        price: 20000,
        description:
            "Fat-free frozen yogurt in original or blueberry flavor with toppings of your choice.",
        image: "https://jcodonuts.com/assets/img/menu/jcool-single.webp",
    },
    {
        id: 32,
        name: "Couple",
        category: "J.Cool",
        price: 25000,
        description:
            "Fat-free frozen yogurt in original or blueberry flavor with toppings of your choice.",
        image: "https://jcodonuts.com/assets/img/menu/jcool-couple.webp",
    },
    {
        id: 33,
        name: "Sharing",
        category: "J.Cool",
        price: 30000,
        description:
            "Fat-free frozen yogurt in original or blueberry flavor with toppings of your choice.",
        image: "https://jcodonuts.com/assets/img/menu/jcool-sharing.webp",
    },
    {
        id: 34,
        name: "To Go",
        category: "J.Cool",
        price: 22000,
        description:
            "Frozen yogurt with toppings, in convenient to-go packaging.",
        image: "https://jcodonuts.com/assets/img/menu/jcool-togo.webp",
    },

    // --- Coffee ---
    {
        id: 35,
        name: "Hot Americano",
        category: "Coffee",
        price: 18000,
        description: "Hot black coffee.",
        image: "https://jcodonuts.com/assets/img/menu/americano.webp",
    },
    {
        id: 36,
        name: "Hot Caramel Jcoccino",
        category: "Coffee",
        price: 20000,
        description:
            "Espresso with steamed milk, caramel syrup, and caramel sauce topping.",
        image: "https://jcodonuts.com/assets/img/menu/caramel-jcoccino.webp",
    },
    {
        id: 37,
        name: "Iced Latte",
        category: "Coffee",
        price: 19000,
        description: "Espresso shot with milk over ice.",
        image: "https://jcodonuts.com/assets/img/menu/iced-latte.webp",
    },

    // --- Chocolate ---
    {
        id: 38,
        name: "Hot Chocolate",
        category: "Chocolate",
        price: 19000,
        description: "Chocolate mixed with fresh milk (hot).",
        image: "https://jcodonuts.com/assets/img/menu/hot-chocolate.webp",
    },
    {
        id: 39,
        name: "Iced Chocolate",
        category: "Chocolate",
        price: 19000,
        description: "Chocolate mixed with fresh milk (iced).",
        image: "https://jcodonuts.com/assets/img/menu/iced-chocolate.webp",
    },

    // --- Tea ---
    {
        id: 40,
        name: "Iced Lemon Tea",
        category: "Tea",
        price: 15000,
        description: "Refreshing iced lemon tea.",
        image: "https://jcodonuts.com/assets/img/menu/iced-lemon-tea.webp",
    },
    {
        id: 41,
        name: "Hot Green Tea Latte",
        category: "Tea",
        price: 16000,
        description: "Matcha and vanilla with fresh milk (hot).",
        image: "https://jcodonuts.com/assets/img/menu/hot-greentea-latte.webp",
    },

    // --- Frappe ---
    {
        id: 42,
        name: "Avocado Frappe",
        category: "Frappe",
        price: 25000,
        description:
            "Espresso, milk, and avocado powder blended with ice and mocha cream.",
        image: "https://jcodonuts.com/assets/img/menu/frappe-avocado.webp",
    },
    {
        id: 43,
        name: "Mocha Espresso Frappe",
        category: "Frappe",
        price: 25000,
        description:
            "Espresso, milk, chocolate blended with ice, topped with mocha cream.",
        image: "https://jcodonuts.com/assets/img/menu/frappe-mocha.webp",
    },
    {
        id: 44,
        name: "Choco Forest Frappe",
        category: "Frappe",
        price: 26000,
        description:
            "Chocolate with ice, milk, topped with whipped cream and flakes.",
        image: "https://jcodonuts.com/assets/img/menu/choco-forest-frappe.webp",
    },
];

export default products;
  