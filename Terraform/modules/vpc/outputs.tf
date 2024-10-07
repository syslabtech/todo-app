output "vpc_id" {
  value = aws_vpc.vpc_task.id
}

output "subnet_id" {
  value = aws_subnet.task_subnet.id
}