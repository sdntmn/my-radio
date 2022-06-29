import React from "react";

function Footer() {
  return (
    <footer className='footer page__section'>
      <p>Российские и зарубежные радиостанции в режиме онлайн.</p>
      <p>
        Все права на аудио материалы, представленные на сайте принадлежат их
        законным владельцам.
      </p>
      <p className='footer__copyright'>© {new Date().getFullYear()} SDN</p>
    </footer>
  );
}

export default Footer;
