---
layout: compose
lang-ref: monitoring
lang: es
title: Monitoreo de peces amazónicos
toc: false
background: /assets/images/pages_bg_wh_w1800px.png
height: 41vh
composition: 
  - type: heroImage
  - type: blank
  - type: pageMarkdown
  - type: stats
    data: home.stats
  - type: dashboard
    inlineData:
      klass: exampleDashboard
      title: "Panel de datos"
      description: |
        Sistema Ictio
      config:
        predicate:
          type: equals
          key: gadmGid
          value: "TZA.12.7_1"
        charts:
          [
            occurrenceSummary,
            dataQuality,
            occurrenceIssue,
            iucnCounts,
            iucn,
            year,
            datasetKey,
            taxa,
          ]
        # currently available types as of march 2024: [iucn, license, basisOfRecord, year, synonyms, iucnCounts, country, continent, dwcaExtension, eventId, gadmGid, mediaType, networkKey, publisherKey, publishingCountryCode, protocol, sampleSizeUnit, samplingProtocol, typeStatus, waterBody, collectionCode, institutionCode, stateProvince, identifiedBy, recordedBy, establishmentMeans, month, preparations, datasetKey, taxa, occurrenceIssue, dataQuality, occurrenceSummary, collectionKey, institutionKey, catalogNumber]
---

Esta sección reúne información derivada de los registros biológicos adaptados desde el sistema Ictio al estándar Darwin Core (DwC), permitiendo consultar de manera dinámica indicadores asociados al monitoreo de peces A través de los indicadores destacados y las visualizaciones interactivas disponibles, es posible explorar las especies registradas, los cuerpos de agua donde han sido observadas, las instituciones participantes en la generación de información y su distribución geográfica.

Las cifras resumen ofrecen una visión general del alcance y cobertura de los datos disponibles, mientras que los gráficos, mapas y tablas facilitan el análisis detallado de patrones taxonómicos, territoriales e institucionales asociados a los registros publicados en el Observatorio.

<section id="checklist"></section>

<script>
async function runGraphQLQuery(query, variables = {}) {
  const checklist = document.getElementById('checklist');
  if (!checklist) {
    console.warn('No elements with id="checklist" found');
    return;
  }

  try {
      const response = await fetch('{{ site.graphqlEndpoint | default: "https://graphql.gbif.org/graphql" }}', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query, variables })
      });

      if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      if (result.errors) {
          result.errors.forEach(error => {
              console.warn('The API returned an error');
              console.error(error);
          });
      } else {
          // Handle successful response data here
          console.log(result.data);
          createChecklistTable(result.data.occurrenceSearch);
      }
  } catch (error) {
      console.warn('The API returned an error');
        console.error(error);
  }
}

// Function to create and populate the table
function createChecklistTable(data) {
    const checklistContainer = document.getElementById('checklist');
    if (!checklistContainer) return;

    // Create table element
    const table = document.createElement('table');
    table.classList.add('table');
    // table.border = '1';

    // Create and append the header row
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.colSpan = 3;
    headerCell.innerHTML = `Number of Species Observed: ${data.cardinality.speciesKey}`;
    headerRow.appendChild(headerCell);
    table.appendChild(headerRow);

    // Create table header for columns
    const columnHeaderRow = document.createElement('tr');
    const columns = ['Scientific Name', 'Last Reported', 'Total Observations'];
    columns.forEach(columnText => {
        const th = document.createElement('th');
        th.innerText = columnText;
        columnHeaderRow.appendChild(th);
    });
    table.appendChild(columnHeaderRow);

    // Populate the table with data
    data.facet.speciesKey.forEach(species => {
        const row = document.createElement('tr');

        // Scientific Name
        const scientificNameCell = document.createElement('td');
        scientificNameCell.innerHTML = species.taxon.formattedName;
        row.appendChild(scientificNameCell);

        // Last Seen
        const lastSeenCell = document.createElement('td');
        lastSeenCell.innerText = species.occurrences.stats.year.max;
        row.appendChild(lastSeenCell);

        // Total Observations
        const totalObservationsCell = document.createElement('td');
        totalObservationsCell.innerText = species.count;
        row.appendChild(totalObservationsCell);

        table.appendChild(row);
    });

    // Append the table to the container
    checklistContainer.appendChild(table);
}

function appendErrorToChecklist(checklist, message) {
    const errorItem = document.createElement('li');
    errorItem.textContent = message;
    checklist.appendChild(errorItem);
}

// Example usage
const query = `
query ($predicate: Predicate, $size: Int, $from: Int){
  occurrenceSearch(predicate: $predicate) {
    cardinality {
      speciesKey
    }
    facet {
      speciesKey(size: $size, from: $from) {
        key
        count
        taxon {
          formattedName
        }
        occurrences {
          stats {
            year {
              min
              max
            }
          }
        }
      }
    }
  }
}
`;

const variables = {
  "predicate": {
    "type": "and",
    "predicates": [
      {
        "type": "equals",
        "key": "country",
        "value": "PE"
      },
      {
        "type": "equals",
        "key": "gadmGid",
        "value": "TZA.12.7_1"
      }
    ]
  },
  "size": 20,
  "from": 0
}
runGraphQLQuery(query, variables);
</script>