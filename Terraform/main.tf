
module "vpc" {
  source = "./modules/vpc"
}

module "security_group" {
  source = "./modules/security_group"
  vpc_id = module.vpc.vpc_id
}

module "ec2_instance" {
  source          = "./modules/ec2_instance"
  subnet_id      = module.vpc.subnet_id  
  security_group = module.security_group.security_group_id  
}

output "instance_ip" {
  value = module.ec2_instance.instance_ip
}