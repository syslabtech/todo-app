
### 1. Initialize Terraform

The `terraform init` command initializes the working directory containing the Terraform configuration files. It downloads the necessary provider plugins and sets up the backend for state management.

```bash
terraform init
```

### 2. Review the Execution Plan

Before applying any changes, it’s a good practice to review the execution plan using the `terraform plan` command. This command shows you what actions Terraform will take to reach the desired state defined in your configuration files.

```bash
terraform plan
```

### 3. Apply the Changes

Once you are satisfied with the execution plan, you can apply the changes to your infrastructure using the `terraform apply` command. This command will prompt for confirmation before proceeding.

```bash
terraform apply
```

To attach variable files , you can use the `-var-file` flag:

```bash
terraform apply -var-file='FileName.tfvars'
```

To skip the confirmation prompt, you can use the `-auto-approve` flag:

```bash
terraform apply -auto-approve
```

## Important Commands

- **`terraform init`**: Initializes the Terraform working directory.
- **`terraform plan`**: Creates an execution plan, showing what actions Terraform will take.
- **`terraform apply`**: Applies the changes required to reach the desired state.

## Cleaning Up

To destroy the resources created by Terraform, use the `terraform destroy` command. This command will also prompt for confirmation.

```bash
terraform destroy
```

To skip the confirmation prompt, use:

```bash
terraform destroy -auto-approve
```

## Additional Resources

- [Terraform Documentation](https://www.terraform.io/docs/index.html)
- [Terraform Providers](https://registry.terraform.io/browse/providers)
- [Terraform Best Practices](https://www.terraform.io/docs/cloud/guides/best-practices.html)
