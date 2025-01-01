import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setErrorProduct, resetErrorProduct, clearDataProduct, deleteProduct} from '../../redux/products/slice';

export default function Register()
{ 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Pegando valores da store
    const tempData = useSelector((state) => state.product.productData);

    //Inicializando o estado com os valores da store
    const [id, setID] = useState(tempData?.id || '');
    const [name, setName] = useState(tempData?.name || '');
    const [way, setWay] = useState(tempData?.way || '');
    const [price, setPrice] = useState(tempData?.price || '');
    const [description, setDescription] = useState('');
    const [type, setType] = useState(tempData?.type || '');
    const [createdAt, setCreatAt] = useState(tempData?.createdAt || '');
    const error = useSelector((state) => state.user.error);
    const serverImgLink = "http://localhost:9000/images/";

    useEffect(() => {
        dispatch(resetErrorProduct());
    }, []);

    useEffect(() => {
        if(tempData && tempData.id){
            setID(tempData.id);
            setName(tempData.name);
            setWay(tempData.way);
            setPrice(tempData.price);
            setDescription(tempData.description);
            setType(tempData.type);
            setCreatAt(tempData.createdAt);
        }
        console.log("DeleteData: ", tempData);
    }, [tempData]);
       
useEffect(() => {
    if (error) {
        console.error("Erro detectado: ", error);
    }
}, [error]);

    function functionDelete(e)
    {
        e.preventDefault();
        (dispatch(resetErrorProduct()));

        if(id === "" || id === undefined){
            dispatch(setErrorProduct({error: "Erro ao deletar! ID inexistente!"}));
            return;
        }
        else{
            dispatch(deleteProduct({id: id}));
            alert(`Produto '${name}' DELETADO com Sucesso!`);      
            if(type == 'products'){
                navigate('/products');
            }
            else if(type == 'plates'){
                navigate('/plates');
            }                
            else{
                navigate('/home');
            }
        }
    }

    function backward()
    {
        if(type == 'products'){
            dispatch(clearDataProduct());
            navigate('/products');
            return null;
        }
        if(type == 'plates'){
            dispatch(clearDataProduct());
            navigate('/plates');
            return null;
        }
        else{
            dispatch(clearDataProduct());
            navigate('/home');
            return null;
        }
    }

    function withOutID()
    {
        alert("Erro ao carregar dados!");
        dispatch(setErrorProduct({error: "Erro ao carregar dados!"}));
        navigate('/products');
        return null;
    }

return (
    tempData.id !== null && tempData.id !== "" && tempData.id !== undefined ? (
        <div>
        <div className="container">
        <section className="containerSectionDelete">
            <form>
            <h1 className="commumtitle">Quer mesmo deletar este produto?</h1>

            <div className="row">
                <input type="hidden" id="id" name="id" value={id} readOnly />
            </div>
            <br />
            <div className="productGrid">
                <div className="productItem">
                    <h3>{name}</h3>
                    <p className="central"><strong>ID:</strong> {id}</p>
                    <p className='central'><img className='centralImage' src={`${serverImgLink}${way}`} alt="Product" /></p>
                    <p className="central"><strong>Preço:</strong> R$ {price}</p>
                    <p className="central"><strong>Descrição:</strong> {description}</p>
                    <p className="central"><strong>Tipo:</strong> {type}</p>
                    <p className="central"><strong>Data de Criação:</strong> {createdAt}</p>
                </div>
            </div>

            {error && <> <br /><p className='formError'><b>{error}</b></p> </>}

            <div className="row">
                <div>                
                    <br />
                    <button className="buttonlogin" type="button" onClick={functionDelete}>
                        Confirmar
                    </button>
                    <button className="buttonlogin" style={{background: 'red', marginLeft: '15px', hover: 'blue'}} type="button" onClick={backward}>Voltar</button>                    
                </div>
            </div>
            </form>
            <br />
        </section>
        </div>

        <br />
        <br />

        </div>
    ) : (
        withOutID() || null
    )
);

}
