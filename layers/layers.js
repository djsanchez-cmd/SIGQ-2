var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BOLIVIA_1 = new ol.format.GeoJSON();
var features_BOLIVIA_1 = format_BOLIVIA_1.readFeatures(json_BOLIVIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOLIVIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOLIVIA_1.addFeatures(features_BOLIVIA_1);
var lyr_BOLIVIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOLIVIA_1, 
                style: style_BOLIVIA_1,
                popuplayertitle: 'BOLIVIA',
                interactive: false,
                title: '<img src="styles/legend/BOLIVIA_1.png" /> BOLIVIA'
            });
var format_ORIGENESADUANAS_2 = new ol.format.GeoJSON();
var features_ORIGENESADUANAS_2 = format_ORIGENESADUANAS_2.readFeatures(json_ORIGENESADUANAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ORIGENESADUANAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORIGENESADUANAS_2.addFeatures(features_ORIGENESADUANAS_2);
var lyr_ORIGENESADUANAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ORIGENESADUANAS_2, 
                style: style_ORIGENESADUANAS_2,
                popuplayertitle: 'ORIGENES ADUANAS',
                interactive: true,
                title: '<img src="styles/legend/ORIGENESADUANAS_2.png" /> ORIGENES ADUANAS'
            });
var format_ABC_RedVialFundamental2024_3 = new ol.format.GeoJSON();
var jsonSource_ABC_RedVialFundamental2024_3 = new ol.source.Vector({
    attributions: ' ',
    format: format_ABC_RedVialFundamental2024_3
});var lyr_ABC_RedVialFundamental2024_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_ABC_RedVialFundamental2024_3, 
    style: style_ABC_RedVialFundamental2024_3,
    interactive: true,
    title: 'ABC_Red Vial Fundamental 2024'
});

function getABC_RedVialFundamental2024_3Json(geojson) {
    var features_ABC_RedVialFundamental2024_3 = format_ABC_RedVialFundamental2024_3.readFeatures(geojson);
    jsonSource_ABC_RedVialFundamental2024_3.addFeatures(features_ABC_RedVialFundamental2024_3);
}
var format_CORREDORNORTESUR_4 = new ol.format.GeoJSON();
var features_CORREDORNORTESUR_4 = format_CORREDORNORTESUR_4.readFeatures(json_CORREDORNORTESUR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDORNORTESUR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDORNORTESUR_4.addFeatures(features_CORREDORNORTESUR_4);
var lyr_CORREDORNORTESUR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDORNORTESUR_4, 
                style: style_CORREDORNORTESUR_4,
                popuplayertitle: 'CORREDOR NORTE SUR',
                interactive: true,
                title: '<img src="styles/legend/CORREDORNORTESUR_4.png" /> CORREDOR NORTE SUR'
            });
var format_CORREDORSUR_5 = new ol.format.GeoJSON();
var features_CORREDORSUR_5 = format_CORREDORSUR_5.readFeatures(json_CORREDORSUR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDORSUR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDORSUR_5.addFeatures(features_CORREDORSUR_5);
var lyr_CORREDORSUR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDORSUR_5, 
                style: style_CORREDORSUR_5,
                popuplayertitle: 'CORREDOR  SUR',
                interactive: true,
                title: '<img src="styles/legend/CORREDORSUR_5.png" /> CORREDOR  SUR'
            });
var format_CORREDOROESTENORTE_6 = new ol.format.GeoJSON();
var features_CORREDOROESTENORTE_6 = format_CORREDOROESTENORTE_6.readFeatures(json_CORREDOROESTENORTE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDOROESTENORTE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDOROESTENORTE_6.addFeatures(features_CORREDOROESTENORTE_6);
var lyr_CORREDOROESTENORTE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDOROESTENORTE_6, 
                style: style_CORREDOROESTENORTE_6,
                popuplayertitle: 'CORREDOR OESTE NORTE',
                interactive: true,
                title: '<img src="styles/legend/CORREDOROESTENORTE_6.png" /> CORREDOR OESTE NORTE'
            });
var format_CORREDOROESTESUR_7 = new ol.format.GeoJSON();
var features_CORREDOROESTESUR_7 = format_CORREDOROESTESUR_7.readFeatures(json_CORREDOROESTESUR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDOROESTESUR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDOROESTESUR_7.addFeatures(features_CORREDOROESTESUR_7);
var lyr_CORREDOROESTESUR_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDOROESTESUR_7, 
                style: style_CORREDOROESTESUR_7,
                popuplayertitle: 'CORREDOR OESTE SUR',
                interactive: true,
                title: '<img src="styles/legend/CORREDOROESTESUR_7.png" /> CORREDOR OESTE SUR'
            });
