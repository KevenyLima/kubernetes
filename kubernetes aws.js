// vpc -->serviço da amazon que serve para cria ambiente de redes virtuais

// criando uma rede vpc e configurando
// em vpc cria uma nova rede 
// cria uma nova getWay --> serve como caminho para acesso as maquinas que estão na vpc (criar ips públicos)
// attach getWay na router --> serve para selecionar qual getWay aquela rede ira usar e quais ips podem passar pelo getWay 
// sera necessário dizer qual subnet também um route(maquina) ira usar para que ela possa ser acessado de forma exterior
//------------------------------------------------------------------------
// instal docker-compose

// sudo yum update

// sudo yum install curl

// sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

// sudo chmod +x /usr/local/bin/docker-compose


// {nome da imagem}-alpine --> alpine e uma versão mais leve de uma imagem

// rancher 
// instala Prometheus e grafana para logs
// conecta no ldap (tipo um cmd para configurar usuários para acessar o cluster)
// catalogo de aplicação 
// interface de usuário
// kubectl via web
//----------------------------------------------------------------

// comando do rancher

// sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run rancher/rancher-agent:v2.4.3 --server https://15.229.49.157 --token mddslnwqpnszg6wt7g8gzsbfn2dvqb66v446m9g5sf646wcgx9h5xh --ca-checksum c6a99188e0be1b9b9aecc352612c54ce4e0fe1130313975078a49d3ecfd59639 --node-name k8s-1 --etcd --controlplane --worker