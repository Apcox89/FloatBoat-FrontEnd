//Cox note: demo nav module: bootstrap/refactored
var navHtmlContent = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div class="navbar-brand">
                <img src="../../images/Float-Boat-Cert.png" class="d-inline-block align-top" alt="" loading="lazy">
            </div>
            <h1 class="text-white"> Float Boat Marine Services </h1>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="Index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="AboutUs.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="MarineServices.html">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Locations.html">Locations</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

document.getElementById('navContainer').innerHTML = navHtmlContent;

/*Cox note: Demo how to override the bootsrap w/ your custom css-background-color: */
/*Finds the element with the class "container" and add a custom class to it */
var containerElement = document.querySelector('.container');
    containerElement.classList.add('custom-container');
/* Cox note: Demo sample of JS function at work w/ css*/
var navLinks = document.querySelectorAll('a.nav-link');
    navLinks.forEach(function(link) {
        link.classList.add('text-white');
    });
