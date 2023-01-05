import './Header.scss';

function App() {
    return (
        <div className="header">
            <div className="title-wrapper">
                <p className='title-wrapper__username primary-title'>sirsathler/</p>
                <p className='title-wrapper__repository'>desafio-frontend</p>
                <a href="https://www.linkedin.com/in/matheus-sathler/" className='title-wrapper__linkedin'>https://www.linkedin.com/in/matheus-sathler/</a>
            </div>

            <div className="ipam-logo">
                <img src="https://ipam.org.br/wp-content/themes/parolah-ipam2/images/transcerrado/ipam-brand-color.png" alt="ipam-logo" />
            </div>
        </div>
    );
}

export default App;