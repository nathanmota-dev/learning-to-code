
---
### **Formas de fazer deploy na AWS**

- CDK
- SAM    
- Serverless Framework    
- CloudFormation    
- Terraform   
- CI/CD (ex: GitHub Actions, CodePipeline)   
- Kubernetes   

---

### **CDK - Cloud Development Kit**

- Permite criar toda a infraestrutura da AWS usando código (Python, TypeScript, Java, etc).   
- Você pode criar recursos como RDS (banco), EC2, S3, Lambda, VPC, entre outros.    
- Em vez de escrever YAML ou usar o painel da AWS, você usa sua linguagem preferida.    
- Tudo pode ser criado automaticamente com um único comando.    

---

### **Terraform**

- Ferramenta de Infraestrutura como Código (IaC) criada pela HashiCorp.
- Com ele você escreve sua infraestrutura em arquivos `.tf` (HCL - HashiCorp Configuration Language).
- Pode ser usado em múltiplas nuvens: AWS, Azure, GCP, etc.
- Parecido com o CDK, mas é declarativo e independente da AWS.
- Prós:
  - Comunidade enorme e maduro no mercado.
  - Ideal para infra em ambientes multi-cloud.
  - Usa plugins (providers) para integrar com praticamente tudo.
- Contras:
  - Sintaxe menos intuitiva para quem vem da programação tradicional.
  - Depende de mais comandos manuais ou pipelines para automação.

---

### **Kubernetes (EKS - Elastic Kubernetes Service)**

- Kubernetes é uma plataforma de orquestração de containers que é ideal para aplicações em larga escala.
- A AWS oferece o EKS (Elastic Kubernetes Service) para facilitar o uso do Kubernetes.
- Você define seus serviços e containers com arquivos YAML (ou com CDK + cdk8s, por exemplo).
- Permite escalar automaticamente, reiniciar containers com erro, fazer blue/green deploys, etc.
Prós:
- Altamente flexível, usado por grandes empresas.
- Funciona fora da AWS também (multicloud).
Contras:
- Curva de aprendizado alta.
- Gerenciar clusters pode ser complexo se não usar o EKS.
- Pode ser mais caro e difícil de otimizar sem experiência.

---

### **ECS - Elastic Container Service**

- É um serviço de orquestração de containers (como o Kubernetes).    
- Permite gerenciar clusters de EC2 que rodam containers.    
- Ideal para deploy em containers, escalando conforme necessário.    
- Pode usar EC2 ou Fargate como engine de execução.    
- Ajuda a garantir alta disponibilidade (várias instâncias, não só uma).

---

### **Load Balancer (ELB)**

- Distribui o tráfego de rede entre diferentes servidores ou funções (EC2, Lambda, etc).    
- Pode direcionar o tráfego por rota (ex: `/` vai pra um servidor, `/login` vai pra outro).    
- Possui recursos como SSL termination.    
- Contras: custo e complexidade na configuração otimizada.    

---

### **Fargate - Serverless para Containers**

- Permite rodar containers **sem precisar gerenciar servidores ou clusters**.    
- Basta definir o container e o Fargate cuida do resto (infra, rede, escalabilidade).    
- Vantagens: menos complexidade.    
- Desvantagens: custo mais alto comparado ao uso de EC2 diretamente.    

---

### **Elastic Beanstalk - Plataforma como Serviço (PaaS)**

- Permite fazer deploy de aplicações com pouca configuração de infraestrutura.    
- Suporta integração com RDS, EC2, Load Balancer, etc.    
- Ideal para aplicações web.    
- Vantagens: mais simples, custo controlado.    
- Desvantagens: difícil de migrar para outra plataforma depois, e limitado para cenários mais complexos.    

---

### **Lambda - Serverless Functions**

- Executa funções sob demanda, sem servidor fixo.    
- Pay-per-use: você paga só pelo tempo de execução.    
- Muito escalável e rápido para tarefas curtas.    
- Contras:    
    - Pode ser caro com muitos requests.        
    - Tem limite de memória e tempo de execução.        
    - "Cold start": demora no primeiro request.        
- Usado frequentemente com API Gateway para criar APIs.    

---

### **Step Functions**

- Cria workflows automatizados com diferentes serviços da AWS.    
- Suporta retries, falhas, decisões, paralelismo.    
-*Desvantagem: forte lock-in (difícil migrar) e alta complexidade.    
- Em casos avançados, alternativas como Kafka ou Apache Camel são mais flexíveis.    

---

### **RDS - Relational Database Service**

- Banco de dados relacional gerenciado (MySQL, PostgreSQL, etc).    
- AWS cuida de backup, patch, alta disponibilidade, etc.    

---

### **DynamoDB**

- Banco de dados NoSQL, modelo chave-valor.    
- Altamente escalável e com baixa latência.    
- Suporta eventos (ex: invocar Lambda ao alterar dados).    
- Desvantagens: pode ser caro e tem curva de aprendizado.    

---

### **SQS - Simple Queue Service**

- Serviço de filas gerenciado (como RabbitMQ).    
- Ajuda a desacoplar serviços e processar mensagens de forma assíncrona.
    

---

### **SNS - Simple Notification Service**

- Serviço de pub/sub: um serviço publica mensagens e outros assinam para receber.    
- Pode enviar para email, SMS, Lambda, SQS, etc.    

---

### **CloudWatch**

- Ferramenta de monitoramento e logs.    
- Coleta métricas, logs, alarmes e dashboards.   

---

### **Secrets Manager**

- Armazena informações sensíveis como senhas, tokens, chaves de API.    
- Com rotação automática de segredos.    

---

### **CloudFront**

- Serviço de CDN para distribuição de conteúdo com baixa latência.    
- Ideal para acelerar sites, vídeos, arquivos grandes, etc.    

---

### **Amplify**

- Plataforma voltada para Single Page Applications (SPA), como React ou Vue.    
- Ótimo para deploy de front-end (com CI/CD integrado).    
- Suporta backend, mas não é indicado para aplicações complexas, pois não escala bem nesse cenário.    

---

### EFS (Elastic File System)

- Sistema de arquivos elástico, ou seja, ele pode crescer conforme o seu uso de armazenamento de arquivos.
- Pode ser montado por várias instâncias EC2 ao mesmo tempo.

---

### API Gateway

- Gerencia e expõe APIs REST e WebSocket.
- Integra-se facilmente com Lambda, serviços HTTP, etc.
- Permite autenticação, throttling, logging, caching, etc.
- Muito usado com arquiteturas serverless.

