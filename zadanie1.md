
#Zadanie 2

FROM node:alpine //pobranie obrazu z Docer Hub
LABEL Jaocha Sylwester // Stworzenie etykiety z danymi
WORKDIR /app //utworzenie katalogu roboczego w dockerze
COPY package.json . //przekopiowanie do katalogu roboczego package.json
RUN npm install  //instalacja npm
COPY . ./  // przekowpiowanie wszystkich plikow do katalogu roboczego
EXPOSE 3000 // ustawienie portu 
CMD ["node", "index.js"] // uruchomienie aplikacji 

#Zadanie 3

a. zbudowanie opracowanego obrazu kontenera
docker build -t zad1 .

Sending build context to Docker daemon  2.017MB
Step 1/7 : FROM node:15
 ---> 3d3f41722daf
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 30bb5dea2aa7
Step 3/7 : COPY package.json .
 ---> Using cache
 ---> 26c653912acf
Step 4/7 : RUN npm install
 ---> Using cache
 ---> 7bb907ed352f
Step 5/7 : COPY . ./
 ---> f38c5ec6aec0
Step 6/7 : EXPOSE 3000
 ---> Running in 0fab460d049d
Removing intermediate container 0fab460d049d
 ---> d203420c0fb7
Step 7/7 : CMD ["node", "index.js"]
 ---> Running in b67f962185f2
Removing intermediate container b67f962185f2
 ---> fadabcce95d3
Successfully built fadabcce95d3
Successfully tagged zad1:latest

b. uruchomienie kontenera na podstawie zbudowanego obrazu 

docker run -p 3000:3000 -d --name zad1-app zad1
7619bf3f27e04d3f669425c4a42d157b6051771fecd9df40b548e0c6786528b3

c.Sposb uzyskania informacji,ktre wygenerowa serwer w trakcie uruchomienia kontenera
docker logs 7619bf3f27e04d3f669425c4a42d157b6051771fecd9df40b548e0c6786528b3 

Data uruchomienia Fri Nov 26 2021 13:28:26 GMT+0000 (Coordinated Universal Time) 
Jalocha Sylwester Port: 3000

d.Sprawdzenie ile warstw posiada zbudowany obraz 

docker image inspect zad1 |jq '.[].RootFS' 

{
  "Type": "layers",
  "Layers": [
    "sha256:2f4ee6a2e1b5dfb9236cd262e788f9d39109242ca27a4aacb583c8af66ec3ff7",
    "sha256:8c8e652ecd8f418903f7c91efb9a3f636ac6bb989d97d9a77dc0ff1ffe39e572",
    "sha256:ed0a3d9cbcc76c5ccd3ffe6858fcdca6f918bb9090b2bee10e2fc6aa55bef856",
    "sha256:cddb98d7716306089e53c966735fab14c5108e48a020261d42a839ed179a570e",
    "sha256:1e9c28d06610a2e382ba5827a10fe96dc7ddabcaf2919a2647216f296077ddd2",
    "sha256:b257e69d416ffc0ebfbec0ba9e716e37f5ca8d66986525ab42b27e9e23f64044",
    "sha256:4a06816805a3b46d09c689b1278e9073b14c7ec291a09a5fcf63128b62a81f6a",
    "sha256:f0d8cfcdba81eb9e243cba63d2be493697b101a70c35533b2ca3bcfca643619c",
    "sha256:f927237936598d165cdb0ed22a328332f3e02138d7daca6af15a68e05480f73d",
    "sha256:2919416b7950976579bd389cd2932a935acc731fbb6ba002543b8035bd21f4f3",
    "sha256:e329db6c18b443d955bbeb334004ac96c3d087ca1d944f2eae223bc77e2d20ed",
    "sha256:3568d7034b5787d910466e5924bb6fdb7f8a0e533d746abdde265f3fc1e9c7a2",
    "sha256:4ade0d03c24b074b4784be6fded88bbc2bc45bf1a9f213df50fd4e8f5faed87a"
  ]
}

