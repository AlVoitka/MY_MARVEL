import err from './error.gif'

const ErrorMassage = () => {
    return (
        <img src={err} style={{margin: '0 auto', background: 'none', paddingTop: '30px', alignItems: 'center', display: 'block',width:'350px'}} alt="spinner" />
    )
}

export default ErrorMassage;