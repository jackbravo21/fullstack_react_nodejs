import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, dataTempProduct, clearDataProduct } from '../../redux/products/slice';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import EditButton from '../../components/Buttons/edit/index';
import DeleteButton from '../../components/Buttons/delete/index';
//import AddButton from '../../components/Buttons/add/index';
import './index.css';

export default function Products() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Pegando os produtos diretamente da store
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    const serverImgLink = "http://localhost:9000/images/";

    useEffect(() => {
        if (error) {
            console.error("Erro detectado: ", error);
        }
    }, [error]);

    useEffect(() => {
        console.log("Buscando produtos...");
        dispatch(fetchProducts({ type: "products" }));
    }, [dispatch]);

    function actionProduct(id, name, way, price, description, type, created_at, module){
        dispatch(clearDataProduct());
        console.log(`Dados do produto temporário limpos antes de realizar a ação: ${module}`);
        dispatch(dataTempProduct({
            id: id, 
            name: name, 
            way: way, 
            price: price.toFixed(2),
            description: description,
            type: type,
            createdAt: created_at,
        }));
        if(module == 'edit'){navigate('/editproduct');}
        if(module == 'delete'){navigate('/deleteproduct');}
    }

    if (loading) {
        return <div className='commumtitle'>Carregando produtos...</div>;
    }

    return (
        <div style={{marginBottom: '65px'}} className="containerSection">
            <h2 className="commumtitle">Produtos:</h2>

            {products.length === 0 && <p>Não há produtos disponíveis.</p>}

            <div className="productGrid">
                {products.map((product) => (
                    <div key={product.id} className="productItem">
                        <h3>{product.name}</h3>
                        {/*<p className="central">{product.way}</p>*/}
                        <p className="central"><strong>Idenficação:</strong> {product.id}</p>
                        <p className='central'><img className='centralImage' src={`${serverImgLink}${product.way}`} alt="Product" /></p>
                        <p className="central"><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
                        <p className="central"><strong>Descrição:</strong> {product.description}</p>
                        <p className="central"><strong>Tipo:</strong> {product.type}</p>
                        <p className="central"><strong>Data de Criação:</strong> {product.created_at}</p>
                        <div className="buttonContainer">
                            {isLoggedIn === true ? (
                            <>
                            <EditButton onClick={() => actionProduct(product.id, product.name, product.way, product.price, product.description, product.type, product.created_at, 'edit')} />
                            <DeleteButton onClick={() => actionProduct(product.id, product.name, product.way, product.price, product.description, product.type, product.created_at, 'delete')} />
                            </>
                            ): null}
                        </div>
                    </div>
                ))}
            </div>
            {error && <p>{error}</p>}
        </div>
    );
}