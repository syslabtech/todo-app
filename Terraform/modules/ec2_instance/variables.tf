variable "subnet_id" {
  description = "The ID of the subnet where the instance will be launched"
  type        = string
}

variable "security_group" {
  description = "The security group for the instance"
  type        = string
}

variable "aws_instance_keypair" {
  description = "SSH key for the instance"
  type = string
  default = "server"
}