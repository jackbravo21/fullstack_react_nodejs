//No middleware Multer que salva a imagem no disco;
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const randonNumber = crypto.randomBytes(4).toString('hex');

//Configuração do multer para armazenar arquivos no diretório 'images';
const storage = multer.diskStorage({
    //Define onde os arquivos serão armazenados;
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../images')); //Diretório onde as imagens serão salvas
    },
    //Adiciona o sufixo ao nome, para o tornar unico;
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9); //1 a 9 potencia, 9 posicoes de 0;
        const lastFive = file.originalname.slice(-5);       //pega os ultimos 5 algarismos da imagem;
        //Adiciona um timestamp para evitar arquivos com nomes iguais;
        cb(null, `${uniqueSuffix}`+`${randonNumber}`+`${lastFive}`);
    }
});

//Filtro para aceitar apenas imagens;
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Aceitar o arquivo
    } else {
        cb(new Error('Tipo de arquivo não suportado. Apenas imagens são permitidas.'), false); // Rejeitar o arquivo
    }
};

//Configuração do multer
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024 //Limite de 2MB
    },
    fileFilter: fileFilter
});

module.exports = upload;


/* 

Explicacao do que foi usado:

- Req:
Esse objeto contém todos os dados da requisição, como cabeçalhos (headers), corpo (body), parâmetros (params), etc. No caso do Multer, ele também pode incluir outros dados enviados junto com o arquivo, como campos de texto no formulário (por exemplo, nome, preço, descrição do produto, etc.).

- Parametro file;
Ele contém informações sobre o arquivo, como:
originalname: O nome original do arquivo no computador do usuário.
mimetype: O tipo MIME do arquivo (por exemplo, "image/jpeg" para uma imagem JPEG).
buffer: O conteúdo binário do arquivo, caso você precise processá-lo de alguma maneira.
size: O tamanho do arquivo.
filename (gerado pelo Multer): O nome final que o arquivo terá no servidor depois de processado e salvo.


- CB:
O cb é a função de callback que você precisa chamar para informar ao Multer como ele deve proceder com o arquivo.
- Como funciona? A função cb recebe dois parâmetros:
O primeiro é um parâmetro de erro (err). Se houver algum erro, você passa o erro como o primeiro argumento, caso contrário, passa null.
O segundo é a decisão de onde o arquivo deve ser salvo ou como ele deve ser renomeado. Você passa o caminho (ou nome do arquivo) como o segundo argumento.


Recapitulando:
req: Objeto da requisição, contendo dados enviados pelo cliente.
file: O arquivo em si, com informações como nome original, tipo e conteúdo.
cb: Função de callback usada para informar ao Multer onde ou como salvar o arquivo.

*/