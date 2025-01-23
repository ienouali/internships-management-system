import React, {Fragment} from 'react';
import Input from '../components/basicComponents/Input';
import Select from 'react-select';
import i18n from "../i18n";


/* function for required fields */
const required = value => !value ? i18n.t('msgFieldEmpty') : undefined;

/* function for max length characters */
const maxLength = max => value => value && value.length > max ? `${i18n.t('msgMaxLetters')} ${max} caracteres` : undefined;
const maxLength15 = maxLength(15);

/* function for checking  a number */
const number = value => value && isNaN(Number(value)) ? i18n.t('msgFieldOnlyNumbers') : undefined;

/* function for testing for min length characters */
const minValue = min => value => value && value < min ? `${i18n.t('msgMinLetters')} ${min} caracteres` : undefined;
const minValue18 = minValue(18);

/* function for valid email */
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? i18n.t('invalidEmail') : undefined;


/* field number */
const onlyNumber = ev => {
    if (ev.key !== '0' && ev.key !== '1' && ev.key !== '2' && ev.key !== '3' && ev.key !== '4' && ev.key !== '5'
        && ev.key !== '6' && ev.key !== '7' && ev.key !== '8' && ev.key !== '9' && ev.key !== '+' && ev.key !== 'Backspace')
        ev.preventDefault();
};


/* return the current date  */
const ifEqualToday = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
};

/* function for check if end date is greater than start date  */
const isValidDate = (startDate, endDate) => {
    let sy,ey, sd , ed;
    if (typeof endDate === 'string' && typeof startDate === 'string') {
         sy = parseInt(startDate.toString().split('-')[0]);
         ey = parseInt(endDate.toString().split('-')[0]);
         sd = parseInt(startDate.toString().split('-')[1]);
         ed = parseInt(endDate.toString().split('-')[1]);
    }
    return sy >= ey  && sd >= ed
            ? <span className='nv-error-text mt-5 ml-3'>
             <i className="fas fa-exclamation"/>&nbsp; {i18n.t('msgEndDateLessThanStartDate')}
             </span> : null
};


/* function render Field  */
const renderInput = ({value, name, input, className, placeholder, type, meta: {touched, error, warning}}) => {

    return (
        <Fragment>
            <Input {...input}
                   autoComplete="off"
                   className={`${className} ${touched && error !== undefined ? 'nv-input_error' : ''} `}
                   placeholder={placeholder}
                   type={type}
                   name={name}
                   value={input.value}
                   onKeyPress={type === 'tel' ? (e) => onlyNumber(e) : undefined}
            />
            {touched && ((error && <span className='nv-error-text mt-5 ml-3'>
           {error}</span>) || (warning && <span>{warning}</span>))}
        </Fragment>
    );
};

const renderSelect = ({placeholder, options, input, className, meta: {touched, error, warning}}) => {
    return (
        <Fragment>
            <Select
                {...input}
                options={options}
                className={`${className} ${touched && error !== undefined ? 'nv-input_error' : ''} `}
                value={options.find(val => val.value === input.value.value)
                    ? options.find(val => val.value === input.value.value)
                    : undefined}
                onBlur={() => input.onBlur(input.value.value)}
                placeholder={input.value.length !== 0 ? input.value : placeholder}
                name={input.name}
            />
            {touched && ((error && <span className='nv-error-text mt-5 ml-3'>
                {error}</span>) || (warning && <span>{warning}</span>))}
        </Fragment>
    );

};

const renderDatePicker = ({className, input, meta: {touched, error, warning}}) => {
    return (
        <Fragment>
            <Input
                {...input}
                value={input.value.split('T')[0]}
                type="date"
                name={input.name}
                id={input.id}
                className={`${className} ${touched && error !== undefined ? 'nv-input_error' : ''} `}
            />
            {touched && ((error && <span id='toto' className='nv-error-text mt-5 ml-3'>
                 {error}</span>) || (warning && <span>{warning}</span>))}
        </Fragment>
    );
};

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
                       input: {value: omitValue, onChange, onBlur, ...inputProps},
                       meta: omitMeta,
                       ...props
                   }) => {
    return (
        <Input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            {...props.input}
            {...props}
        />
    );
};
export {
    required,
    renderDatePicker,
    maxLength,
    maxLength15,
    minValue18,
    number,
    minValue,
    email,
    renderSelect,
    renderInput,
    FileInput,
    ifEqualToday,
    isValidDate,
    onlyNumber
};