Query used to get table schema (see <a href="https://electrictoolbox.com/mysql-table-structure-information-schema/#:~:text=Using%20the%20INFORMATION%20SCHEMA&text=SELECT%20*%20FROM%20INFORMATION_SCHEMA.,each%20row%20from%20the%20query.">here</a>):

To get detailed info about a table:
```
SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = '<db name goes here>' AND TABLE_NAME = '<table name goes here>';
```

To get basic Info: 
```
describe <table name goes here>
```
