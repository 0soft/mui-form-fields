#  MUI Form Fields

**Warning: this repository is currently to be officially released**

Material UI + FinalForm Fields, packaged and ready to go! :package:


MUI Form Fields help you build beautiful material-ui components with the
mninimal amount of code possible. This way you can keep focusing on your logic.
:dart:

## Installation

```bash
$ npm i --save mui-form-fields
```

## Examples

This form:

<div align="center">
  <img src="https://raw.githubusercontent.com/0soft/mui-form-fields/master/assets/images/example_dialog.png" />
</div>

is generated by this code:

```javascript
  <FormDialog
    size="sm"
    title="Create User"
    onClose={() => console.log("close")}
    onSubmit={(...args) => console.log(args)}
    open
  >
    <FormTextField icon="person" name="name" label="Full Name"/>
    <Divider/>
    <FormTextField icon="mail" name="email" label="Email"/>
    <Divider/>
    <FormPhoneField name="phone" label="Phone"/>
    <Divider/>
    <FormDateField icon="today" name="birthday" label="Birthday"/>
    <Divider/>
    <FormSwitchField icon="security" name="protected" label="Protected"/>
    <Divider/>
    <FormSwitchField icon="verified_user" name="admin" label="Admin"/>
    <Divider/>
    <FormFileUploadField icon="attachment" name="identification" label="Social Security"/>
    <Divider/>
  </FormDialog>
```

## Usage

We currently have the following FormFields available:
| Component                                                                            |
| ------------------------------------------------------------------------------------ |
| [`<FormButtonField/>`](https://zerosoft.dev/mui-form-fields/FormButtonField)         |
| [`<FormChipField/>`](https://zerosoft.dev/mui-form-fields/FormChipField)             |
| [`<FormDateField/>`](https://zerosoft.dev/mui-form-fields/FormDateField)             |
| [`<FormDateRangeField/>`](https://zerosoft.dev/mui-form-fields/FormDateRangeField)   |
| [`<FormDateTimeField/>`](https://zerosoft.dev/mui-form-fields/FormDateTimeField)     |
| [`<FormDialog/>`](https://zerosoft.dev/mui-form-fields/FormDialog)                   |
| [`<FormField/>`](https://zerosoft.dev/mui-form-fields/FormField)                     |
| [`<FormFileUploadField/>`](https://zerosoft.dev/mui-form-fields/FormFileUploadField) |
| [`<FormIntegerField/>`](https://zerosoft.dev/mui-form-fields/FormIntegerField)       |
| [`<FormMoneyField/>`](https://zerosoft.dev/mui-form-fields/FormMoneyField)           |
| [`<FormNumberField/>`](https://zerosoft.dev/mui-form-fields/FormNumberField)         |
| [`<FormPercentageField/>`](https://zerosoft.dev/mui-form-fields/FormPercentageField) |
| [`<FormPhoneField/>`](https://zerosoft.dev/mui-form-fields/FormPhoneField)           |
| [`<FormReadOnlyField/>`](https://zerosoft.dev/mui-form-fields/FormReadOnlyField)     |
| [`<FormShowField/>`](https://zerosoft.dev/mui-form-fields/FormShowField)             |
| [`<FormSwitchField/>`](https://zerosoft.dev/mui-form-fields/FormSwitchField)         |
| [`<FormTextField/>`](https://zerosoft.dev/mui-form-fields/FormTextField)             |
| [`<FormWeekField/>`](https://zerosoft.dev/mui-form-fields/FormWeekField)             |

Click on each of them to get more details about the usage of each of them.

## License

TBD