var format_CORREDORESTEOESTE_8 = new ol.format.GeoJSON();
var features_CORREDORESTEOESTE_8 = format_CORREDORESTEOESTE_8.readFeatures(json_CORREDORESTEOESTE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDORESTEOESTE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORREDORESTEOESTE_8.addFeatures(features_CORREDORESTEOESTE_8);
var lyr_CORREDORESTEOESTE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORREDORESTEOESTE_8, 
                style: style_CORREDORESTEOESTE_8,
                popuplayertitle: 'CORREDOR ESTE OESTE',
                interactive: true,
                title: '<img src="styles/legend/CORREDORESTEOESTE_8.png" /> CORREDOR ESTE OESTE'
            });
var format_INTTARIJAARICA_9 = new ol.format.GeoJSON();
var features_INTTARIJAARICA_9 = format_INTTARIJAARICA_9.readFeatures(json_INTTARIJAARICA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INTTARIJAARICA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTTARIJAARICA_9.addFeatures(features_INTTARIJAARICA_9);
var lyr_INTTARIJAARICA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTTARIJAARICA_9, 
                style: style_INTTARIJAARICA_9,
                popuplayertitle: 'INT TARIJA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/INTTARIJAARICA_9.png" /> INT TARIJA - ARICA'
            });
var format_GUAYARAMERINARICA_10 = new ol.format.GeoJSON();
var features_GUAYARAMERINARICA_10 = format_GUAYARAMERINARICA_10.readFeatures(json_GUAYARAMERINARICA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUAYARAMERINARICA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUAYARAMERINARICA_10.addFeatures(features_GUAYARAMERINARICA_10);
var lyr_GUAYARAMERINARICA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUAYARAMERINARICA_10, 
                style: style_GUAYARAMERINARICA_10,
                popuplayertitle: 'GUAYARAMERIN - ARICA',
                interactive: true,
                title: '<img src="styles/legend/GUAYARAMERINARICA_10.png" /> GUAYARAMERIN - ARICA'
            });
var format_INTSUCREARICA_11 = new ol.format.GeoJSON();
var features_INTSUCREARICA_11 = format_INTSUCREARICA_11.readFeatures(json_INTSUCREARICA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INTSUCREARICA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTSUCREARICA_11.addFeatures(features_INTSUCREARICA_11);
var lyr_INTSUCREARICA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTSUCREARICA_11, 
                style: style_INTSUCREARICA_11,
                popuplayertitle: 'INT SUCRE ARICA',
                interactive: true,
                title: '<img src="styles/legend/INTSUCREARICA_11.png" /> INT SUCRE ARICA'
            });
var format_PTO_SUAREZARICA_12 = new ol.format.GeoJSON();
var features_PTO_SUAREZARICA_12 = format_PTO_SUAREZARICA_12.readFeatures(json_PTO_SUAREZARICA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTO_SUAREZARICA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTO_SUAREZARICA_12.addFeatures(features_PTO_SUAREZARICA_12);
var lyr_PTO_SUAREZARICA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTO_SUAREZARICA_12, 
                style: style_PTO_SUAREZARICA_12,
                popuplayertitle: 'PTO_SUAREZ - ARICA',
                interactive: true,
                title: '<img src="styles/legend/PTO_SUAREZARICA_12.png" /> PTO_SUAREZ - ARICA'
            });
var format_JENNEFERARICA_13 = new ol.format.GeoJSON();
var features_JENNEFERARICA_13 = format_JENNEFERARICA_13.readFeatures(json_JENNEFERARICA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENNEFERARICA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENNEFERARICA_13.addFeatures(features_JENNEFERARICA_13);
var lyr_JENNEFERARICA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENNEFERARICA_13, 
                style: style_JENNEFERARICA_13,
                popuplayertitle: 'JENNEFER - ARICA',
                interactive: true,
                title: '<img src="styles/legend/JENNEFERARICA_13.png" /> JENNEFER - ARICA'
            });
var format_SNMATIASARICA_14 = new ol.format.GeoJSON();
var features_SNMATIASARICA_14 = format_SNMATIASARICA_14.readFeatures(json_SNMATIASARICA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SNMATIASARICA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SNMATIASARICA_14.addFeatures(features_SNMATIASARICA_14);
var lyr_SNMATIASARICA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SNMATIASARICA_14, 
                style: style_SNMATIASARICA_14,
                popuplayertitle: 'SN MATIAS - ARICA',
                interactive: true,
                title: '<img src="styles/legend/SNMATIASARICA_14.png" /> SN MATIAS - ARICA'
            });
var format_ZFWINNERARICA_15 = new ol.format.GeoJSON();
var features_ZFWINNERARICA_15 = format_ZFWINNERARICA_15.readFeatures(json_ZFWINNERARICA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZFWINNERARICA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZFWINNERARICA_15.addFeatures(features_ZFWINNERARICA_15);
var lyr_ZFWINNERARICA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZFWINNERARICA_15, 
                style: style_ZFWINNERARICA_15,
                popuplayertitle: 'ZF WINNER - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ZFWINNERARICA_15.png" /> ZF WINNER - ARICA'
            });
