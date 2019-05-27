import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { Chip, Button } from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { FieldInputProps, FieldPlainState } from 'react-final-form';
import FormField from './FormField';
import { setFocus } from '../utils';

interface FormFileUploadFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  hasIcon?: boolean;
  multiple?: boolean;
  height?: string;
  maxSize?: number;
}

const FormFileUploadField: React.SFC<FormFileUploadFieldProps> = ({
  icon,
  name,
  label,
  disabled,
  className,
  required,
  multiple,
  height,
  hasIcon,
  maxSize,
}) => {
  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    isDragActive,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple,
    disabled,
    maxSize,
  });

  return (
    <FormField
      icon={icon}
      name={name}
      hasIcon={hasIcon}
      validate={required ? 'required' : undefined}
      className={className}
      render={({
        input,
        meta,
      }: {
        input: FieldInputProps<HTMLElement>;
        meta: FieldPlainState;
      }) => {
        React.useEffect(() => {
          const files = acceptedFiles.filter(
            it =>
              !multiple ||
              !Boolean(
                input.value &&
                  input.value.filter((i: File) => i.name === it.name).length
              )
          );

          input.onChange(
            multiple && input.value ? input.value.concat(files) : files
          );
        }, [acceptedFiles]);

        return (
          <div style={{ width: '100%' }}>
            {label && (
              <span
                style={{
                  marginBottom: '0.3125rem',
                  fontSize: '0.75rem',
                  color: 'rgba(0, 0, 0, 0.54)',
                }}
                onClick={setFocus}
              >
                {label}
              </span>
            )}
            <div
              {...getRootProps({ className: 'dropzone' })}
              style={{
                display: 'flex',
                color: 'gray',
                fontSize: '0.90rem',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                border: `dashed 2px ${
                  meta.touched && meta.error ? '#F44336' : '#bdbdbd'
                }`,
                width: '100%',
                height,
                position: 'relative',
                opacity: disabled ? 0.2 : 1,
              }}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <>
                  <i
                    style={{
                      color: 'gray',
                      marginTop: '20px',
                      fontSize: '40px',
                    }}
                    className="fa fa-file"
                  />
                  <p>Drag the file here or</p>
                  <Button
                    onClick={open}
                    disabled={disabled}
                    variant="contained"
                  >
                    Click here
                  </Button>
                </>
              )}
            </div>
            <span
              style={{
                color: '#F44336',
                marginBottom: '5px',
                marginTop: '5px',
                fontSize: '0.75rem',
              }}
            >
              {meta.touched ? meta.error : ''}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {input.value &&
                input.value.map((file: File, idx: number) => {
                  return (
                    <div
                      style={{
                        marginRight: '5px',
                        marginTop: '10px',
                        marginBottom: '10px',
                      }}
                      key={idx}
                    >
                      <Chip
                        icon={<AttachmentIcon />}
                        label={file.name}
                        onDelete={() => {
                          let files = input.value.filter(
                            (it: File) => it.name !== file.name
                          );
                          input.onChange(files);
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        );
      }}
    />
  );
};

FormFileUploadField.defaultProps = {
  disabled: false,
  required: false,
  multiple: false,
  height: '200px',
};

export default FormFileUploadField;
