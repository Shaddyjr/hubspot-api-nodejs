/**
 * Blog Post endpoints
 * \"Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags\"
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { RowMetaData } from './rowMetaData';
import { Styles } from './styles';

export class LayoutSection {
    'x': number;
    'w': number;
    'name': string;
    'label': string;
    'type': string;
    'params': object;
    'rows': Array<{ [key: string]: LayoutSection; }>;
    'rowMetaData': Array<RowMetaData>;
    'cells': Array<LayoutSection>;
    'cssClass': string;
    'cssStyle': string;
    'cssId': string;
    'styles': Styles;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "x",
            "baseName": "x",
            "type": "number"
        },
        {
            "name": "w",
            "baseName": "w",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "object"
        },
        {
            "name": "rows",
            "baseName": "rows",
            "type": "Array<{ [key: string]: LayoutSection; }>"
        },
        {
            "name": "rowMetaData",
            "baseName": "rowMetaData",
            "type": "Array<RowMetaData>"
        },
        {
            "name": "cells",
            "baseName": "cells",
            "type": "Array<LayoutSection>"
        },
        {
            "name": "cssClass",
            "baseName": "cssClass",
            "type": "string"
        },
        {
            "name": "cssStyle",
            "baseName": "cssStyle",
            "type": "string"
        },
        {
            "name": "cssId",
            "baseName": "cssId",
            "type": "string"
        },
        {
            "name": "styles",
            "baseName": "styles",
            "type": "Styles"
        }    ];

    static getAttributeTypeMap() {
        return LayoutSection.attributeTypeMap;
    }
}
