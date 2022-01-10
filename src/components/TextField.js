import { ErrorMessage, useField } from 'formik';

 const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`texts ${meta.touched && meta.error && "error"}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error-text" />
    </div>
  )
}

export default TextField