data "local_file" "startup_script" {
  filename = "${path.module}/startup.sh"
}

resource "aws_instance" "todoapp_instance" {
  ami                         = "ami-068e0f1a600cd311c" # Change to a valid AMI ID for your region
  instance_type               = "t2.micro"
  subnet_id                   = var.subnet_id
  security_groups             = [var.security_group]
  associate_public_ip_address = true    # Ensure the instance gets a public IP
  key_name                    = var.aws_instance_keypair
  user_data                   = data.local_file.startup_script.content
  tags = {
    Name = "todoapp_instance"
  }
}
