# Serverless AWS Exemplo
Projeto Hello World do uso do serverless framework 

#Link do framework Quick-Start no AWS 
https://serverless.com/framework/docs/providers/aws/guide/quick-start/

#Requisitos : 
 - Instalar o node js : https://nodejs.org/ ; 
 - Instalando o serverless framework : npm install -g serverlles( Indica que o pacote vai ser global);
 - Crie uma conta na AWS e Configure as credenciais no  AWS;
 
 *Obs*: 
     - Para executar local basta instalar o plugin serverless offlino  com o seguinte comando: npm install serverless-offline --save-dev
 
# Criando o projeto :
 - Definindo as credencias: 
      - serverless config credentials --provider aws --key *** --secret ***;
 - Criando o projeto node js: 
      - serverless create --template aws-nodejs; 
 - Fazendo deploy da aplicação no aws lambda:
      - serverless deploy;
 - Fazendo deploy local com plugin:
    - serverless offline start;
    
 # Executando o Projeto:
 - Chamando a função :
    - serverless invoke --function hello;
    - serverless invoke local --function hello;
 - Subinfo todos as funções :
   - serverless offline start;
  
