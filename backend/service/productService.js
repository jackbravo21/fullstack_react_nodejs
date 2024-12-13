const tableProducts = require("../model/productModel");
const getCurrentDateTime = require("../utils/dateUtils");
const createError = require("../utils/createError");
const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

const allDate = getCurrentDateTime();

async function serviceProductCreate(productName, productWay, productPrice, productDescription, productType){
    try{
        const product = await tableProducts.create({
            name: productName,
            way: productWay,                    //salvando o nome do arquivo;
            price: productPrice,
            description: productDescription,
            type: productType,        
            created_at: allDate,
        });

        if(!product){
            throw await createError("Erro ao criar no DB...", 404);
        }
        console.log("BackEnd: ", product);
        return product;
    }    
    catch(error){
        throw error;
    }    
};

async function serviceProductEdit(productID, productName, productWay, productPrice, productDescription, productType){
    try{
        const product = await tableProducts.findByPk(productID);

        if(!product){
            throw await createError("Erro ao buscar produto no DB...", 404);
        }

        product.name = productName;
        product.way = productWay;
        product.price = productPrice;
        product.description = productDescription;
        product.type = productType;
        
        const saveProduct = await product.save();

        if(!saveProduct){
            throw await createError("Erro ao salvar produto no DB...", 404);
        }
        console.log("BackEnd: ", product);
        return saveProduct;
    }
    catch(error){
        throw error;
    }
};

async function serviceProductDataEdit(productID, productName, productWay, productPrice, productDescription, productType){
    try{
        const product = await tableProducts.findByPk(productID);

        if(!product){
            throw await createError("Erro ao buscar produto no DB...", 404);
        }

        const deleteOldImage = product.way;
        
        if(deleteOldImage){
            //Caminho completo do arquivo no HD;
            const oldImagePath = path.join(__dirname, '..', 'images', deleteOldImage);
       
            console.log("Service oldImage: ", oldImagePath);

            //Verifica se o arquivo existe antes de tentar excluir;
            fs.unlink(oldImagePath, (err) => {
                if(err){
                    console.error("BackEnd: Erro ao excluir a imagem antiga, Erro: ", err);
                }else{
                    console.log("BackEnd: Imagem antiga excluída com sucesso!");
                }
            });
        }
       
        product.name = productName;
        product.way = productWay;
        product.price = productPrice;
        product.description = productDescription;
        product.type = productType;
        
        const saveProduct = await product.save();

        if(!saveProduct){
            throw await createError("Erro ao salvar produto no DB...", 404);
        }
        console.log("BackEnd: ", product);
        return saveProduct;
    }
    catch(error){
        throw error;
    }
};

async function serviceGetProduct(productID){
    try{
        const product = await tableProducts.findOne({
            where: { id: productID },
        });

        if(!product){
            throw await createError("Erro ao buscar produto no DB...", 404);
        }

        console.log("BackEnd: ", product);
        return product;
    }
    catch(error){
        throw error;
    }
};

async function serviceSelectAll(productType){
    try{
        const product = await tableProducts.findAll({
            where: { type: productType }
        });

        if(!product){
            throw await createError("Erro ao buscar os produtos no DB...", 404);
        }

        console.log("BackEnd: ", product);
        return product;
    }
    catch(error){
        throw error;
    }
};

async function serviceProductDelete(id){
    try{
        const product = await tableProducts.findByPk(id);
        
        if(!product){
            throw await createError(`Erro ao encontrar o ${id} do produto no DB...`, 404);
        }

        const deleteImage = product.way;
        let checkDelete = false;

        if(deleteImage){
            //Caminho completo do arquivo no HD;
            const fullImagePath = path.join(__dirname, '..', 'images', deleteImage);
       
            console.log("Service oldImage: ", fullImagePath);

            try{
                //Verifica se o arquivo existe antes de tentar excluir;
                await fsPromise.unlink(fullImagePath);
                console.log("BackEnd: Imagem excluída com sucesso!");
                checkDelete = true;            
            }
            catch(err){
                console.error("BackEnd: Erro ao excluir a imagem, Erro: ", err);
                checkDelete = false; // Marca como false se houver erro
            }
        }

        if(checkDelete == true){
            try {
                await product.destroy();
                console.log("BackEnd: Produto excluído com sucesso!");
                return product;
            }
            catch(error){
                throw error;
            }
        }
        else{
            throw new Error("BackEnd: Falha ao excluir a imagem, mantendo dados no DB.");
        }
    }
    catch(error){
        throw error;
    }
}

module.exports = { serviceProductCreate, serviceProductEdit, serviceProductDataEdit, serviceGetProduct, serviceSelectAll, serviceProductDelete };