var format_ZFPTOSUAREZARICA_16 = new ol.format.GeoJSON();
var features_ZFPTOSUAREZARICA_16 = format_ZFPTOSUAREZARICA_16.readFeatures(json_ZFPTOSUAREZARICA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZFPTOSUAREZARICA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZFPTOSUAREZARICA_16.addFeatures(features_ZFPTOSUAREZARICA_16);
var lyr_ZFPTOSUAREZARICA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZFPTOSUAREZARICA_16, 
                style: style_ZFPTOSUAREZARICA_16,
                popuplayertitle: 'ZF PTO SUAREZ - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ZFPTOSUAREZARICA_16.png" /> ZF PTO SUAREZ - ARICA'
            });
var format_ARROYO_CONCEPARICA_17 = new ol.format.GeoJSON();
var features_ARROYO_CONCEPARICA_17 = format_ARROYO_CONCEPARICA_17.readFeatures(json_ARROYO_CONCEPARICA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARROYO_CONCEPARICA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARROYO_CONCEPARICA_17.addFeatures(features_ARROYO_CONCEPARICA_17);
var lyr_ARROYO_CONCEPARICA_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARROYO_CONCEPARICA_17, 
                style: style_ARROYO_CONCEPARICA_17,
                popuplayertitle: 'ARROYO_CONCEP - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ARROYO_CONCEPARICA_17.png" /> ARROYO_CONCEP - ARICA'
            });
var format_AeroVVIARICA_18 = new ol.format.GeoJSON();
var features_AeroVVIARICA_18 = format_AeroVVIARICA_18.readFeatures(json_AeroVVIARICA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AeroVVIARICA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeroVVIARICA_18.addFeatures(features_AeroVVIARICA_18);
var lyr_AeroVVIARICA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AeroVVIARICA_18, 
                style: style_AeroVVIARICA_18,
                popuplayertitle: 'AeroVVI - ARICA',
                interactive: true,
                title: '<img src="styles/legend/AeroVVIARICA_18.png" /> AeroVVI - ARICA'
            });
var format_INTSCZARICA_19 = new ol.format.GeoJSON();
var features_INTSCZARICA_19 = format_INTSCZARICA_19.readFeatures(json_INTSCZARICA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INTSCZARICA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTSCZARICA_19.addFeatures(features_INTSCZARICA_19);
var lyr_INTSCZARICA_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTSCZARICA_19, 
                style: style_INTSCZARICA_19,
                popuplayertitle: 'INT SCZ - ARICA',
                interactive: true,
                title: '<img src="styles/legend/INTSCZARICA_19.png" /> INT SCZ - ARICA'
            });
var format_ZFORUROARICA_20 = new ol.format.GeoJSON();
var features_ZFORUROARICA_20 = format_ZFORUROARICA_20.readFeatures(json_ZFORUROARICA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZFORUROARICA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZFORUROARICA_20.addFeatures(features_ZFORUROARICA_20);
var lyr_ZFORUROARICA_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZFORUROARICA_20, 
                style: style_ZFORUROARICA_20,
                popuplayertitle: 'ZF ORURO - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ZFORUROARICA_20.png" /> ZF ORURO - ARICA'
            });
var format_PISIGAARICA_21 = new ol.format.GeoJSON();
var features_PISIGAARICA_21 = format_PISIGAARICA_21.readFeatures(json_PISIGAARICA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PISIGAARICA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PISIGAARICA_21.addFeatures(features_PISIGAARICA_21);
var lyr_PISIGAARICA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PISIGAARICA_21, 
                style: style_PISIGAARICA_21,
                popuplayertitle: 'PISIGA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/PISIGAARICA_21.png" /> PISIGA - ARICA'
            });
var format_TAMBOQUEMADOARICA_22 = new ol.format.GeoJSON();
var features_TAMBOQUEMADOARICA_22 = format_TAMBOQUEMADOARICA_22.readFeatures(json_TAMBOQUEMADOARICA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMBOQUEMADOARICA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMBOQUEMADOARICA_22.addFeatures(features_TAMBOQUEMADOARICA_22);
var lyr_TAMBOQUEMADOARICA_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMBOQUEMADOARICA_22, 
                style: style_TAMBOQUEMADOARICA_22,
                popuplayertitle: 'TAMBO QUEMADO - ARICA',
                interactive: true,
                title: '<img src="styles/legend/TAMBOQUEMADOARICA_22.png" /> TAMBO QUEMADO - ARICA'
            });
var format_CHARANAARICA_23 = new ol.format.GeoJSON();
var features_CHARANAARICA_23 = format_CHARANAARICA_23.readFeatures(json_CHARANAARICA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHARANAARICA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHARANAARICA_23.addFeatures(features_CHARANAARICA_23);
var lyr_CHARANAARICA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHARANAARICA_23, 
                style: style_CHARANAARICA_23,
                popuplayertitle: 'CHARANA ARICA',
                interactive: true,
                title: '<img src="styles/legend/CHARANAARICA_23.png" /> CHARANA ARICA'
            });
