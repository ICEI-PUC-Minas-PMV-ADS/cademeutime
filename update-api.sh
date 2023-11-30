sudo docker stop api
sudo docker rm api

cd src/backend
sudo docker build -t api .
sudo docker run -d -p 3000:3000 --network banco_api-network --name api api

sudo docker ps -a


