sudo docker stop web
sudo docker rm web

cd src/frontend
sudo docker build -t web .
sudo docker run -d -p 5173:5173 --network banco_api-network --name web web

sudo docker ps -a