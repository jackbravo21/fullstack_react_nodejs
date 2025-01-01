import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, editProductData, clearDataProduct, setErrorProduct, resetErrorProduct } from '../../redux/products/slice';

export default function Register()
{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Pegando valores da store
    const editData = useSelector((state) => state.product.productData);

    const [id, setID] = useState(editData?.id || '');
    const [name, setName] = useState(editData?.name || '');
    const [way, setWay] = useState(editData?.way || '');
    const [price, setPrice] = useState(editData?.price || '');
    const [type, setType] = useState(editData?.type || '');
    const [description, setDescription] = useState(editData?.description || '');
    const [createdAt, setCreatedAt] = useState(editData?.createdAt || '');
    const [photo, setPhoto] = useState('');
    const [changeImage, setChangeImage] = useState(false);
    const error = useSelector((state) => state.product.error);
    const serverImgLink = "http://localhost:9000/images/";

    function prepareSetName(e){setName(e.target.value);}
    function prepareSetWay(e){setWay(e.target.value);}
    function prepareSetPrice(e){setPrice(e.target.value);}
    function prepareSetType(e){setType(e.target.value);}
    function prepareSetDescription(e){setDescription(e.target.value);}
    function prepareSetPhoto(e){setPhoto(e.target.files[0]);}
    function prepareSetChangeImage(e){setChangeImage(e.target.checked);}

    useEffect(() => {
        dispatch(resetErrorProduct());
    }, []);

    useEffect(() => {
        if(editData && editData.id){
            setID(editData.id);
            setName(editData.name);
            setWay(editData.way);
            setPrice(editData.price);
            setType(editData.type);
            setDescription(editData.description);
            setCreatedAt(editData.createdAt);
        }
        console.log("EditData: ", editData);
    }, [editData]);
    
    useEffect(() => {
        if (error) {
            console.error("Erro detectado: ", error);
        }
    }, [error]);

    function clearDataForm(){
        setID(null)
        setName(null);
        setPhoto(null);
        setWay(null);
        setPrice(null);
        setType(null);
        setDescription(null);
        setChangeImage(false);
    }

    function register(e)
    {
        console.log("Função `register` foi chamada.");
        e.preventDefault();
        dispatch(resetErrorProduct());

        if(     
                id === "" || id === undefined 
            ||  name === "" || name === undefined 
            ||  way === "" || way === undefined
            ||  price === "" || price === undefined
            ||  type === "" || type === undefined
            ||  description === "" || description === undefined
        ){
            dispatch(setErrorProduct({error: "Preencha TODOS os campos!"}));
            console.log(error);
            return;
        }

        console.log("ChangeImage: ", changeImage);

        if(changeImage == false){
            dispatch(editProduct({
                id: id,
                name: name,
                way: way,
                price: price,
                type: type,
                description: description
            }));

            alert(`Produto '${name}' editado com Sucesso!`);
            clearDataForm();
            
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
       else{
            if(photo && photo instanceof File){             //ou "if(photo && photo instanceof File){" ou "if(e.target.files.length > 0){" 
                const formData = new FormData();
                formData.append("id", id);
                formData.append("name", name);
                formData.append("price", price);
                formData.append("type", type);
                formData.append("description", description);
                formData.append("photo", photo);                //Data Image;

                dispatch(editProductData(formData));
                
                alert(`Produto '${name}' editado com Sucesso!`);
                clearDataForm();

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
            else{
                dispatch(setErrorProduct({error: "Você não está enviando nenhuma imagem!"}));
                console.log(error);
                return;
            }
        }
    }

function backward()
{
    if(type == 'products'){
        dispatch(clearDataProduct());
        dispatch(resetErrorProduct());
        navigate('/products');
        return null;
    }
    if(type == 'plates'){
        dispatch(clearDataProduct());
        dispatch(resetErrorProduct());
        navigate('/plates');
        return null;
    }
    else{
        dispatch(clearDataProduct());
        dispatch(resetErrorProduct());
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

return(

editData.id !== null && editData.id !== "" && editData.id !== undefined ? (
<div>
    <div className="container">
    <section className="containerSection">

        <form>
        <h1 className="commumtitle">Editar Produto:</h1>

        <img className='centralImage' src={`${serverImgLink}${way}`} alt="Product"></img>
        
        <div className="row">
            {error && <> <p className='formError'><b>{error}</b></p> </>}
        </div>
        
        <div className="row">
            <input type="hidden" id="id" name="id" value={id} readOnly />
        </div>

        <div className="row">
            <div className="col25">
                <label>Nome do produto:</label>
            </div>
            <div className="col75">
                <input type="text" id="name" name="name" maxLength="70" onChange={prepareSetName} placeholder="Nome do produto..." value={name}></input>
            </div>
        </div>

        <div className="row">
                <input type="hidden" id="way" name="way" value={way} readOnly></input>
        </div>

        <div className="row">
            <div className="col25">
                <label>Preço</label>
            </div>
            <div className="col75">
                <input type="number" id="price" name="price" onChange={prepareSetPrice} placeholder="Digite o preço..." value={price}></input>
            </div>
        </div>

        <div className="row">
            <div className="col25">
                <label>Tipo:</label>
            </div>
            <div className="col75">
                <select id="type" name="type" onChange={prepareSetType} placeholder="Escolha..." value={type}>
                    <option value="products">products</option>
                    <option value="plates">plates</option>
                </select>
            </div>
        </div>

        <div className="row">
            <div className="col25">
                <label>Descrição:</label>
            </div>
            <div className="col75">
                <textarea id="description" name="description"  maxLength="254" onChange={prepareSetDescription} placeholder="Descreva o produto..." value={description}></textarea>
            </div>
        </div>

        <div className="row">
                <div className="col25">
                    <label>Data de criação:</label>
                </div>
                <div className="col75">
                    <span>{createdAt}</span>
                </div>
        </div>

        <small className='wisper'><b>Marque a caixa abaixo se deseja escolher uma nova imagem.</b></small>
        <div className="row">
            <div className="col26">
                <label>Trocar a Imagem?</label>
            </div>
            <div className="col76">
                <p>Sim</p><input type="checkbox" id="changeImage" name="changeImage"
                onChange={prepareSetChangeImage}/>
            </div>
        </div>

        {changeImage == true ? (

        <div className="row">
            <div className="col26">
                <label>Nova Imagem (Max 2mb):</label>
            </div>
            <div className="col75">
                <input type="file" id="photo" name="photo" onChange={prepareSetPhoto}></input> {/* Campo de upload */}
            </div>
        </div>
        ) : (null)}

        <div className="row">
            <div><br />
                <button className="buttonlogin" type="button" onClick={register}>
                        Enviar
                </button>
                <button className="buttonlogin" style={{background: 'red', marginLeft: '15px', hover: 'blue'}} type="button" onClick={backward}>Voltar</button>
            </div>
        </div>
        </form>
        <br />

    </section>
    </div>
    
    <br /><br />
</div>
    ) : (
        withOutID() || null
    )
    );
}