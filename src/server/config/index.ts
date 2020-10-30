import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
    throw new Error('Cannot locate the env file!');
}

export default {
    credentials:
    {
        aws_access_key_id: process.env.aws_access_key_id,
        aws_secret_access_key: process.env.aws_secret_access_key
    }
};