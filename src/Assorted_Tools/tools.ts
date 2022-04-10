import { AxiosResponse } from 'axios';
import { URL } from 'whatwg-url';
import { v4 } from 'uuid';

export function roughType(object: any) {
  let rough: any = {};

  if (object instanceof Array) {
    rough = object.map((item: any) => roughType(item));
  } else if (object instanceof Object) {
    for (const key in object) {
      rough[key] = roughType(object[key]);
    }
  } else {
    rough = typeof object;
  }

  return rough;
}

export function convertRoughToString(rough: any) {
  return JSON.stringify(rough, null, 4)
    .replace(/"string"/g, 'string')
    .replace(/"boolean"/g, 'boolean')
    .replace(/"number"/g, 'number');
}

export function handleResponse(
  response: AxiosResponse,
  output_full: boolean = false
) {
  if (response.status !== 200) {
    throw new Error(
      'Authentication failed with status code: ' +
      response.status +
      ' ' +
      response.statusText +
      '\n' +
      output_full
        ? response.data
        : ''
    );
  }

  return response.data;
}

export function method_server_url(
  method: string,
  server: string,
  method_prepend: string = '/api/?method='
): string {
  return new URL(`${method_prepend}${method}`, server).toString();
}

export function uuid() {
  return v4();
}
