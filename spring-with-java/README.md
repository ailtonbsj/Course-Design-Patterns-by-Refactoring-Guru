# History of commands

```bash
# Install SDKMAN!
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"

# Install Spring Boot CLI with SDKMAN!
sdk install springboot

# Create projects
spring init --build=maven --java-version=17 --dependencies=web,devtools --groupId=NAME_OF_MY_PKG NAME_OF_MY_PROJECT
```