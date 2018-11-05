import * as React from 'react';
import {reduxForm, Field} from 'redux-form';
import {INPUT_DATA_FORM_NAME} from './constants';

export const InputDateForm = reduxForm({
    form: INPUT_DATA_FORM_NAME,
    initialValues: {
        antsCount: 20,
        iterationsCount: 20,
        pheromoneInitCount: 0.01,
        pheromoneGrowthCount: 10
    }
})(() => (
    <div>
        <div>
            <label>Количество муравьев:</label><br />
            <Field name="antsCount" component="input" type="number" />
        </div>
        <div>
            <label>Число итераций:</label><br />
            <Field name="iterationsCount" component="input" type="number" />
        </div>
        <div>
            <label>Начальное количество феромона</label><br />
            <Field name="pheromoneInitCount" component="input" type="number" />
        </div>
        <div>
            <label>Прирост феромона</label><br />
            <Field name="pheromoneGrowthCount" component="input" type="number" />
        </div>
    </div>
));
