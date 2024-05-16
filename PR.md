# ENGWEB2024-Teste

## Setup da Base de Dados
Como o ficheiro para utilizar como base de dados vinha num formato *.csv*, foi necessário utilizar uma ferramenta de conversão (neste caso um website) para transformar o mesmo num ficheiro *.json*. Após a conversão foi também preciso correr um pequeno *script* feito em *python* para substituir as vírgulas no campo *precoContrartual* por pontos. Com isto pronto, já foi possível utilizar o dataset como uma base de dados através do *MongoDB*.

## Como executar
Antes de correr o servidor é necessário meter a base de dados a funcionar. Para isso é necessário ter o docker instalado, já com o container contendo o *MongoDB*. Seguem os seguintes comandos:
```bash
sudo docker cp <filename> <containername>:/tmp
sudo docker exec -it <containername> bash
mongoimport -d <dbname> -c <collectionname> /tmp/<filename> --jsonArray
mongosh
use <dbname>
```

Após isso, dentro da pasta ContratosGoverno basta abrir um terminal e instalar as dependências com:
```bash
sudo npm i
```
E depois correr com:
```bash
npm start
```