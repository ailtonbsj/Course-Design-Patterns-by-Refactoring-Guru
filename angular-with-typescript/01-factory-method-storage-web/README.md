# Factory Method Sample with IndexedDB and Rest API

For use online API it's need to run [the Spring API for test](../../spring-with-java/01-api-for-test/).

## History of commands

```bash
# Create project
ng new 01-factory-method-storage-web

# Create modules
ng g m category --routing
ng g m product --routing
ng g m settings --routing
ng g m storage

# Create components
ng g c category --skip-tests
ng g c product --skip-tests
ng g c settings --skip-tests

# Create inteface model
ng g i category/category --type model
ng g i product/product --type model
ng g i storage/webStorage

# Create service
ng g s category/category --skip-tests
ng g s product/product --skip-tests

# Storage module
npm install dexie

# Create classes
ng g cl storage/offlineStorage --type service --skip-tests
ng g cl storage/onlineStorage --type service --skip-tests
ng g cl storage/db --skip-tests
ng g cl storage/indexedDB --skip-tests
ng g cl storage/restAPI --skip-tests

# Create enum
ng generate e modules
```
