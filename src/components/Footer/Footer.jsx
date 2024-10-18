import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__contact'>
            Contact us
        </div>
        <hr className='footer__divider'/>
        <div className='footer__columns'>
            <div className="footer__first-column">
                <ul className="footer__list">
                    <li className="footer__list-el">Site map</li>
                    <li className="footer__list-el">Jobs @ Bell</li>
                    <li className="footer__list-el">Bell Let's Talk</li>
                </ul>
            </div>
            <div className="footer__second-column">
                <ul className="footer__list">
                    <li className="footer__list-el">About Bell</li>
                    <li className="footer__list-el">Knowledge hub</li>
                    <li className="footer__list-el">Self serve</li>
                </ul>
            </div>
            <div className="footer__third-column">
                <ul className="footer__list">
                    <li className="footer__list-el">Bell business blog</li>
                </ul>
            </div>
        </div>
        <hr className='footer__divider'/>
        <p className='footer__rights'>© Bell Canada, 2024. All rights reserved.</p>
    </footer>
  )
}

export default Footer