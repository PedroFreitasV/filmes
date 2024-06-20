import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import './filme.css'

function Filmes (){

    const {id} = useParams()
    const navigate = useNavigate()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "1cdabaff49657cb594ae456f8423187d",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                navigate("/", {replace: true})
                return;
            })
        }
        loadFilme()

        return () => {
            console.log("C")
        }
    }, [navigate, id])

    function slvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix")

        let filmeSalvo = JSON.parse(minhaLista) || []

        const hasFilme = filmeSalvo.some( (filmesSalvo) => filmesSalvo.id === filme.id )

        if(hasFilme){
            toast.warning("Esse filme já está na sua lista")
            return;
        }
        filmeSalvo.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmeSalvo))
        toast.success("Filme salvo")
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }


    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttom">
                <button onClick={slvarFilme}>Salvar</button>
                <button><a href={`http://youtube.com/results?search_query=${filme.title} Trailer`} rel="external" target="blank">Trailer</a></button>
            </div>
        </div>
    )
}

export default Filmes