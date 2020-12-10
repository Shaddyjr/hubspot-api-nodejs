/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object\'s type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { ObjectTypeDefinitionLabels } from './objectTypeDefinitionLabels';
import { ObjectTypePropertyCreate } from './objectTypePropertyCreate';

/**
* Defines a new object type, its properties, and associations.
*/
export class ObjectSchemaEgg {
    'labels': ObjectTypeDefinitionLabels;
    /**
    * The names of properties that should be **required** when creating an object of this type.
    */
    'requiredProperties': Array<string>;
    /**
    * Names of properties that will be indexed for this object type in by HubSpot\'s product search.
    */
    'searchableProperties': Array<string>;
    /**
    * The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.
    */
    'primaryDisplayProperty'?: string;
    /**
    * The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.
    */
    'secondaryDisplayProperties': Array<string>;
    /**
    * Properties defined for this object type.
    */
    'properties': Array<ObjectTypePropertyCreate>;
    /**
    * Associations defined for this object type.
    */
    'associatedObjects': Array<string>;
    /**
    * A unique name for this object. For internal use only.
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "labels",
            "baseName": "labels",
            "type": "ObjectTypeDefinitionLabels"
        },
        {
            "name": "requiredProperties",
            "baseName": "requiredProperties",
            "type": "Array<string>"
        },
        {
            "name": "searchableProperties",
            "baseName": "searchableProperties",
            "type": "Array<string>"
        },
        {
            "name": "primaryDisplayProperty",
            "baseName": "primaryDisplayProperty",
            "type": "string"
        },
        {
            "name": "secondaryDisplayProperties",
            "baseName": "secondaryDisplayProperties",
            "type": "Array<string>"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<ObjectTypePropertyCreate>"
        },
        {
            "name": "associatedObjects",
            "baseName": "associatedObjects",
            "type": "Array<string>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ObjectSchemaEgg.attributeTypeMap;
    }
}
