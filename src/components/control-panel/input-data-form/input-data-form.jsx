import * as React from 'react';
import {reduxForm, Field} from 'redux-form';
import {INPUT_DATA_FORM_NAME} from './constants';

export const InputDateForm = reduxForm({
    form: INPUT_DATA_FORM_NAME,
    initialValues: {
        antsCount: 1,
        iterationsCount: 5,
        pheromoneInitCount: 0.01
    }
})(() => (
    <div>
        <div>
            <label>Количество муравьев:</label>
            <Field name="antsCount" component="input" type="number" />
        </div>
        <div>
            <label>Число итераций:</label>
            <Field name="iterationsCount" component="input" type="number" />
        </div>
        <div>
            <label>Начальное количество феромона</label>
            <Field name="pheromoneInitCount" component="input" type="number" />
        </div>
    </div>
));
