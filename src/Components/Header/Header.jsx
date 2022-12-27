import './Header.scss';

function App() {
    return (
        <div className="container">
            <div className="header">
                <div className="title-wrapper">
                    <p className='title-wrapper__username primary-title'>sirsathler</p>
                    <p className='title-wrapper__repository'>desafio-frontend</p>
                    <p className='title-wrapper__linkedin'>https://wwww.linkedin.com.br/matheus-sathler</p>
                </div>

                <div className="ipam-logo">
                    <img src="https://ipam.org.br/wp-content/themes/parolah-ipam2/images/transcerrado/ipam-brand-color.png" alt="ipam-logo" />
                </div>
            </div>
        </div>
    );
}

export default App;