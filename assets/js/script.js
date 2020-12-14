document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    DKFDS.init();

    document.getElementById('send-form').addEventListener('click', function(){
        let modal = document.getElementById('modal-contact');
        let html = "       <div class=\"modal-header\">\n" +
            "            <h2 class=\"modal-title\" id=\"contact-sent-title-receipt\">\n" +
            "                Din henvendelse er sendt\n" +
            "            </h2>\n" +
            "            <button class=\"modal-close button button-unstyled\"\n" +
            "                    aria-label=\"Luk\"\n" +
            "                    id=\"modal-contact-close\"><svg class=\"icon-svg\" focusable=\"false\" aria-hidden=\"true\"><use xlink:href=\"#close\"></use></svg></button>\n" +
            "        </div>\n" +
            "        <div class=\"modal-body pt-5\">\n" +
            "            <!-- Hvis man indtaster det fulde navn i ét felt, bør det også være det fulde navn man viser. -->\n" +
            "            <p class=\"weight-semibold\">Kære Kristina Jensen,</p>\n" +
            "\n" +
            "            <p>Tak for din henvendelse, som vi har registreret med mailnummer: 47419941. Du kan forvente at få svar inden for to arbejdsdage.</p>\n" +
            "\n" +
            "            <p>Vi sagsbehandler ikke og har ikke adgang til dine sager. Hvis du har spørgsmål til sagsbehandlingstider eller konkret sagsbehandling, skal du kontakte den myndighed, der behandler sagen.</p>\n" +
            "\n" +
            "            <p>Vi kan hjælpe dig med:</p>\n" +
            "            <ul>\n" +
            "                <li>at finde ud af, hvor du skal henvende dig med spørgsmål til det offentlige</li>\n" +
            "                <li>at finde information på borger.dk</li>\n" +
            "                <li>at bruge selvbetjening på borger.dk</li>\n" +
            "            </ul>\n" +
            "\n" +
            "            <p>Du er velkommen til at ringe til os på telefon 70 10 18 81. Vi har åbent mandag til torsdag fra kl. 08.00-20.00 og fredag fra kl. 08.00-18.00.</p>\n" +
            "\n" +
            "            <h3>Dine oplysninger</h3>\n" +
            "\n" +
            "            <h4 class=\"form-label mt-0 mb-0\">Dit fulde navn</h4>\n" +
            "            <p class=\"mt-0\">Kristina Jensen</p>\n" +
            "            <h4 class=\"form-label mt-0 mb-0\">Din e-mailadresse</h4>\n" +
            "            <p class=\"mt-0\">krj@netcompany.com</p>\n" +
            "            <h4 class=\"form-label mt-0 mb-0\">Overskrift for dit emne</h4>\n" +
            "            <p class=\"mt-0\">Lorem ipsum dolor sit amet</p>\n" +
            "            <h4 class=\"form-label mt-0 mb-0\">Beskrivelse</h4>\n" +
            "            <p class=\"mt-0\">Integer sit amet nisl varius arcu cursus aliquet sit amet blandit nulla. Nunc elementum auctor sodales. Donec finibus dui tempus, euismod nibh eget, pulvinar ante. Praesent mollis dictum interdum. Sed lacinia porta mauris, vel rutrum libero. Aliquam pellentesque venenatis arcu, in aliquam arcu feugiat in. Proin sit amet nulla vel ex euismod euismod in sed purus. Donec ut ex posuere, eleifend orci vel, sodales urna. Morbi venenatis, massa non cursus posuere, velit ex posuere sem, a dignissim erat lectus ac ipsum.\n" +
            "            <h4 class=\"form-label mt-0 mb-0\">Vedhæft filer</h4>\n" +
            "            <ul>\n" +
            "                <li><a href=\"##\">document.pdf</a></li>\n" +
            "                <li><a href=\"##\">document2.pdf</a></li>\n" +
            "                <li><a href=\"##\">image.jpg</a></li>\n" +
            "            </ul>\n" +
            "        </div>\n" +
            "        <div class=\"modal-footer\">\n" +
            "            <button\n" +
            "                class=\"button button-secondary mt-5\"\n" +
            "                id=\"receipt-close\">Luk</button>\n" +
            "        </div>";

        modal.getElementsByClassName('modal-content')[0].innerHTML = html;
        modal.getElementsByClassName('modal-content')[0].setAttribute('aria-labelledby', "contact-sent-title-receipt");
        modal.getElementsByClassName('modal-content')[0].setAttribute('role', "alert");
        modal.getElementsByClassName('modal-content')[0].scroll({top: 0, left: 0});

        document.getElementById('receipt-close').addEventListener('click', function(){
           let modal = new DKFDS.Modal(document.getElementById('modal-contact'));
           modal.hide();
        });
        document.getElementById('modal-contact-close').addEventListener('click', function(){
           let modal = new DKFDS.Modal(document.getElementById('modal-contact'));
           modal.hide();
        });
    });
});
