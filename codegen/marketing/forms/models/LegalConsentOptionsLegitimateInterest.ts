/**
 * Forms
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LegalConsentOptionsLegitimateInterest {
    'type': LegalConsentOptionsLegitimateInterestTypeEnum;
    'subscriptionTypeIds': Array<number>;
    'lawfulBasis': LegalConsentOptionsLegitimateInterestLawfulBasisEnum;
    'privacyText': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "LegalConsentOptionsLegitimateInterestTypeEnum",
            "format": ""
        },
        {
            "name": "subscriptionTypeIds",
            "baseName": "subscriptionTypeIds",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "lawfulBasis",
            "baseName": "lawfulBasis",
            "type": "LegalConsentOptionsLegitimateInterestLawfulBasisEnum",
            "format": ""
        },
        {
            "name": "privacyText",
            "baseName": "privacyText",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LegalConsentOptionsLegitimateInterest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type LegalConsentOptionsLegitimateInterestTypeEnum = "legitimate_interest" ;
export type LegalConsentOptionsLegitimateInterestLawfulBasisEnum = "lead" | "client" | "other" ;

