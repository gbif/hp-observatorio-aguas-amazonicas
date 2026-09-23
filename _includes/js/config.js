/*
This is the fil in which you configure the data widgets. Feel free to experiment with the configuration options. 
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
*/
var siteConfig = {
  "version": 3,
  "pages": [ // which pages do we want to enable
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "occurrenceKey"
    },
    {
      "id": "collectionSearch"
    },
    {
      "id": "collectionKey"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    },
    {
      "id": "institutionSearch"
    },
    {
      "id": "institutionKey"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    // TODO: you should remove types you do not want to use
    "OCCURRENCE",
    "DATASET",
    // "COLLECTION",
    "INSTITUTION"
    // "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": true,
    "enableInfoPopup": true
  },
  "theme": {
    "primary": "#006ba6",
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "es",
      "localeCode": "es",
      "label": "Español",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "esp",
      "cmsLocale": "es-PE",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "es"
    },
      {
        "code": "en",
        "localeCode": "en",
        "label": "English",
        "default": false,
        "textDirection": "ltr",
        "iso3LetterCode": "eng",
        "cmsLocale": "en-US",
        "gbifOrgLocalePrefix": "",
        "mapTileLocale": "en"
      },
      {
        "code": "pt",
        "localeCode": "pt",
        "label": "Português",
        "default": false,
        "textDirection": "ltr",
        "iso3LetterCode": "por",
        "cmsLocale": "pt-BR",
        "gbifOrgLocalePrefix": "",
        "mapTileLocale": "pt"
      }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "in",
      "key": "publishingOrg",
      "values": [
        "6e3dccea-16ee-4060-a8e9-32e598167a94"
      ]
    },
    "highlightedFilters": [
      "taxonKey",
      "verbatimScientificName",
      "institutionKey",
      //"institutionCode",
      "country",
      "locality",
      // "collectionKey",
      // "catalogNumber",
      "recordedBy",
      "identifiedBy"
    ],
    "excludedFilters": [
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "institutionCode",
      "collectionCode"
    ],
    "defaultEnabledTableColumns": [
      "taxonKey",
      "verbatimScientificName",
      "institutionKey",
      //"institutionCode",
      "country",
      "locality",
      // "collectionKey",
      // "catalogNumber",
      "recordedBy",
      "identifiedBy"
    ],
    "tabs": [
      "table",
      "gallery",
      "map",
      "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": -0.2932720882165326,
      "lng": -67.9335677449268,
      "zoom": 4.911544076366507
    }
  },
  "collectionSearch": {
    excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      active: true
    },
  },
  "institutionSearch": {
    // excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type'],
    // defaultTableColumns: ['title', 'type'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      active: true
    }
  },
  "datasetSearch": {
    excludedFilters: ['publishingCountry', 'networkKey', 'projectId', 'hostingOrg'],
    highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      type: ['OCCURRENCE', 'CHECKLIST']
    },
  },
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // literature search use the predicate format similar to occurrence search
      "type": "in",
      "key": "publishingOrganizationKey",
      "values": [
        "760d5f24-4c04-40da-9646-1b2c935da502",
        "2e7df380-8356-4533-bcb3-5459e23c794e",
        "8e1a97a0-3ca8-11d9-8439-b8a03c50a862"
      ]
    }
  }
}