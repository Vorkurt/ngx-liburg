# LibsWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

# Material Shared

For using material table you follow the next step

1. at ngOnInit you need to put the initialize table, it should receive an array of objects like this:

```{
 datasource={
  actions:
  {
    iconClass: "class for icon",
    classCss: " class what you need to maipulate in DOM",
    method: " a function "
  },
  editable: "If you want the table be editable: true/false",
  data for table { ES 6 } ...dataTable
}
```

2. In html template you need to declare

```
<elix-table [dataSource] ="data at you initialized in ngOnInit">
  <elix-column-text className="what class css you want for this column"
  [iconClass]="Optional"
  field="column from table"
  name="what name you want to do"> ...
  <elix-column-area-text require !!!  field name > ...
</elix-table>
```

# and enjoy at this beautiful library
