import {get} from 'env-var'
import { loadEnvFile } from 'process'
loadEnvFile()

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
}