var format_INTORUROARICA_24 = new ol.format.GeoJSON();
var features_INTORUROARICA_24 = format_INTORUROARICA_24.readFeatures(json_INTORUROARICA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INTORUROARICA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTORUROARICA_24.addFeatures(features_INTORUROARICA_24);
var lyr_INTORUROARICA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTORUROARICA_24, 
                style: style_INTORUROARICA_24,
                popuplayertitle: 'INT ORURO - ARICA',
                interactive: true,
                title: '<img src="styles/legend/INTORUROARICA_24.png" /> INT ORURO - ARICA'
            });
var format_INTPOTOSIARICA_25 = new ol.format.GeoJSON();
var features_INTPOTOSIARICA_25 = format_INTPOTOSIARICA_25.readFeatures(json_INTPOTOSIARICA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INTPOTOSIARICA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTPOTOSIARICA_25.addFeatures(features_INTPOTOSIARICA_25);
var lyr_INTPOTOSIARICA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTPOTOSIARICA_25, 
                style: style_INTPOTOSIARICA_25,
                popuplayertitle: 'INT POTOSI - ARICA',
                interactive: true,
                title: '<img src="styles/legend/INTPOTOSIARICA_25.png" /> INT POTOSI - ARICA'
            });
var format_ZFPATACAMAYAARICA_26 = new ol.format.GeoJSON();
var features_ZFPATACAMAYAARICA_26 = format_ZFPATACAMAYAARICA_26.readFeatures(json_ZFPATACAMAYAARICA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZFPATACAMAYAARICA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZFPATACAMAYAARICA_26.addFeatures(features_ZFPATACAMAYAARICA_26);
var lyr_ZFPATACAMAYAARICA_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZFPATACAMAYAARICA_26, 
                style: style_ZFPATACAMAYAARICA_26,
                popuplayertitle: 'ZF PATACAMAYA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ZFPATACAMAYAARICA_26.png" /> ZF PATACAMAYA - ARICA'
            });
var format_AeroELALTOARICA_27 = new ol.format.GeoJSON();
var features_AeroELALTOARICA_27 = format_AeroELALTOARICA_27.readFeatures(json_AeroELALTOARICA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AeroELALTOARICA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeroELALTOARICA_27.addFeatures(features_AeroELALTOARICA_27);
var lyr_AeroELALTOARICA_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AeroELALTOARICA_27, 
                style: style_AeroELALTOARICA_27,
                popuplayertitle: 'AeroEL ALTO ARICA',
                interactive: true,
                title: '<img src="styles/legend/AeroELALTOARICA_27.png" /> AeroEL ALTO ARICA'
            });
var format_INTLPARICA_28 = new ol.format.GeoJSON();
var features_INTLPARICA_28 = format_INTLPARICA_28.readFeatures(json_INTLPARICA_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INTLPARICA_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTLPARICA_28.addFeatures(features_INTLPARICA_28);
var lyr_INTLPARICA_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTLPARICA_28, 
                style: style_INTLPARICA_28,
                popuplayertitle: 'INT LP ARICA',
                interactive: true,
                title: '<img src="styles/legend/INTLPARICA_28.png" /> INT LP ARICA'
            });
var format_ZFELALTOARICA_29 = new ol.format.GeoJSON();
var features_ZFELALTOARICA_29 = format_ZFELALTOARICA_29.readFeatures(json_ZFELALTOARICA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZFELALTOARICA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZFELALTOARICA_29.addFeatures(features_ZFELALTOARICA_29);
var lyr_ZFELALTOARICA_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZFELALTOARICA_29, 
                style: style_ZFELALTOARICA_29,
                popuplayertitle: 'ZF EL ALTO - ARICA',
                interactive: true,
                title: '<img src="styles/legend/ZFELALTOARICA_29.png" /> ZF EL ALTO - ARICA'
            });
var format_INTCBBAARICA_30 = new ol.format.GeoJSON();
var features_INTCBBAARICA_30 = format_INTCBBAARICA_30.readFeatures(json_INTCBBAARICA_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INTCBBAARICA_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTCBBAARICA_30.addFeatures(features_INTCBBAARICA_30);
var lyr_INTCBBAARICA_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTCBBAARICA_30, 
                style: style_INTCBBAARICA_30,
                popuplayertitle: 'INT CBBA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/INTCBBAARICA_30.png" /> INT CBBA - ARICA'
            });
var format_AeroCBBAARICA_31 = new ol.format.GeoJSON();
var features_AeroCBBAARICA_31 = format_AeroCBBAARICA_31.readFeatures(json_AeroCBBAARICA_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AeroCBBAARICA_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeroCBBAARICA_31.addFeatures(features_AeroCBBAARICA_31);
var lyr_AeroCBBAARICA_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AeroCBBAARICA_31, 
                style: style_AeroCBBAARICA_31,
                popuplayertitle: 'Aero CBBA - ARICA',
                interactive: true,
                title: '<img src="styles/legend/AeroCBBAARICA_31.png" /> Aero CBBA - ARICA'
            });
