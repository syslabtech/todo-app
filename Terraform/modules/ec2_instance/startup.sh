#!/bin/bash
# Update the package manager
sudo yum update -y

# Install Nginx
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
yum install nsolid -y

# Install PM2 Package          
sudo npm install -g pm2