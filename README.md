# Kubernetes comandos

## Docker
```bash
# Crie sua imagem Docker
docker build -t khalelalbuqq/kubernetes-container .

# Rode sua imagem Docker
docker run -d -p PORT:PORT --name nome-do-container nome-da-imagem 

    ou

docker run -t khalelalbuqq/kubernetes-container (depois do push, melhor opção)

# Faça o push da imagem
docker push khalelalbuqq/kubernetes-container

# Verifique a imagem
docker ps
```

## Kubernetes
```bash
# Verifique conexão com o cluster
kubectl get nodes

# Aplique o deployment
kubectl apply -f deployment.yaml

# Aplique o service
kubectl apply -f service.yaml

# Verificar o status do deployment
kubectl get deployments

# Verificar os pods criados
kubectl get pods

# Verificar o service
kubectl get services

# Ativar o port forward
kubectl port-forward service/kubernetes-service 8000:8000

# Pode acessar o serviço pelo ip minikube
minikube service kubernetes-service
```