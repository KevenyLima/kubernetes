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


//-------------------------------------------------------------------------------
// dns --> serve para criar uma url para acessar um pod (criar a partir do domínio que esta registrado a aplicação)
// traefik --> distribui todo o trafico entre os pods para balancer a aplicação
//--------------------------------------------------------------------------------------------------------
// volume------------------------------------------------------------------------------------------------
//longhorn --> gerenciar volume em multi kubernetes
//-------------------------------------------------------------------------------------------------------
// logs------------------------------------------------------------------------------------------------------
// graylog 
// sobe os seguintes container abaixo para esse serviço funcionar
// -elasticsearch --> guarda os logs
// -fluentd --> coleta os logs e manda pro graylog
// -mongo --. guarda os logs
// -graylog 

// observação serve para centralizar todos os logs da aplicação e armazenar também tem um dashboard de fácil acesso
//------------------------------------------------------------
// monitoramento
// Prometheus
// grafana 
// cria dashboards para ver o quanto de cpu e memoria os pods estão utilizando
// ----------------------------------------------------------------------------------------------
// cronjob --> cronometrar para rodar um container a cada tantos minutos (executar um função e depois matar o serviço)
// ----------------------------------------------------------------------------------------------------
// configmap --> serve para guardar configurações de forma externa a um container e passar para ele como parâmetro
//---------------------------------------------------
// secrets --> serve para guardar variáveis de ambiente que precisam para banco de dados por exemplo (guarda em um service e pode ser acessado por um container)
//--------------------------------------------

// liveness --> serve para garantir  que um aplicação em um container esta rodando normalmente 
// de tanto e tanto tempo sera dispara um requisição para um aplicação que esta em um serviço do kubernetes a aplicação deve responder com status 200, caso responda com status 500 o kubernetes vai matar o container e recriar-lo
//------------------------------------------------------

// rolling update --> e um serviço do próprio kubernetes que quando ha uma atualização ele vai criando novos pods e derrubando os anteriores substituindo-os por esses novos pods

//--------------------------------------------------------
// autoscaling --> quando um pod esta recebendo uma demanda que atinge mais de 50% de sua cpu o kubernetes vai tratar de criar novos pods para atender essa demanda criando novas replicas desse pod
// no kubernetes e feito scaling por
// cpu 
// memoria 
// rede 

// ----------------------------------------------------------

// scheduling --> serve para determinar que um service sempre vai rodar em uma determinada maquina (chumbar um service usando labels para especificar que ela deve rodar em uma determinada maquina)
// um node 

// comando para adicionar uma label a um node
// kubectl label nodes {nome do node qe recebera a label} {nome da label}={valor da label}
// e preciso depois determinar um atributo nodeSelector com a chave e o valor da label do node
// -------------------------------------------------------------
// pipeline --> para ci/cd
// docker-registry
// Jenkins 
// minio
//-----------------------------------------------------------------------------
// kubeless --> função parecida com lambda aws 
// executa depois morre
// so e preciso se preocupa com código o próprio kubernetes trata de container etc
// -----------------------------------------
// helm --> serve para parametrizar uma aplicação
// empacotar tudo e permitir mudar algumas coisas
// empacota a aplicação