var format_DESTINOARICA_32 = new ol.format.GeoJSON();
var features_DESTINOARICA_32 = format_DESTINOARICA_32.readFeatures(json_DESTINOARICA_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESTINOARICA_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESTINOARICA_32.addFeatures(features_DESTINOARICA_32);
var lyr_DESTINOARICA_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESTINOARICA_32, 
                style: style_DESTINOARICA_32,
                popuplayertitle: 'DESTINO ARICA',
                interactive: false,
                title: '<img src="styles/legend/DESTINOARICA_32.png" /> DESTINO ARICA'
            });
var format_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33 = new ol.format.GeoJSON();
var jsonSource_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33 = new ol.source.Vector({
    attributions: ' ',
    format: format_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33
});var lyr_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33, 
    style: style_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33,
    interactive: true,
    title: 'ADUANA_Mapa de Administraciones Aduaneras_ Bolivia 2018'
});

function getADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33Json(geojson) {
    var features_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33 = format_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33.readFeatures(geojson);
    jsonSource_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33.addFeatures(features_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33);
}
var format_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34 = new ol.format.GeoJSON();
var jsonSource_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34 = new ol.source.Vector({
    attributions: ' ',
    format: format_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34
});var lyr_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34, 
    style: style_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34,
    interactive: true,
    title: 'VIASBOLIVIA_Mapa de Ubicación de Retenes de Peaje y Pesaje en Bolivia_ 2018'
});

function getVIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34Json(geojson) {
    var features_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34 = format_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34.readFeatures(geojson);
    jsonSource_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34.addFeatures(features_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34);
}
var format_surtidores_de_combustible_35 = new ol.format.GeoJSON();
var jsonSource_surtidores_de_combustible_35 = new ol.source.Vector({
    attributions: ' ',
    format: format_surtidores_de_combustible_35
});cluster_surtidores_de_combustible_35 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_surtidores_de_combustible_35
});var lyr_surtidores_de_combustible_35 = new ol.layer.Vector({
    declutter: false,
    source: cluster_surtidores_de_combustible_35, 
    style: style_surtidores_de_combustible_35,
    interactive: true,
    title: 'surtidores_de_combustible'
});

function getsurtidores_de_combustible_35Json(geojson) {
    var features_surtidores_de_combustible_35 = format_surtidores_de_combustible_35.readFeatures(geojson);
    jsonSource_surtidores_de_combustible_35.addFeatures(features_surtidores_de_combustible_35);
}
var group_DESDECBBA = new ol.layer.Group({
                                layers: [lyr_INTCBBAARICA_30,lyr_AeroCBBAARICA_31,],
                                fold: 'close',
                                title: 'DESDE CBBA'});
var group_DESDELAPAZ = new ol.layer.Group({
                                layers: [lyr_ZFPATACAMAYAARICA_26,lyr_AeroELALTOARICA_27,lyr_INTLPARICA_28,lyr_ZFELALTOARICA_29,],
                                fold: 'close',
                                title: 'DESDE LA PAZ'});
var group_DESDEPOTOS = new ol.layer.Group({
                                layers: [lyr_INTPOTOSIARICA_25,],
                                fold: 'close',
                                title: 'DESDE POTOSÍ'});
var group_DESDEORURO = new ol.layer.Group({
                                layers: [lyr_ZFORUROARICA_20,lyr_PISIGAARICA_21,lyr_TAMBOQUEMADOARICA_22,lyr_CHARANAARICA_23,lyr_INTORUROARICA_24,],
                                fold: 'close',
                                title: 'DESDE ORURO'});
var group_DESDESCZ = new ol.layer.Group({
                                layers: [lyr_PTO_SUAREZARICA_12,lyr_JENNEFERARICA_13,lyr_SNMATIASARICA_14,lyr_ZFWINNERARICA_15,lyr_ZFPTOSUAREZARICA_16,lyr_ARROYO_CONCEPARICA_17,lyr_AeroVVIARICA_18,lyr_INTSCZARICA_19,],
                                fold: 'close',
                                title: 'DESDE SCZ'});
var group_DESDECHUQUISACA = new ol.layer.Group({
                                layers: [lyr_INTSUCREARICA_11,],
                                fold: 'close',
                                title: 'DESDE CHUQUISACA'});
var group_DESDEBENI = new ol.layer.Group({
                                layers: [lyr_GUAYARAMERINARICA_10,],
                                fold: 'close',
                                title: 'DESDE BENI'});
var group_DESDETARIJA = new ol.layer.Group({
                                layers: [lyr_INTTARIJAARICA_9,],
                                fold: 'close',
                                title: 'DESDE TARIJA'});
