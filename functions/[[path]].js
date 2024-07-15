import { createPagesFunctionHandler } from '@remix-run/vercel';
import * as build from '../../../build';

export default createPagesFunctionHandler({ build });
