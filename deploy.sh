sudo docker stop $(sudo docker ps -a)
sudo docker system prune

cd src/banco
sudo docker compose up -d

cd ../frontend
sudo docker build -t web .

cd ..
cd backend

sudo docker build -t api .

sudo docker run -d -p 5173:5173 --network banco_api-network --name web web
sudo docker run -d -p 3000:3000 --network banco_api-network --name api api

sudo docker ps -a