var group_CORREDORESBOL = new ol.layer.Group({
                                layers: [lyr_CORREDORNORTESUR_4,lyr_CORREDORSUR_5,lyr_CORREDOROESTENORTE_6,lyr_CORREDOROESTESUR_7,lyr_CORREDORESTEOESTE_8,],
                                fold: 'close',
                                title: 'CORREDORES BOL'});

lyr_OSMStandard_0.setVisible(true);lyr_BOLIVIA_1.setVisible(false);lyr_ORIGENESADUANAS_2.setVisible(true);lyr_ABC_RedVialFundamental2024_3.setVisible(false);lyr_CORREDORNORTESUR_4.setVisible(true);lyr_CORREDORSUR_5.setVisible(true);lyr_CORREDOROESTENORTE_6.setVisible(true);lyr_CORREDOROESTESUR_7.setVisible(true);lyr_CORREDORESTEOESTE_8.setVisible(true);lyr_INTTARIJAARICA_9.setVisible(true);lyr_GUAYARAMERINARICA_10.setVisible(true);lyr_INTSUCREARICA_11.setVisible(true);lyr_PTO_SUAREZARICA_12.setVisible(true);lyr_JENNEFERARICA_13.setVisible(true);lyr_SNMATIASARICA_14.setVisible(true);lyr_ZFWINNERARICA_15.setVisible(true);lyr_ZFPTOSUAREZARICA_16.setVisible(true);lyr_ARROYO_CONCEPARICA_17.setVisible(true);lyr_AeroVVIARICA_18.setVisible(true);lyr_INTSCZARICA_19.setVisible(true);lyr_ZFORUROARICA_20.setVisible(true);lyr_PISIGAARICA_21.setVisible(true);lyr_TAMBOQUEMADOARICA_22.setVisible(true);lyr_CHARANAARICA_23.setVisible(true);lyr_INTORUROARICA_24.setVisible(true);lyr_INTPOTOSIARICA_25.setVisible(true);lyr_ZFPATACAMAYAARICA_26.setVisible(true);lyr_AeroELALTOARICA_27.setVisible(true);lyr_INTLPARICA_28.setVisible(true);lyr_ZFELALTOARICA_29.setVisible(true);lyr_INTCBBAARICA_30.setVisible(true);lyr_AeroCBBAARICA_31.setVisible(true);lyr_DESTINOARICA_32.setVisible(true);lyr_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33.setVisible(false);lyr_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34.setVisible(true);lyr_surtidores_de_combustible_35.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BOLIVIA_1,lyr_ORIGENESADUANAS_2,lyr_ABC_RedVialFundamental2024_3,group_CORREDORESBOL,group_DESDETARIJA,group_DESDEBENI,group_DESDECHUQUISACA,group_DESDESCZ,group_DESDEORURO,group_DESDEPOTOS,group_DESDELAPAZ,group_DESDECBBA,lyr_DESTINOARICA_32,lyr_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33,lyr_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34,lyr_surtidores_de_combustible_35];
lyr_BOLIVIA_1.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_ORIGENESADUANAS_2.set('fieldAliases', {'Ruta': 'Ruta', 'Destino': 'Destino', 'Coordenada': 'Coordenada', 'Coordena_1': 'Coordena_1', 'Coord LLEG': 'Coord LLEG', 'Coord LL_1': 'Coord LL_1', 'Partida': 'Partida', 'Llegada': 'Llegada', 'Plazo (hor': 'Plazo (hor', 'Modalidad': 'Modalidad', });
lyr_ABC_RedVialFundamental2024_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ruta': 'ruta', 'rodadura': 'rodadura', 'tipo': 'tipo', 'depto': 'depto', 'de': 'de', 'a': 'a', 'longitud': 'longitud', });
lyr_CORREDORNORTESUR_4.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_CORREDORSUR_5.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_CORREDOROESTENORTE_6.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_CORREDOROESTESUR_7.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_CORREDORESTEOESTE_8.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', });
lyr_INTTARIJAARICA_9.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_GUAYARAMERINARICA_10.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_INTSUCREARICA_11.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'PLAZO A_Hr': 'PLAZO A_Hr', });
lyr_PTO_SUAREZARICA_12.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_JENNEFERARICA_13.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_SNMATIASARICA_14.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_ZFWINNERARICA_15.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_ZFPTOSUAREZARICA_16.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_ARROYO_CONCEPARICA_17.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_AeroVVIARICA_18.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_INTSCZARICA_19.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_ZFORUROARICA_20.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_PISIGAARICA_21.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_TAMBOQUEMADOARICA_22.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_CHARANAARICA_23.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_INTORUROARICA_24.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_INTPOTOSIARICA_25.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_ZFPATACAMAYAARICA_26.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_AeroELALTOARICA_27.set('fieldAliases', {'DIST_Km': 'DIST_Km', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_INTLPARICA_28.set('fieldAliases', {'LONGITUD [': 'LONGITUD [', 'PLAZO A [H': 'PLAZO A [H', });
lyr_ZFELALTOARICA_29.set('fieldAliases', {'FID': 'FID', });
lyr_INTCBBAARICA_30.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_AeroCBBAARICA_31.set('fieldAliases', {'FID': 'FID', 'PLAZO_A_Hr': 'PLAZO_A_Hr', });
lyr_DESTINOARICA_32.set('fieldAliases', {'Ruta': 'Ruta', 'Destino': 'Destino', 'Coordenada': 'Coordenada', 'Coordena_1': 'Coordena_1', 'Coord LLEG': 'Coord LLEG', 'Coord LL_1': 'Coord LL_1', 'Partida': 'Partida', 'Llegada': 'Llegada', 'Plazo (hor': 'Plazo (hor', 'Modalidad': 'Modalidad', });
lyr_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'n': 'n', 'administra': 'administra', 'tipo': 'tipo', 'departamen': 'departamen', 'ciudad': 'ciudad', 'direccion': 'direccion', 'telefono': 'telefono', 'pais': 'pais', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'tipo_estac': 'tipo_estac', 'estacion': 'estacion', 'codesta': 'codesta', 'ubicacion': 'ubicacion', 'sist_cobro': 'sist_cobro', 'departamen': 'departamen', });
lyr_surtidores_de_combustible_35.set('fieldAliases', {'name': 'name', 'ogc_fid': 'ogc_fid', 'oid_': 'oid_', 'folderpath': 'folderpath', 'symbolid': 'symbolid', 'altmode': 'altmode', 'base': 'base', 'snippet': 'snippet', 'popupinfo': 'popupinfo', 'haslabel': 'haslabel', 'labelid': 'labelid', });
lyr_BOLIVIA_1.set('fieldImages', {'GID_1': '', 'GID_0': '', 'COUNTRY': '', 'NAME_1': '', 'VARNAME_1': '', 'NL_NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'CC_1': '', 'HASC_1': '', 'ISO_1': '', });
lyr_ORIGENESADUANAS_2.set('fieldImages', {'Ruta': '', 'Destino': '', 'Coordenada': '', 'Coordena_1': '', 'Coord LLEG': '', 'Coord LL_1': '', 'Partida': '', 'Llegada': '', 'Plazo (hor': '', 'Modalidad': '', });
lyr_ABC_RedVialFundamental2024_3.set('fieldImages', {'ogc_fid': '', 'ruta': '', 'rodadura': '', 'tipo': '', 'depto': '', 'de': '', 'a': '', 'longitud': '', });
lyr_CORREDORNORTESUR_4.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_CORREDORSUR_5.set('fieldImages', {'fid': '', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_CORREDOROESTENORTE_6.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_CORREDOROESTESUR_7.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_CORREDORESTEOESTE_8.set('fieldImages', {'fid': '', 'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'OPTIONS': '', 'FROM_ID': '', 'TO_ID': '', 'layer': '', 'path': '', });
lyr_INTTARIJAARICA_9.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_GUAYARAMERINARICA_10.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_INTSUCREARICA_11.set('fieldImages', {'DIST_KM': 'TextEdit', 'PLAZO A_Hr': 'TextEdit', });
lyr_PTO_SUAREZARICA_12.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_JENNEFERARICA_13.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_SNMATIASARICA_14.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_ZFWINNERARICA_15.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_ZFPTOSUAREZARICA_16.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_ARROYO_CONCEPARICA_17.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_AeroVVIARICA_18.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_INTSCZARICA_19.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_ZFORUROARICA_20.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_PISIGAARICA_21.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_TAMBOQUEMADOARICA_22.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_CHARANAARICA_23.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_INTORUROARICA_24.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_INTPOTOSIARICA_25.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_ZFPATACAMAYAARICA_26.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_AeroELALTOARICA_27.set('fieldImages', {'DIST_Km': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_INTLPARICA_28.set('fieldImages', {'LONGITUD [': 'Range', 'PLAZO A [H': '', });
lyr_ZFELALTOARICA_29.set('fieldImages', {'FID': '', });
lyr_INTCBBAARICA_30.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_AeroCBBAARICA_31.set('fieldImages', {'FID': 'TextEdit', 'PLAZO_A_Hr': 'TextEdit', });
lyr_DESTINOARICA_32.set('fieldImages', {'Ruta': '', 'Destino': '', 'Coordenada': '', 'Coordena_1': '', 'Coord LLEG': '', 'Coord LL_1': '', 'Partida': '', 'Llegada': '', 'Plazo (hor': '', 'Modalidad': '', });
lyr_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33.set('fieldImages', {'ogc_fid': '', 'n': '', 'administra': '', 'tipo': '', 'departamen': '', 'ciudad': '', 'direccion': '', 'telefono': '', 'pais': '', 'latitud': '', 'longitud': '', });
lyr_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34.set('fieldImages', {'ogc_fid': '', 'tipo_estac': '', 'estacion': '', 'codesta': '', 'ubicacion': '', 'sist_cobro': '', 'departamen': '', });
lyr_surtidores_de_combustible_35.set('fieldImages', {'name': '', 'ogc_fid': '', 'oid_': '', 'folderpath': '', 'symbolid': '', 'altmode': '', 'base': '', 'snippet': '', 'popupinfo': '', 'haslabel': '', 'labelid': '', });
lyr_BOLIVIA_1.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_ORIGENESADUANAS_2.set('fieldLabels', {'Ruta': 'inline label - visible with data', 'Destino': 'inline label - visible with data', 'Coordenada': 'inline label - visible with data', 'Coordena_1': 'inline label - visible with data', 'Coord LLEG': 'inline label - visible with data', 'Coord LL_1': 'inline label - visible with data', 'Partida': 'inline label - visible with data', 'Llegada': 'inline label - visible with data', 'Plazo (hor': 'inline label - visible with data', 'Modalidad': 'inline label - visible with data', });
lyr_ABC_RedVialFundamental2024_3.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'ruta': 'inline label - visible with data', 'rodadura': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'depto': 'inline label - visible with data', 'de': 'inline label - visible with data', 'a': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_CORREDORNORTESUR_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'OPTIONS': 'inline label - visible with data', 'FROM_ID': 'inline label - visible with data', 'TO_ID': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_CORREDORSUR_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'OPTIONS': 'inline label - visible with data', 'FROM_ID': 'inline label - visible with data', 'TO_ID': 'inline label - visible with data', });
lyr_CORREDOROESTENORTE_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'OPTIONS': 'inline label - visible with data', 'FROM_ID': 'inline label - visible with data', 'TO_ID': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_CORREDOROESTESUR_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'OPTIONS': 'inline label - visible with data', 'FROM_ID': 'inline label - visible with data', 'TO_ID': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_CORREDORESTEOESTE_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'OPTIONS': 'inline label - visible with data', 'FROM_ID': 'inline label - visible with data', 'TO_ID': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_INTTARIJAARICA_9.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_GUAYARAMERINARICA_10.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_INTSUCREARICA_11.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'PLAZO A_Hr': 'inline label - visible with data', });
lyr_PTO_SUAREZARICA_12.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_JENNEFERARICA_13.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_SNMATIASARICA_14.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_ZFWINNERARICA_15.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_ZFPTOSUAREZARICA_16.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_ARROYO_CONCEPARICA_17.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_AeroVVIARICA_18.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_INTSCZARICA_19.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_ZFORUROARICA_20.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_PISIGAARICA_21.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_TAMBOQUEMADOARICA_22.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_CHARANAARICA_23.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_INTORUROARICA_24.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_INTPOTOSIARICA_25.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_ZFPATACAMAYAARICA_26.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_AeroELALTOARICA_27.set('fieldLabels', {'DIST_Km': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_INTLPARICA_28.set('fieldLabels', {'LONGITUD [': 'inline label - visible with data', 'PLAZO A [H': 'inline label - visible with data', });
lyr_ZFELALTOARICA_29.set('fieldLabels', {'FID': 'inline label - visible with data', });
lyr_INTCBBAARICA_30.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_AeroCBBAARICA_31.set('fieldLabels', {'FID': 'inline label - visible with data', 'PLAZO_A_Hr': 'inline label - visible with data', });
lyr_DESTINOARICA_32.set('fieldLabels', {'Ruta': 'no label', 'Destino': 'no label', 'Coordenada': 'no label', 'Coordena_1': 'no label', 'Coord LLEG': 'no label', 'Coord LL_1': 'no label', 'Partida': 'no label', 'Llegada': 'no label', 'Plazo (hor': 'no label', 'Modalidad': 'no label', });
lyr_ADUANA_MapadeAdministracionesAduaneras_Bolivia2018_33.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'n': 'inline label - visible with data', 'administra': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'departamen': 'inline label - visible with data', 'ciudad': 'inline label - visible with data', 'direccion': 'inline label - visible with data', 'telefono': 'inline label - visible with data', 'pais': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_VIASBOLIVIA_MapadeUbicacindeRetenesdePeajeyPesajeenBolivia_2018_34.set('fieldLabels', {'ogc_fid': 'inline label - visible with data', 'tipo_estac': 'inline label - visible with data', 'estacion': 'inline label - visible with data', 'codesta': 'inline label - visible with data', 'ubicacion': 'inline label - visible with data', 'sist_cobro': 'inline label - visible with data', 'departamen': 'inline label - visible with data', });
lyr_surtidores_de_combustible_35.set('fieldLabels', {'name': 'inline label - visible with data', 'ogc_fid': 'inline label - visible with data', 'oid_': 'inline label - visible with data', 'folderpath': 'inline label - visible with data', 'symbolid': 'inline label - visible with data', 'altmode': 'inline label - visible with data', 'base': 'inline label - visible with data', 'snippet': 'inline label - visible with data', 'popupinfo': 'inline label - visible with data', 'haslabel': 'inline label - visible with data', 'labelid': 'inline label - visible with data', });
lyr_surtidores_de_combustible_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});