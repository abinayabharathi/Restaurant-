
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Website</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="top">
        <div class="logo">Amitresto</div>
        <div class="nav">
            <a href="#home" class="nav-item">Home</a>
            <a href="#menu" class="nav-item">Menu</a>
            <a href="#contact" class="nav-item">Contact</a>
        </div>
        <div class="search">
            <i class="fa-solid fa-search"></i>
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>

    <div id="home" class="heading">
        <div class="left">
            <p>Are You Hungry?</p>
            <h1>Don't Wait</h1>
            <p>Let’s start to order food now</p>
            <button onclick="scrollToMenu()">Check out Menu</button>
        </div>

        <div class="right" id="food"></div>

        <div class="SocialMedia">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
        </div>
    </div>

    <!-- Menu Section -->
    <div id="menu" class="menu-section">
        <h2>Menu</h2>
        <div class="menu-items">
            <div class="menu-item">
                <img src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg" alt="Pizza">
                <p>Pizza - $100</p>
                <button class="order-btn" onclick="orderNow(this)">Order Now</button>
            </div>
            <div class="menu-item">
                <img src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" alt="Burger">
                <p>Burger - $80</p>
                <button class="order-btn" onclick="orderNow(this)">Order Now</button>
            </div>
            <div class="menu-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYY1GWo5E49WS6_LkfhH35Wc1Q8sLdVlhEcw&s" alt="Pasta">
                <p>Pasta - $120</p>
                <button class="order-btn" onclick="orderNow(this)">Order Now</button>
            </div>
        </div>
        <div class="menu-items">
            <div class="menu-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRKoYAOqgOO_tqoGGnfUlGbjZxuUGX2RUIA&s" alt="Salad">
                <p>Salad - $150</p>
                <button class="order-btn" onclick="orderNow(this)">Order Now</button>
            </div>
            <div class="menu-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIdfhNHFpts2r5tUFzCJIHyLC7XRIF5dV8g&s" alt="Fries">
                <p>Fries - $250</p>
                <button class="order-btn" onclick="orderNow(this)">Order Now</button>
            </div>
            <div class="menu-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmoMj74C2e5v3q-zRoGhqf-W2gCiKsktQlKA&s" alt="Ice Cream">
                <p>Ice Cream - $85</p>
                <button class="order-btn" onclick="orderNow(this)">Order Now</button>
            </div>
        </div>
    </div>

    <!-- Contact Section -->
    <section id="contact" class="reservation">
        <div class="section_container reservation_container">
            <h3>RESERVATION</h3>
            <h2 class="section__header">BOOK YOUR TABLE</h2>
            <form action="/">
                <input type="text" placeholder="NAME" required />
                <input type="email" placeholder="EMAIL" required />
                <input type="date" placeholder="DATE" required />
                <input type="time" placeholder="TIME" required />
                <input type="number" placeholder="PEOPLE" min="1" required />
                <button class="btn" type="submit">FIND TABLE</button>
            </form>
        </div>
        <!-- Right-side image -->
        <div class="contact-image">
            <img src="https://www.shutterstock.com/image-photo/contact-us-customer-support-service-260nw-420893623.jpg" alt="Contact Image" />
        </div>
    </section>
    
    

    <script>
        function scrollToMenu() {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        }

        function orderNow(button) {
            button.style.backgroundColor = 'blue';
            button.style.color = 'white';
            button.innerText = 'Ordered';
        }

        document.querySelectorAll('.nav-item').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                if (this.getAttribute('href').startsWith('#')) {
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>


* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    height: 100%;
    background-image: url('https://img.freepik.com/premium-photo/beautiful-restaurant-food-black-background-generative-ai_73944-32277.jpg');
    height: 100vh;
    background-size: cover;
    background-position: center;
}

.top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    padding: 0px 40px;
}

.logo {
    font-size: 30px;
    color: orange;
}

.nav {
    display: flex;
    gap: 20px;
}

.nav-item {
    padding: 5px 15px;
    color: orange;
    font-size: 20px;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
}

.nav-item:hover {
    color: white;
    text-decoration: underline;
    transform: scale(1.1);
}

.heading {
    display: flex;
    justify-content: space-evenly;
    padding-top: 65px;
    align-items: center;
}

.right {
    width: 440px;
    height: 440px;
    background-image: url('https://github.com/DynamicCodingWithAmit/Restaurant-website-design-html-css-Javascript/blob/main/food.jpg?raw=true');
    background-size: cover;
    border-radius: 400px;
}

.left p:nth-child(1) {
    color: white;
    font-size: 30px;
    letter-spacing: 1px;
    font-style: italic;
}

.left h1 {
    font-size: 90px;
    color:white;
}

.left p:nth-child(3) {
    color: orange;
    font-size: 30px;
    font-style: italic;
}

.left button {
    width: 150px;
    height: 30px;
    font-size: 15px;
    border-radius: 20px;
    border: 2px solid white;
    background-color: black;
    color: white;
    margin: 20px 0px;
}

/* Menu Section */
.menu-section {
    background-image: url('https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg');
    height: 100vh;
    background-size: cover;
    background-position: center;
    margin: 50px;
    text-align: center;
}

.menu-section h2 {
    font-size: 40px;
    color:white;
    margin-bottom: 20px;
}

.menu-items {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px 0;
}

.menu-item {
    text-align: center;
    cursor: pointer;
}

.menu-item img {
    width: 150px;
    height: 150px;
    border-radius: 15px;
}

.menu-item p {
    font-size: 18px;
    color: white;
}

.order-btn {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: orange;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.order-btn:hover {
    background-color: darkorange;
}

.order-btn.ordered {
    background-color: blue;
    color: white;
}

/* Contact Section */
/* Contact/Reservation Section */
/* Contact/Reservation Section with Right-Side Image */
.reservation {
    background-image: url('https://t4.ftcdn.net/jpg/05/83/90/17/360_F_583901767_l0ZxyLupe4NHbNnLeEuTK35AvC2Ccu26.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    position: relative;
    color: white; /* Adjusted text color for readability */
}

.section_container {
    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background for readability */
    padding: 30px;
    border-radius: 10px;
    max-width: 50%; /* Left container width */
    width: 100%;
}

.reservation_container h3 {
    font-size: 24px;
    color: orange;
    margin-bottom: 10px;
}

.section__header {
    font-size: 40px;
    margin-bottom: 30px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

form button {
    padding: 12px;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
}

form button:hover {
    background-color: darkorange;
}

/* Right-side image styling */
.contact-image {
    max-width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}




