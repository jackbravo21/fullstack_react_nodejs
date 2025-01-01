const { serviceProductCreate, serviceProductEdit, serviceProductDataEdit, serviceProductDelete, serviceGetProduct, serviceSelectAll } = require("../service/productService");
const createError = require("../utils/createError");
const fs = require('fs');
const path = require('path');
//const { registerProductSchema, editProductSchema, deleteProductSchema, getOneProductSchema, getAllProductsSchema, } = require ("../utils/schema/productValidator");

const createProduct = async(req, res, next) => {

    //const way = req.file ? `${req.file.filename}` : null; //Atribui o caminho da imagem;
    const {name, price, description, type} = req.body;
    let way = null;
    console.log("Nome: ", name, "Preco: ", price, "Descricao: ", description, "Typo: ", type)

    try{
        //Se existir uma imagem, gravo a imagem temporariamente;
        if(req.file){
            way = `${req.file.filename}`; //Guarda o caminho da imagem;
            console.log("Way: ", way);
        }
        
        //Chama o serviço de criação de produto passando os dados do produto e o caminho da imagem;
        const createProduct = await serviceProductCreate(name, way, price, description, type);

        //Se não foi possível salvar o produto no DB, remove a imagem do disco;
        if (!createProduct) {
            if (req.file) {
                await fs.unlinkSync(path.join(__dirname, '../images/', req.file.filename)); //Deleta a imagem;
            }
            next(createError("Erro ao cadastrar produto!", 404));
            return;             // Passa o erro para o middleware de erro
        } 
        console.log("BackEnd: ", createProduct);
        res.status(200).json(createProduct);
    }
    catch(error){
        console.log("Erro: Nem saiu do Controller...");
        //Caso ocorra qualquer erro, o arquivo eh deletado (se existir);
        if (req.file) {
            const filePath = path.join(__dirname, '../images/', req.file.filename);
            if(fs.existsSync(filePath)) {                  //"existsSync" verifica se existe o arquivo;
                await fs.promises.unlink(filePath);
            }
        }
        next(error);
    }
};

const editProduct = async(req, res, next) => {

    console.log("Request body", req.body);
    const {id, name, way, price, description, type} = req.body || req.params;

    try {
        const edit = await serviceProductEdit(id, name, way, price, description, type);

        if (!edit) {
            next(createError("Erro ao editar produto!", 404));
            return; 
        }
        console.log("BackEnd: ", edit);
        res.status(200).json(edit);     
    } 
    catch(error) {
        error.status = error.status || 500;
        next(error);
    }
}

const editProductData = async(req, res, next) => {
 
    console.log("Arquivo recebido:", req.file);
    const {id, name, price, description, type} = req.body;
    //console.log("ID: ", id, "Nome: ", name, "Preco: ", price, "Descricao: ", description, "Typo: ", type)
    let way = null;

    if(req.file){                               //req.file contem todas as informacoes sobre o arquivo que foi enviado;
        way = `${req.file.filename}`;           //req.file.filename eh o nome do arquivo que foi salvo no sistema de arquivos;
        console.log("Way: ", way);
    }

    try {
        const edit = await serviceProductDataEdit(id, name, way, price, description, type);

        if (!edit) {
            next(createError("Erro ao editar produto!", 404));
            return; 
        }
        console.log("BackEnd: ", edit);
        res.status(200).json(edit);     
    } 
    catch(error) {
        error.status = error.status || 500;
        next(error);
    }
}

const deleteProduct = async(req, res, next) => {

    const {id} = req.body.id || req.params.id; 
    console.log("Vamos deletar o ID: ", id);

    try {
        const toDelete = await serviceProductDelete(id);

        if (!toDelete) {
            next(createError(`Produto ID ${id} não existe!`, 404));
            return; 
        } 

        console.log("BackEnd: ", toDelete);
        res.status(200).json(toDelete);
    } 
    catch(error){
        error.status = error.status || 500;
        next(error);
    }
}

const getOneProduct = async(req, res, next) => {

    const id = req.body.id;

    try {
        const oneProduct = await serviceGetProduct(id);

        if (!oneProduct) {
            next(createError(`Produto ID ${id} não existe!`, 404));
            return; 
        } 

        console.log("BackEnd: ", oneProduct);
        res.status(200).json(oneProduct);
    } 

    catch(error){
        error.status = error.status || 500;
        next(error);
    }
}

const getAllProducts = async(req, res, next) => {

    //req.params.type; //req.body.type; //req.query.type;
    let type;

    if(req.body.type){
        type = req.body.type;
        console.log(type);
    }
    else if(req.params.type){
        type = req.params.type;
        console.log(type);
    }
    else if(req.query.type){
        type = req.params.type;
        console.log(type);
    }

        try {
            const getAll = await serviceSelectAll(type);

            if(!getAll) {
                next(createError(`Erro ao buscar produtos.`, 404));
                return; 
            } 
            else{
                console.log("BackEnd: ", getAll);
                res.status(200).json(getAll);
            }
        }
     
        catch(error){
            error.status = error.status || 500;
            next(error);
        }
}


module.exports = { createProduct, editProduct, editProductData, deleteProduct, getOneProduct, getAllProducts };



/*

    console.log("Body:", req.body);      // Exibe os dados do corpo da requisição
    console.log("Params:", req.params);  // Exibe os parâmetros na URL
    console.log("Query:", req.query);    // Exibe os parâmetros da query string

*/