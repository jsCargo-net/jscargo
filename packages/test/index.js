import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import coreSchema from '@jscargo/schema';
import example from './example.json' assert { type: 'json' };

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const validate = ajv.compile(coreSchema);

export function assertValidCore(data) {
    if (!validate(data)) {
        throw new Error(ajv.errorsText(validate.errors));
    }
}

assertValidCore(example);
console.log('✓ Example is valid according to the core schema.');