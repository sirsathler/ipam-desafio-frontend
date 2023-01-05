import './Loading.scss'

function Loading() {
    return (
        <div className='loading-screen'>
            <p>Um momentinho,</p>
            <p className='primary-title'>conectando ao IBGE...</p>
        </div>
    )
}

export default Loading