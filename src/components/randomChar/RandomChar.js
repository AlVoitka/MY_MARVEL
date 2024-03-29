import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassge';

import './randomChar.scss';


class RandomChar extends Component {


    state = {
        char: {},
        loading: true,
        error: false 
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    onError =() => {
        this.setState({ 
            loading: false,  
            error: true 
        })
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }
    
    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char: {name, description, thumbnail, homepage, wiki}, loading, error} = this.state;  
        const errorMessage = error ? <ErrorMassage/> : null;
        // const spinner = loading ? <Spinner/> : null;
        // const content = !(loading || error) ? <RandomChar/> : null;

        let imgStyle = {'objectFit' : 'cover'};
        if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit' : 'contain'};
        }

        if(loading) {
            return <Spinner/>
        }

        return (
            <div className="randomchar">
                {errorMessage}
                <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle}/>
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                            {description}
                        </p>
                        <div className="randomchar__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div onClick={this.updateChar} className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }


}

export default RandomChar;