output "instance_ip" {
  value = aws_instance.todoapp_instance.public_ip
}