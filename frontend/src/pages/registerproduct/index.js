import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setErrorProduct, resetErrorProduct, createProduct } from '../../redux/products/slice';

export default function Register()
{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);   //State para file/arquivo;
    const [price, setPrice] = useState('');
    const [type, setType] = useState('desabilitado');
    const [description, setDescription] = useState('');
    const error = useSelector((state) => state.product.error);

    function prepareSetName(e){setName(e.target.value);}
    function prepareSetPhoto(e){setPhoto(e.target.files[0]);}       //Atualizar o estado com o arquivo selecionado, o 0 eh pq eh apenas 1 arquivo;
    function prepareSetPrice(e){setPrice(e.target.value);}
    function prepareSetType(e){setType(e.target.value);}
    function prepareSetDescription(e){setDescription(e.target.value);}

    useEffect(() => {
        if (error) {
            console.error("Erro detectado: ", error);
        }
    }, [error]);

    function register(e)
    {
        (dispatch(resetErrorProduct()));
        e.preventDefault();

            if(     
                name === "" || name === undefined 
                ||  photo === "" || photo === undefined
                ||  price === "" || price === undefined
                ||  type === "" || type === undefined
                ||  description === "" || description === undefined
            ){
                dispatch(setErrorProduct({error: "Preencha TODOS os campos!"}));
                return;
            }
            else{
                const formData = new FormData(); // Criar um FormData para envio multipart
                formData.append("name", name);
                formData.append("photo", photo); // Adicionar o arquivo ao FormData
                formData.append("price", price);
                formData.append("type", type);
                formData.append("description", description);

                dispatch(createProduct(formData));      //aqui se nao fosse um formData, seria enviado um objeto {chave: valor};

                alert("Produto registrado com sucesso!");
                navigate('/addproduct');
                
                setName("");
                setPhoto(null);
                setPrice("");
                setType("desabilitado");
                setDescription("");
            
            /*
                //Teste de dados:
                //key será o nome do campo (ex: "name", "price", etc.).
                //value será o valor associado (ex: "Produto A", "10.99", etc.).
                formData.forEach((value, key) => {
                    console.log(`${key}:`, value);
                  });
                
                //Como o formData nao eh um objeto literal, para testar os dados, preciso dos metodos: (get(), entries(), forEach(), etc);
                console.log(formData.get("name"));
                console.log(formData.get("price"));
                console.log(formData.get("description"));
                console.log(formData.get("type"));
            */
            }
    }


return(
                   
<div>
    <div className="container">
    <section className="containerSection">

        <form>
        <h1 className="commumtitle">Cadastrar Produto:</h1>

        <div className="row">
            <div className="col25">
                <label>Nome do produto:</label>
            </div>
            <div className="col75">
                <input type="text" id="name" name="name" maxLength="70" onChange={prepareSetName} placeholder="Nome do produto..." value={name}></input>
            </div>
        </div>

        <div className="row">
            <div className="col25">
                <label>Preço</label>
            </div>
            <div className="col75">
                <input type="number" id="price" name="price" onChange={prepareSetPrice} placeholder="Utilize 'ponto' como casa decimal..." value={price}></input>
            </div>
        </div>

        <div className="row">
            <div className="col25">
                <label>Tipo:</label>
            </div>
            <div className="col75">
                <select id="type" name="type" onChange={prepareSetType} placeholder="Escolha..." value={type}>
                    <option className="option_disable" value="desabilitado" selected disabled hidden>Tipo de produto...</option>
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
                <label>Imagem (Max 2mb):</label>
            </div>
            <div className="col75">
                <input type="file" id="photo" name="photo" onChange={prepareSetPhoto}></input> {/* Campo de upload */}
            </div>
        </div>

        {error && <> <br /><p className='formError'><b>{error}</b></p> </>}

        <div className="row">
            <div>
                <button className="buttonlogin" type="buttonsubmit" value="Submit" onClick={register}>Enviar</button>
            </div>
        </div>
        </form>
        <br />

    </section>
    </div>
    
    <br /><br />
</div>

    );
}