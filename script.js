document.addEventListener('DOMContentLoaded', () => {
    const navIcon = document.getElementById('nav-icon');
    const navContainer = document.querySelector('.nav-container');
    const navItems = document.getElementById('nav-items');
    const navLinks = document.querySelectorAll('.nav-item');

    // Toggle the expanded class on navContainer and navItems when the navIcon is clicked
    navIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from bubbling up to the document
        navContainer.classList.toggle('expanded');
        navItems.classList.toggle('expanded');
    });

    // Handle link clicks: slide to the section and collapse the menu
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const currentSection = document.querySelector('.content-section.active');
            const sectionToShow = document.getElementById(this.getAttribute('data-section'));

            if (currentSection !== sectionToShow) {
                // Slide out the current section
                currentSection.classList.remove('slide-in');
                currentSection.classList.add('slide-out');

                // After the slide-out animation ends, hide the section
                currentSection.addEventListener('animationend', function() {
                    this.classList.remove('active', 'slide-out');
                }, { once: true });

                // Slide in the new section
                sectionToShow.classList.add('active', 'slide-in');

                // Remove active class from all nav items and add it to the clicked one
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }

            // Collapse the navigation menu
            navContainer.classList.remove('expanded');
            navItems.classList.remove('expanded');
        });
    });

    // Collapse the menu if clicking anywhere outside the navigation
    document.addEventListener('click', () => {
        if (navItems.classList.contains('expanded')) {
            navContainer.classList.remove('expanded');
            navItems.classList.remove('expanded');
        }
    });

    // Prevent clicks inside the navigation menu from collapsing it
    navItems.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from bubbling up to the document
    });
});
