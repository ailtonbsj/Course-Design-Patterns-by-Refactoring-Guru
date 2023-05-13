# History of commands

```bash
# Create project
ng new 01-factory-method-storage-web

# Create modules
ng g m category --routing
ng g m product --routing
ng g m storage

# Create components
ng g c category --skip-tests
ng g c product --skip-tests

# Create inteface model
ng g i category/category --type model
ng g i product/product --type model

# Create service
ng g s category/category --skip-tests
ng g s product/product --skip-tests
ng g s storage/storage --skip-tests

# Storage module
npm install dexie

# Create classes
ng g cl storage/db --skip-tests

# Create enum
ng generate e modules
```
