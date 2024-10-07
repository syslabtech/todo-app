## Running Ansible

To run Ansible commands or playbooks, follow these general steps:

1. **Setup Inventory**: Create an inventory file (e.g., `inventory.ini`) that lists the target hosts. For example (EC2):

   ```ini
   [ec2]
   13.234.119.254 ansible_ssh_user=ec2-user ansible_ssh_private_key_file=./server.pem
   ```

2. **Run a Command**: Use the `ansible` command to execute ad-hoc commands. For example, to ping all hosts in the inventory:

   ```bash
   ansible all -i inventory.ini -m ping
   ```

3. **Execute a Playbook**: Run a playbook with the `ansible-playbook` command:

   ```bash
   ansible-playbook -i inventory.ini playbook.yml
   ```

4. **Use Extra Variables**: You can pass extra variables using the `--extra-vars` option:

   ```bash
   ansible-playbook -i inventory.ini playbook.yml --extra-vars "var1=value1 var2=value2"
   ```
