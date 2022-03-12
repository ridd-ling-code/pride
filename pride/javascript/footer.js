const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Items</li>
            <li><a href="#" class="footer-link">Homemade Items</a></li>
            <li><a href="#" class="footer-link">Food</a></li>
            <li><a href="#" class="footer-link">T-shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            
        </ul>
        <ul class="category">
            <li class="category-title">Info</li>
            <li><a href="#" class="footer-link">Contact us</a></li>
            <li><a href="#" class="footer-link">FAQs</a></li>
            <li><a href="#" class="footer-link">Our team</a></li>
            <li><a href="#" class="footer-link">Events</a></li>
            <li><a href="#" class="footer-link">Donate us</a></li>
            
            
            
        </ul>
    </div>
</div>
    `;
}

createFooter();