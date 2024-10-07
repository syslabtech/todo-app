resource "aws_vpc" "vpc_task" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "vpc_task"
  }
}

resource "aws_subnet" "task_subnet" {
  vpc_id                  = aws_vpc.vpc_task.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = var.aws_availability_zone 
  map_public_ip_on_launch = true                      # Enable public IP assignment
  tags = {
    Name = "task_subnet"
  }
}

resource "aws_internet_gateway" "ig_task" {
  vpc_id = aws_vpc.vpc_task.id

  tags = {
    Name = "ig_task"
  }
}

resource "aws_route_table" "routetbl_task" {
  vpc_id = aws_vpc.vpc_task.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.ig_task.id
  }

  tags = {
    Name = "routetbl_task"
  }
}

resource "aws_route_table_association" "routetbl_task_association" {
  subnet_id      = aws_subnet.task_subnet.id
  route_table_id = aws_route_table.routetbl_task.id
}
