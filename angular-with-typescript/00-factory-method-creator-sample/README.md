# History of commands

```bash
# Create project
ng new 00-factory-method-creator-sample

# Create module
ng g m creator --routing

# Create interface model
ng g i creator/product model

# Create class model
ng g cl creator/productA --type model --skip-tests
ng g cl creator/productB --type model --skip-tests

# Create class [need change to abstract]
ng g cl creator/creator --type service --skip-tests

# Create service
ng g s creator/creatorA --skip-tests
ng g s creator/creatorB --skip-tests

# Create component
ng g c creator --skip-tests

# Run
ng serve
```
