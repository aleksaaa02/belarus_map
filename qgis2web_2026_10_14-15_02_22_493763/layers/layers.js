var wms_layers = [];

var format_WorldBankOfficialBoundariesAdmin0_0 = new ol.format.GeoJSON();
var features_WorldBankOfficialBoundariesAdmin0_0 = format_WorldBankOfficialBoundariesAdmin0_0.readFeatures(json_WorldBankOfficialBoundariesAdmin0_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldBankOfficialBoundariesAdmin0_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldBankOfficialBoundariesAdmin0_0.addFeatures(features_WorldBankOfficialBoundariesAdmin0_0);
var lyr_WorldBankOfficialBoundariesAdmin0_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorldBankOfficialBoundariesAdmin0_0, 
                style: style_WorldBankOfficialBoundariesAdmin0_0,
                popuplayertitle: 'World Bank Official Boundaries - Admin 0',
                interactive: false,
                title: '<img src="styles/legend/WorldBankOfficialBoundariesAdmin0_0.png" /> World Bank Official Boundaries - Admin 0'
            });
var format_1_1 = new ol.format.GeoJSON();
var features_1_1 = format_1_1.readFeatures(json_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_1.addFeatures(features_1_1);
var lyr_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_1, 
                style: style_1_1,
                popuplayertitle: 'Беларуссия (карта №1)',
                interactive: true,
    title: 'Беларуссия (карта №1)<br />\
    <img src="styles/legend/1_1_0.png" /> 79285 - 104302<br />\
    <img src="styles/legend/1_1_1.png" /> 104302 - 134732<br />\
    <img src="styles/legend/1_1_2.png" /> 134732 - 204103<br />\
    <img src="styles/legend/1_1_3.png" /> 204103 - 499853<br />\
    <img src="styles/legend/1_1_4.png" /> 499853 - 1995091<br />' });
var format_2_2 = new ol.format.GeoJSON();
var features_2_2 = format_2_2.readFeatures(json_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_2.addFeatures(features_2_2);
var lyr_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_2, 
                style: style_2_2,
                popuplayertitle: 'Беларуссия (карта №2)',
                interactive: true,
    title: 'Беларуссия (карта №2)<br />\
    <img src="styles/legend/2_2_0.png" /> 350 - 556<br />\
    <img src="styles/legend/2_2_1.png" /> 556 - 1005<br />\
    <img src="styles/legend/2_2_2.png" /> 1005 - 1500<br />\
    <img src="styles/legend/2_2_3.png" /> 1500 - 6918<br />\
    <img src="styles/legend/2_2_4.png" /> 6918 - 9543<br />' });

lyr_WorldBankOfficialBoundariesAdmin0_0.setVisible(true);lyr_1_1.setVisible(true);lyr_2_2.setVisible(true);
var layersList = [lyr_WorldBankOfficialBoundariesAdmin0_0,lyr_1_1,lyr_2_2];
lyr_WorldBankOfficialBoundariesAdmin0_0.set('fieldAliases', {'ISO_A3': 'ISO_A3', 'ISO_A2': 'ISO_A2', 'WB_A3': 'WB_A3', 'WB_STATUS': 'WB_STATUS', 'SOV_ISO_A3': 'SOV_ISO_A3', 'SOV_NAME': 'SOV_NAME', 'NAM_0': 'NAM_0', 'CONTINENT': 'CONTINENT', 'WB_REGION': 'WB_REGION', 'WB_INCOME': 'WB_INCOME', 'ADM0CD_c': 'ADM0CD_c', });
lyr_1_1.set('fieldAliases', {'id': 'id', 'name': 'Название', 'x': 'долгота', 'y': 'широта', 'population': 'численность', 'branch': 'специализация', 'birth rate': 'рождаемость', });
lyr_2_2.set('fieldAliases', {'id': 'id', 'name': 'Название', 'x': 'долгота', 'y': 'широта', 'population': 'численность', 'branch': 'специализация', 'birth rate': 'рождаемость', });
lyr_WorldBankOfficialBoundariesAdmin0_0.set('fieldImages', {'ISO_A3': 'TextEdit', 'ISO_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WB_STATUS': 'TextEdit', 'SOV_ISO_A3': 'TextEdit', 'SOV_NAME': 'TextEdit', 'NAM_0': 'TextEdit', 'CONTINENT': 'TextEdit', 'WB_REGION': 'TextEdit', 'WB_INCOME': 'TextEdit', 'ADM0CD_c': 'TextEdit', });
lyr_1_1.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', 'population': 'Range', 'branch': 'Hidden', 'birth rate': 'Range', });
lyr_2_2.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', 'population': 'Hidden', 'branch': 'TextEdit', 'birth rate': 'Range', });
lyr_WorldBankOfficialBoundariesAdmin0_0.set('fieldLabels', {'ISO_A3': 'no label', 'ISO_A2': 'no label', 'WB_A3': 'no label', 'WB_STATUS': 'no label', 'SOV_ISO_A3': 'no label', 'SOV_NAME': 'no label', 'NAM_0': 'no label', 'CONTINENT': 'no label', 'WB_REGION': 'no label', 'WB_INCOME': 'no label', 'ADM0CD_c': 'no label', });
lyr_1_1.set('fieldLabels', {'name': 'inline label - visible with data', 'population': 'inline label - visible with data', 'birth rate': 'inline label - visible with data', });
lyr_2_2.set('fieldLabels', {'name': 'inline label - visible with data', 'branch': 'inline label - visible with data', 'birth rate': 'hidden field', });
lyr_2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});